export namespace Formatter {
  // Formats Code
  export function Format(input: string): string {
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
}
