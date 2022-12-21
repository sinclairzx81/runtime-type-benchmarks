// @ts-nocheck
'use strict'
export const Array_Tuple_Union_Literal = validate10
const schema11 = {
  $id: 'Array_Tuple_Union_Literal',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Tuple_Union_Literal',
    default: ['B', 'D', 'F'],
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
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Tuple_Union_Literal" */ let vErrors = null
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
                      const _errs4 = errors
                      let valid2 = false
                      const _errs5 = errors
                      if (typeof data1 !== 'string') {
                        const err0 = { instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err0]
                        } else {
                          vErrors.push(err0)
                        }
                        errors++
                      }
                      if ('A' !== data1) {
                        const err1 = { instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/anyOf/0/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }
                        if (vErrors === null) {
                          vErrors = [err1]
                        } else {
                          vErrors.push(err1)
                        }
                        errors++
                      }
                      var _valid0 = _errs5 === errors
                      valid2 = valid2 || _valid0
                      if (!valid2) {
                        const _errs7 = errors
                        if (typeof data1 !== 'string') {
                          const err2 = { instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err2]
                          } else {
                            vErrors.push(err2)
                          }
                          errors++
                        }
                        if ('B' !== data1) {
                          const err3 = { instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/anyOf/1/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err3]
                          } else {
                            vErrors.push(err3)
                          }
                          errors++
                        }
                        var _valid0 = _errs7 === errors
                        valid2 = valid2 || _valid0
                      }
                      if (!valid2) {
                        const err4 = { instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                        if (vErrors === null) {
                          vErrors = [err4]
                        } else {
                          vErrors.push(err4)
                        }
                        errors++
                        validate10.errors = vErrors
                        return false
                      } else {
                        errors = _errs4
                        if (vErrors !== null) {
                          if (_errs4) {
                            vErrors.length = _errs4
                          } else {
                            vErrors = null
                          }
                        }
                      }
                      var valid1 = _errs3 === errors
                    }
                    if (valid1) {
                      if (len2 > 1) {
                        let data2 = data0[1]
                        const _errs9 = errors
                        const _errs10 = errors
                        let valid3 = false
                        const _errs11 = errors
                        if (typeof data2 !== 'string') {
                          const err5 = { instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err5]
                          } else {
                            vErrors.push(err5)
                          }
                          errors++
                        }
                        if ('C' !== data2) {
                          const err6 = { instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/anyOf/0/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err6]
                          } else {
                            vErrors.push(err6)
                          }
                          errors++
                        }
                        var _valid1 = _errs11 === errors
                        valid3 = valid3 || _valid1
                        if (!valid3) {
                          const _errs13 = errors
                          if (typeof data2 !== 'string') {
                            const err7 = { instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err7]
                            } else {
                              vErrors.push(err7)
                            }
                            errors++
                          }
                          if ('D' !== data2) {
                            const err8 = { instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/anyOf/1/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }
                            if (vErrors === null) {
                              vErrors = [err8]
                            } else {
                              vErrors.push(err8)
                            }
                            errors++
                          }
                          var _valid1 = _errs13 === errors
                          valid3 = valid3 || _valid1
                        }
                        if (!valid3) {
                          const err9 = { instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                          if (vErrors === null) {
                            vErrors = [err9]
                          } else {
                            vErrors.push(err9)
                          }
                          errors++
                          validate10.errors = vErrors
                          return false
                        } else {
                          errors = _errs10
                          if (vErrors !== null) {
                            if (_errs10) {
                              vErrors.length = _errs10
                            } else {
                              vErrors = null
                            }
                          }
                        }
                        var valid1 = _errs9 === errors
                      }
                      if (valid1) {
                        if (len2 > 2) {
                          let data3 = data0[2]
                          const _errs15 = errors
                          const _errs16 = errors
                          let valid4 = false
                          const _errs17 = errors
                          if (typeof data3 !== 'string') {
                            const err10 = { instancePath: instancePath + '/' + i0 + '/2', schemaPath: '#/items/items/2/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err10]
                            } else {
                              vErrors.push(err10)
                            }
                            errors++
                          }
                          if ('E' !== data3) {
                            const err11 = { instancePath: instancePath + '/' + i0 + '/2', schemaPath: '#/items/items/2/anyOf/0/const', keyword: 'const', params: { allowedValue: 'E' }, message: 'must be equal to constant' }
                            if (vErrors === null) {
                              vErrors = [err11]
                            } else {
                              vErrors.push(err11)
                            }
                            errors++
                          }
                          var _valid2 = _errs17 === errors
                          valid4 = valid4 || _valid2
                          if (!valid4) {
                            const _errs19 = errors
                            if (typeof data3 !== 'string') {
                              const err12 = { instancePath: instancePath + '/' + i0 + '/2', schemaPath: '#/items/items/2/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err12]
                              } else {
                                vErrors.push(err12)
                              }
                              errors++
                            }
                            if ('F' !== data3) {
                              const err13 = { instancePath: instancePath + '/' + i0 + '/2', schemaPath: '#/items/items/2/anyOf/1/const', keyword: 'const', params: { allowedValue: 'F' }, message: 'must be equal to constant' }
                              if (vErrors === null) {
                                vErrors = [err13]
                              } else {
                                vErrors.push(err13)
                              }
                              errors++
                            }
                            var _valid2 = _errs19 === errors
                            valid4 = valid4 || _valid2
                          }
                          if (!valid4) {
                            const err14 = { instancePath: instancePath + '/' + i0 + '/2', schemaPath: '#/items/items/2/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                            if (vErrors === null) {
                              vErrors = [err14]
                            } else {
                              vErrors.push(err14)
                            }
                            errors++
                            validate10.errors = vErrors
                            return false
                          } else {
                            errors = _errs16
                            if (vErrors !== null) {
                              if (_errs16) {
                                vErrors.length = _errs16
                              } else {
                                vErrors = null
                              }
                            }
                          }
                          var valid1 = _errs15 === errors
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
