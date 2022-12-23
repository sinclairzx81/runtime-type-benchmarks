import { Formatter } from '../../../codegen/index'
import { TSchema } from '@sinclair/typebox'
import { TypeGuard } from '@sinclair/typebox/guard'
import standaloneCode from 'ajv/dist/standalone'
import * as Cases from '../../schematics/correct'
import * as Path from 'node:path'
import * as Fs from 'node:fs'
import Ajv from 'ajv'

export namespace AjvAotGenerator {
  function Include(schema: unknown): schema is TSchema {
    // prettier-ignore
    return TypeGuard.TSchema(schema) && ![
      'Undefined_Undefined', 
      'Typia_Ultimate_Union'
    ].includes(schema.$id!)
  }
  // -------------------------------------------------------------------
  // Precompilation (we need to write validators to disk as modules)
  // -------------------------------------------------------------------
  function PrecompiledValidators(directory: string) {
    for (const schema of Object.values(Cases)) {
      if (Include(schema)) {
        const ajv = new Ajv({ schemas: [schema], code: { esm: true, source: true } })
        const code = ['// @ts-nocheck', standaloneCode(ajv)].join('\n')
        Fs.writeFileSync(`${directory}/compiled/${schema.$id}.ts`, code, 'utf-8')
      }
    }
  }
  function PrecompiledIndex(directory: string) {
    const imports: string[] = []
    for (const schema of Object.values(Cases)) {
      if (Include(schema)) {
        if (!TypeGuard.TSchema(schema) || TypeGuard.TUndefined(schema)) continue
        imports.push(`export { ${schema.$id} } from './${schema.$id}'`)
      }
    }
    Fs.writeFileSync(`${directory}/compiled/index.ts`, imports.join('\n'), 'utf-8')
  }
  function PrecompileModules(directory: string) {
    Fs.mkdirSync(`${directory}/compiled`, { recursive: true })
    PrecompiledValidators(directory)
    PrecompiledIndex(directory)
  }
  // -------------------------------------------------------------------
  // Benchmark
  // -------------------------------------------------------------------

  function* Benchmarks(dataset: string) {
    yield `// @ts-nocheck`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield `import * as Validators from './compiled/index'`
    yield ``
    yield `export function Execute(iterations: number) {`
    yield `const results = new Map<string, number>()`
    for (const schema of Object.values(Cases)) {
      if (Include(schema)) {
        yield `Cases.Benchmark(Cases.${schema.$id}, iterations, results, () => Validators.${schema.$id})`
      }
    }
    yield `return results`
    yield `}`
    yield ``
    yield `const parameter = Command.Parameter()`
    yield `const results = Execute(parameter.iterations)`
    yield `Command.WriteResults(results)`
  }

  function BuildDataset(directory: string, dataset: string) {
    const output = Formatter.Format([...Benchmarks(dataset)].join('\n'))
    const filename = Path.join(directory, dataset) + '.ts'
    Fs.writeFileSync(filename, output, 'utf-8')
  }
  export function Build(directory: string) {
    Fs.mkdirSync(directory, { recursive: true })
    PrecompileModules(directory)
    BuildDataset(directory, 'correct')
    BuildDataset(directory, 'incorrect')
  }
}
