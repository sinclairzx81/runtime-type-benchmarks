// @ts-nocheck
'use strict'
export const Object_Partial = validate10
const schema11 = {
  type: 'object',
  properties: {
    A: { type: 'object', properties: { A: { type: 'string' }, B: { type: 'string' }, C: { type: 'string' } } },
    B: { type: 'object', properties: { A: { type: 'string' }, B: { type: 'string' }, C: { type: 'string' } } },
    C: { type: 'object', properties: { A: { type: 'string' }, B: { type: 'string' }, C: { type: 'string' } } },
  },
  $id: 'Object_Partial',
  description: 'Should allow partially applied objects',
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Object_Partial" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.A !== undefined) {
        let data0 = data.A
        const _errs1 = errors
        if (errors === _errs1) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            if (data0.A !== undefined) {
              const _errs3 = errors
              if (typeof data0.A !== 'string') {
                validate10.errors = [{ instancePath: instancePath + '/A/A', schemaPath: '#/properties/A/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                return false
              }
              var valid1 = _errs3 === errors
            } else {
              var valid1 = true
            }
            if (valid1) {
              if (data0.B !== undefined) {
                const _errs5 = errors
                if (typeof data0.B !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/A/B', schemaPath: '#/properties/A/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid1 = _errs5 === errors
              } else {
                var valid1 = true
              }
              if (valid1) {
                if (data0.C !== undefined) {
                  const _errs7 = errors
                  if (typeof data0.C !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/A/C', schemaPath: '#/properties/A/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid1 = _errs7 === errors
                } else {
                  var valid1 = true
                }
              }
            }
          } else {
            validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/properties/A/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
            return false
          }
        }
        var valid0 = _errs1 === errors
      } else {
        var valid0 = true
      }
      if (valid0) {
        if (data.B !== undefined) {
          let data4 = data.B
          const _errs9 = errors
          if (errors === _errs9) {
            if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
              if (data4.A !== undefined) {
                const _errs11 = errors
                if (typeof data4.A !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/B/A', schemaPath: '#/properties/B/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid2 = _errs11 === errors
              } else {
                var valid2 = true
              }
              if (valid2) {
                if (data4.B !== undefined) {
                  const _errs13 = errors
                  if (typeof data4.B !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/B/B', schemaPath: '#/properties/B/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid2 = _errs13 === errors
                } else {
                  var valid2 = true
                }
                if (valid2) {
                  if (data4.C !== undefined) {
                    const _errs15 = errors
                    if (typeof data4.C !== 'string') {
                      validate10.errors = [{ instancePath: instancePath + '/B/C', schemaPath: '#/properties/B/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                      return false
                    }
                    var valid2 = _errs15 === errors
                  } else {
                    var valid2 = true
                  }
                }
              }
            } else {
              validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/properties/B/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
              return false
            }
          }
          var valid0 = _errs9 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.C !== undefined) {
            let data8 = data.C
            const _errs17 = errors
            if (errors === _errs17) {
              if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                if (data8.A !== undefined) {
                  const _errs19 = errors
                  if (typeof data8.A !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/C/A', schemaPath: '#/properties/C/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid3 = _errs19 === errors
                } else {
                  var valid3 = true
                }
                if (valid3) {
                  if (data8.B !== undefined) {
                    const _errs21 = errors
                    if (typeof data8.B !== 'string') {
                      validate10.errors = [{ instancePath: instancePath + '/C/B', schemaPath: '#/properties/C/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                      return false
                    }
                    var valid3 = _errs21 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data8.C !== undefined) {
                      const _errs23 = errors
                      if (typeof data8.C !== 'string') {
                        validate10.errors = [{ instancePath: instancePath + '/C/C', schemaPath: '#/properties/C/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                        return false
                      }
                      var valid3 = _errs23 === errors
                    } else {
                      var valid3 = true
                    }
                  }
                }
              } else {
                validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/properties/C/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                return false
              }
            }
            var valid0 = _errs17 === errors
          } else {
            var valid0 = true
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
