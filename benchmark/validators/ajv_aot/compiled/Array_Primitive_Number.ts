// @ts-nocheck
'use strict'
export const Array_Primitive_Number = validate10
const schema11 = { $id: 'Array_Primitive_Number', minItems: 8, type: 'array', items: { type: 'number' } }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Primitive_Number" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
      if (data.length < 8) {
        validate10.errors = [{ instancePath, schemaPath: '#/minItems', keyword: 'minItems', params: { limit: 8 }, message: 'must NOT have fewer than 8 items' }]
        return false
      } else {
        var valid0 = true
        const len0 = data.length
        for (let i0 = 0; i0 < len0; i0++) {
          let data0 = data[i0]
          const _errs1 = errors
          if (!(typeof data0 == 'number' && isFinite(data0))) {
            validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
            return false
          }
          var valid0 = _errs1 === errors
          if (!valid0) {
            break
          }
        }
      }
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
