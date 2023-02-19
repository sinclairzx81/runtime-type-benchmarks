// @ts-nocheck
'use strict'
export const Typia_Array_Simple = validate10
const schema11 = {
  $id: 'Typia_Array_Simple',
  description: 'Should validate the Typia_Array_Simple structure',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string' },
      hobbies: {
        anyOf: [
          { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, rank: { type: 'number' } }, required: ['name', 'rank'] } },
          { type: 'array', items: { type: 'object', properties: { body: { type: 'string' } }, required: ['body'] } },
          { type: 'array', items: { type: 'string' } },
        ],
      },
    },
    required: ['name', 'email', 'hobbies'],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Typia_Array_Simple" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
      var valid0 = true
      const len0 = data.length
      for (let i0 = 0; i0 < len0; i0++) {
        let data0 = data[i0]
        const _errs1 = errors
        if (errors === _errs1) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0
            if ((data0.name === undefined && (missing0 = 'name')) || (data0.email === undefined && (missing0 = 'email')) || (data0.hobbies === undefined && (missing0 = 'hobbies'))) {
              validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
              return false
            } else {
              if (data0.name !== undefined) {
                const _errs3 = errors
                if (typeof data0.name !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid1 = _errs3 === errors
              } else {
                var valid1 = true
              }
              if (valid1) {
                if (data0.email !== undefined) {
                  const _errs5 = errors
                  if (typeof data0.email !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/email', schemaPath: '#/items/properties/email/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid1 = _errs5 === errors
                } else {
                  var valid1 = true
                }
                if (valid1) {
                  if (data0.hobbies !== undefined) {
                    let data3 = data0.hobbies
                    const _errs7 = errors
                    const _errs8 = errors
                    let valid2 = false
                    const _errs9 = errors
                    if (errors === _errs9) {
                      if (Array.isArray(data3)) {
                        var valid3 = true
                        const len1 = data3.length
                        for (let i1 = 0; i1 < len1; i1++) {
                          let data4 = data3[i1]
                          const _errs11 = errors
                          if (errors === _errs11) {
                            if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                              let missing1
                              if ((data4.name === undefined && (missing1 = 'name')) || (data4.rank === undefined && (missing1 = 'rank'))) {
                                const err0 = {
                                  instancePath: instancePath + '/' + i0 + '/hobbies/' + i1,
                                  schemaPath: '#/items/properties/hobbies/anyOf/0/items/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing1 },
                                  message: "must have required property '" + missing1 + "'",
                                }
                                if (vErrors === null) {
                                  vErrors = [err0]
                                } else {
                                  vErrors.push(err0)
                                }
                                errors++
                              } else {
                                if (data4.name !== undefined) {
                                  const _errs13 = errors
                                  if (typeof data4.name !== 'string') {
                                    const err1 = {
                                      instancePath: instancePath + '/' + i0 + '/hobbies/' + i1 + '/name',
                                      schemaPath: '#/items/properties/hobbies/anyOf/0/items/properties/name/type',
                                      keyword: 'type',
                                      params: { type: 'string' },
                                      message: 'must be string',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err1]
                                    } else {
                                      vErrors.push(err1)
                                    }
                                    errors++
                                  }
                                  var valid4 = _errs13 === errors
                                } else {
                                  var valid4 = true
                                }
                                if (valid4) {
                                  if (data4.rank !== undefined) {
                                    let data6 = data4.rank
                                    const _errs15 = errors
                                    if (!(typeof data6 == 'number' && isFinite(data6))) {
                                      const err2 = {
                                        instancePath: instancePath + '/' + i0 + '/hobbies/' + i1 + '/rank',
                                        schemaPath: '#/items/properties/hobbies/anyOf/0/items/properties/rank/type',
                                        keyword: 'type',
                                        params: { type: 'number' },
                                        message: 'must be number',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err2]
                                      } else {
                                        vErrors.push(err2)
                                      }
                                      errors++
                                    }
                                    var valid4 = _errs15 === errors
                                  } else {
                                    var valid4 = true
                                  }
                                }
                              }
                            } else {
                              const err3 = { instancePath: instancePath + '/' + i0 + '/hobbies/' + i1, schemaPath: '#/items/properties/hobbies/anyOf/0/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                              if (vErrors === null) {
                                vErrors = [err3]
                              } else {
                                vErrors.push(err3)
                              }
                              errors++
                            }
                          }
                          var valid3 = _errs11 === errors
                          if (!valid3) {
                            break
                          }
                        }
                      } else {
                        const err4 = { instancePath: instancePath + '/' + i0 + '/hobbies', schemaPath: '#/items/properties/hobbies/anyOf/0/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                        if (vErrors === null) {
                          vErrors = [err4]
                        } else {
                          vErrors.push(err4)
                        }
                        errors++
                      }
                    }
                    var _valid0 = _errs9 === errors
                    valid2 = valid2 || _valid0
                    if (!valid2) {
                      const _errs17 = errors
                      if (errors === _errs17) {
                        if (Array.isArray(data3)) {
                          var valid5 = true
                          const len2 = data3.length
                          for (let i2 = 0; i2 < len2; i2++) {
                            let data7 = data3[i2]
                            const _errs19 = errors
                            if (errors === _errs19) {
                              if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
                                let missing2
                                if (data7.body === undefined && (missing2 = 'body')) {
                                  const err5 = {
                                    instancePath: instancePath + '/' + i0 + '/hobbies/' + i2,
                                    schemaPath: '#/items/properties/hobbies/anyOf/1/items/required',
                                    keyword: 'required',
                                    params: { missingProperty: missing2 },
                                    message: "must have required property '" + missing2 + "'",
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err5]
                                  } else {
                                    vErrors.push(err5)
                                  }
                                  errors++
                                } else {
                                  if (data7.body !== undefined) {
                                    if (typeof data7.body !== 'string') {
                                      const err6 = {
                                        instancePath: instancePath + '/' + i0 + '/hobbies/' + i2 + '/body',
                                        schemaPath: '#/items/properties/hobbies/anyOf/1/items/properties/body/type',
                                        keyword: 'type',
                                        params: { type: 'string' },
                                        message: 'must be string',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err6]
                                      } else {
                                        vErrors.push(err6)
                                      }
                                      errors++
                                    }
                                  }
                                }
                              } else {
                                const err7 = { instancePath: instancePath + '/' + i0 + '/hobbies/' + i2, schemaPath: '#/items/properties/hobbies/anyOf/1/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                                if (vErrors === null) {
                                  vErrors = [err7]
                                } else {
                                  vErrors.push(err7)
                                }
                                errors++
                              }
                            }
                            var valid5 = _errs19 === errors
                            if (!valid5) {
                              break
                            }
                          }
                        } else {
                          const err8 = { instancePath: instancePath + '/' + i0 + '/hobbies', schemaPath: '#/items/properties/hobbies/anyOf/1/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                          if (vErrors === null) {
                            vErrors = [err8]
                          } else {
                            vErrors.push(err8)
                          }
                          errors++
                        }
                      }
                      var _valid0 = _errs17 === errors
                      valid2 = valid2 || _valid0
                      if (!valid2) {
                        const _errs23 = errors
                        if (errors === _errs23) {
                          if (Array.isArray(data3)) {
                            var valid7 = true
                            const len3 = data3.length
                            for (let i3 = 0; i3 < len3; i3++) {
                              const _errs25 = errors
                              if (typeof data3[i3] !== 'string') {
                                const err9 = { instancePath: instancePath + '/' + i0 + '/hobbies/' + i3, schemaPath: '#/items/properties/hobbies/anyOf/2/items/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err9]
                                } else {
                                  vErrors.push(err9)
                                }
                                errors++
                              }
                              var valid7 = _errs25 === errors
                              if (!valid7) {
                                break
                              }
                            }
                          } else {
                            const err10 = { instancePath: instancePath + '/' + i0 + '/hobbies', schemaPath: '#/items/properties/hobbies/anyOf/2/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                            if (vErrors === null) {
                              vErrors = [err10]
                            } else {
                              vErrors.push(err10)
                            }
                            errors++
                          }
                        }
                        var _valid0 = _errs23 === errors
                        valid2 = valid2 || _valid0
                      }
                    }
                    if (!valid2) {
                      const err11 = { instancePath: instancePath + '/' + i0 + '/hobbies', schemaPath: '#/items/properties/hobbies/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                      if (vErrors === null) {
                        vErrors = [err11]
                      } else {
                        vErrors.push(err11)
                      }
                      errors++
                      validate10.errors = vErrors
                      return false
                    } else {
                      errors = _errs8
                      if (vErrors !== null) {
                        if (_errs8) {
                          vErrors.length = _errs8
                        } else {
                          vErrors = null
                        }
                      }
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
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
