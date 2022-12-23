// @ts-nocheck
'use strict'
export const Math_Vector3 = validate10
const schema11 = { $id: 'Math_Vector3', type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Math_Vector3" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.x === undefined && (missing0 = 'x')) || (data.y === undefined && (missing0 = 'y')) || (data.z === undefined && (missing0 = 'z'))) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.x !== undefined) {
          let data0 = data.x
          const _errs1 = errors
          if (!(typeof data0 == 'number' && isFinite(data0))) {
            validate10.errors = [{ instancePath: instancePath + '/x', schemaPath: '#/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
            return false
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.y !== undefined) {
            let data1 = data.y
            const _errs3 = errors
            if (!(typeof data1 == 'number' && isFinite(data1))) {
              validate10.errors = [{ instancePath: instancePath + '/y', schemaPath: '#/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
              return false
            }
            var valid0 = _errs3 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.z !== undefined) {
              let data2 = data.z
              const _errs5 = errors
              if (!(typeof data2 == 'number' && isFinite(data2))) {
                validate10.errors = [{ instancePath: instancePath + '/z', schemaPath: '#/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                return false
              }
              var valid0 = _errs5 === errors
            } else {
              var valid0 = true
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
