// @ts-nocheck
'use strict'
export const Primitive_RegEx = validate10
const schema11 = { $id: 'Primitive_RegEx', default: 'hello', type: 'string', pattern: 'hello' }
const pattern0 = new RegExp('hello', 'u')
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Primitive_RegEx" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (typeof data === 'string') {
      if (!pattern0.test(data)) {
        validate10.errors = [{ instancePath, schemaPath: '#/pattern', keyword: 'pattern', params: { pattern: 'hello' }, message: 'must match pattern "' + 'hello' + '"' }]
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
