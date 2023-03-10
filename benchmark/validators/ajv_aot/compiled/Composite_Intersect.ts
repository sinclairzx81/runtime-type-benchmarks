// @ts-nocheck
'use strict'
export const Composite_Intersect = validate10
const schema11 = {
  $id: 'Composite_Intersect',
  description: 'Should validate an intersected object',
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
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Composite_Intersect" */ let vErrors = null
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
        (data.G === undefined && (missing0 = 'G')) ||
        (data.H === undefined && (missing0 = 'H'))
      ) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.A !== undefined) {
          let data0 = data.A
          const _errs1 = errors
          if (typeof data0 !== 'string') {
            validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
            return false
          }
          if ('A' !== data0) {
            validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/properties/A/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }]
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
            if (typeof data1 !== 'string') {
              validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
              return false
            }
            if ('B' !== data1) {
              validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/properties/B/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }]
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
              if (typeof data2 !== 'string') {
                validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                return false
              }
              if ('C' !== data2) {
                validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/properties/C/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }]
                return false
              }
              var valid0 = _errs5 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.D !== undefined) {
                let data3 = data.D
                const _errs7 = errors
                if (typeof data3 !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/D', schemaPath: '#/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                if ('D' !== data3) {
                  validate10.errors = [{ instancePath: instancePath + '/D', schemaPath: '#/properties/D/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }]
                  return false
                }
                var valid0 = _errs7 === errors
              } else {
                var valid0 = true
              }
              if (valid0) {
                if (data.E !== undefined) {
                  let data4 = data.E
                  const _errs9 = errors
                  if (typeof data4 !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/E', schemaPath: '#/properties/E/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  if ('E' !== data4) {
                    validate10.errors = [{ instancePath: instancePath + '/E', schemaPath: '#/properties/E/const', keyword: 'const', params: { allowedValue: 'E' }, message: 'must be equal to constant' }]
                    return false
                  }
                  var valid0 = _errs9 === errors
                } else {
                  var valid0 = true
                }
                if (valid0) {
                  if (data.F !== undefined) {
                    let data5 = data.F
                    const _errs11 = errors
                    if (typeof data5 !== 'string') {
                      validate10.errors = [{ instancePath: instancePath + '/F', schemaPath: '#/properties/F/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                      return false
                    }
                    if ('F' !== data5) {
                      validate10.errors = [{ instancePath: instancePath + '/F', schemaPath: '#/properties/F/const', keyword: 'const', params: { allowedValue: 'F' }, message: 'must be equal to constant' }]
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
                      if (typeof data6 !== 'string') {
                        validate10.errors = [{ instancePath: instancePath + '/G', schemaPath: '#/properties/G/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                        return false
                      }
                      if ('G' !== data6) {
                        validate10.errors = [{ instancePath: instancePath + '/G', schemaPath: '#/properties/G/const', keyword: 'const', params: { allowedValue: 'G' }, message: 'must be equal to constant' }]
                        return false
                      }
                      var valid0 = _errs13 === errors
                    } else {
                      var valid0 = true
                    }
                    if (valid0) {
                      if (data.H !== undefined) {
                        let data7 = data.H
                        const _errs15 = errors
                        if (typeof data7 !== 'string') {
                          validate10.errors = [{ instancePath: instancePath + '/H', schemaPath: '#/properties/H/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                          return false
                        }
                        if ('H' !== data7) {
                          validate10.errors = [{ instancePath: instancePath + '/H', schemaPath: '#/properties/H/const', keyword: 'const', params: { allowedValue: 'H' }, message: 'must be equal to constant' }]
                          return false
                        }
                        var valid0 = _errs15 === errors
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
