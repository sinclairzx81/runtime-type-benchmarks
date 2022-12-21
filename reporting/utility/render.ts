import { TypeGuard } from '@sinclair/typebox/guard'
import * as Types from '@sinclair/typebox'

export namespace Render {
  function Any(schema: Types.TAny) {
    return 'any'
  }

  function Array(schema: Types.TArray) {
    const items = Visit(schema.items)
    return `Array<${items}>`
  }

  function Boolean(schema: Types.TBoolean) {
    return 'boolean'
  }

  function Constructor(schema: Types.TConstructor) {
    const params = schema.parameters.map((param) => Visit(param)).join(', ')
    const returns = Visit(schema.returns)
    return `new (${params}) => ${returns}`
  }

  function Function(schema: Types.TFunction) {
    const params = schema.parameters.map((param) => Visit(param)).join(', ')
    const returns = Visit(schema.returns)
    return `(${params}) => ${returns}`
  }

  function Integer(schema: Types.TInteger) {
    return 'number'
  }

  function Literal(schema: Types.TLiteral) {
    if (typeof schema.const === 'string') {
      return `'${schema.const}'`
    } else {
      return `${schema.const}`
    }
  }

  function Never(schema: Types.TNever) {
    return 'never'
  }

  function Null(schema: Types.TNull) {
    return 'null'
  }

  function String(schema: Types.TString) {
    return 'string'
  }

  function Number(schema: Types.TNumber) {
    return 'number'
  }

  function Object(schema: Types.TObject) {
    const properties: string = globalThis.Object.entries(schema.properties)
      .map(([key, value]) => {
        return ['Optional', 'ReadonlyOptional'].includes(value[Types.Modifier] as string) 
            ? `${key}?: ${Visit(value)}`
            : `${key}: ${Visit(value)}`
      })
      .join(',\n')
    return `{\n${properties}\n}`
  }

  function Promise(schema: Types.TPromise) {
    const item = Visit(schema.item)
    return `Promise<${item}>`
  }

  function Record(schema: Types.TRecord) {
    for (const [key, value] of globalThis.Object.entries(schema.patternProperties)) {
      const type = Visit(value)
      if (key === '^(0|[1-9][0-9]*)$') {
        return `Record<number, ${type}>`
      } else {
        return `Record<string, ${type}>`
      }
    }
    throw Error('TypeScriptCodeGen: Unreachable')
  }

  function Ref(schema: Types.TRef) {
    return schema.$ref
  }

  function Self(schema: Types.TSelf) {
    return schema.$ref
  }

  function Tuple(schema: Types.TTuple) {
    if (schema.items === undefined) return `[]`
    const items = schema.items.map((schema) => Visit(schema)).join(', ')
    return `[${items}]`
  }

  function UInt8Array(schema: Types.TUint8Array) {
    return `Uint8Array`
  }

  function Undefined(schema: Types.TUndefined) {
    return `undefined`
  }

  function Union(schema: Types.TUnion) {
    return schema.anyOf.map((schema) => Visit(schema)).join(' | ')
  }

  function Unknown(schema: Types.TUnknown) {
    return `unknown`
  }

  function Void(schema: Types.TVoid) {
    return `void`
  }

  function Visit(schema: Types.TSchema): string {
    if (TypeGuard.TAny(schema)) {
      return Any(schema)
    } else if (TypeGuard.TArray(schema)) {
      return Array(schema)
    } else if (TypeGuard.TBoolean(schema)) {
      return Boolean(schema)
    } else if (TypeGuard.TConstructor(schema)) {
      return Constructor(schema)
    } else if (TypeGuard.TFunction(schema)) {
      return Function(schema)
    } else if (TypeGuard.TInteger(schema)) {
      return Integer(schema)
    } else if (TypeGuard.TLiteral(schema)) {
      return Literal(schema)
    } else if (TypeGuard.TNever(schema)) {
      return Never(schema)
    } else if (TypeGuard.TNull(schema)) {
      return Null(schema)
    } else if (TypeGuard.TNumber(schema)) {
      return Number(schema)
    } else if (TypeGuard.TObject(schema)) {
      return Object(schema)
    } else if (TypeGuard.TPromise(schema)) {
      return Promise(schema)
    } else if (TypeGuard.TRecord(schema)) {
      return Record(schema)
    } else if (TypeGuard.TRef(schema)) {
      return Ref(schema)
    } else if (TypeGuard.TSelf(schema)) {
      return Self(schema)
    } else if (TypeGuard.TString(schema)) {
      return String(schema)
    } else if (TypeGuard.TTuple(schema)) {
      return Tuple(schema)
    } else if (TypeGuard.TUint8Array(schema)) {
      return UInt8Array(schema)
    } else if (TypeGuard.TUndefined(schema)) {
      return Undefined(schema)
    } else if (TypeGuard.TUnion(schema)) {
      return Union(schema)
    } else if (TypeGuard.TUnknown(schema)) {
      return Unknown(schema)
    } else if (TypeGuard.TVoid(schema)) {
      return Void(schema)
    } else {
      throw Error('TypeScriptCodeGen: Unknown type')
    }
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

  /** Renders TypeScript type code from TypeBox types */
  export function Type(schema: Types.TSchema, references: Types.TSchema[] = []) {
    if (schema === undefined || schema.$id === undefined) return ''
    const result: string[] = []
    for (const reference of references) {
      result.push(`type ${reference.$id} = ${Format([...Visit(reference)].join(''))}`)
    }
    result.push(`type ${schema.$id || 'T'} = ${Format([...Visit(schema)].join(''))}`)
    return result
      .join('\n\n')
      .replace(schema.$id!, 'T')
      .replace(/>/g, `&gt;`)
      .replace(/</g, `&lt;`)
      .replace(/type/g, `<span style='font-weight: bold; color: #88F'>type</span>`)
      .replace(/boolean/g, `<span style='font-weight: bold; color: #88F'>boolean</span>`)
      .replace(/number/g, `<span style='font-weight: bold; color: #88F'>number</span>`)
      .replace(/string/g, `<span style='font-weight: bold; color: #88F'>string</span>`)

  }
}
