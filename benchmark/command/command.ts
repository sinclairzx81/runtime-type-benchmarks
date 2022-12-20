import * as Fs from 'node:fs'
import * as Path from 'node:path'

export interface CommandArguments {
  iterations: number
  outFile: string
}

export namespace Command {
  export function Parameter() {
    if (process.argv.length < 4) throw Error('Expected 2 arguments: node script <iterations> <outFile>')
    const iterations = parseInt(process.argv[2])
    const outFile = process.argv[3]
    if (typeof iterations !== 'number' || isNaN(iterations)) throw Error('Iterations is not a number')
    return { iterations, outFile }
  }
  export function WriteResults(results: Map<string, number>) {
    const parameter = Parameter()
    const output = { iterations: parameter.iterations, results: Object.fromEntries(results) }
    Fs.mkdirSync(Path.dirname(parameter.outFile), { recursive: true })
    Fs.writeFileSync(parameter.outFile, JSON.stringify(output, null, 2), 'utf-8')
  }
}
