// @ts-nocheck
'use strict'
export const Array_Math_Matrix4 = validate10
const schema11 = {
  $id: 'Array_Math_Matrix4',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Math_Matrix4',
    default: [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    type: 'array',
    items: { type: 'array', items: { type: 'number' } },
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Math_Matrix4" */ let vErrors = null
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
          if (errors === _errs1) {
            if (Array.isArray(data0)) {
              var valid1 = true
              const len1 = data0.length
              for (let i1 = 0; i1 < len1; i1++) {
                let data1 = data0[i1]
                const _errs3 = errors
                if (errors === _errs3) {
                  if (Array.isArray(data1)) {
                    var valid2 = true
                    const len2 = data1.length
                    for (let i2 = 0; i2 < len2; i2++) {
                      let data2 = data1[i2]
                      const _errs5 = errors
                      if (!(typeof data2 == 'number' && isFinite(data2))) {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/' + i1 + '/' + i2, schemaPath: '#/items/items/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                        return false
                      }
                      var valid2 = _errs5 === errors
                      if (!valid2) {
                        break
                      }
                    }
                  } else {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/' + i1, schemaPath: '#/items/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                    return false
                  }
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
      }
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}