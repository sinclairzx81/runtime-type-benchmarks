// @ts-nocheck
'use strict'
export const Number_Multiple_Of = validate10
const schema11 = { $id: 'Number_Multiple_Of', multipleOf: 8, description: 'Should validate a numeric value with a multiple-of modulus constraint', type: 'number' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Number_Multiple_Of" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (typeof data == 'number' && isFinite(data)) {
      let res0
      if (8 === 0 || ((res0 = data / 8), res0 !== parseInt(res0))) {
        validate10.errors = [{ instancePath, schemaPath: '#/multipleOf', keyword: 'multipleOf', params: { multipleOf: 8 }, message: 'must be multiple of 8' }]
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
