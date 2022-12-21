// @ts-nocheck
'use strict'
export const Primitive_Integer = validate10
const schema11 = { $id: 'Primitive_Integer', default: 1, type: 'integer' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Primitive_Integer" */ let vErrors = null
  let errors = 0
  if (!(typeof data == 'number' && !(data % 1) && !isNaN(data) && isFinite(data))) {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
