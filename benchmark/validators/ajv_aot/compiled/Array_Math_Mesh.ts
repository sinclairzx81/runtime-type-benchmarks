// @ts-nocheck
'use strict'
export const Array_Math_Mesh = validate10
const schema11 = {
  $id: 'Array_Math_Mesh',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Math_Mesh',
    default: {
      vertices: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      normals: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      texoords: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
      indices: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ],
    },
    type: 'object',
    properties: {
      vertices: { type: 'array', items: { type: 'number' } },
      normals: { type: 'array', items: { type: 'number' } },
      texoords: { type: 'array', items: { type: 'number' } },
      indices: { type: 'array', items: { type: 'integer' } },
    },
    required: ['vertices', 'normals', 'texoords', 'indices'],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Math_Mesh" */ let vErrors = null
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
              if (
                (data0.vertices === undefined && (missing0 = 'vertices')) ||
                (data0.normals === undefined && (missing0 = 'normals')) ||
                (data0.texoords === undefined && (missing0 = 'texoords')) ||
                (data0.indices === undefined && (missing0 = 'indices'))
              ) {
                validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
                return false
              } else {
                if (data0.vertices !== undefined) {
                  let data1 = data0.vertices
                  const _errs3 = errors
                  if (errors === _errs3) {
                    if (Array.isArray(data1)) {
                      var valid2 = true
                      const len1 = data1.length
                      for (let i1 = 0; i1 < len1; i1++) {
                        let data2 = data1[i1]
                        const _errs5 = errors
                        if (!(typeof data2 == 'number' && isFinite(data2))) {
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/vertices/' + i1, schemaPath: '#/items/properties/vertices/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                          return false
                        }
                        var valid2 = _errs5 === errors
                        if (!valid2) {
                          break
                        }
                      }
                    } else {
                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/vertices', schemaPath: '#/items/properties/vertices/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                      return false
                    }
                  }
                  var valid1 = _errs3 === errors
                } else {
                  var valid1 = true
                }
                if (valid1) {
                  if (data0.normals !== undefined) {
                    let data3 = data0.normals
                    const _errs7 = errors
                    if (errors === _errs7) {
                      if (Array.isArray(data3)) {
                        var valid3 = true
                        const len2 = data3.length
                        for (let i2 = 0; i2 < len2; i2++) {
                          let data4 = data3[i2]
                          const _errs9 = errors
                          if (!(typeof data4 == 'number' && isFinite(data4))) {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/normals/' + i2, schemaPath: '#/items/properties/normals/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                            return false
                          }
                          var valid3 = _errs9 === errors
                          if (!valid3) {
                            break
                          }
                        }
                      } else {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/normals', schemaPath: '#/items/properties/normals/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                        return false
                      }
                    }
                    var valid1 = _errs7 === errors
                  } else {
                    var valid1 = true
                  }
                  if (valid1) {
                    if (data0.texoords !== undefined) {
                      let data5 = data0.texoords
                      const _errs11 = errors
                      if (errors === _errs11) {
                        if (Array.isArray(data5)) {
                          var valid4 = true
                          const len3 = data5.length
                          for (let i3 = 0; i3 < len3; i3++) {
                            let data6 = data5[i3]
                            const _errs13 = errors
                            if (!(typeof data6 == 'number' && isFinite(data6))) {
                              validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/texoords/' + i3, schemaPath: '#/items/properties/texoords/items/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                              return false
                            }
                            var valid4 = _errs13 === errors
                            if (!valid4) {
                              break
                            }
                          }
                        } else {
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/texoords', schemaPath: '#/items/properties/texoords/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                          return false
                        }
                      }
                      var valid1 = _errs11 === errors
                    } else {
                      var valid1 = true
                    }
                    if (valid1) {
                      if (data0.indices !== undefined) {
                        let data7 = data0.indices
                        const _errs15 = errors
                        if (errors === _errs15) {
                          if (Array.isArray(data7)) {
                            var valid5 = true
                            const len4 = data7.length
                            for (let i4 = 0; i4 < len4; i4++) {
                              let data8 = data7[i4]
                              const _errs17 = errors
                              if (!(typeof data8 == 'number' && !(data8 % 1) && !isNaN(data8) && isFinite(data8))) {
                                validate10.errors = [
                                  { instancePath: instancePath + '/' + i0 + '/indices/' + i4, schemaPath: '#/items/properties/indices/items/type', keyword: 'type', params: { type: 'integer' }, message: 'must be integer' },
                                ]
                                return false
                              }
                              var valid5 = _errs17 === errors
                              if (!valid5) {
                                break
                              }
                            }
                          } else {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/indices', schemaPath: '#/items/properties/indices/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                            return false
                          }
                        }
                        var valid1 = _errs15 === errors
                      } else {
                        var valid1 = true
                      }
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
