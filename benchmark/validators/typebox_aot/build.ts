import { TypeGuard } from '@sinclair/typebox/guard'
import { TypeCompiler } from '@sinclair/typebox/compiler'
import * as Cases from '../../schematics/correct'
import * as Fs from 'node:fs'
import * as Path from 'node:path'

export namespace TypeBoxCompiler {
  function* Benchmarks(dataset: string) {
    yield `// @ts-nocheck`
    yield `import { Command } from '../../command/index'`
    yield `import * as Cases from '../../schematics/${dataset}'`
    yield `export function Execute(iterations: number) {`
    yield `const results = new Map<string, number>()`
    for (const schema of Object.values(Cases)) {
      if (!TypeGuard.TSchema(schema)) continue
      yield `Cases.Benchmark(Cases.${schema.$id}, iterations, results, () => { 
        ${TypeCompiler.Compile(schema).Code()} 
      })`
    }
    yield `return results`
    yield `}`
    yield `const parameter = Command.Parameter()`
    yield `const results = Execute(parameter.iterations)`
    yield `Command.WriteResults(results)`
  }
  function Format(input: string): string {
    function count(line: string, opens: string[]) {
      const codes = opens.map((open) => open.charCodeAt(0))
      // prettier-ignore
      return line.split('').map((char) => char.charCodeAt(0)).reduce((acc, current) => codes.includes(current) ? acc + 1 : acc, 0)
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
  function BuildDataset(directory: string, dataset: string) {
    const output = Format([Benchmarks(dataset)].join('\n'))
    const filename = Path.dirname(Path.join(directory, dataset, '.ts'))
    Fs.writeFileSync(filename, output, 'utf-8')
  }
  export function Build(directory: string) {
    Fs.mkdirSync(directory, { recursive: true })
    BuildDataset(directory, 'correct')
    BuildDataset(directory, 'incorrect')
  }
}
