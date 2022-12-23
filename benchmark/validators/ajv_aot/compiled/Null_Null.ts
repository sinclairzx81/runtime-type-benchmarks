// @ts-nocheck
'use strict'
export const Null_Null = validate10
const schema11 = { $id: 'Null_Null', type: 'null' }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Null_Null" */ let vErrors = null
  let errors = 0
  if (data !== null) {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }]
    return false
  }
  validate10.errors = vErrors
  return errors === 0
}
