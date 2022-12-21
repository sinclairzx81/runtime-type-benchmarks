// @ts-nocheck
'use strict'
export const Array_Math_Vector3 = validate10
const schema11 = {
  $id: 'Array_Math_Vector3',
  minItems: 8,
  type: 'array',
  items: { $id: 'Math_Vector3', default: { x: 0, y: 0, z: 0 }, type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Math_Vector3" */ let vErrors = null
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
              if ((data0.x === undefined && (missing0 = 'x')) || (data0.y === undefined && (missing0 = 'y')) || (data0.z === undefined && (missing0 = 'z'))) {
                validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
                return false
              } else {
                if (data0.x !== undefined) {
                  let data1 = data0.x
                  const _errs3 = errors
                  if (!(typeof data1 == 'number' && isFinite(data1))) {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/x', schemaPath: '#/items/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                    return false
                  }
                  var valid1 = _errs3 === errors
                } else {
                  var valid1 = true
                }
                if (valid1) {
                  if (data0.y !== undefined) {
                    let data2 = data0.y
                    const _errs5 = errors
                    if (!(typeof data2 == 'number' && isFinite(data2))) {
                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/y', schemaPath: '#/items/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                      return false
                    }
                    var valid1 = _errs5 === errors
                  } else {
                    var valid1 = true
                  }
                  if (valid1) {
                    if (data0.z !== undefined) {
                      let data3 = data0.z
                      const _errs7 = errors
                      if (!(typeof data3 == 'number' && isFinite(data3))) {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/z', schemaPath: '#/items/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                        return false
                      }
                      var valid1 = _errs7 === errors
                    } else {
                      var valid1 = true
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
