// @ts-nocheck
'use strict'
export const String_String = validate10
const schema11 = { $id: 'String_String', description: 'Should validate a string', type: 'string' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="String_String" */ let vErrors = null
  let errors = 0
  if (typeof data !== 'string') {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
