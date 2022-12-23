// @ts-nocheck
'use strict'
export const String_MinLength = validate10
const schema11 = { $id: 'String_MinLength', minLength: 8, type: 'string' }
const func2 = require('ajv/dist/runtime/ucs2length').default
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="String_MinLength" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (typeof data === 'string') {
      if (func2(data) < 8) {
        validate10.errors = [{ instancePath, schemaPath: '#/minLength', keyword: 'minLength', params: { limit: 8 }, message: 'must NOT have fewer than 8 characters' }]
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
