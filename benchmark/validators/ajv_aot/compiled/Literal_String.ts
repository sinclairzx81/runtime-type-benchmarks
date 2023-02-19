// @ts-nocheck
'use strict'
export const Literal_String = validate10
const schema11 = { $id: 'Literal_String', description: 'Should validate a literal string value', const: 'hello', type: 'string' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Literal_String" */ let vErrors = null
  let errors = 0
  if (typeof data !== 'string') {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
    return false
  }
  if ('hello' !== data) {
    validate10.errors = [{ instancePath, schemaPath: '#/const', keyword: 'const', params: { allowedValue: 'hello' }, message: 'must be equal to constant' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
