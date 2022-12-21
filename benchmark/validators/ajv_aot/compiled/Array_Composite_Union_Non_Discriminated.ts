// @ts-nocheck
'use strict'
export const Array_Composite_Union_Non_Discriminated = validate10
const schema11 = {
  $id: 'Array_Composite_Union_Non_Discriminated',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Composite_Union_Non_Discriminated',
    default: { C: 'C', D: 'D' },
    anyOf: [
      { type: 'object', properties: { A: { type: 'string' }, B: { type: 'string' } }, required: ['A', 'B'] },
      { type: 'object', properties: { C: { type: 'string' }, D: { type: 'string' } }, required: ['C', 'D'] },
    ],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Composite_Union_Non_Discriminated" */ let vErrors = null
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
              if ((data0.A === undefined && (missing0 = 'A')) || (data0.B === undefined && (missing0 = 'B'))) {
                const err0 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
                if (vErrors === null) {
                  vErrors = [err0]
                } else {
                  vErrors.push(err0)
                }
                errors++
              } else {
                if (data0.A !== undefined) {
                  const _errs5 = errors
                  if (typeof data0.A !== 'string') {
                    const err1 = { instancePath: instancePath + '/' + i0 + '/A', schemaPath: '#/items/anyOf/0/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err1]
                    } else {
                      vErrors.push(err1)
                    }
                    errors++
                  }
                  var valid2 = _errs5 === errors
                } else {
                  var valid2 = true
                }
                if (valid2) {
                  if (data0.B !== undefined) {
                    const _errs7 = errors
                    if (typeof data0.B !== 'string') {
                      const err2 = { instancePath: instancePath + '/' + i0 + '/B', schemaPath: '#/items/anyOf/0/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err2]
                      } else {
                        vErrors.push(err2)
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
              const err3 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err3]
              } else {
                vErrors.push(err3)
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
                if ((data0.C === undefined && (missing1 = 'C')) || (data0.D === undefined && (missing1 = 'D'))) {
                  const err4 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
                  if (vErrors === null) {
                    vErrors = [err4]
                  } else {
                    vErrors.push(err4)
                  }
                  errors++
                } else {
                  if (data0.C !== undefined) {
                    const _errs11 = errors
                    if (typeof data0.C !== 'string') {
                      const err5 = { instancePath: instancePath + '/' + i0 + '/C', schemaPath: '#/items/anyOf/1/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err5]
                      } else {
                        vErrors.push(err5)
                      }
                      errors++
                    }
                    var valid3 = _errs11 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data0.D !== undefined) {
                      const _errs13 = errors
                      if (typeof data0.D !== 'string') {
                        const err6 = { instancePath: instancePath + '/' + i0 + '/D', schemaPath: '#/items/anyOf/1/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err6]
                        } else {
                          vErrors.push(err6)
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
                const err7 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err7]
                } else {
                  vErrors.push(err7)
                }
                errors++
              }
            }
            var _valid0 = _errs9 === errors
            valid1 = valid1 || _valid0
          }
          if (!valid1) {
            const err8 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
            if (vErrors === null) {
              vErrors = [err8]
            } else {
              vErrors.push(err8)
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