import { Formatter } from '../../../codegen/index'
import { TypeGuard, TSchema } from '@sinclair/typebox'
import * as Cases from '../../schematics/correct'
import * as Fs from 'node:fs'
import * as Path from 'node:path'

export namespace TsisGenerator {
  function Include(dataset: string, schema: unknown): schema is TSchema {
    // prettier-ignore
    return (
      TypeGuard.TSchema(schema) && ![
        'Number_Integer', 
        'Number_NaN',
        'Number_Exclusive_Maximum', 
        'Number_Exclusive_Minimum', 
        'Number_Maximum', 
        'Number_Minimum', 
        'Number_Multiple_Of',
        'Object_Additional_Properties_Boolean',
        'Object_Additional_Properties_False',
        'Object_RTTB_Strict',
        'String_Pattern',
        'String_MaxLength', 
        'String_MinLength', 
        'Undefined_Undefined'
      ].includes(schema.$id!)
    )
  }

  function* GenerateBenchmark(dataset: string) {
    yield `import * as Tsis from 'typescript-is'`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield ``
    yield `export function Execute(iterations: number) {`
    yield `const results = new Map<string, number>()`
    for (const schema of Object.values(Cases)) {
      if (Include(dataset, schema)) {
        yield `Cases.Benchmark(Cases.${schema.$id}, iterations, results, () => (value) => Tsis.is<Cases.${schema.$id}>(value))`
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
