// @ts-nocheck
'use strict'
export const Math_Box3D = validate10
const schema11 = {
  $id: 'Math_Box3D',
  default: { scale: { x: 0, y: 0, z: 0 }, position: { x: 0, y: 0, z: 0 }, rotate: { x: 0, y: 0, z: 0 }, pivot: { x: 0, y: 0, z: 0 } },
  type: 'object',
  properties: {
    scale: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    position: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    rotate: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    pivot: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
  },
  required: ['scale', 'position', 'rotate', 'pivot'],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Math_Box3D" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.scale === undefined && (missing0 = 'scale')) || (data.position === undefined && (missing0 = 'position')) || (data.rotate === undefined && (missing0 = 'rotate')) || (data.pivot === undefined && (missing0 = 'pivot'))) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.scale !== undefined) {
          let data0 = data.scale
          const _errs1 = errors
          if (errors === _errs1) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1
              if ((data0.x === undefined && (missing1 = 'x')) || (data0.y === undefined && (missing1 = 'y')) || (data0.z === undefined && (missing1 = 'z'))) {
                validate10.errors = [
                  { instancePath: instancePath + '/scale', schemaPath: '#/properties/scale/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" },
                ]
                return false
              } else {
                if (data0.x !== undefined) {
                  let data1 = data0.x
                  const _errs3 = errors
                  if (!(typeof data1 == 'number' && isFinite(data1))) {
                    validate10.errors = [{ instancePath: instancePath + '/scale/x', schemaPath: '#/properties/scale/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                      validate10.errors = [{ instancePath: instancePath + '/scale/y', schemaPath: '#/properties/scale/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                        validate10.errors = [{ instancePath: instancePath + '/scale/z', schemaPath: '#/properties/scale/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
              validate10.errors = [{ instancePath: instancePath + '/scale', schemaPath: '#/properties/scale/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
              return false
            }
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.position !== undefined) {
            let data4 = data.position
            const _errs9 = errors
            if (errors === _errs9) {
              if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                let missing2
                if ((data4.x === undefined && (missing2 = 'x')) || (data4.y === undefined && (missing2 = 'y')) || (data4.z === undefined && (missing2 = 'z'))) {
                  validate10.errors = [
                    { instancePath: instancePath + '/position', schemaPath: '#/properties/position/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" },
                  ]
                  return false
                } else {
                  if (data4.x !== undefined) {
                    let data5 = data4.x
                    const _errs11 = errors
                    if (!(typeof data5 == 'number' && isFinite(data5))) {
                      validate10.errors = [{ instancePath: instancePath + '/position/x', schemaPath: '#/properties/position/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                        validate10.errors = [{ instancePath: instancePath + '/position/y', schemaPath: '#/properties/position/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                          validate10.errors = [{ instancePath: instancePath + '/position/z', schemaPath: '#/properties/position/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                validate10.errors = [{ instancePath: instancePath + '/position', schemaPath: '#/properties/position/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                return false
              }
            }
            var valid0 = _errs9 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.rotate !== undefined) {
              let data8 = data.rotate
              const _errs17 = errors
              if (errors === _errs17) {
                if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                  let missing3
                  if ((data8.x === undefined && (missing3 = 'x')) || (data8.y === undefined && (missing3 = 'y')) || (data8.z === undefined && (missing3 = 'z'))) {
                    validate10.errors = [
                      { instancePath: instancePath + '/rotate', schemaPath: '#/properties/rotate/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" },
                    ]
                    return false
                  } else {
                    if (data8.x !== undefined) {
                      let data9 = data8.x
                      const _errs19 = errors
                      if (!(typeof data9 == 'number' && isFinite(data9))) {
                        validate10.errors = [{ instancePath: instancePath + '/rotate/x', schemaPath: '#/properties/rotate/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                          validate10.errors = [{ instancePath: instancePath + '/rotate/y', schemaPath: '#/properties/rotate/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                            validate10.errors = [{ instancePath: instancePath + '/rotate/z', schemaPath: '#/properties/rotate/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                  validate10.errors = [{ instancePath: instancePath + '/rotate', schemaPath: '#/properties/rotate/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                  return false
                }
              }
              var valid0 = _errs17 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.pivot !== undefined) {
                let data12 = data.pivot
                const _errs25 = errors
                if (errors === _errs25) {
                  if (data12 && typeof data12 == 'object' && !Array.isArray(data12)) {
                    let missing4
                    if ((data12.x === undefined && (missing4 = 'x')) || (data12.y === undefined && (missing4 = 'y')) || (data12.z === undefined && (missing4 = 'z'))) {
                      validate10.errors = [
                        { instancePath: instancePath + '/pivot', schemaPath: '#/properties/pivot/required', keyword: 'required', params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" },
                      ]
                      return false
                    } else {
                      if (data12.x !== undefined) {
                        let data13 = data12.x
                        const _errs27 = errors
                        if (!(typeof data13 == 'number' && isFinite(data13))) {
                          validate10.errors = [{ instancePath: instancePath + '/pivot/x', schemaPath: '#/properties/pivot/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                          return false
                        }
                        var valid4 = _errs27 === errors
                      } else {
                        var valid4 = true
                      }
                      if (valid4) {
                        if (data12.y !== undefined) {
                          let data14 = data12.y
                          const _errs29 = errors
                          if (!(typeof data14 == 'number' && isFinite(data14))) {
                            validate10.errors = [{ instancePath: instancePath + '/pivot/y', schemaPath: '#/properties/pivot/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                            return false
                          }
                          var valid4 = _errs29 === errors
                        } else {
                          var valid4 = true
                        }
                        if (valid4) {
                          if (data12.z !== undefined) {
                            let data15 = data12.z
                            const _errs31 = errors
                            if (!(typeof data15 == 'number' && isFinite(data15))) {
                              validate10.errors = [{ instancePath: instancePath + '/pivot/z', schemaPath: '#/properties/pivot/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                              return false
                            }
                            var valid4 = _errs31 === errors
                          } else {
                            var valid4 = true
                          }
                        }
                      }
                    }
                  } else {
                    validate10.errors = [{ instancePath: instancePath + '/pivot', schemaPath: '#/properties/pivot/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                    return false
                  }
                }
                var valid0 = _errs25 === errors
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
