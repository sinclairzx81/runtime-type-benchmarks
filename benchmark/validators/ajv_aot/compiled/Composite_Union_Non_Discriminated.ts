// @ts-nocheck
'use strict'
export const Composite_Union_Non_Discriminated = validate10
const schema11 = {
  $id: 'Composite_Union_Non_Discriminated',
  anyOf: [
    { type: 'object', properties: { A: { type: 'string' }, B: { type: 'string' } }, required: ['A', 'B'] },
    { type: 'object', properties: { C: { type: 'string' }, D: { type: 'string' } }, required: ['C', 'D'] },
  ],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Composite_Union_Non_Discriminated" */ let vErrors = null
  let errors = 0
  const _errs0 = errors
  let valid0 = false
  const _errs1 = errors
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.A === undefined && (missing0 = 'A')) || (data.B === undefined && (missing0 = 'B'))) {
        const err0 = { instancePath, schemaPath: '#/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
        if (vErrors === null) {
          vErrors = [err0]
        } else {
          vErrors.push(err0)
        }
        errors++
      } else {
        if (data.A !== undefined) {
          const _errs3 = errors
          if (typeof data.A !== 'string') {
            const err1 = { instancePath: instancePath + '/A', schemaPath: '#/anyOf/0/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
            if (vErrors === null) {
              vErrors = [err1]
            } else {
              vErrors.push(err1)
            }
            errors++
          }
          var valid1 = _errs3 === errors
        } else {
          var valid1 = true
        }
        if (valid1) {
          if (data.B !== undefined) {
            const _errs5 = errors
            if (typeof data.B !== 'string') {
              const err2 = { instancePath: instancePath + '/B', schemaPath: '#/anyOf/0/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
              if (vErrors === null) {
                vErrors = [err2]
              } else {
                vErrors.push(err2)
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
      const err3 = { instancePath, schemaPath: '#/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
      if (vErrors === null) {
        vErrors = [err3]
      } else {
        vErrors.push(err3)
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
        if ((data.C === undefined && (missing1 = 'C')) || (data.D === undefined && (missing1 = 'D'))) {
          const err4 = { instancePath, schemaPath: '#/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
          if (vErrors === null) {
            vErrors = [err4]
          } else {
            vErrors.push(err4)
          }
          errors++
        } else {
          if (data.C !== undefined) {
            const _errs9 = errors
            if (typeof data.C !== 'string') {
              const err5 = { instancePath: instancePath + '/C', schemaPath: '#/anyOf/1/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
              if (vErrors === null) {
                vErrors = [err5]
              } else {
                vErrors.push(err5)
              }
              errors++
            }
            var valid2 = _errs9 === errors
          } else {
            var valid2 = true
          }
          if (valid2) {
            if (data.D !== undefined) {
              const _errs11 = errors
              if (typeof data.D !== 'string') {
                const err6 = { instancePath: instancePath + '/D', schemaPath: '#/anyOf/1/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err6]
                } else {
                  vErrors.push(err6)
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
        const err7 = { instancePath, schemaPath: '#/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
        if (vErrors === null) {
          vErrors = [err7]
        } else {
          vErrors.push(err7)
        }
        errors++
      }
    }
    var _valid0 = _errs7 === errors
    valid0 = valid0 || _valid0
  }
  if (!valid0) {
    const err8 = { instancePath, schemaPath: '#/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
    if (vErrors === null) {
      vErrors = [err8]
    } else {
      vErrors.push(err8)
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
