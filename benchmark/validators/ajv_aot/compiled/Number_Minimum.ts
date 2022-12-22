// @ts-nocheck
'use strict'
export const Number_Minimum = validate10
const schema11 = { $id: 'Number_Minimum', minimum: 8, type: 'number' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Number_Minimum" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (typeof data == 'number' && isFinite(data)) {
      if (data < 8 || isNaN(data)) {
        validate10.errors = [{ instancePath, schemaPath: '#/minimum', keyword: 'minimum', params: { comparison: '>=', limit: 8 }, message: 'must be >= 8' }]
        return false
      }
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
