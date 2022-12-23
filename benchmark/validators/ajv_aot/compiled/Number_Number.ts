// @ts-nocheck
'use strict'
export const Number_Number = validate10
const schema11 = { $id: 'Number_Number', description: 'Should validate a number', type: 'number' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Number_Number" */ let vErrors = null
  let errors = 0
  if (!(typeof data == 'number' && isFinite(data))) {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
