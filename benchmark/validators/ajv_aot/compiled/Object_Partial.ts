// @ts-nocheck
'use strict'
export const Object_Partial = validate10
const schema11 = {
  $id: 'Object_Partial',
  type: 'object',
  properties: {
    position: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    rotation: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    scale: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Object_Partial" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      if (data.position !== undefined) {
        let data0 = data.position
        const _errs1 = errors
        if (errors === _errs1) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0
            if ((data0.x === undefined && (missing0 = 'x')) || (data0.y === undefined && (missing0 = 'y')) || (data0.z === undefined && (missing0 = 'z'))) {
              validate10.errors = [
                { instancePath: instancePath + '/position', schemaPath: '#/properties/position/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" },
              ]
              return false
            } else {
              if (data0.x !== undefined) {
                let data1 = data0.x
                const _errs3 = errors
                if (!(typeof data1 == 'number' && isFinite(data1))) {
                  validate10.errors = [{ instancePath: instancePath + '/position/x', schemaPath: '#/properties/position/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                    validate10.errors = [{ instancePath: instancePath + '/position/y', schemaPath: '#/properties/position/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                      validate10.errors = [{ instancePath: instancePath + '/position/z', schemaPath: '#/properties/position/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
            validate10.errors = [{ instancePath: instancePath + '/position', schemaPath: '#/properties/position/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
            return false
          }
        }
        var valid0 = _errs1 === errors
      } else {
        var valid0 = true
      }
      if (valid0) {
        if (data.rotation !== undefined) {
          let data4 = data.rotation
          const _errs9 = errors
          if (errors === _errs9) {
            if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
              let missing1
              if ((data4.x === undefined && (missing1 = 'x')) || (data4.y === undefined && (missing1 = 'y')) || (data4.z === undefined && (missing1 = 'z'))) {
                validate10.errors = [
                  { instancePath: instancePath + '/rotation', schemaPath: '#/properties/rotation/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" },
                ]
                return false
              } else {
                if (data4.x !== undefined) {
                  let data5 = data4.x
                  const _errs11 = errors
                  if (!(typeof data5 == 'number' && isFinite(data5))) {
                    validate10.errors = [{ instancePath: instancePath + '/rotation/x', schemaPath: '#/properties/rotation/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                    return false
                  }
                  var valid2 = _errs11 === errors
                } else {
                  var valid2 = true
                }
                if (valid2) {
                  if (data4.y !== undefined) {
                    let data6 = data4.y
                    const _errs13 = errors
                    if (!(typeof data6 == 'number' && isFinite(data6))) {
                      validate10.errors = [{ instancePath: instancePath + '/rotation/y', schemaPath: '#/properties/rotation/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                      return false
                    }
                    var valid2 = _errs13 === errors
                  } else {
                    var valid2 = true
                  }
                  if (valid2) {
                    if (data4.z !== undefined) {
                      let data7 = data4.z
                      const _errs15 = errors
                      if (!(typeof data7 == 'number' && isFinite(data7))) {
                        validate10.errors = [{ instancePath: instancePath + '/rotation/z', schemaPath: '#/properties/rotation/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                        return false
                      }
                      var valid2 = _errs15 === errors
                    } else {
                      var valid2 = true
                    }
                  }
                }
              }
            } else {
              validate10.errors = [{ instancePath: instancePath + '/rotation', schemaPath: '#/properties/rotation/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
              return false
            }
          }
          var valid0 = _errs9 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.scale !== undefined) {
            let data8 = data.scale
            const _errs17 = errors
            if (errors === _errs17) {
              if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                let missing2
                if ((data8.x === undefined && (missing2 = 'x')) || (data8.y === undefined && (missing2 = 'y')) || (data8.z === undefined && (missing2 = 'z'))) {
                  validate10.errors = [
                    { instancePath: instancePath + '/scale', schemaPath: '#/properties/scale/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" },
                  ]
                  return false
                } else {
                  if (data8.x !== undefined) {
                    let data9 = data8.x
                    const _errs19 = errors
                    if (!(typeof data9 == 'number' && isFinite(data9))) {
                      validate10.errors = [{ instancePath: instancePath + '/scale/x', schemaPath: '#/properties/scale/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                      return false
                    }
                    var valid3 = _errs19 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data8.y !== undefined) {
                      let data10 = data8.y
                      const _errs21 = errors
                      if (!(typeof data10 == 'number' && isFinite(data10))) {
                        validate10.errors = [{ instancePath: instancePath + '/scale/y', schemaPath: '#/properties/scale/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                        return false
                      }
                      var valid3 = _errs21 === errors
                    } else {
                      var valid3 = true
                    }
                    if (valid3) {
                      if (data8.z !== undefined) {
                        let data11 = data8.z
                        const _errs23 = errors
                        if (!(typeof data11 == 'number' && isFinite(data11))) {
                          validate10.errors = [{ instancePath: instancePath + '/scale/z', schemaPath: '#/properties/scale/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                          return false
                        }
                        var valid3 = _errs23 === errors
                      } else {
                        var valid3 = true
                      }
                    }
                  }
                }
              } else {
                validate10.errors = [{ instancePath: instancePath + '/scale', schemaPath: '#/properties/scale/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
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
