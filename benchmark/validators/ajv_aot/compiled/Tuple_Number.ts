// @ts-nocheck
'use strict'
export const Tuple_Number = validate10
const schema11 = { $id: 'Tuple_Number', description: 'Should validate a 3 tuple of numbers', type: 'array', items: [{ type: 'number' }, { type: 'number' }, { type: 'number' }], additionalItems: false, minItems: 3, maxItems: 3 }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Tuple_Number" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
      if (data.length > 3) {
        validate10.errors = [{ instancePath, schemaPath: '#/maxItems', keyword: 'maxItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
        return false
      } else {
        if (data.length < 3) {
          validate10.errors = [{ instancePath, schemaPath: '#/minItems', keyword: 'minItems', params: { limit: 3 }, message: 'must NOT have fewer than 3 items' }]
          return false
        } else {
          const len0 = data.length
          if (!(len0 <= 3)) {
            validate10.errors = [{ instancePath, schemaPath: '#/additionalItems', keyword: 'additionalItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
            return false
          } else {
            const len1 = data.length
            if (len1 > 0) {
              let data0 = data[0]
              const _errs1 = errors
              if (!(typeof data0 == 'number' && isFinite(data0))) {
                validate10.errors = [{ instancePath: instancePath + '/0', schemaPath: '#/items/0/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                return false
              }
              var valid0 = _errs1 === errors
            }
            if (valid0) {
              if (len1 > 1) {
                let data1 = data[1]
                const _errs3 = errors
                if (!(typeof data1 == 'number' && isFinite(data1))) {
                  validate10.errors = [{ instancePath: instancePath + '/1', schemaPath: '#/items/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                  return false
                }
                var valid0 = _errs3 === errors
              }
              if (valid0) {
                if (len1 > 2) {
                  let data2 = data[2]
                  const _errs5 = errors
                  if (!(typeof data2 == 'number' && isFinite(data2))) {
                    validate10.errors = [{ instancePath: instancePath + '/2', schemaPath: '#/items/2/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                    return false
                  }
                  var valid0 = _errs5 === errors
                }
              }
            }
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
