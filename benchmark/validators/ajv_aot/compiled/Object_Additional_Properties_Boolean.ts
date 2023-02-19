// @ts-nocheck
'use strict'
export const Object_Additional_Properties_Boolean = validate10
const schema11 = {
  $id: 'Object_Additional_Properties_Boolean',
  additionalProperties: { type: 'boolean' },
  description: 'Should allow additional properties, but only with values of type boolean',
  type: 'object',
  properties: { A: { type: 'string' }, B: { type: 'string' }, C: { type: 'string' }, D: { type: 'string' } },
  required: ['A', 'B', 'C', 'D'],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Object_Additional_Properties_Boolean" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.A === undefined && (missing0 = 'A')) || (data.B === undefined && (missing0 = 'B')) || (data.C === undefined && (missing0 = 'C')) || (data.D === undefined && (missing0 = 'D'))) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        const _errs1 = errors
        for (const key0 in data) {
          if (!(key0 === 'A' || key0 === 'B' || key0 === 'C' || key0 === 'D')) {
            const _errs2 = errors
            if (typeof data[key0] !== 'boolean') {
              validate10.errors = [{ instancePath: instancePath + '/' + key0.replace(/~/g, '~0').replace(/\//g, '~1'), schemaPath: '#/additionalProperties/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
              return false
            }
            var valid0 = _errs2 === errors
            if (!valid0) {
              break
            }
          }
        }
        if (_errs1 === errors) {
          if (data.A !== undefined) {
            const _errs4 = errors
            if (typeof data.A !== 'string') {
              validate10.errors = [{ instancePath: instancePath + '/A', schemaPath: '#/properties/A/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
              return false
            }
            var valid1 = _errs4 === errors
          } else {
            var valid1 = true
          }
          if (valid1) {
            if (data.B !== undefined) {
              const _errs6 = errors
              if (typeof data.B !== 'string') {
                validate10.errors = [{ instancePath: instancePath + '/B', schemaPath: '#/properties/B/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                return false
              }
              var valid1 = _errs6 === errors
            } else {
              var valid1 = true
            }
            if (valid1) {
              if (data.C !== undefined) {
                const _errs8 = errors
                if (typeof data.C !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/C', schemaPath: '#/properties/C/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid1 = _errs8 === errors
              } else {
                var valid1 = true
              }
              if (valid1) {
                if (data.D !== undefined) {
                  const _errs10 = errors
                  if (typeof data.D !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/D', schemaPath: '#/properties/D/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid1 = _errs10 === errors
                } else {
                  var valid1 = true
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
