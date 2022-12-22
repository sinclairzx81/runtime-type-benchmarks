// @ts-nocheck
'use strict'
export const Tuple_Object = validate10
const schema11 = {
  $id: 'Tuple_Object',
  type: 'array',
  items: [
    { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
    { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, z: { type: 'number' } }, required: ['x', 'y', 'z'] },
  ],
  additionalItems: false,
  minItems: 3,
  maxItems: 3,
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Tuple_Object" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
      if (data.length > 3) {
        validate10.errors = [{ instancePath, schemaPath: '#/maxItems', keyword: 'maxItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
        return false
      } else {
        if (data.length < 3) {
          validate10.errors = [{ instancePath, schemaPath: '#/minItems', keyword: 'minItems', params: { limit: 3 }, message: 'must NOT have fewer than 3 items' }]
          return false
        } else {
          const len0 = data.length
          if (!(len0 <= 3)) {
            validate10.errors = [{ instancePath, schemaPath: '#/additionalItems', keyword: 'additionalItems', params: { limit: 3 }, message: 'must NOT have more than 3 items' }]
            return false
          } else {
            const len1 = data.length
            if (len1 > 0) {
              let data0 = data[0]
              const _errs1 = errors
              if (errors === _errs1) {
                if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                  let missing0
                  if ((data0.x === undefined && (missing0 = 'x')) || (data0.y === undefined && (missing0 = 'y')) || (data0.z === undefined && (missing0 = 'z'))) {
                    validate10.errors = [{ instancePath: instancePath + '/0', schemaPath: '#/items/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
                    return false
                  } else {
                    if (data0.x !== undefined) {
                      let data1 = data0.x
                      const _errs3 = errors
                      if (!(typeof data1 == 'number' && isFinite(data1))) {
                        validate10.errors = [{ instancePath: instancePath + '/0/x', schemaPath: '#/items/0/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                          validate10.errors = [{ instancePath: instancePath + '/0/y', schemaPath: '#/items/0/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                            validate10.errors = [{ instancePath: instancePath + '/0/z', schemaPath: '#/items/0/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                  validate10.errors = [{ instancePath: instancePath + '/0', schemaPath: '#/items/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                  return false
                }
              }
              var valid0 = _errs1 === errors
            }
            if (valid0) {
              if (len1 > 1) {
                let data4 = data[1]
                const _errs9 = errors
                if (errors === _errs9) {
                  if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                    let missing1
                    if ((data4.x === undefined && (missing1 = 'x')) || (data4.y === undefined && (missing1 = 'y')) || (data4.z === undefined && (missing1 = 'z'))) {
                      validate10.errors = [{ instancePath: instancePath + '/1', schemaPath: '#/items/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }]
                      return false
                    } else {
                      if (data4.x !== undefined) {
                        let data5 = data4.x
                        const _errs11 = errors
                        if (!(typeof data5 == 'number' && isFinite(data5))) {
                          validate10.errors = [{ instancePath: instancePath + '/1/x', schemaPath: '#/items/1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                            validate10.errors = [{ instancePath: instancePath + '/1/y', schemaPath: '#/items/1/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                              validate10.errors = [{ instancePath: instancePath + '/1/z', schemaPath: '#/items/1/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                    validate10.errors = [{ instancePath: instancePath + '/1', schemaPath: '#/items/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                    return false
                  }
                }
                var valid0 = _errs9 === errors
              }
              if (valid0) {
                if (len1 > 2) {
                  let data8 = data[2]
                  const _errs17 = errors
                  if (errors === _errs17) {
                    if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                      let missing2
                      if ((data8.x === undefined && (missing2 = 'x')) || (data8.y === undefined && (missing2 = 'y')) || (data8.z === undefined && (missing2 = 'z'))) {
                        validate10.errors = [{ instancePath: instancePath + '/2', schemaPath: '#/items/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }]
                        return false
                      } else {
                        if (data8.x !== undefined) {
                          let data9 = data8.x
                          const _errs19 = errors
                          if (!(typeof data9 == 'number' && isFinite(data9))) {
                            validate10.errors = [{ instancePath: instancePath + '/2/x', schemaPath: '#/items/2/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                              validate10.errors = [{ instancePath: instancePath + '/2/y', schemaPath: '#/items/2/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                                validate10.errors = [{ instancePath: instancePath + '/2/z', schemaPath: '#/items/2/properties/z/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
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
                      validate10.errors = [{ instancePath: instancePath + '/2', schemaPath: '#/items/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                      return false
                    }
                  }
                  var valid0 = _errs17 === errors
                }
              }
            }
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
