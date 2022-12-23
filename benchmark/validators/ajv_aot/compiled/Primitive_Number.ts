// @ts-nocheck
'use strict'
export const Primitive_Number = validate10
const schema11 = { $id: 'Primitive_Number', type: 'number' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Primitive_Number" */ let vErrors = null
  let errors = 0
  if (!(typeof data == 'number' && isFinite(data))) {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
