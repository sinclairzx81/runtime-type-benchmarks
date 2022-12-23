// @ts-nocheck
'use strict'
export const Literal_Number = validate10
const schema11 = { $id: 'Literal_Number', description: 'Should validate a literal number value', const: 42, type: 'number' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Literal_Number" */ let vErrors = null
  let errors = 0
  if (!(typeof data == 'number' && isFinite(data))) {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
    return false
  }
  if (42 !== data) {
    validate10.errors = [{ instancePath, schemaPath: '#/const', keyword: 'const', params: { allowedValue: 42 }, message: 'must be equal to constant' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
