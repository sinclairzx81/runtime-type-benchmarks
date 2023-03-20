// @ts-nocheck
'use strict'
export const Composite_Intersect = validate10
const schema11 = {
  $id: 'Composite_Intersect',
  description: 'Should validate an intersected object',
  type: 'object',
  allOf: [
    { type: 'object', properties: { A: { const: 'A', type: 'string' }, B: { const: 'B', type: 'string' } }, required: ['A', 'B'] },
    { type: 'object', properties: { C: { const: 'C', type: 'string' }, D: { const: 'D', type: 'string' } }, required: ['C', 'D'] },
    { type: 'object', properties: { E: { const: 'E', type: 'string' }, F: { const: 'F', type: 'string' } }, required: ['E', 'F'] },
    { type: 'object', properties: { G: { const: 'G', type: 'string' }, H: { const: 'H', type: 'string' } }, required: ['G', 'H'] },
  ],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Composite_Intersect" */ let vErrors = null
  let errors = 0
  if (!(data && typeof data == 'object' && !Array.isArray(data))) {
    validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
    return false
  }
  const _errs1 = errors
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.A === undefined && (missing0 = 'A')) || (data.B === undefined && (missing0 = 'B'))) {
        validate10.errors = [{ instancePath, schemaPath: '#/allOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.A !== undefined) {
          let data0 = data.A
          const _errs3 = errors
          if (typeof data0 !== 'string') {
            validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/allOf/0/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
            return false
          }
          if ('A' !== data0) {
            validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/allOf/0/properties/A/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }]
            return false
          }
          var valid1 = _errs3 === errors
        } else {
          var valid1 = true
        }
        if (valid1) {
          if (data.B !== undefined) {
            let data1 = data.B
            const _errs5 = errors
            if (typeof data1 !== 'string') {
              validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/allOf/0/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
              return false
            }
            if ('B' !== data1) {
              validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/allOf/0/properties/B/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }]
              return false
            }
            var valid1 = _errs5 === errors
          } else {
            var valid1 = true
          }
        }
      }
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  var valid0 = _errs1 === errors
  if (valid0) {
    const _errs7 = errors
    if (errors === _errs7) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing1
        if ((data.C === undefined && (missing1 = 'C')) || (data.D === undefined && (missing1 = 'D'))) {
          validate10.errors = [{ instancePath, schemaPath: '#/allOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }]
          return false
        } else {
          if (data.C !== undefined) {
            let data2 = data.C
            const _errs9 = errors
            if (typeof data2 !== 'string') {
              validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/allOf/1/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
              return false
            }
            if ('C' !== data2) {
              validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/allOf/1/properties/C/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }]
              return false
            }
            var valid2 = _errs9 === errors
          } else {
            var valid2 = true
          }
          if (valid2) {
            if (data.D !== undefined) {
              let data3 = data.D
              const _errs11 = errors
              if (typeof data3 !== 'string') {
                validate10.errors = [{ instancePath: instancePath + '/D', schemaPath: '#/allOf/1/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                return false
              }
              if ('D' !== data3) {
                validate10.errors = [{ instancePath: instancePath + '/D', schemaPath: '#/allOf/1/properties/D/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }]
                return false
              }
              var valid2 = _errs11 === errors
            } else {
              var valid2 = true
            }
          }
        }
      } else {
        validate10.errors = [{ instancePath, schemaPath: '#/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
        return false
      }
    }
    var valid0 = _errs7 === errors
    if (valid0) {
      const _errs13 = errors
      if (errors === _errs13) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing2
          if ((data.E === undefined && (missing2 = 'E')) || (data.F === undefined && (missing2 = 'F'))) {
            validate10.errors = [{ instancePath, schemaPath: '#/allOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }]
            return false
          } else {
            if (data.E !== undefined) {
              let data4 = data.E
              const _errs15 = errors
              if (typeof data4 !== 'string') {
                validate10.errors = [{ instancePath: instancePath + '/E', schemaPath: '#/allOf/2/properties/E/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                return false
              }
              if ('E' !== data4) {
                validate10.errors = [{ instancePath: instancePath + '/E', schemaPath: '#/allOf/2/properties/E/const', keyword: 'const', params: { allowedValue: 'E' }, message: 'must be equal to constant' }]
                return false
              }
              var valid3 = _errs15 === errors
            } else {
              var valid3 = true
            }
            if (valid3) {
              if (data.F !== undefined) {
                let data5 = data.F
                const _errs17 = errors
                if (typeof data5 !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/F', schemaPath: '#/allOf/2/properties/F/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                if ('F' !== data5) {
                  validate10.errors = [{ instancePath: instancePath + '/F', schemaPath: '#/allOf/2/properties/F/const', keyword: 'const', params: { allowedValue: 'F' }, message: 'must be equal to constant' }]
                  return false
                }
                var valid3 = _errs17 === errors
              } else {
                var valid3 = true
              }
            }
          }
        } else {
          validate10.errors = [{ instancePath, schemaPath: '#/allOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
          return false
        }
      }
      var valid0 = _errs13 === errors
      if (valid0) {
        const _errs19 = errors
        if (errors === _errs19) {
          if (data && typeof data == 'object' && !Array.isArray(data)) {
            let missing3
            if ((data.G === undefined && (missing3 = 'G')) || (data.H === undefined && (missing3 = 'H'))) {
              validate10.errors = [{ instancePath, schemaPath: '#/allOf/3/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }]
              return false
            } else {
              if (data.G !== undefined) {
                let data6 = data.G
                const _errs21 = errors
                if (typeof data6 !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/G', schemaPath: '#/allOf/3/properties/G/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                if ('G' !== data6) {
                  validate10.errors = [{ instancePath: instancePath + '/G', schemaPath: '#/allOf/3/properties/G/const', keyword: 'const', params: { allowedValue: 'G' }, message: 'must be equal to constant' }]
                  return false
                }
                var valid4 = _errs21 === errors
              } else {
                var valid4 = true
              }
              if (valid4) {
                if (data.H !== undefined) {
                  let data7 = data.H
                  const _errs23 = errors
                  if (typeof data7 !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/H', schemaPath: '#/allOf/3/properties/H/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  if ('H' !== data7) {
                    validate10.errors = [{ instancePath: instancePath + '/H', schemaPath: '#/allOf/3/properties/H/const', keyword: 'const', params: { allowedValue: 'H' }, message: 'must be equal to constant' }]
                    return false
                  }
                  var valid4 = _errs23 === errors
                } else {
                  var valid4 = true
                }
              }
            }
          } else {
            validate10.errors = [{ instancePath, schemaPath: '#/allOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
            return false
          }
        }
        var valid0 = _errs19 === errors
      }
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
