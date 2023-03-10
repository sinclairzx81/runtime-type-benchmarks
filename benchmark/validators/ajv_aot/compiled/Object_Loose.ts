// @ts-nocheck
'use strict'
export const Object_Loose = validate10
const schema11 = {
  $id: 'Object_Loose',
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
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Object_Loose" */ let vErrors = null
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
        if (data.A !== undefined) {
          let data0 = data.A
          const _errs1 = errors
          if (!(typeof data0 == 'number' && isFinite(data0))) {
            validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/properties/A/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
            return false
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.B !== undefined) {
            let data1 = data.B
            const _errs3 = errors
            if (!(typeof data1 == 'number' && isFinite(data1))) {
              validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/properties/B/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
              return false
            }
            var valid0 = _errs3 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.C !== undefined) {
              let data2 = data.C
              const _errs5 = errors
              if (!(typeof data2 == 'number' && isFinite(data2))) {
                validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/properties/C/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                return false
              }
              var valid0 = _errs5 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.D !== undefined) {
                const _errs7 = errors
                if (typeof data.D !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/D', schemaPath: '#/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid0 = _errs7 === errors
              } else {
                var valid0 = true
              }
              if (valid0) {
                if (data.E !== undefined) {
                  const _errs9 = errors
                  if (typeof data.E !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/E', schemaPath: '#/properties/E/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid0 = _errs9 === errors
                } else {
                  var valid0 = true
                }
                if (valid0) {
                  if (data.F !== undefined) {
                    const _errs11 = errors
                    if (typeof data.F !== 'boolean') {
                      validate10.errors = [{ instancePath: instancePath + '/F', schemaPath: '#/properties/F/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
                      return false
                    }
                    var valid0 = _errs11 === errors
                  } else {
                    var valid0 = true
                  }
                  if (valid0) {
                    if (data.G !== undefined) {
                      let data6 = data.G
                      const _errs13 = errors
                      if (errors === _errs13) {
                        if (data6 && typeof data6 == 'object' && !Array.isArray(data6)) {
                          let missing1
                          if ((data6.H === undefined && (missing1 = 'H')) || (data6.I === undefined && (missing1 = 'I')) || (data6.J === undefined && (missing1 = 'J'))) {
                            validate10.errors = [
                              { instancePath: instancePath + '/G', schemaPath: '#/properties/G/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" },
                            ]
                            return false
                          } else {
                            if (data6.H !== undefined) {
                              const _errs15 = errors
                              if (typeof data6.H !== 'string') {
                                validate10.errors = [{ instancePath: instancePath + '/G/H', schemaPath: '#/properties/G/properties/H/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                                return false
                              }
                              var valid1 = _errs15 === errors
                            } else {
                              var valid1 = true
                            }
                            if (valid1) {
                              if (data6.I !== undefined) {
                                let data8 = data6.I
                                const _errs17 = errors
                                if (!(typeof data8 == 'number' && isFinite(data8))) {
                                  validate10.errors = [{ instancePath: instancePath + '/G/I', schemaPath: '#/properties/G/properties/I/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                  return false
                                }
                                var valid1 = _errs17 === errors
                              } else {
                                var valid1 = true
                              }
                              if (valid1) {
                                if (data6.J !== undefined) {
                                  const _errs19 = errors
                                  if (typeof data6.J !== 'boolean') {
                                    validate10.errors = [{ instancePath: instancePath + '/G/J', schemaPath: '#/properties/G/properties/J/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
                                    return false
                                  }
                                  var valid1 = _errs19 === errors
                                } else {
                                  var valid1 = true
                                }
                              }
                            }
                          }
                        } else {
                          validate10.errors = [{ instancePath: instancePath + '/G', schemaPath: '#/properties/G/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                          return false
                        }
                      }
                      var valid0 = _errs13 === errors
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
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
