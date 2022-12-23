// @ts-nocheck
'use strict'
export const Tuple_Union_String_Literal = validate10
const schema11 = {
  $id: 'Tuple_Union_String_Literal',
  type: 'array',
  items: [
    {
      anyOf: [
        { const: 'A', type: 'string' },
        { const: 'B', type: 'string' },
      ],
    },
    {
      anyOf: [
        { const: 'C', type: 'string' },
        { const: 'D', type: 'string' },
      ],
    },
    {
      anyOf: [
        { const: 'E', type: 'string' },
        { const: 'F', type: 'string' },
      ],
    },
  ],
  additionalItems: false,
  minItems: 3,
  maxItems: 3,
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Tuple_Union_String_Literal" */ let vErrors = null
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
              const _errs2 = errors
              let valid1 = false
              const _errs3 = errors
              if (typeof data0 !== 'string') {
                const err0 = { instancePath: instancePath + '/0', schemaPath: '#/items/0/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err0]
                } else {
                  vErrors.push(err0)
                }
                errors++
              }
              if ('A' !== data0) {
                const err1 = { instancePath: instancePath + '/0', schemaPath: '#/items/0/anyOf/0/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }
                if (vErrors === null) {
                  vErrors = [err1]
                } else {
                  vErrors.push(err1)
                }
                errors++
              }
              var _valid0 = _errs3 === errors
              valid1 = valid1 || _valid0
              if (!valid1) {
                const _errs5 = errors
                if (typeof data0 !== 'string') {
                  const err2 = { instancePath: instancePath + '/0', schemaPath: '#/items/0/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err2]
                  } else {
                    vErrors.push(err2)
                  }
                  errors++
                }
                if ('B' !== data0) {
                  const err3 = { instancePath: instancePath + '/0', schemaPath: '#/items/0/anyOf/1/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }
                  if (vErrors === null) {
                    vErrors = [err3]
                  } else {
                    vErrors.push(err3)
                  }
                  errors++
                }
                var _valid0 = _errs5 === errors
                valid1 = valid1 || _valid0
              }
              if (!valid1) {
                const err4 = { instancePath: instancePath + '/0', schemaPath: '#/items/0/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                if (vErrors === null) {
                  vErrors = [err4]
                } else {
                  vErrors.push(err4)
                }
                errors++
                validate10.errors = vErrors
                return false
              } else {
                errors = _errs2
                if (vErrors !== null) {
                  if (_errs2) {
                    vErrors.length = _errs2
                  } else {
                    vErrors = null
                  }
                }
              }
              var valid0 = _errs1 === errors
            }
            if (valid0) {
              if (len1 > 1) {
                let data1 = data[1]
                const _errs7 = errors
                const _errs8 = errors
                let valid2 = false
                const _errs9 = errors
                if (typeof data1 !== 'string') {
                  const err5 = { instancePath: instancePath + '/1', schemaPath: '#/items/1/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err5]
                  } else {
                    vErrors.push(err5)
                  }
                  errors++
                }
                if ('C' !== data1) {
                  const err6 = { instancePath: instancePath + '/1', schemaPath: '#/items/1/anyOf/0/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }
                  if (vErrors === null) {
                    vErrors = [err6]
                  } else {
                    vErrors.push(err6)
                  }
                  errors++
                }
                var _valid1 = _errs9 === errors
                valid2 = valid2 || _valid1
                if (!valid2) {
                  const _errs11 = errors
                  if (typeof data1 !== 'string') {
                    const err7 = { instancePath: instancePath + '/1', schemaPath: '#/items/1/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err7]
                    } else {
                      vErrors.push(err7)
                    }
                    errors++
                  }
                  if ('D' !== data1) {
                    const err8 = { instancePath: instancePath + '/1', schemaPath: '#/items/1/anyOf/1/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }
                    if (vErrors === null) {
                      vErrors = [err8]
                    } else {
                      vErrors.push(err8)
                    }
                    errors++
                  }
                  var _valid1 = _errs11 === errors
                  valid2 = valid2 || _valid1
                }
                if (!valid2) {
                  const err9 = { instancePath: instancePath + '/1', schemaPath: '#/items/1/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                  if (vErrors === null) {
                    vErrors = [err9]
                  } else {
                    vErrors.push(err9)
                  }
                  errors++
                  validate10.errors = vErrors
                  return false
                } else {
                  errors = _errs8
                  if (vErrors !== null) {
                    if (_errs8) {
                      vErrors.length = _errs8
                    } else {
                      vErrors = null
                    }
                  }
                }
                var valid0 = _errs7 === errors
              }
              if (valid0) {
                if (len1 > 2) {
                  let data2 = data[2]
                  const _errs13 = errors
                  const _errs14 = errors
                  let valid3 = false
                  const _errs15 = errors
                  if (typeof data2 !== 'string') {
                    const err10 = { instancePath: instancePath + '/2', schemaPath: '#/items/2/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err10]
                    } else {
                      vErrors.push(err10)
                    }
                    errors++
                  }
                  if ('E' !== data2) {
                    const err11 = { instancePath: instancePath + '/2', schemaPath: '#/items/2/anyOf/0/const', keyword: 'const', params: { allowedValue: 'E' }, message: 'must be equal to constant' }
                    if (vErrors === null) {
                      vErrors = [err11]
                    } else {
                      vErrors.push(err11)
                    }
                    errors++
                  }
                  var _valid2 = _errs15 === errors
                  valid3 = valid3 || _valid2
                  if (!valid3) {
                    const _errs17 = errors
                    if (typeof data2 !== 'string') {
                      const err12 = { instancePath: instancePath + '/2', schemaPath: '#/items/2/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err12]
                      } else {
                        vErrors.push(err12)
                      }
                      errors++
                    }
                    if ('F' !== data2) {
                      const err13 = { instancePath: instancePath + '/2', schemaPath: '#/items/2/anyOf/1/const', keyword: 'const', params: { allowedValue: 'F' }, message: 'must be equal to constant' }
                      if (vErrors === null) {
                        vErrors = [err13]
                      } else {
                        vErrors.push(err13)
                      }
                      errors++
                    }
                    var _valid2 = _errs17 === errors
                    valid3 = valid3 || _valid2
                  }
                  if (!valid3) {
                    const err14 = { instancePath: instancePath + '/2', schemaPath: '#/items/2/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                    if (vErrors === null) {
                      vErrors = [err14]
                    } else {
                      vErrors.push(err14)
                    }
                    errors++
                    validate10.errors = vErrors
                    return false
                  } else {
                    errors = _errs14
                    if (vErrors !== null) {
                      if (_errs14) {
                        vErrors.length = _errs14
                      } else {
                        vErrors = null
                      }
                    }
                  }
                  var valid0 = _errs13 === errors
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
