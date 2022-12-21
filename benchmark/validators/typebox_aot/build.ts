import * as Cases from '../../schematics/correct'
import { TSchema } from '@sinclair/typebox'
import { TypeGuard } from '@sinclair/typebox/guard'
import { TypeCompiler } from '@sinclair/typebox/compiler'
import { TypeSystem } from '@sinclair/typebox/system'
import * as Fs from 'node:fs'
import * as Path from 'node:path'
TypeSystem.Kind = 'structural'

/** Builds TypeBox AOT Validators */
export namespace TypeBoxCompiler {
  function* NoCheck() {
    yield `// @ts-nocheck`
  }
  function* Imports(dataset: string) {
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
  }
  function Benchmark(schema: TSchema) {
    const type = TypeCompiler.Compile(schema)
    return `Cases.Benchmark(Cases.${schema.$id}, iterations, results, () => { 
      ${type.Code()} 
    })`
  }
  function* Benchmarks() {
    yield `export function Execute(iterations: number) {`
    yield `const results = new Map<string, number>()`
    for (const schema of Object.values(Cases)) {
      if (!TypeGuard.TSchema(schema)) continue
      yield Benchmark(schema)
    }
    yield `return results`
    yield `}`
  }
  function* Invoke() {
    yield `const parameter = Command.Parameter()`
    yield `const results = Execute(parameter.iterations)`
    yield `Command.WriteResults(results)`
  }
  function Format(input: string): string {
    function count(line: string, opens: string[]) {
      const codes = opens.map((open) => open.charCodeAt(0))
      return line
        .split('')
        .map((char) => char.charCodeAt(0))
        .reduce((acc, current) => {
          return codes.includes(current) ? acc + 1 : acc
        }, 0)
    }
    let indent = 0
    const output: string[] = []
    for (const line of input.split('\n').map((n) => n.trim())) {
      indent -= count(line, ['}'])
      output.push(`${''.padStart(indent * 2, ' ')}${line}`)
      indent += count(line, ['{'])
    }
    return output.join('\n')
  }
  export function Build(dataset: string, outFile: string) {
    const output = Format([...NoCheck(), ...Imports(dataset), ...Benchmarks(), ...Invoke()].join('\n'))
    const dirname = Path.dirname(outFile)
    Fs.mkdirSync(dirname, {recursive: true})
    Fs.writeFileSync(outFile, output, 'utf-8')
  }
}

