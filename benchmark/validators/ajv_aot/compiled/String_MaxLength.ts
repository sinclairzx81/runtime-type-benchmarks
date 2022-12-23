// @ts-nocheck
'use strict'
export const String_MaxLength = validate10
const schema11 = { $id: 'String_MaxLength', maxLength: 8, description: 'Should validate a string value with a max-length constraint', type: 'string' }
const func2 = require('ajv/dist/runtime/ucs2length').default
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="String_MaxLength" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (typeof data === 'string') {
      if (func2(data) > 8) {
        validate10.errors = [{ instancePath, schemaPath: '#/maxLength', keyword: 'maxLength', params: { limit: 8 }, message: 'must NOT have more than 8 characters' }]
        return false
      }
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
