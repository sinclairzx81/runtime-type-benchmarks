// @ts-nocheck
'use strict'
export const Primitive_Boolean = validate10
const schema11 = { $id: 'Primitive_Boolean', type: 'boolean' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Primitive_Boolean" */ let vErrors = null
  let errors = 0
  if (typeof data !== 'boolean') {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
