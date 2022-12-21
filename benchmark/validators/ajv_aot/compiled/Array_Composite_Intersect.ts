// @ts-nocheck
'use strict'
export const Array_Composite_Intersect = validate10
const schema11 = {
  $id: 'Array_Composite_Intersect',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Composite_Intersect',
    default: { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E', F: 'F', G: 'G', H: 'H' },
    type: 'object',
    properties: {
      A: { const: 'A', type: 'string' },
      B: { const: 'B', type: 'string' },
      C: { const: 'C', type: 'string' },
      D: { const: 'D', type: 'string' },
      E: { const: 'E', type: 'string' },
      F: { const: 'F', type: 'string' },
      G: { const: 'G', type: 'string' },
      H: { const: 'H', type: 'string' },
    },
    required: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Composite_Intersect" */ let vErrors = null
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
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing0
              if (
                (data0.A === undefined && (missing0 = 'A')) ||
                (data0.B === undefined && (missing0 = 'B')) ||
                (data0.C === undefined && (missing0 = 'C')) ||
                (data0.D === undefined && (missing0 = 'D')) ||
                (data0.E === undefined && (missing0 = 'E')) ||
                (data0.F === undefined && (missing0 = 'F')) ||
                (data0.G === undefined && (missing0 = 'G')) ||
                (data0.H === undefined && (missing0 = 'H'))
              ) {
                validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
                return false
              } else {
                if (data0.A !== undefined) {
                  let data1 = data0.A
                  const _errs3 = errors
                  if (typeof data1 !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/A', schemaPath: '#/items/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  if ('A' !== data1) {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/A', schemaPath: '#/items/properties/A/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }]
                    return false
                  }
                  var valid1 = _errs3 === errors
                } else {
                  var valid1 = true
                }
                if (valid1) {
                  if (data0.B !== undefined) {
                    let data2 = data0.B
                    const _errs5 = errors
                    if (typeof data2 !== 'string') {
                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/B', schemaPath: '#/items/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                      return false
                    }
                    if ('B' !== data2) {
                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/B', schemaPath: '#/items/properties/B/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }]
                      return false
                    }
                    var valid1 = _errs5 === errors
                  } else {
                    var valid1 = true
                  }
                  if (valid1) {
                    if (data0.C !== undefined) {
                      let data3 = data0.C
                      const _errs7 = errors
                      if (typeof data3 !== 'string') {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/C', schemaPath: '#/items/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                        return false
                      }
                      if ('C' !== data3) {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/C', schemaPath: '#/items/properties/C/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }]
                        return false
                      }
                      var valid1 = _errs7 === errors
                    } else {
                      var valid1 = true
                    }
                    if (valid1) {
                      if (data0.D !== undefined) {
                        let data4 = data0.D
                        const _errs9 = errors
                        if (typeof data4 !== 'string') {
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/D', schemaPath: '#/items/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                          return false
                        }
                        if ('D' !== data4) {
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/D', schemaPath: '#/items/properties/D/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }]
                          return false
                        }
                        var valid1 = _errs9 === errors
                      } else {
                        var valid1 = true
                      }
                      if (valid1) {
                        if (data0.E !== undefined) {
                          let data5 = data0.E
                          const _errs11 = errors
                          if (typeof data5 !== 'string') {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/E', schemaPath: '#/items/properties/E/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                            return false
                          }
                          if ('E' !== data5) {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/E', schemaPath: '#/items/properties/E/const', keyword: 'const', params: { allowedValue: 'E' }, message: 'must be equal to constant' }]
                            return false
                          }
                          var valid1 = _errs11 === errors
                        } else {
                          var valid1 = true
                        }
                        if (valid1) {
                          if (data0.F !== undefined) {
                            let data6 = data0.F
                            const _errs13 = errors
                            if (typeof data6 !== 'string') {
                              validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/F', schemaPath: '#/items/properties/F/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                              return false
                            }
                            if ('F' !== data6) {
                              validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/F', schemaPath: '#/items/properties/F/const', keyword: 'const', params: { allowedValue: 'F' }, message: 'must be equal to constant' }]
                              return false
                            }
                            var valid1 = _errs13 === errors
                          } else {
                            var valid1 = true
                          }
                          if (valid1) {
                            if (data0.G !== undefined) {
                              let data7 = data0.G
                              const _errs15 = errors
                              if (typeof data7 !== 'string') {
                                validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/G', schemaPath: '#/items/properties/G/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                                return false
                              }
                              if ('G' !== data7) {
                                validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/G', schemaPath: '#/items/properties/G/const', keyword: 'const', params: { allowedValue: 'G' }, message: 'must be equal to constant' }]
                                return false
                              }
                              var valid1 = _errs15 === errors
                            } else {
                              var valid1 = true
                            }
                            if (valid1) {
                              if (data0.H !== undefined) {
                                let data8 = data0.H
                                const _errs17 = errors
                                if (typeof data8 !== 'string') {
                                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/H', schemaPath: '#/items/properties/H/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                                  return false
                                }
                                if ('H' !== data8) {
                                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/H', schemaPath: '#/items/properties/H/const', keyword: 'const', params: { allowedValue: 'H' }, message: 'must be equal to constant' }]
                                  return false
                                }
                                var valid1 = _errs17 === errors
                              } else {
                                var valid1 = true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
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