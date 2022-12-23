// @ts-nocheck
'use strict'
export const Boolean_Boolean = validate10
const schema11 = { $id: 'Boolean_Boolean', description: 'Should validate a boolean value', type: 'boolean' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Boolean_Boolean" */ let vErrors = null
  let errors = 0
  if (typeof data !== 'boolean') {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
