// @ts-nocheck
'use strict'
export const Object_Strict = validate10
const schema11 = {
  additionalProperties: false,
  $id: 'Object_Strict',
  type: 'object',
  properties: {
    A: { type: 'number' },
    B: { type: 'number' },
    C: { type: 'number' },
    D: { type: 'string' },
    E: { type: 'string' },
    F: { type: 'boolean' },
    G: { additionalProperties: false, type: 'object', properties: { H: { type: 'string' }, I: { type: 'number' }, J: { type: 'boolean' } }, required: ['H', 'I', 'J'] },
  },
  required: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Object_Strict" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if (
        (data.A === undefined && (missing0 = 'A')) ||
        (data.B === undefined && (missing0 = 'B')) ||
        (data.C === undefined && (missing0 = 'C')) ||
        (data.D === undefined && (missing0 = 'D')) ||
        (data.E === undefined && (missing0 = 'E')) ||
        (data.F === undefined && (missing0 = 'F')) ||
        (data.G === undefined && (missing0 = 'G'))
      ) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        const _errs1 = errors
        for (const key0 in data) {
          if (!(key0 === 'A' || key0 === 'B' || key0 === 'C' || key0 === 'D' || key0 === 'E' || key0 === 'F' || key0 === 'G')) {
            validate10.errors = [{ instancePath, schemaPath: '#/additionalProperties', keyword: 'additionalProperties', params: { additionalProperty: key0 }, message: 'must NOT have additional properties' }]
            return false
            break
          }
        }
        if (_errs1 === errors) {
          if (data.A !== undefined) {
            let data0 = data.A
            const _errs2 = errors
            if (!(typeof data0 == 'number' && isFinite(data0))) {
              validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/properties/A/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
              return false
            }
            var valid0 = _errs2 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.B !== undefined) {
              let data1 = data.B
              const _errs4 = errors
              if (!(typeof data1 == 'number' && isFinite(data1))) {
                validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/properties/B/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                return false
              }
              var valid0 = _errs4 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.C !== undefined) {
                let data2 = data.C
                const _errs6 = errors
                if (!(typeof data2 == 'number' && isFinite(data2))) {
                  validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/properties/C/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                  return false
                }
                var valid0 = _errs6 === errors
              } else {
                var valid0 = true
              }
              if (valid0) {
                if (data.D !== undefined) {
                  const _errs8 = errors
                  if (typeof data.D !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/D', schemaPath: '#/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid0 = _errs8 === errors
                } else {
                  var valid0 = true
                }
                if (valid0) {
                  if (data.E !== undefined) {
                    const _errs10 = errors
                    if (typeof data.E !== 'string') {
                      validate10.errors = [{ instancePath: instancePath + '/E', schemaPath: '#/properties/E/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                      return false
                    }
                    var valid0 = _errs10 === errors
                  } else {
                    var valid0 = true
                  }
                  if (valid0) {
                    if (data.F !== undefined) {
                      const _errs12 = errors
                      if (typeof data.F !== 'boolean') {
                        validate10.errors = [{ instancePath: instancePath + '/F', schemaPath: '#/properties/F/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
                        return false
                      }
                      var valid0 = _errs12 === errors
                    } else {
                      var valid0 = true
                    }
                    if (valid0) {
                      if (data.G !== undefined) {
                        let data6 = data.G
                        const _errs14 = errors
                        if (errors === _errs14) {
                          if (data6 && typeof data6 == 'object' && !Array.isArray(data6)) {
                            let missing1
                            if ((data6.H === undefined && (missing1 = 'H')) || (data6.I === undefined && (missing1 = 'I')) || (data6.J === undefined && (missing1 = 'J'))) {
                              validate10.errors = [
                                { instancePath: instancePath + '/G', schemaPath: '#/properties/G/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" },
                              ]
                              return false
                            } else {
                              const _errs16 = errors
                              for (const key1 in data6) {
                                if (!(key1 === 'H' || key1 === 'I' || key1 === 'J')) {
                                  validate10.errors = [
                                    {
                                      instancePath: instancePath + '/G',
                                      schemaPath: '#/properties/G/additionalProperties',
                                      keyword: 'additionalProperties',
                                      params: { additionalProperty: key1 },
                                      message: 'must NOT have additional properties',
                                    },
                                  ]
                                  return false
                                  break
                                }
                              }
                              if (_errs16 === errors) {
                                if (data6.H !== undefined) {
                                  const _errs17 = errors
                                  if (typeof data6.H !== 'string') {
                                    validate10.errors = [{ instancePath: instancePath + '/G/H', schemaPath: '#/properties/G/properties/H/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                                    return false
                                  }
                                  var valid1 = _errs17 === errors
                                } else {
                                  var valid1 = true
                                }
                                if (valid1) {
                                  if (data6.I !== undefined) {
                                    let data8 = data6.I
                                    const _errs19 = errors
                                    if (!(typeof data8 == 'number' && isFinite(data8))) {
                                      validate10.errors = [{ instancePath: instancePath + '/G/I', schemaPath: '#/properties/G/properties/I/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                      return false
                                    }
                                    var valid1 = _errs19 === errors
                                  } else {
                                    var valid1 = true
                                  }
                                  if (valid1) {
                                    if (data6.J !== undefined) {
                                      const _errs21 = errors
                                      if (typeof data6.J !== 'boolean') {
                                        validate10.errors = [{ instancePath: instancePath + '/G/J', schemaPath: '#/properties/G/properties/J/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
                                        return false
                                      }
                                      var valid1 = _errs21 === errors
                                    } else {
                                      var valid1 = true
                                    }
                                  }
                                }
                              }
                            }
                          } else {
                            validate10.errors = [{ instancePath: instancePath + '/G', schemaPath: '#/properties/G/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                            return false
                          }
                        }
                        var valid0 = _errs14 === errors
                      } else {
                        var valid0 = true
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
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
