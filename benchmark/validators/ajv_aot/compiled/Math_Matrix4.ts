// @ts-nocheck
'use strict'
export const Math_Matrix4 = validate10
const schema11 = {
  $id: 'Math_Matrix4',
  default: [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  type: 'array',
  items: { type: 'array', items: { type: 'number' } },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Math_Matrix4" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
      var valid0 = true
      const len0 = data.length
      for (let i0 = 0; i0 < len0; i0++) {
        let data0 = data[i0]
        const _errs1 = errors
        if (errors === _errs1) {
          if (Array.isArray(data0)) {
            var valid1 = true
            const len1 = data0.length
            for (let i1 = 0; i1 < len1; i1++) {
              let data1 = data0[i1]
              const _errs3 = errors
              if (!(typeof data1 == 'number' && isFinite(data1))) {
                validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/' + i1, schemaPath: '#/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                return false
              }
              var valid1 = _errs3 === errors
              if (!valid1) {
                break
              }
            }
          } else {
            validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
            return false
          }
        }
        var valid0 = _errs1 === errors
        if (!valid0) {
          break
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
