// @ts-nocheck
'use strict'
export const Composite_Union_Discriminated = validate10
const schema11 = {
  $id: 'Composite_Union_Discriminated',
  default: { type: 'H', value: 42 },
  anyOf: [
    { type: 'object', properties: { type: { const: 'A', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'B', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'C', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'D', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'E', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'F', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'G', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'H', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
  ],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Composite_Union_Discriminated" */ let vErrors = null
  let errors = 0
  const _errs0 = errors
  let valid0 = false
  const _errs1 = errors
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.type === undefined && (missing0 = 'type')) || (data.value === undefined && (missing0 = 'value'))) {
        const err0 = { instancePath, schemaPath: '#/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
        if (vErrors === null) {
          vErrors = [err0]
        } else {
          vErrors.push(err0)
        }
        errors++
      } else {
        if (data.type !== undefined) {
          let data0 = data.type
          const _errs3 = errors
          if (typeof data0 !== 'string') {
            const err1 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
            if (vErrors === null) {
              vErrors = [err1]
            } else {
              vErrors.push(err1)
            }
            errors++
          }
          if ('A' !== data0) {
            const err2 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/0/properties/type/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }
            if (vErrors === null) {
              vErrors = [err2]
            } else {
              vErrors.push(err2)
            }
            errors++
          }
          var valid1 = _errs3 === errors
        } else {
          var valid1 = true
        }
        if (valid1) {
          if (data.value !== undefined) {
            let data1 = data.value
            const _errs5 = errors
            if (!(typeof data1 == 'number' && isFinite(data1))) {
              const err3 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/0/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
              if (vErrors === null) {
                vErrors = [err3]
              } else {
                vErrors.push(err3)
              }
              errors++
            }
            var valid1 = _errs5 === errors
          } else {
            var valid1 = true
          }
        }
      }
    } else {
      const err4 = { instancePath, schemaPath: '#/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
      if (vErrors === null) {
        vErrors = [err4]
      } else {
        vErrors.push(err4)
      }
      errors++
    }
  }
  var _valid0 = _errs1 === errors
  valid0 = valid0 || _valid0
  if (!valid0) {
    const _errs7 = errors
    if (errors === _errs7) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing1
        if ((data.type === undefined && (missing1 = 'type')) || (data.value === undefined && (missing1 = 'value'))) {
          const err5 = { instancePath, schemaPath: '#/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
          if (vErrors === null) {
            vErrors = [err5]
          } else {
            vErrors.push(err5)
          }
          errors++
        } else {
          if (data.type !== undefined) {
            let data2 = data.type
            const _errs9 = errors
            if (typeof data2 !== 'string') {
              const err6 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
              if (vErrors === null) {
                vErrors = [err6]
              } else {
                vErrors.push(err6)
              }
              errors++
            }
            if ('B' !== data2) {
              const err7 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }
              if (vErrors === null) {
                vErrors = [err7]
              } else {
                vErrors.push(err7)
              }
              errors++
            }
            var valid2 = _errs9 === errors
          } else {
            var valid2 = true
          }
          if (valid2) {
            if (data.value !== undefined) {
              let data3 = data.value
              const _errs11 = errors
              if (!(typeof data3 == 'number' && isFinite(data3))) {
                const err8 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/1/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                if (vErrors === null) {
                  vErrors = [err8]
                } else {
                  vErrors.push(err8)
                }
                errors++
              }
              var valid2 = _errs11 === errors
            } else {
              var valid2 = true
            }
          }
        }
      } else {
        const err9 = { instancePath, schemaPath: '#/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
        if (vErrors === null) {
          vErrors = [err9]
        } else {
          vErrors.push(err9)
        }
        errors++
      }
    }
    var _valid0 = _errs7 === errors
    valid0 = valid0 || _valid0
    if (!valid0) {
      const _errs13 = errors
      if (errors === _errs13) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing2
          if ((data.type === undefined && (missing2 = 'type')) || (data.value === undefined && (missing2 = 'value'))) {
            const err10 = { instancePath, schemaPath: '#/anyOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
            if (vErrors === null) {
              vErrors = [err10]
            } else {
              vErrors.push(err10)
            }
            errors++
          } else {
            if (data.type !== undefined) {
              let data4 = data.type
              const _errs15 = errors
              if (typeof data4 !== 'string') {
                const err11 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/2/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err11]
                } else {
                  vErrors.push(err11)
                }
                errors++
              }
              if ('C' !== data4) {
                const err12 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/2/properties/type/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }
                if (vErrors === null) {
                  vErrors = [err12]
                } else {
                  vErrors.push(err12)
                }
                errors++
              }
              var valid3 = _errs15 === errors
            } else {
              var valid3 = true
            }
            if (valid3) {
              if (data.value !== undefined) {
                let data5 = data.value
                const _errs17 = errors
                if (!(typeof data5 == 'number' && isFinite(data5))) {
                  const err13 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/2/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                  if (vErrors === null) {
                    vErrors = [err13]
                  } else {
                    vErrors.push(err13)
                  }
                  errors++
                }
                var valid3 = _errs17 === errors
              } else {
                var valid3 = true
              }
            }
          }
        } else {
          const err14 = { instancePath, schemaPath: '#/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
          if (vErrors === null) {
            vErrors = [err14]
          } else {
            vErrors.push(err14)
          }
          errors++
        }
      }
      var _valid0 = _errs13 === errors
      valid0 = valid0 || _valid0
      if (!valid0) {
        const _errs19 = errors
        if (errors === _errs19) {
          if (data && typeof data == 'object' && !Array.isArray(data)) {
            let missing3
            if ((data.type === undefined && (missing3 = 'type')) || (data.value === undefined && (missing3 = 'value'))) {
              const err15 = { instancePath, schemaPath: '#/anyOf/3/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }
              if (vErrors === null) {
                vErrors = [err15]
              } else {
                vErrors.push(err15)
              }
              errors++
            } else {
              if (data.type !== undefined) {
                let data6 = data.type
                const _errs21 = errors
                if (typeof data6 !== 'string') {
                  const err16 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/3/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err16]
                  } else {
                    vErrors.push(err16)
                  }
                  errors++
                }
                if ('D' !== data6) {
                  const err17 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/3/properties/type/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }
                  if (vErrors === null) {
                    vErrors = [err17]
                  } else {
                    vErrors.push(err17)
                  }
                  errors++
                }
                var valid4 = _errs21 === errors
              } else {
                var valid4 = true
              }
              if (valid4) {
                if (data.value !== undefined) {
                  let data7 = data.value
                  const _errs23 = errors
                  if (!(typeof data7 == 'number' && isFinite(data7))) {
                    const err18 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/3/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err18]
                    } else {
                      vErrors.push(err18)
                    }
                    errors++
                  }
                  var valid4 = _errs23 === errors
                } else {
                  var valid4 = true
                }
              }
            }
          } else {
            const err19 = { instancePath, schemaPath: '#/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err19]
            } else {
              vErrors.push(err19)
            }
            errors++
          }
        }
        var _valid0 = _errs19 === errors
        valid0 = valid0 || _valid0
        if (!valid0) {
          const _errs25 = errors
          if (errors === _errs25) {
            if (data && typeof data == 'object' && !Array.isArray(data)) {
              let missing4
              if ((data.type === undefined && (missing4 = 'type')) || (data.value === undefined && (missing4 = 'value'))) {
                const err20 = { instancePath, schemaPath: '#/anyOf/4/required', keyword: 'required', params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }
                if (vErrors === null) {
                  vErrors = [err20]
                } else {
                  vErrors.push(err20)
                }
                errors++
              } else {
                if (data.type !== undefined) {
                  let data8 = data.type
                  const _errs27 = errors
                  if (typeof data8 !== 'string') {
                    const err21 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/4/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err21]
                    } else {
                      vErrors.push(err21)
                    }
                    errors++
                  }
                  if ('E' !== data8) {
                    const err22 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/4/properties/type/const', keyword: 'const', params: { allowedValue: 'E' }, message: 'must be equal to constant' }
                    if (vErrors === null) {
                      vErrors = [err22]
                    } else {
                      vErrors.push(err22)
                    }
                    errors++
                  }
                  var valid5 = _errs27 === errors
                } else {
                  var valid5 = true
                }
                if (valid5) {
                  if (data.value !== undefined) {
                    let data9 = data.value
                    const _errs29 = errors
                    if (!(typeof data9 == 'number' && isFinite(data9))) {
                      const err23 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/4/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                      if (vErrors === null) {
                        vErrors = [err23]
                      } else {
                        vErrors.push(err23)
                      }
                      errors++
                    }
                    var valid5 = _errs29 === errors
                  } else {
                    var valid5 = true
                  }
                }
              }
            } else {
              const err24 = { instancePath, schemaPath: '#/anyOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err24]
              } else {
                vErrors.push(err24)
              }
              errors++
            }
          }
          var _valid0 = _errs25 === errors
          valid0 = valid0 || _valid0
          if (!valid0) {
            const _errs31 = errors
            if (errors === _errs31) {
              if (data && typeof data == 'object' && !Array.isArray(data)) {
                let missing5
                if ((data.type === undefined && (missing5 = 'type')) || (data.value === undefined && (missing5 = 'value'))) {
                  const err25 = { instancePath, schemaPath: '#/anyOf/5/required', keyword: 'required', params: { missingProperty: missing5 }, message: "must have required property '" + missing5 + "'" }
                  if (vErrors === null) {
                    vErrors = [err25]
                  } else {
                    vErrors.push(err25)
                  }
                  errors++
                } else {
                  if (data.type !== undefined) {
                    let data10 = data.type
                    const _errs33 = errors
                    if (typeof data10 !== 'string') {
                      const err26 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/5/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err26]
                      } else {
                        vErrors.push(err26)
                      }
                      errors++
                    }
                    if ('F' !== data10) {
                      const err27 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/5/properties/type/const', keyword: 'const', params: { allowedValue: 'F' }, message: 'must be equal to constant' }
                      if (vErrors === null) {
                        vErrors = [err27]
                      } else {
                        vErrors.push(err27)
                      }
                      errors++
                    }
                    var valid6 = _errs33 === errors
                  } else {
                    var valid6 = true
                  }
                  if (valid6) {
                    if (data.value !== undefined) {
                      let data11 = data.value
                      const _errs35 = errors
                      if (!(typeof data11 == 'number' && isFinite(data11))) {
                        const err28 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/5/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err28]
                        } else {
                          vErrors.push(err28)
                        }
                        errors++
                      }
                      var valid6 = _errs35 === errors
                    } else {
                      var valid6 = true
                    }
                  }
                }
              } else {
                const err29 = { instancePath, schemaPath: '#/anyOf/5/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err29]
                } else {
                  vErrors.push(err29)
                }
                errors++
              }
            }
            var _valid0 = _errs31 === errors
            valid0 = valid0 || _valid0
            if (!valid0) {
              const _errs37 = errors
              if (errors === _errs37) {
                if (data && typeof data == 'object' && !Array.isArray(data)) {
                  let missing6
                  if ((data.type === undefined && (missing6 = 'type')) || (data.value === undefined && (missing6 = 'value'))) {
                    const err30 = { instancePath, schemaPath: '#/anyOf/6/required', keyword: 'required', params: { missingProperty: missing6 }, message: "must have required property '" + missing6 + "'" }
                    if (vErrors === null) {
                      vErrors = [err30]
                    } else {
                      vErrors.push(err30)
                    }
                    errors++
                  } else {
                    if (data.type !== undefined) {
                      let data12 = data.type
                      const _errs39 = errors
                      if (typeof data12 !== 'string') {
                        const err31 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/6/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err31]
                        } else {
                          vErrors.push(err31)
                        }
                        errors++
                      }
                      if ('G' !== data12) {
                        const err32 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/6/properties/type/const', keyword: 'const', params: { allowedValue: 'G' }, message: 'must be equal to constant' }
                        if (vErrors === null) {
                          vErrors = [err32]
                        } else {
                          vErrors.push(err32)
                        }
                        errors++
                      }
                      var valid7 = _errs39 === errors
                    } else {
                      var valid7 = true
                    }
                    if (valid7) {
                      if (data.value !== undefined) {
                        let data13 = data.value
                        const _errs41 = errors
                        if (!(typeof data13 == 'number' && isFinite(data13))) {
                          const err33 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/6/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err33]
                          } else {
                            vErrors.push(err33)
                          }
                          errors++
                        }
                        var valid7 = _errs41 === errors
                      } else {
                        var valid7 = true
                      }
                    }
                  }
                } else {
                  const err34 = { instancePath, schemaPath: '#/anyOf/6/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err34]
                  } else {
                    vErrors.push(err34)
                  }
                  errors++
                }
              }
              var _valid0 = _errs37 === errors
              valid0 = valid0 || _valid0
              if (!valid0) {
                const _errs43 = errors
                if (errors === _errs43) {
                  if (data && typeof data == 'object' && !Array.isArray(data)) {
                    let missing7
                    if ((data.type === undefined && (missing7 = 'type')) || (data.value === undefined && (missing7 = 'value'))) {
                      const err35 = { instancePath, schemaPath: '#/anyOf/7/required', keyword: 'required', params: { missingProperty: missing7 }, message: "must have required property '" + missing7 + "'" }
                      if (vErrors === null) {
                        vErrors = [err35]
                      } else {
                        vErrors.push(err35)
                      }
                      errors++
                    } else {
                      if (data.type !== undefined) {
                        let data14 = data.type
                        const _errs45 = errors
                        if (typeof data14 !== 'string') {
                          const err36 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/7/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err36]
                          } else {
                            vErrors.push(err36)
                          }
                          errors++
                        }
                        if ('H' !== data14) {
                          const err37 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/7/properties/type/const', keyword: 'const', params: { allowedValue: 'H' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err37]
                          } else {
                            vErrors.push(err37)
                          }
                          errors++
                        }
                        var valid8 = _errs45 === errors
                      } else {
                        var valid8 = true
                      }
                      if (valid8) {
                        if (data.value !== undefined) {
                          let data15 = data.value
                          const _errs47 = errors
                          if (!(typeof data15 == 'number' && isFinite(data15))) {
                            const err38 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/7/properties/value/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err38]
                            } else {
                              vErrors.push(err38)
                            }
                            errors++
                          }
                          var valid8 = _errs47 === errors
                        } else {
                          var valid8 = true
                        }
                      }
                    }
                  } else {
                    const err39 = { instancePath, schemaPath: '#/anyOf/7/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err39]
                    } else {
                      vErrors.push(err39)
                    }
                    errors++
                  }
                }
                var _valid0 = _errs43 === errors
                valid0 = valid0 || _valid0
              }
            }
          }
        }
      }
    }
  }
  if (!valid0) {
    const err40 = { instancePath, schemaPath: '#/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
    if (vErrors === null) {
      vErrors = [err40]
    } else {
      vErrors.push(err40)
    }
    errors++
    validate10.errors = vErrors
    return false
  } else {
    errors = _errs0
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0
      } else {
        vErrors = null
      }
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
