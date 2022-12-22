import { Formatter } from '../../formatter/index'
import { TypeGuard } from '@sinclair/typebox/guard'
import { TSchema } from '@sinclair/typebox'
import * as Cases from '../../schematics/correct'
import * as Fs from 'node:fs'
import * as Path from 'node:path'

export namespace AjvJitGenerator {
  function Include(schema: unknown): schema is TSchema {
    // prettier-ignore
    return TypeGuard.TSchema(schema) && ![
      'Primitive_Undefined', 
      'Typia_Ultimate_Union'
    ].includes(schema.$id!)
  }
  function* GenerateBenchmark(dataset: string) {
    yield `import Ajv from 'ajv'`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield ``
    yield `export function Compile(schema: any) {`
    yield `  const ajv = new Ajv()`
    yield `  const check = ajv.compile(schema)`
    yield `  return (value: unknown) => check(value)`
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
