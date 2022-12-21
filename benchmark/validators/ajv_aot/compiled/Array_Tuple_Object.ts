// @ts-nocheck
'use strict'
export const Array_Tuple_Object = validate10
const schema11 = {
  $id: 'Array_Tuple_Object',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Tuple_Object',
    default: [
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 },
    ],
    type: 'array',
    items: [
      { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
      { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
      { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    ],
    additionalItems: false,
    minItems: 3,
    maxItems: 3,
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Tuple_Object" */ let vErrors = null
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
            if (Array.isArray(data0)) {
              if (data0.length > 3) {
                validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/maxItems', keyword: 'maxItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
                return false
              } else {
                if (data0.length < 3) {
                  validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/minItems', keyword: 'minItems', params: { limit: 3 }, message: 'must NOT have fewer than 3 items' }]
                  return false
                } else {
                  const len1 = data0.length
                  if (!(len1 <= 3)) {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/additionalItems', keyword: 'additionalItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
                    return false
                  } else {
                    const len2 = data0.length
                    if (len2 > 0) {
                      let data1 = data0[0]
                      const _errs3 = errors
                      if (errors === _errs3) {
                        if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
                          let missing0
                          if ((data1.x === undefined && (missing0 = 'x')) || (data1.y === undefined && (missing0 = 'y')) || (data1.z === undefined && (missing0 = 'z'))) {
                            validate10.errors = [
                              { instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" },
                            ]
                            return false
                          } else {
                            if (data1.x !== undefined) {
                              let data2 = data1.x
                              const _errs5 = errors
                              if (!(typeof data2 == 'number' && isFinite(data2))) {
                                validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/0/x', schemaPath: '#/items/items/0/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/0/y', schemaPath: '#/items/items/0/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/0/z', schemaPath: '#/items/items/0/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                          validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/0', schemaPath: '#/items/items/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                          return false
                        }
                      }
                      var valid1 = _errs3 === errors
                    }
                    if (valid1) {
                      if (len2 > 1) {
                        let data5 = data0[1]
                        const _errs11 = errors
                        if (errors === _errs11) {
                          if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                            let missing1
                            if ((data5.x === undefined && (missing1 = 'x')) || (data5.y === undefined && (missing1 = 'y')) || (data5.z === undefined && (missing1 = 'z'))) {
                              validate10.errors = [
                                { instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" },
                              ]
                              return false
                            } else {
                              if (data5.x !== undefined) {
                                let data6 = data5.x
                                const _errs13 = errors
                                if (!(typeof data6 == 'number' && isFinite(data6))) {
                                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/1/x', schemaPath: '#/items/items/1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/1/y', schemaPath: '#/items/items/1/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/1/z', schemaPath: '#/items/items/1/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                            validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/1', schemaPath: '#/items/items/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                            return false
                          }
                        }
                        var valid1 = _errs11 === errors
                      }
                      if (valid1) {
                        if (len2 > 2) {
                          let data9 = data0[2]
                          const _errs19 = errors
                          if (errors === _errs19) {
                            if (data9 && typeof data9 == 'object' && !Array.isArray(data9)) {
                              let missing2
                              if ((data9.x === undefined && (missing2 = 'x')) || (data9.y === undefined && (missing2 = 'y')) || (data9.z === undefined && (missing2 = 'z'))) {
                                validate10.errors = [
                                  {
                                    instancePath: instancePath + '/' + i0 + '/2',
                                    schemaPath: '#/items/items/2/required',
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
                                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/2/x', schemaPath: '#/items/items/2/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/2/y', schemaPath: '#/items/items/2/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                                        validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/2/z', schemaPath: '#/items/items/2/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                              validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/2', schemaPath: '#/items/items/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                              return false
                            }
                          }
                          var valid1 = _errs19 === errors
                        }
                      }
                    }
                  }
                }
              }
            } else {
              validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
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
