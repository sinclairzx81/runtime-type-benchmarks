// @ts-nocheck
'use strict'
export const Array_Tuple_Number = validate10
const schema11 = {
  $id: 'Array_Tuple_Number',
  minItems: 8,
  type: 'array',
  items: { $id: 'Tuple_Number', default: [0, 0, 0], type: 'array', items: [{ type: 'number' }, { type: 'number' }, { type: 'number' }], additionalItems: false, minItems: 3, maxItems: 3 },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Tuple_Number" */ let vErrors = null
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
              if (data0.length > 3) {
                validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/maxItems', keyword: 'maxItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
                return false
              } else {
                if (data0.length < 3) {
                  validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/minItems', keyword: 'minItems', params: { limit: 3 }, message: 'must NOT have fewer than 3 items' }]
                  return false
                } else {
                  const len1 = data0.length
                  if (!(len1 <= 3)) {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/additionalItems', keyword: 'additionalItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
                    return false
                  } else {
                    const len2 = data0.length
                    if (len2 > 0) {
                      let data1 = data0[0]
                      const _errs3 = errors
                      if (!(typeof data1 == 'number' && isFinite(data1))) {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                        return false
                      }
                      var valid1 = _errs3 === errors
                    }
                    if (valid1) {
                      if (len2 > 1) {
                        let data2 = data0[1]
                        const _errs5 = errors
                        if (!(typeof data2 == 'number' && isFinite(data2))) {
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                          return false
                        }
                        var valid1 = _errs5 === errors
                      }
                      if (valid1) {
                        if (len2 > 2) {
                          let data3 = data0[2]
                          const _errs7 = errors
                          if (!(typeof data3 == 'number' && isFinite(data3))) {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/2', schemaPath: '#/items/items/2/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                            return false
                          }
                          var valid1 = _errs7 === errors
                        }
                      }
                    }
                  }
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
