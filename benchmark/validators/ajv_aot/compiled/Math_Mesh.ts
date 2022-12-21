// @ts-nocheck
'use strict'
export const Math_Mesh = validate10
const schema11 = {
  $id: 'Math_Mesh',
  default: {
    vertices: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    normals: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    texoords: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    indices: [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
  },
  type: 'object',
  properties: { vertices: { type: 'array', items: { type: 'number' } }, normals: { type: 'array', items: { type: 'number' } }, texoords: { type: 'array', items: { type: 'number' } }, indices: { type: 'array', items: { type: 'integer' } } },
  required: ['vertices', 'normals', 'texoords', 'indices'],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Math_Mesh" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if (
        (data.vertices === undefined && (missing0 = 'vertices')) ||
        (data.normals === undefined && (missing0 = 'normals')) ||
        (data.texoords === undefined && (missing0 = 'texoords')) ||
        (data.indices === undefined && (missing0 = 'indices'))
      ) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.vertices !== undefined) {
          let data0 = data.vertices
          const _errs1 = errors
          if (errors === _errs1) {
            if (Array.isArray(data0)) {
              var valid1 = true
              const len0 = data0.length
              for (let i0 = 0; i0 < len0; i0++) {
                let data1 = data0[i0]
                const _errs3 = errors
                if (!(typeof data1 == 'number' && isFinite(data1))) {
                  validate10.errors = [{ instancePath: instancePath + '/vertices/' + i0, schemaPath: '#/properties/vertices/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                  return false
                }
                var valid1 = _errs3 === errors
                if (!valid1) {
                  break
                }
              }
            } else {
              validate10.errors = [{ instancePath: instancePath + '/vertices', schemaPath: '#/properties/vertices/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
              return false
            }
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.normals !== undefined) {
            let data2 = data.normals
            const _errs5 = errors
            if (errors === _errs5) {
              if (Array.isArray(data2)) {
                var valid2 = true
                const len1 = data2.length
                for (let i1 = 0; i1 < len1; i1++) {
                  let data3 = data2[i1]
                  const _errs7 = errors
                  if (!(typeof data3 == 'number' && isFinite(data3))) {
                    validate10.errors = [{ instancePath: instancePath + '/normals/' + i1, schemaPath: '#/properties/normals/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                    return false
                  }
                  var valid2 = _errs7 === errors
                  if (!valid2) {
                    break
                  }
                }
              } else {
                validate10.errors = [{ instancePath: instancePath + '/normals', schemaPath: '#/properties/normals/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                return false
              }
            }
            var valid0 = _errs5 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.texoords !== undefined) {
              let data4 = data.texoords
              const _errs9 = errors
              if (errors === _errs9) {
                if (Array.isArray(data4)) {
                  var valid3 = true
                  const len2 = data4.length
                  for (let i2 = 0; i2 < len2; i2++) {
                    let data5 = data4[i2]
                    const _errs11 = errors
                    if (!(typeof data5 == 'number' && isFinite(data5))) {
                      validate10.errors = [{ instancePath: instancePath + '/texoords/' + i2, schemaPath: '#/properties/texoords/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                      return false
                    }
                    var valid3 = _errs11 === errors
                    if (!valid3) {
                      break
                    }
                  }
                } else {
                  validate10.errors = [{ instancePath: instancePath + '/texoords', schemaPath: '#/properties/texoords/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                  return false
                }
              }
              var valid0 = _errs9 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.indices !== undefined) {
                let data6 = data.indices
                const _errs13 = errors
                if (errors === _errs13) {
                  if (Array.isArray(data6)) {
                    var valid4 = true
                    const len3 = data6.length
                    for (let i3 = 0; i3 < len3; i3++) {
                      let data7 = data6[i3]
                      const _errs15 = errors
                      if (!(typeof data7 == 'number' && !(data7 % 1) && !isNaN(data7) && isFinite(data7))) {
                        validate10.errors = [{ instancePath: instancePath + '/indices/' + i3, schemaPath: '#/properties/indices/items/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer' }]
                        return false
                      }
                      var valid4 = _errs15 === errors
                      if (!valid4) {
                        break
                      }
                    }
                  } else {
                    validate10.errors = [{ instancePath: instancePath + '/indices', schemaPath: '#/properties/indices/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
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
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
