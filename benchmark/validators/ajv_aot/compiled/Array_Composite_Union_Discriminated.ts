// @ts-nocheck
'use strict'
export const Array_Composite_Union_Discriminated = validate10
const schema11 = {
  $id: 'Array_Composite_Union_Discriminated',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Composite_Union_Discriminated',
    default: { type: 'D', value: 42 },
    anyOf: [
      { type: 'object', properties: { type: { const: 'A', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
      { type: 'object', properties: { type: { const: 'B', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
      { type: 'object', properties: { type: { const: 'C', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
      { type: 'object', properties: { type: { const: 'D', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    ],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Composite_Union_Discriminated" */ let vErrors = null
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
          const _errs2 = errors
          let valid1 = false
          const _errs3 = errors
          if (errors === _errs3) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0
              if ((data0.type === undefined && (missing0 = 'type')) || (data0.value === undefined && (missing0 = 'value'))) {
                const err0 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
                if (vErrors === null) {
                  vErrors = [err0]
                } else {
                  vErrors.push(err0)
                }
                errors++
              } else {
                if (data0.type !== undefined) {
                  let data1 = data0.type
                  const _errs5 = errors
                  if (typeof data1 !== 'string') {
                    const err1 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err1]
                    } else {
                      vErrors.push(err1)
                    }
                    errors++
                  }
                  if ('A' !== data1) {
                    const err2 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/0/properties/type/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }
                    if (vErrors === null) {
                      vErrors = [err2]
                    } else {
                      vErrors.push(err2)
                    }
                    errors++
                  }
                  var valid2 = _errs5 === errors
                } else {
                  var valid2 = true
                }
                if (valid2) {
                  if (data0.value !== undefined) {
                    let data2 = data0.value
                    const _errs7 = errors
                    if (!(typeof data2 == 'number' && isFinite(data2))) {
                      const err3 = { instancePath: instancePath + '/' + i0 + '/value', schemaPath: '#/items/anyOf/0/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                      if (vErrors === null) {
                        vErrors = [err3]
                      } else {
                        vErrors.push(err3)
                      }
                      errors++
                    }
                    var valid2 = _errs7 === errors
                  } else {
                    var valid2 = true
                  }
                }
              }
            } else {
              const err4 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err4]
              } else {
                vErrors.push(err4)
              }
              errors++
            }
          }
          var _valid0 = _errs3 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs9 = errors
            if (errors === _errs9) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing1
                if ((data0.type === undefined && (missing1 = 'type')) || (data0.value === undefined && (missing1 = 'value'))) {
                  const err5 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
                  if (vErrors === null) {
                    vErrors = [err5]
                  } else {
                    vErrors.push(err5)
                  }
                  errors++
                } else {
                  if (data0.type !== undefined) {
                    let data3 = data0.type
                    const _errs11 = errors
                    if (typeof data3 !== 'string') {
                      const err6 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err6]
                      } else {
                        vErrors.push(err6)
                      }
                      errors++
                    }
                    if ('B' !== data3) {
                      const err7 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }
                      if (vErrors === null) {
                        vErrors = [err7]
                      } else {
                        vErrors.push(err7)
                      }
                      errors++
                    }
                    var valid3 = _errs11 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data0.value !== undefined) {
                      let data4 = data0.value
                      const _errs13 = errors
                      if (!(typeof data4 == 'number' && isFinite(data4))) {
                        const err8 = { instancePath: instancePath + '/' + i0 + '/value', schemaPath: '#/items/anyOf/1/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err8]
                        } else {
                          vErrors.push(err8)
                        }
                        errors++
                      }
                      var valid3 = _errs13 === errors
                    } else {
                      var valid3 = true
                    }
                  }
                }
              } else {
                const err9 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err9]
                } else {
                  vErrors.push(err9)
                }
                errors++
              }
            }
            var _valid0 = _errs9 === errors
            valid1 = valid1 || _valid0
            if (!valid1) {
              const _errs15 = errors
              if (errors === _errs15) {
                if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                  let missing2
                  if ((data0.type === undefined && (missing2 = 'type')) || (data0.value === undefined && (missing2 = 'value'))) {
                    const err10 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
                    if (vErrors === null) {
                      vErrors = [err10]
                    } else {
                      vErrors.push(err10)
                    }
                    errors++
                  } else {
                    if (data0.type !== undefined) {
                      let data5 = data0.type
                      const _errs17 = errors
                      if (typeof data5 !== 'string') {
                        const err11 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/2/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err11]
                        } else {
                          vErrors.push(err11)
                        }
                        errors++
                      }
                      if ('C' !== data5) {
                        const err12 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/2/properties/type/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }
                        if (vErrors === null) {
                          vErrors = [err12]
                        } else {
                          vErrors.push(err12)
                        }
                        errors++
                      }
                      var valid4 = _errs17 === errors
                    } else {
                      var valid4 = true
                    }
                    if (valid4) {
                      if (data0.value !== undefined) {
                        let data6 = data0.value
                        const _errs19 = errors
                        if (!(typeof data6 == 'number' && isFinite(data6))) {
                          const err13 = { instancePath: instancePath + '/' + i0 + '/value', schemaPath: '#/items/anyOf/2/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err13]
                          } else {
                            vErrors.push(err13)
                          }
                          errors++
                        }
                        var valid4 = _errs19 === errors
                      } else {
                        var valid4 = true
                      }
                    }
                  }
                } else {
                  const err14 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err14]
                  } else {
                    vErrors.push(err14)
                  }
                  errors++
                }
              }
              var _valid0 = _errs15 === errors
              valid1 = valid1 || _valid0
              if (!valid1) {
                const _errs21 = errors
                if (errors === _errs21) {
                  if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                    let missing3
                    if ((data0.type === undefined && (missing3 = 'type')) || (data0.value === undefined && (missing3 = 'value'))) {
                      const err15 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }
                      if (vErrors === null) {
                        vErrors = [err15]
                      } else {
                        vErrors.push(err15)
                      }
                      errors++
                    } else {
                      if (data0.type !== undefined) {
                        let data7 = data0.type
                        const _errs23 = errors
                        if (typeof data7 !== 'string') {
                          const err16 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/3/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err16]
                          } else {
                            vErrors.push(err16)
                          }
                          errors++
                        }
                        if ('D' !== data7) {
                          const err17 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/3/properties/type/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err17]
                          } else {
                            vErrors.push(err17)
                          }
                          errors++
                        }
                        var valid5 = _errs23 === errors
                      } else {
                        var valid5 = true
                      }
                      if (valid5) {
                        if (data0.value !== undefined) {
                          let data8 = data0.value
                          const _errs25 = errors
                          if (!(typeof data8 == 'number' && isFinite(data8))) {
                            const err18 = { instancePath: instancePath + '/' + i0 + '/value', schemaPath: '#/items/anyOf/3/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err18]
                            } else {
                              vErrors.push(err18)
                            }
                            errors++
                          }
                          var valid5 = _errs25 === errors
                        } else {
                          var valid5 = true
                        }
                      }
                    }
                  } else {
                    const err19 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err19]
                    } else {
                      vErrors.push(err19)
                    }
                    errors++
                  }
                }
                var _valid0 = _errs21 === errors
                valid1 = valid1 || _valid0
              }
            }
          }
          if (!valid1) {
            const err20 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
            if (vErrors === null) {
              vErrors = [err20]
            } else {
              vErrors.push(err20)
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
