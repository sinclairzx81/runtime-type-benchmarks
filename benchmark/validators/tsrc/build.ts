import { Formatter } from '../../formatter/index'
import { TypeGuard } from '@sinclair/typebox/guard'
import { TSchema } from '@sinclair/typebox'
import * as Cases from '../../schematics/correct'
import * as Fs from 'node:fs'
import * as Path from 'node:path'

export namespace TsrcGenerator {
  function Include(schema: unknown): schema is TSchema {
    return (
      TypeGuard.TSchema(schema) &&
      ![
        'Primitive_Integer',
        'Primitive_RegEx',
        'Primitive_Undefined',
        'Literal_Boolean',
        'Composite_Union_Discriminated',
        'Composite_Union_Non_Discriminated',
        'Recursive_Object',
        'Recursive_Union',
        'Tuple_Union_Literal',
        'Array_Union',
        'Array_Recursive',
      ].includes(schema.$id!)
    )
  }

  function* GenerateBenchmark(dataset: string) {
    yield `import * as Tsrc from 'ts-runtime-checks'`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield ``
    yield `export function Execute(iterations: number) {`
    yield `const results = new Map<string, number>()`
    for (const schema of Object.values(Cases)) {
      if (Include(schema)) {
        yield `Cases.Benchmark(Cases.${schema.$id}, iterations, results, () => (value) => Tsrc.is<Cases.${schema.$id}>(value))`
      }
    }
    yield `return results`
    yield `}`
    yield ``
    yield `const parameter = Command.Parameter()`
    yield `const results = Execute(parameter.iterations)`
    yield `Command.WriteResults(results)`
  }

  function Generate(directory: string, dataset: string) {
    const output = Formatter.Format([...GenerateBenchmark(dataset)].join('\n'))
    const filename = Path.join(directory, dataset) + '.ts'
    Fs.writeFileSync(filename, output, 'utf-8')
  }
  export function Build(directory: string) {
    Fs.mkdirSync(directory, { recursive: true })
    Generate(directory, 'correct')
    Generate(directory, 'incorrect')
  }
}
