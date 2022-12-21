// @ts-nocheck
'use strict'
export const Array_Object_Partial = validate10
const schema11 = {
  $id: 'Array_Object_Partial',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Object_Partial',
    default: { position: { x: 1, y: 2, z: 3 }, rotation: { x: 1, y: 2, z: 3 } },
    type: 'object',
    properties: {
      position: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
      rotation: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
      scale: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    },
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Object_Partial" */ let vErrors = null
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
              if (data0.position !== undefined) {
                let data1 = data0.position
                const _errs3 = errors
                if (errors === _errs3) {
                  if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
                    let missing0
                    if ((data1.x === undefined && (missing0 = 'x')) || (data1.y === undefined && (missing0 = 'y')) || (data1.z === undefined && (missing0 = 'z'))) {
                      validate10.errors = [
                        {
                          instancePath: instancePath + '/' + i0 + '/position',
                          schemaPath: '#/items/properties/position/required',
                          keyword: 'required',
                          params: { missingProperty: missing0 },
                          message: "must have required property '" + missing0 + "'",
                        },
                      ]
                      return false
                    } else {
                      if (data1.x !== undefined) {
                        let data2 = data1.x
                        const _errs5 = errors
                        if (!(typeof data2 == 'number' && isFinite(data2))) {
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/position/x', schemaPath: '#/items/properties/position/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                          return false
                        }
                        var valid2 = _errs5 === errors
                      } else {
                        var valid2 = true
                      }
                      if (valid2) {
                        if (data1.y !== undefined) {
                          let data3 = data1.y
                          const _errs7 = errors
                          if (!(typeof data3 == 'number' && isFinite(data3))) {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/position/y', schemaPath: '#/items/properties/position/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                            return false
                          }
                          var valid2 = _errs7 === errors
                        } else {
                          var valid2 = true
                        }
                        if (valid2) {
                          if (data1.z !== undefined) {
                            let data4 = data1.z
                            const _errs9 = errors
                            if (!(typeof data4 == 'number' && isFinite(data4))) {
                              validate10.errors = [
                                { instancePath: instancePath + '/' + i0 + '/position/z', schemaPath: '#/items/properties/position/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' },
                              ]
                              return false
                            }
                            var valid2 = _errs9 === errors
                          } else {
                            var valid2 = true
                          }
                        }
                      }
                    }
                  } else {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/position', schemaPath: '#/items/properties/position/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                    return false
                  }
                }
                var valid1 = _errs3 === errors
              } else {
                var valid1 = true
              }
              if (valid1) {
                if (data0.rotation !== undefined) {
                  let data5 = data0.rotation
                  const _errs11 = errors
                  if (errors === _errs11) {
                    if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                      let missing1
                      if ((data5.x === undefined && (missing1 = 'x')) || (data5.y === undefined && (missing1 = 'y')) || (data5.z === undefined && (missing1 = 'z'))) {
                        validate10.errors = [
                          {
                            instancePath: instancePath + '/' + i0 + '/rotation',
                            schemaPath: '#/items/properties/rotation/required',
                            keyword: 'required',
                            params: { missingProperty: missing1 },
                            message: "must have required property '" + missing1 + "'",
                          },
                        ]
                        return false
                      } else {
                        if (data5.x !== undefined) {
                          let data6 = data5.x
                          const _errs13 = errors
                          if (!(typeof data6 == 'number' && isFinite(data6))) {
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/rotation/x', schemaPath: '#/items/properties/rotation/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                            return false
                          }
                          var valid3 = _errs13 === errors
                        } else {
                          var valid3 = true
                        }
                        if (valid3) {
                          if (data5.y !== undefined) {
                            let data7 = data5.y
                            const _errs15 = errors
                            if (!(typeof data7 == 'number' && isFinite(data7))) {
                              validate10.errors = [
                                { instancePath: instancePath + '/' + i0 + '/rotation/y', schemaPath: '#/items/properties/rotation/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' },
                              ]
                              return false
                            }
                            var valid3 = _errs15 === errors
                          } else {
                            var valid3 = true
                          }
                          if (valid3) {
                            if (data5.z !== undefined) {
                              let data8 = data5.z
                              const _errs17 = errors
                              if (!(typeof data8 == 'number' && isFinite(data8))) {
                                validate10.errors = [
                                  { instancePath: instancePath + '/' + i0 + '/rotation/z', schemaPath: '#/items/properties/rotation/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' },
                                ]
                                return false
                              }
                              var valid3 = _errs17 === errors
                            } else {
                              var valid3 = true
                            }
                          }
                        }
                      }
                    } else {
                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/rotation', schemaPath: '#/items/properties/rotation/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                      return false
                    }
                  }
                  var valid1 = _errs11 === errors
                } else {
                  var valid1 = true
                }
                if (valid1) {
                  if (data0.scale !== undefined) {
                    let data9 = data0.scale
                    const _errs19 = errors
                    if (errors === _errs19) {
                      if (data9 && typeof data9 == 'object' && !Array.isArray(data9)) {
                        let missing2
                        if ((data9.x === undefined && (missing2 = 'x')) || (data9.y === undefined && (missing2 = 'y')) || (data9.z === undefined && (missing2 = 'z'))) {
                          validate10.errors = [
                            {
                              instancePath: instancePath + '/' + i0 + '/scale',
                              schemaPath: '#/items/properties/scale/required',
                              keyword: 'required',
                              params: { missingProperty: missing2 },
                              message: "must have required property '" + missing2 + "'",
                            },
                          ]
                          return false
                        } else {
                          if (data9.x !== undefined) {
                            let data10 = data9.x
                            const _errs21 = errors
                            if (!(typeof data10 == 'number' && isFinite(data10))) {
                              validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/scale/x', schemaPath: '#/items/properties/scale/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                              return false
                            }
                            var valid4 = _errs21 === errors
                          } else {
                            var valid4 = true
                          }
                          if (valid4) {
                            if (data9.y !== undefined) {
                              let data11 = data9.y
                              const _errs23 = errors
                              if (!(typeof data11 == 'number' && isFinite(data11))) {
                                validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/scale/y', schemaPath: '#/items/properties/scale/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                return false
                              }
                              var valid4 = _errs23 === errors
                            } else {
                              var valid4 = true
                            }
                            if (valid4) {
                              if (data9.z !== undefined) {
                                let data12 = data9.z
                                const _errs25 = errors
                                if (!(typeof data12 == 'number' && isFinite(data12))) {
                                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/scale/z', schemaPath: '#/items/properties/scale/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                  return false
                                }
                                var valid4 = _errs25 === errors
                              } else {
                                var valid4 = true
                              }
                            }
                          }
                        }
                      } else {
                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/scale', schemaPath: '#/items/properties/scale/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                        return false
                      }
                    }
                    var valid1 = _errs19 === errors
                  } else {
                    var valid1 = true
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