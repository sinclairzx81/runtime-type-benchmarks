// @ts-nocheck
'use strict'
export const Array_Object_Loose = validate10
const schema11 = {
  $id: 'Array_Object_Loose',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Object_Loose',
    default: {
      A: 1,
      B: 1,
      C: 1,
      D: 'string',
      E: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      F: true,
      G: { H: 'foo', I: 1, J: true },
    },
    type: 'object',
    properties: {
      A: { type: 'number' },
      B: { type: 'number' },
      C: { type: 'number' },
      D: { type: 'string' },
      E: { type: 'string' },
      F: { type: 'boolean' },
      G: { type: 'object', properties: { H: { type: 'string' }, I: { type: 'number' }, J: { type: 'boolean' } }, required: ['H', 'I', 'J'] },
    },
    required: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Object_Loose" */ let vErrors = null
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
                (data0.G === undefined && (missing0 = 'G'))
              ) {
                validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
                return false
              } else {
                if (data0.A !== undefined) {
                  let data1 = data0.A
                  const _errs3 = errors
                  if (!(typeof data1 == 'number' && isFinite(data1))) {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/A', schemaPath: '#/items/properties/A/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                    if (!(typeof data2 == 'number' && isFinite(data2))) {
                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/B', schemaPath: '#/items/properties/B/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                      if (!(typeof data3 == 'number' && isFinite(data3))) {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/C', schemaPath: '#/items/properties/C/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                        return false
                      }
                      var valid1 = _errs7 === errors
                    } else {
                      var valid1 = true
                    }
                    if (valid1) {
                      if (data0.D !== undefined) {
                        const _errs9 = errors
                        if (typeof data0.D !== 'string') {
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/D', schemaPath: '#/items/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                          return false
                        }
                        var valid1 = _errs9 === errors
                      } else {
                        var valid1 = true
                      }
                      if (valid1) {
                        if (data0.E !== undefined) {
                          const _errs11 = errors
                          if (typeof data0.E !== 'string') {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/E', schemaPath: '#/items/properties/E/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                            return false
                          }
                          var valid1 = _errs11 === errors
                        } else {
                          var valid1 = true
                        }
                        if (valid1) {
                          if (data0.F !== undefined) {
                            const _errs13 = errors
                            if (typeof data0.F !== 'boolean') {
                              validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/F', schemaPath: '#/items/properties/F/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
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
                              if (errors === _errs15) {
                                if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
                                  let missing1
                                  if ((data7.H === undefined && (missing1 = 'H')) || (data7.I === undefined && (missing1 = 'I')) || (data7.J === undefined && (missing1 = 'J'))) {
                                    validate10.errors = [
                                      {
                                        instancePath: instancePath + '/' + i0 + '/G',
                                        schemaPath: '#/items/properties/G/required',
                                        keyword: 'required',
                                        params: { missingProperty: missing1 },
                                        message: "must have required property '" + missing1 + "'",
                                      },
                                    ]
                                    return false
                                  } else {
                                    if (data7.H !== undefined) {
                                      const _errs17 = errors
                                      if (typeof data7.H !== 'string') {
                                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/G/H', schemaPath: '#/items/properties/G/properties/H/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                                        return false
                                      }
                                      var valid2 = _errs17 === errors
                                    } else {
                                      var valid2 = true
                                    }
                                    if (valid2) {
                                      if (data7.I !== undefined) {
                                        let data9 = data7.I
                                        const _errs19 = errors
                                        if (!(typeof data9 == 'number' && isFinite(data9))) {
                                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/G/I', schemaPath: '#/items/properties/G/properties/I/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                          return false
                                        }
                                        var valid2 = _errs19 === errors
                                      } else {
                                        var valid2 = true
                                      }
                                      if (valid2) {
                                        if (data7.J !== undefined) {
                                          const _errs21 = errors
                                          if (typeof data7.J !== 'boolean') {
                                            validate10.errors = [
                                              { instancePath: instancePath + '/' + i0 + '/G/J', schemaPath: '#/items/properties/G/properties/J/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' },
                                            ]
                                            return false
                                          }
                                          var valid2 = _errs21 === errors
                                        } else {
                                          var valid2 = true
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/G', schemaPath: '#/items/properties/G/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                                  return false
                                }
                              }
                              var valid1 = _errs15 === errors
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