import { Formatter } from '../../formatter/index'
import { TypeGuard } from '@sinclair/typebox/guard'
import { TSchema } from '@sinclair/typebox'
import * as Cases from '../../schematics/correct'
import * as Fs from 'node:fs'
import * as Path from 'node:path'

export namespace TypeBoxJitGenerator {
  function Include(schema: unknown): schema is TSchema {
    return TypeGuard.TSchema(schema)
  }
  function* GenerateBenchmark(dataset: string, typesystem: 'json-schema' | 'structural') {
    yield `import { TypeCompiler } from '@sinclair/typebox/compiler'`
    yield `import { TypeSystem } from '@sinclair/typebox/system'`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield `TypeSystem.Kind = '${typesystem}'`
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

  function Generate(directory: string, dataset: string, typesystem: 'json-schema' | 'structural') {
    const output = Formatter.Format([...GenerateBenchmark(dataset, typesystem)].join('\n'))
    const filename = Path.join(directory, dataset) + '.ts'
    Fs.writeFileSync(filename, output, 'utf-8')
  }
  export function Build(directory: string, typesystem: 'json-schema' | 'structural') {
    Fs.mkdirSync(directory, { recursive: true })
    Generate(directory, 'correct', typesystem)
    Generate(directory, 'incorrect', typesystem)
  }
}
