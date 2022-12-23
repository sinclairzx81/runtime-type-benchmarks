// @ts-nocheck
'use strict'
export const String_Pattern = validate10
const schema11 = { $id: 'String_Pattern', pattern: '12343567890', type: 'string' }
const pattern0 = new RegExp('12343567890', 'u')
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="String_Pattern" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (typeof data === 'string') {
      if (!pattern0.test(data)) {
        validate10.errors = [{ instancePath, schemaPath: '#/pattern', keyword: 'pattern', params: { pattern: '12343567890' }, message: 'must match pattern "' + '12343567890' + '"' }]
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
