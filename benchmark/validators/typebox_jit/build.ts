import { Formatter } from '../../../codegen/index'
import { TypeGuard, TSchema } from '@sinclair/typebox'
import * as Cases from '../../schematics/correct'
import * as Fs from 'node:fs'
import * as Path from 'node:path'

export interface TypeBoxAotGeneratorOptions {
  allowArrayObjects: boolean
  allowNaN: boolean
}

export namespace TypeBoxJitGenerator {
  function Include(schema: unknown): schema is TSchema {
    return (
      TypeGuard.TSchema(schema) &&
      ![
        // Note: Disabled due as TS semantic validators may not check for NaN. TypeBox is configured
        // inline with these semantics for these tests. To re-enable, update the `allowNaN` config
        // setting in the `hammer.mjs` automation script in the project root.
        'Number_NaN',
      ].includes(schema.$id!)
    )
  }
  function* GenerateBenchmark(dataset: string, options: TypeBoxAotGeneratorOptions) {
    yield `import { TypeCompiler } from '@sinclair/typebox/compiler'`
    yield `import { TypeSystem } from '@sinclair/typebox/system'`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield `TypeSystem.AllowArrayObjects = ${options.allowArrayObjects}`
    yield `TypeSystem.AllowNaN = ${options.allowNaN}`
    yield ``
    yield `export function Compile(schema: any) {`
    yield `  const check = TypeCompiler.Compile(schema)`
    yield `  return (value: unknown) => check.Check(value)`
    yield `}`
    yield ``
    yield `export function Execute(iterations: number) {`
    yield `const results = new Map<string, number>()`
    for (const schema of Object.values(Cases)) {
      if (Include(schema)) {
        yield `Cases.Benchmark(Cases.${schema.$id}, iterations, results, Compile)`
      }
    }
    yield `return results`
    yield `}`
    yield ``
    yield `const parameter = Command.Parameter()`
    yield `const results = Execute(parameter.iterations)`
    yield `Command.WriteResults(results)`
  }

  function Generate(directory: string, dataset: string, options: TypeBoxAotGeneratorOptions) {
    const output = Formatter.Format([...GenerateBenchmark(dataset, options)].join('\n'))
    const filename = Path.join(directory, dataset) + '.ts'
    Fs.writeFileSync(filename, output, 'utf-8')
  }
  export function Build(directory: string, options: TypeBoxAotGeneratorOptions) {
    Fs.mkdirSync(directory, { recursive: true })
    Generate(directory, 'correct', options)
    Generate(directory, 'incorrect', options)
  }
}
