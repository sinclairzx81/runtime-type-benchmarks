// @ts-nocheck
'use strict'
export const Composite_Union_Discriminated = validate10
const schema11 = {
  $id: 'Composite_Union_Discriminated',
  default: { type: 'D', value: 42 },
  anyOf: [
    { type: 'object', properties: { type: { const: 'A', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'B', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'C', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
    { type: 'object', properties: { type: { const: 'D', type: 'string' }, value: { type: 'number' } }, required: ['type', 'value'] },
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
      }
    }
  }
  if (!valid0) {
    const err20 = { instancePath, schemaPath: '#/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
    if (vErrors === null) {
      vErrors = [err20]
    } else {
      vErrors.push(err20)
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
