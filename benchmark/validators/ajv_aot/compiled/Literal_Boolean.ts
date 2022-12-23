// @ts-nocheck
'use strict'
export const Literal_Boolean = validate10
const schema11 = { $id: 'Literal_Boolean', description: 'Should validate a literal boolean value', const: true, type: 'boolean' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Literal_Boolean" */ let vErrors = null
  let errors = 0
  if (typeof data !== 'boolean') {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
    return false
  }
  if (true !== data) {
    validate10.errors = [{ instancePath, schemaPath: '#/const', keyword: 'const', params: { allowedValue: true }, message: 'must be equal to constant' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
