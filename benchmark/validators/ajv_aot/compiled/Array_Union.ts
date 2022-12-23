// @ts-nocheck
'use strict'
export const Array_Union = validate10
const schema11 = {
  $id: 'Array_Union',
  description: 'Should validate an array of union objects',
  type: 'array',
  items: {
    anyOf: [
      { type: 'object', properties: { type: { const: 'BitVector2', type: 'string' }, x: { type: 'boolean' }, y: { type: 'boolean' } }, required: ['type', 'x', 'y'] },
      { type: 'object', properties: { type: { const: 'BitVector3', type: 'string' }, x: { type: 'boolean' }, y: { type: 'boolean' }, z: { type: 'boolean' } }, required: ['type', 'x', 'y', 'z'] },
      { type: 'object', properties: { type: { const: 'BitVector4', type: 'string' }, x: { type: 'boolean' }, y: { type: 'boolean' }, z: { type: 'boolean' }, w: { type: 'boolean' } }, required: ['type', 'x', 'y', 'z', 'w'] },
    ],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Union" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
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
            if ((data0.type === undefined && (missing0 = 'type')) || (data0.x === undefined && (missing0 = 'x')) || (data0.y === undefined && (missing0 = 'y'))) {
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
                if ('BitVector2' !== data1) {
                  const err2 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/0/properties/type/const', keyword: 'const', params: { allowedValue: 'BitVector2' }, message: 'must be equal to constant' }
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
                if (data0.x !== undefined) {
                  const _errs7 = errors
                  if (typeof data0.x !== 'boolean') {
                    const err3 = { instancePath: instancePath + '/' + i0 + '/x', schemaPath: '#/items/anyOf/0/properties/x/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
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
                if (valid2) {
                  if (data0.y !== undefined) {
                    const _errs9 = errors
                    if (typeof data0.y !== 'boolean') {
                      const err4 = { instancePath: instancePath + '/' + i0 + '/y', schemaPath: '#/items/anyOf/0/properties/y/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                      if (vErrors === null) {
                        vErrors = [err4]
                      } else {
                        vErrors.push(err4)
                      }
                      errors++
                    }
                    var valid2 = _errs9 === errors
                  } else {
                    var valid2 = true
                  }
                }
              }
            }
          } else {
            const err5 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err5]
            } else {
              vErrors.push(err5)
            }
            errors++
          }
        }
        var _valid0 = _errs3 === errors
        valid1 = valid1 || _valid0
        if (!valid1) {
          const _errs11 = errors
          if (errors === _errs11) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1
              if ((data0.type === undefined && (missing1 = 'type')) || (data0.x === undefined && (missing1 = 'x')) || (data0.y === undefined && (missing1 = 'y')) || (data0.z === undefined && (missing1 = 'z'))) {
                const err6 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
                if (vErrors === null) {
                  vErrors = [err6]
                } else {
                  vErrors.push(err6)
                }
                errors++
              } else {
                if (data0.type !== undefined) {
                  let data4 = data0.type
                  const _errs13 = errors
                  if (typeof data4 !== 'string') {
                    const err7 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err7]
                    } else {
                      vErrors.push(err7)
                    }
                    errors++
                  }
                  if ('BitVector3' !== data4) {
                    const err8 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'BitVector3' }, message: 'must be equal to constant' }
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
                if (valid3) {
                  if (data0.x !== undefined) {
                    const _errs15 = errors
                    if (typeof data0.x !== 'boolean') {
                      const err9 = { instancePath: instancePath + '/' + i0 + '/x', schemaPath: '#/items/anyOf/1/properties/x/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                      if (vErrors === null) {
                        vErrors = [err9]
                      } else {
                        vErrors.push(err9)
                      }
                      errors++
                    }
                    var valid3 = _errs15 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data0.y !== undefined) {
                      const _errs17 = errors
                      if (typeof data0.y !== 'boolean') {
                        const err10 = { instancePath: instancePath + '/' + i0 + '/y', schemaPath: '#/items/anyOf/1/properties/y/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                        if (vErrors === null) {
                          vErrors = [err10]
                        } else {
                          vErrors.push(err10)
                        }
                        errors++
                      }
                      var valid3 = _errs17 === errors
                    } else {
                      var valid3 = true
                    }
                    if (valid3) {
                      if (data0.z !== undefined) {
                        const _errs19 = errors
                        if (typeof data0.z !== 'boolean') {
                          const err11 = { instancePath: instancePath + '/' + i0 + '/z', schemaPath: '#/items/anyOf/1/properties/z/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                          if (vErrors === null) {
                            vErrors = [err11]
                          } else {
                            vErrors.push(err11)
                          }
                          errors++
                        }
                        var valid3 = _errs19 === errors
                      } else {
                        var valid3 = true
                      }
                    }
                  }
                }
              }
            } else {
              const err12 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err12]
              } else {
                vErrors.push(err12)
              }
              errors++
            }
          }
          var _valid0 = _errs11 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs21 = errors
            if (errors === _errs21) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing2
                if (
                  (data0.type === undefined && (missing2 = 'type')) ||
                  (data0.x === undefined && (missing2 = 'x')) ||
                  (data0.y === undefined && (missing2 = 'y')) ||
                  (data0.z === undefined && (missing2 = 'z')) ||
                  (data0.w === undefined && (missing2 = 'w'))
                ) {
                  const err13 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
                  if (vErrors === null) {
                    vErrors = [err13]
                  } else {
                    vErrors.push(err13)
                  }
                  errors++
                } else {
                  if (data0.type !== undefined) {
                    let data8 = data0.type
                    const _errs23 = errors
                    if (typeof data8 !== 'string') {
                      const err14 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/2/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err14]
                      } else {
                        vErrors.push(err14)
                      }
                      errors++
                    }
                    if ('BitVector4' !== data8) {
                      const err15 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/2/properties/type/const', keyword: 'const', params: { allowedValue: 'BitVector4' }, message: 'must be equal to constant' }
                      if (vErrors === null) {
                        vErrors = [err15]
                      } else {
                        vErrors.push(err15)
                      }
                      errors++
                    }
                    var valid4 = _errs23 === errors
                  } else {
                    var valid4 = true
                  }
                  if (valid4) {
                    if (data0.x !== undefined) {
                      const _errs25 = errors
                      if (typeof data0.x !== 'boolean') {
                        const err16 = { instancePath: instancePath + '/' + i0 + '/x', schemaPath: '#/items/anyOf/2/properties/x/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                        if (vErrors === null) {
                          vErrors = [err16]
                        } else {
                          vErrors.push(err16)
                        }
                        errors++
                      }
                      var valid4 = _errs25 === errors
                    } else {
                      var valid4 = true
                    }
                    if (valid4) {
                      if (data0.y !== undefined) {
                        const _errs27 = errors
                        if (typeof data0.y !== 'boolean') {
                          const err17 = { instancePath: instancePath + '/' + i0 + '/y', schemaPath: '#/items/anyOf/2/properties/y/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                          if (vErrors === null) {
                            vErrors = [err17]
                          } else {
                            vErrors.push(err17)
                          }
                          errors++
                        }
                        var valid4 = _errs27 === errors
                      } else {
                        var valid4 = true
                      }
                      if (valid4) {
                        if (data0.z !== undefined) {
                          const _errs29 = errors
                          if (typeof data0.z !== 'boolean') {
                            const err18 = { instancePath: instancePath + '/' + i0 + '/z', schemaPath: '#/items/anyOf/2/properties/z/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                            if (vErrors === null) {
                              vErrors = [err18]
                            } else {
                              vErrors.push(err18)
                            }
                            errors++
                          }
                          var valid4 = _errs29 === errors
                        } else {
                          var valid4 = true
                        }
                        if (valid4) {
                          if (data0.w !== undefined) {
                            const _errs31 = errors
                            if (typeof data0.w !== 'boolean') {
                              const err19 = { instancePath: instancePath + '/' + i0 + '/w', schemaPath: '#/items/anyOf/2/properties/w/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }
                              if (vErrors === null) {
                                vErrors = [err19]
                              } else {
                                vErrors.push(err19)
                              }
                              errors++
                            }
                            var valid4 = _errs31 === errors
                          } else {
                            var valid4 = true
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                const err20 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err20]
                } else {
                  vErrors.push(err20)
                }
                errors++
              }
            }
            var _valid0 = _errs21 === errors
            valid1 = valid1 || _valid0
          }
        }
        if (!valid1) {
          const err21 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
          if (vErrors === null) {
            vErrors = [err21]
          } else {
            vErrors.push(err21)
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
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
