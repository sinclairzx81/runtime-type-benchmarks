import { Formatter } from '../../../codegen/index'
import { TypeGuard } from '@sinclair/typebox/guard'
import { TSchema } from '@sinclair/typebox'
import * as Cases from '../../schematics/correct'
import * as Fs from 'node:fs'
import * as Path from 'node:path'

export namespace TypiaGenerator {
  function Include(schema: unknown): schema is TSchema {
    return (
      TypeGuard.TSchema(schema) &&
      ![
        'Number_Integer',
        'Number_NaN',
        'Number_Exclusive_Maximum',
        'Number_Exclusive_Minimum',
        'Number_Maximum',
        'Number_Minimum',
        'Number_Multiple_Of',
        'String_Pattern',
        'String_MaxLength',
        'String_MinLength',
        'Object_Additional_Properties_Boolean',
      ].includes(schema.$id!)
    )
  }

  function* GenerateBenchmark(dataset: string) {
    yield `import Typia from 'typia'`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield ``
    // -------------------------------------------------------------------------------------------------------------
    // todo: Manually implement interfaces here for RegEx, Range and string Constraints. Have tested the comment
    // flags on 3.4.11 but these do not seem to be detected during the ttsc pass. When fixed, implement a if block
    // below for the specific tests to write the them to the benchmark.
    //
    // reference: (https://github.com/samchon/typia/wiki/Runtime-Validators#comment-tags)
    // -------------------------------------------------------------------------------------------------------------
    yield `export function Execute(iterations: number) {`
    yield `const results = new Map<string, number>()`
    for (const schema of Object.values(Cases)) {
      if (Include(schema)) {
        if (['Object_Additional_Properties_False'].includes(schema.$id!)) {
          yield `Cases.Benchmark(Cases.${schema.$id}, iterations, results, () => (value) => Typia.equals<Cases.${schema.$id}>(value))`
        } else {
          yield `Cases.Benchmark(Cases.${schema.$id}, iterations, results, () => (value) => Typia.is<Cases.${schema.$id}>(value))`
        }
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
