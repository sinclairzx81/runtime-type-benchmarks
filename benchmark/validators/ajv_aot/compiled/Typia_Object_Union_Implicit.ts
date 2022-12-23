// @ts-nocheck
'use strict'
export const Typia_Object_Union_Implicit = validate10
const schema11 = {
  $id: 'Typia_Object_Union_Implicit',
  type: 'array',
  items: {
    anyOf: [
      { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
      {
        type: 'object',
        properties: {
          p1: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          p2: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          distance: { anyOf: [{ type: 'null' }, { type: 'number' }] },
        },
        required: ['p1', 'p2'],
      },
      {
        type: 'object',
        properties: {
          p1: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          p2: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          p3: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          width: { anyOf: [{ type: 'null' }, { type: 'number' }] },
          height: { anyOf: [{ type: 'null' }, { type: 'number' }] },
          area: { anyOf: [{ type: 'null' }, { type: 'number' }] },
        },
        required: ['p1', 'p2', 'p3'],
      },
      {
        type: 'object',
        properties: {
          p1: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          p2: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          p3: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          p4: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          width: { anyOf: [{ type: 'null' }, { type: 'number' }] },
          height: { anyOf: [{ type: 'null' }, { type: 'number' }] },
          area: { anyOf: [{ type: 'null' }, { type: 'number' }] },
        },
        required: ['p1', 'p2', 'p3', 'p4'],
      },
      {
        type: 'object',
        properties: {
          points: { type: 'array', items: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] } },
          length: { anyOf: [{ type: 'null' }, { type: 'number' }] },
        },
        required: ['points'],
      },
      {
        type: 'object',
        properties: {
          outer: {
            type: 'object',
            properties: {
              points: { type: 'array', items: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] } },
              length: { anyOf: [{ type: 'null' }, { type: 'number' }] },
            },
            required: ['points'],
          },
          inner: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                points: { type: 'array', items: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] } },
                length: { anyOf: [{ type: 'null' }, { type: 'number' }] },
              },
              required: ['points'],
            },
          },
          area: { anyOf: [{ type: 'null' }, { type: 'number' }] },
        },
        required: ['outer'],
      },
      {
        type: 'object',
        properties: {
          centroid: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' }, slope: { anyOf: [{ type: 'null' }, { type: 'number' }] } }, required: ['x', 'y'] },
          radius: { type: 'number' },
          area: { anyOf: [{ type: 'null' }, { type: 'number' }] },
        },
        required: ['radius'],
      },
    ],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Typia_Object_Union_Implicit" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
      var valid0 = true
      const len0 = data.length
      for (let i0 = 0; i0 < len0; i0++) {
        let data0 = data[i0]
        const _errs1 = errors
        const _errs2 = errors
        let valid1 = false
        const _errs3 = errors
        if (errors === _errs3) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0
            if ((data0.x === undefined && (missing0 = 'x')) || (data0.y === undefined && (missing0 = 'y'))) {
              const err0 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
              if (vErrors === null) {
                vErrors = [err0]
              } else {
                vErrors.push(err0)
              }
              errors++
            } else {
              if (data0.x !== undefined) {
                let data1 = data0.x
                const _errs5 = errors
                if (!(typeof data1 == 'number' && isFinite(data1))) {
                  const err1 = { instancePath: instancePath + '/' + i0 + '/x', schemaPath: '#/items/anyOf/0/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                  if (vErrors === null) {
                    vErrors = [err1]
                  } else {
                    vErrors.push(err1)
                  }
                  errors++
                }
                var valid2 = _errs5 === errors
              } else {
                var valid2 = true
              }
              if (valid2) {
                if (data0.y !== undefined) {
                  let data2 = data0.y
                  const _errs7 = errors
                  if (!(typeof data2 == 'number' && isFinite(data2))) {
                    const err2 = { instancePath: instancePath + '/' + i0 + '/y', schemaPath: '#/items/anyOf/0/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err2]
                    } else {
                      vErrors.push(err2)
                    }
                    errors++
                  }
                  var valid2 = _errs7 === errors
                } else {
                  var valid2 = true
                }
                if (valid2) {
                  if (data0.slope !== undefined) {
                    let data3 = data0.slope
                    const _errs9 = errors
                    const _errs10 = errors
                    let valid3 = false
                    const _errs11 = errors
                    if (data3 !== null) {
                      const err3 = { instancePath: instancePath + '/' + i0 + '/slope', schemaPath: '#/items/anyOf/0/properties/slope/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                      if (vErrors === null) {
                        vErrors = [err3]
                      } else {
                        vErrors.push(err3)
                      }
                      errors++
                    }
                    var _valid1 = _errs11 === errors
                    valid3 = valid3 || _valid1
                    if (!valid3) {
                      const _errs13 = errors
                      if (!(typeof data3 == 'number' && isFinite(data3))) {
                        const err4 = { instancePath: instancePath + '/' + i0 + '/slope', schemaPath: '#/items/anyOf/0/properties/slope/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err4]
                        } else {
                          vErrors.push(err4)
                        }
                        errors++
                      }
                      var _valid1 = _errs13 === errors
                      valid3 = valid3 || _valid1
                    }
                    if (!valid3) {
                      const err5 = { instancePath: instancePath + '/' + i0 + '/slope', schemaPath: '#/items/anyOf/0/properties/slope/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                      if (vErrors === null) {
                        vErrors = [err5]
                      } else {
                        vErrors.push(err5)
                      }
                      errors++
                    } else {
                      errors = _errs10
                      if (vErrors !== null) {
                        if (_errs10) {
                          vErrors.length = _errs10
                        } else {
                          vErrors = null
                        }
                      }
                    }
                    var valid2 = _errs9 === errors
                  } else {
                    var valid2 = true
                  }
                }
              }
            }
          } else {
            const err6 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err6]
            } else {
              vErrors.push(err6)
            }
            errors++
          }
        }
        var _valid0 = _errs3 === errors
        valid1 = valid1 || _valid0
        if (!valid1) {
          const _errs15 = errors
          if (errors === _errs15) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1
              if ((data0.p1 === undefined && (missing1 = 'p1')) || (data0.p2 === undefined && (missing1 = 'p2'))) {
                const err7 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
                if (vErrors === null) {
                  vErrors = [err7]
                } else {
                  vErrors.push(err7)
                }
                errors++
              } else {
                if (data0.p1 !== undefined) {
                  let data4 = data0.p1
                  const _errs17 = errors
                  if (errors === _errs17) {
                    if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                      let missing2
                      if ((data4.x === undefined && (missing2 = 'x')) || (data4.y === undefined && (missing2 = 'y'))) {
                        const err8 = {
                          instancePath: instancePath + '/' + i0 + '/p1',
                          schemaPath: '#/items/anyOf/1/properties/p1/required',
                          keyword: 'required',
                          params: { missingProperty: missing2 },
                          message: "must have required property '" + missing2 + "'",
                        }
                        if (vErrors === null) {
                          vErrors = [err8]
                        } else {
                          vErrors.push(err8)
                        }
                        errors++
                      } else {
                        if (data4.x !== undefined) {
                          let data5 = data4.x
                          const _errs19 = errors
                          if (!(typeof data5 == 'number' && isFinite(data5))) {
                            const err9 = { instancePath: instancePath + '/' + i0 + '/p1/x', schemaPath: '#/items/anyOf/1/properties/p1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err9]
                            } else {
                              vErrors.push(err9)
                            }
                            errors++
                          }
                          var valid5 = _errs19 === errors
                        } else {
                          var valid5 = true
                        }
                        if (valid5) {
                          if (data4.y !== undefined) {
                            let data6 = data4.y
                            const _errs21 = errors
                            if (!(typeof data6 == 'number' && isFinite(data6))) {
                              const err10 = { instancePath: instancePath + '/' + i0 + '/p1/y', schemaPath: '#/items/anyOf/1/properties/p1/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err10]
                              } else {
                                vErrors.push(err10)
                              }
                              errors++
                            }
                            var valid5 = _errs21 === errors
                          } else {
                            var valid5 = true
                          }
                          if (valid5) {
                            if (data4.slope !== undefined) {
                              let data7 = data4.slope
                              const _errs23 = errors
                              const _errs24 = errors
                              let valid6 = false
                              const _errs25 = errors
                              if (data7 !== null) {
                                const err11 = {
                                  instancePath: instancePath + '/' + i0 + '/p1/slope',
                                  schemaPath: '#/items/anyOf/1/properties/p1/properties/slope/anyOf/0/type',
                                  keyword: 'type',
                                  params: { type: 'null' },
                                  message: 'must be null',
                                }
                                if (vErrors === null) {
                                  vErrors = [err11]
                                } else {
                                  vErrors.push(err11)
                                }
                                errors++
                              }
                              var _valid2 = _errs25 === errors
                              valid6 = valid6 || _valid2
                              if (!valid6) {
                                const _errs27 = errors
                                if (!(typeof data7 == 'number' && isFinite(data7))) {
                                  const err12 = {
                                    instancePath: instancePath + '/' + i0 + '/p1/slope',
                                    schemaPath: '#/items/anyOf/1/properties/p1/properties/slope/anyOf/1/type',
                                    keyword: 'type',
                                    params: { type: 'number' },
                                    message: 'must be number',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err12]
                                  } else {
                                    vErrors.push(err12)
                                  }
                                  errors++
                                }
                                var _valid2 = _errs27 === errors
                                valid6 = valid6 || _valid2
                              }
                              if (!valid6) {
                                const err13 = { instancePath: instancePath + '/' + i0 + '/p1/slope', schemaPath: '#/items/anyOf/1/properties/p1/properties/slope/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                if (vErrors === null) {
                                  vErrors = [err13]
                                } else {
                                  vErrors.push(err13)
                                }
                                errors++
                              } else {
                                errors = _errs24
                                if (vErrors !== null) {
                                  if (_errs24) {
                                    vErrors.length = _errs24
                                  } else {
                                    vErrors = null
                                  }
                                }
                              }
                              var valid5 = _errs23 === errors
                            } else {
                              var valid5 = true
                            }
                          }
                        }
                      }
                    } else {
                      const err14 = { instancePath: instancePath + '/' + i0 + '/p1', schemaPath: '#/items/anyOf/1/properties/p1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err14]
                      } else {
                        vErrors.push(err14)
                      }
                      errors++
                    }
                  }
                  var valid4 = _errs17 === errors
                } else {
                  var valid4 = true
                }
                if (valid4) {
                  if (data0.p2 !== undefined) {
                    let data8 = data0.p2
                    const _errs29 = errors
                    if (errors === _errs29) {
                      if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                        let missing3
                        if ((data8.x === undefined && (missing3 = 'x')) || (data8.y === undefined && (missing3 = 'y'))) {
                          const err15 = {
                            instancePath: instancePath + '/' + i0 + '/p2',
                            schemaPath: '#/items/anyOf/1/properties/p2/required',
                            keyword: 'required',
                            params: { missingProperty: missing3 },
                            message: "must have required property '" + missing3 + "'",
                          }
                          if (vErrors === null) {
                            vErrors = [err15]
                          } else {
                            vErrors.push(err15)
                          }
                          errors++
                        } else {
                          if (data8.x !== undefined) {
                            let data9 = data8.x
                            const _errs31 = errors
                            if (!(typeof data9 == 'number' && isFinite(data9))) {
                              const err16 = { instancePath: instancePath + '/' + i0 + '/p2/x', schemaPath: '#/items/anyOf/1/properties/p2/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err16]
                              } else {
                                vErrors.push(err16)
                              }
                              errors++
                            }
                            var valid7 = _errs31 === errors
                          } else {
                            var valid7 = true
                          }
                          if (valid7) {
                            if (data8.y !== undefined) {
                              let data10 = data8.y
                              const _errs33 = errors
                              if (!(typeof data10 == 'number' && isFinite(data10))) {
                                const err17 = { instancePath: instancePath + '/' + i0 + '/p2/y', schemaPath: '#/items/anyOf/1/properties/p2/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err17]
                                } else {
                                  vErrors.push(err17)
                                }
                                errors++
                              }
                              var valid7 = _errs33 === errors
                            } else {
                              var valid7 = true
                            }
                            if (valid7) {
                              if (data8.slope !== undefined) {
                                let data11 = data8.slope
                                const _errs35 = errors
                                const _errs36 = errors
                                let valid8 = false
                                const _errs37 = errors
                                if (data11 !== null) {
                                  const err18 = {
                                    instancePath: instancePath + '/' + i0 + '/p2/slope',
                                    schemaPath: '#/items/anyOf/1/properties/p2/properties/slope/anyOf/0/type',
                                    keyword: 'type',
                                    params: { type: 'null' },
                                    message: 'must be null',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err18]
                                  } else {
                                    vErrors.push(err18)
                                  }
                                  errors++
                                }
                                var _valid3 = _errs37 === errors
                                valid8 = valid8 || _valid3
                                if (!valid8) {
                                  const _errs39 = errors
                                  if (!(typeof data11 == 'number' && isFinite(data11))) {
                                    const err19 = {
                                      instancePath: instancePath + '/' + i0 + '/p2/slope',
                                      schemaPath: '#/items/anyOf/1/properties/p2/properties/slope/anyOf/1/type',
                                      keyword: 'type',
                                      params: { type: 'number' },
                                      message: 'must be number',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err19]
                                    } else {
                                      vErrors.push(err19)
                                    }
                                    errors++
                                  }
                                  var _valid3 = _errs39 === errors
                                  valid8 = valid8 || _valid3
                                }
                                if (!valid8) {
                                  const err20 = {
                                    instancePath: instancePath + '/' + i0 + '/p2/slope',
                                    schemaPath: '#/items/anyOf/1/properties/p2/properties/slope/anyOf',
                                    keyword: 'anyOf',
                                    params: {},
                                    message: 'must match a schema in anyOf',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err20]
                                  } else {
                                    vErrors.push(err20)
                                  }
                                  errors++
                                } else {
                                  errors = _errs36
                                  if (vErrors !== null) {
                                    if (_errs36) {
                                      vErrors.length = _errs36
                                    } else {
                                      vErrors = null
                                    }
                                  }
                                }
                                var valid7 = _errs35 === errors
                              } else {
                                var valid7 = true
                              }
                            }
                          }
                        }
                      } else {
                        const err21 = { instancePath: instancePath + '/' + i0 + '/p2', schemaPath: '#/items/anyOf/1/properties/p2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                        if (vErrors === null) {
                          vErrors = [err21]
                        } else {
                          vErrors.push(err21)
                        }
                        errors++
                      }
                    }
                    var valid4 = _errs29 === errors
                  } else {
                    var valid4 = true
                  }
                  if (valid4) {
                    if (data0.distance !== undefined) {
                      let data12 = data0.distance
                      const _errs41 = errors
                      const _errs42 = errors
                      let valid9 = false
                      const _errs43 = errors
                      if (data12 !== null) {
                        const err22 = { instancePath: instancePath + '/' + i0 + '/distance', schemaPath: '#/items/anyOf/1/properties/distance/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                        if (vErrors === null) {
                          vErrors = [err22]
                        } else {
                          vErrors.push(err22)
                        }
                        errors++
                      }
                      var _valid4 = _errs43 === errors
                      valid9 = valid9 || _valid4
                      if (!valid9) {
                        const _errs45 = errors
                        if (!(typeof data12 == 'number' && isFinite(data12))) {
                          const err23 = { instancePath: instancePath + '/' + i0 + '/distance', schemaPath: '#/items/anyOf/1/properties/distance/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err23]
                          } else {
                            vErrors.push(err23)
                          }
                          errors++
                        }
                        var _valid4 = _errs45 === errors
                        valid9 = valid9 || _valid4
                      }
                      if (!valid9) {
                        const err24 = { instancePath: instancePath + '/' + i0 + '/distance', schemaPath: '#/items/anyOf/1/properties/distance/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                        if (vErrors === null) {
                          vErrors = [err24]
                        } else {
                          vErrors.push(err24)
                        }
                        errors++
                      } else {
                        errors = _errs42
                        if (vErrors !== null) {
                          if (_errs42) {
                            vErrors.length = _errs42
                          } else {
                            vErrors = null
                          }
                        }
                      }
                      var valid4 = _errs41 === errors
                    } else {
                      var valid4 = true
                    }
                  }
                }
              }
            } else {
              const err25 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err25]
              } else {
                vErrors.push(err25)
              }
              errors++
            }
          }
          var _valid0 = _errs15 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs47 = errors
            if (errors === _errs47) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing4
                if ((data0.p1 === undefined && (missing4 = 'p1')) || (data0.p2 === undefined && (missing4 = 'p2')) || (data0.p3 === undefined && (missing4 = 'p3'))) {
                  const err26 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/required', keyword: 'required', params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }
                  if (vErrors === null) {
                    vErrors = [err26]
                  } else {
                    vErrors.push(err26)
                  }
                  errors++
                } else {
                  if (data0.p1 !== undefined) {
                    let data13 = data0.p1
                    const _errs49 = errors
                    if (errors === _errs49) {
                      if (data13 && typeof data13 == 'object' && !Array.isArray(data13)) {
                        let missing5
                        if ((data13.x === undefined && (missing5 = 'x')) || (data13.y === undefined && (missing5 = 'y'))) {
                          const err27 = {
                            instancePath: instancePath + '/' + i0 + '/p1',
                            schemaPath: '#/items/anyOf/2/properties/p1/required',
                            keyword: 'required',
                            params: { missingProperty: missing5 },
                            message: "must have required property '" + missing5 + "'",
                          }
                          if (vErrors === null) {
                            vErrors = [err27]
                          } else {
                            vErrors.push(err27)
                          }
                          errors++
                        } else {
                          if (data13.x !== undefined) {
                            let data14 = data13.x
                            const _errs51 = errors
                            if (!(typeof data14 == 'number' && isFinite(data14))) {
                              const err28 = { instancePath: instancePath + '/' + i0 + '/p1/x', schemaPath: '#/items/anyOf/2/properties/p1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err28]
                              } else {
                                vErrors.push(err28)
                              }
                              errors++
                            }
                            var valid11 = _errs51 === errors
                          } else {
                            var valid11 = true
                          }
                          if (valid11) {
                            if (data13.y !== undefined) {
                              let data15 = data13.y
                              const _errs53 = errors
                              if (!(typeof data15 == 'number' && isFinite(data15))) {
                                const err29 = { instancePath: instancePath + '/' + i0 + '/p1/y', schemaPath: '#/items/anyOf/2/properties/p1/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err29]
                                } else {
                                  vErrors.push(err29)
                                }
                                errors++
                              }
                              var valid11 = _errs53 === errors
                            } else {
                              var valid11 = true
                            }
                            if (valid11) {
                              if (data13.slope !== undefined) {
                                let data16 = data13.slope
                                const _errs55 = errors
                                const _errs56 = errors
                                let valid12 = false
                                const _errs57 = errors
                                if (data16 !== null) {
                                  const err30 = {
                                    instancePath: instancePath + '/' + i0 + '/p1/slope',
                                    schemaPath: '#/items/anyOf/2/properties/p1/properties/slope/anyOf/0/type',
                                    keyword: 'type',
                                    params: { type: 'null' },
                                    message: 'must be null',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err30]
                                  } else {
                                    vErrors.push(err30)
                                  }
                                  errors++
                                }
                                var _valid5 = _errs57 === errors
                                valid12 = valid12 || _valid5
                                if (!valid12) {
                                  const _errs59 = errors
                                  if (!(typeof data16 == 'number' && isFinite(data16))) {
                                    const err31 = {
                                      instancePath: instancePath + '/' + i0 + '/p1/slope',
                                      schemaPath: '#/items/anyOf/2/properties/p1/properties/slope/anyOf/1/type',
                                      keyword: 'type',
                                      params: { type: 'number' },
                                      message: 'must be number',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err31]
                                    } else {
                                      vErrors.push(err31)
                                    }
                                    errors++
                                  }
                                  var _valid5 = _errs59 === errors
                                  valid12 = valid12 || _valid5
                                }
                                if (!valid12) {
                                  const err32 = {
                                    instancePath: instancePath + '/' + i0 + '/p1/slope',
                                    schemaPath: '#/items/anyOf/2/properties/p1/properties/slope/anyOf',
                                    keyword: 'anyOf',
                                    params: {},
                                    message: 'must match a schema in anyOf',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err32]
                                  } else {
                                    vErrors.push(err32)
                                  }
                                  errors++
                                } else {
                                  errors = _errs56
                                  if (vErrors !== null) {
                                    if (_errs56) {
                                      vErrors.length = _errs56
                                    } else {
                                      vErrors = null
                                    }
                                  }
                                }
                                var valid11 = _errs55 === errors
                              } else {
                                var valid11 = true
                              }
                            }
                          }
                        }
                      } else {
                        const err33 = { instancePath: instancePath + '/' + i0 + '/p1', schemaPath: '#/items/anyOf/2/properties/p1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                        if (vErrors === null) {
                          vErrors = [err33]
                        } else {
                          vErrors.push(err33)
                        }
                        errors++
                      }
                    }
                    var valid10 = _errs49 === errors
                  } else {
                    var valid10 = true
                  }
                  if (valid10) {
                    if (data0.p2 !== undefined) {
                      let data17 = data0.p2
                      const _errs61 = errors
                      if (errors === _errs61) {
                        if (data17 && typeof data17 == 'object' && !Array.isArray(data17)) {
                          let missing6
                          if ((data17.x === undefined && (missing6 = 'x')) || (data17.y === undefined && (missing6 = 'y'))) {
                            const err34 = {
                              instancePath: instancePath + '/' + i0 + '/p2',
                              schemaPath: '#/items/anyOf/2/properties/p2/required',
                              keyword: 'required',
                              params: { missingProperty: missing6 },
                              message: "must have required property '" + missing6 + "'",
                            }
                            if (vErrors === null) {
                              vErrors = [err34]
                            } else {
                              vErrors.push(err34)
                            }
                            errors++
                          } else {
                            if (data17.x !== undefined) {
                              let data18 = data17.x
                              const _errs63 = errors
                              if (!(typeof data18 == 'number' && isFinite(data18))) {
                                const err35 = { instancePath: instancePath + '/' + i0 + '/p2/x', schemaPath: '#/items/anyOf/2/properties/p2/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err35]
                                } else {
                                  vErrors.push(err35)
                                }
                                errors++
                              }
                              var valid13 = _errs63 === errors
                            } else {
                              var valid13 = true
                            }
                            if (valid13) {
                              if (data17.y !== undefined) {
                                let data19 = data17.y
                                const _errs65 = errors
                                if (!(typeof data19 == 'number' && isFinite(data19))) {
                                  const err36 = { instancePath: instancePath + '/' + i0 + '/p2/y', schemaPath: '#/items/anyOf/2/properties/p2/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                  if (vErrors === null) {
                                    vErrors = [err36]
                                  } else {
                                    vErrors.push(err36)
                                  }
                                  errors++
                                }
                                var valid13 = _errs65 === errors
                              } else {
                                var valid13 = true
                              }
                              if (valid13) {
                                if (data17.slope !== undefined) {
                                  let data20 = data17.slope
                                  const _errs67 = errors
                                  const _errs68 = errors
                                  let valid14 = false
                                  const _errs69 = errors
                                  if (data20 !== null) {
                                    const err37 = {
                                      instancePath: instancePath + '/' + i0 + '/p2/slope',
                                      schemaPath: '#/items/anyOf/2/properties/p2/properties/slope/anyOf/0/type',
                                      keyword: 'type',
                                      params: { type: 'null' },
                                      message: 'must be null',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err37]
                                    } else {
                                      vErrors.push(err37)
                                    }
                                    errors++
                                  }
                                  var _valid6 = _errs69 === errors
                                  valid14 = valid14 || _valid6
                                  if (!valid14) {
                                    const _errs71 = errors
                                    if (!(typeof data20 == 'number' && isFinite(data20))) {
                                      const err38 = {
                                        instancePath: instancePath + '/' + i0 + '/p2/slope',
                                        schemaPath: '#/items/anyOf/2/properties/p2/properties/slope/anyOf/1/type',
                                        keyword: 'type',
                                        params: { type: 'number' },
                                        message: 'must be number',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err38]
                                      } else {
                                        vErrors.push(err38)
                                      }
                                      errors++
                                    }
                                    var _valid6 = _errs71 === errors
                                    valid14 = valid14 || _valid6
                                  }
                                  if (!valid14) {
                                    const err39 = {
                                      instancePath: instancePath + '/' + i0 + '/p2/slope',
                                      schemaPath: '#/items/anyOf/2/properties/p2/properties/slope/anyOf',
                                      keyword: 'anyOf',
                                      params: {},
                                      message: 'must match a schema in anyOf',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err39]
                                    } else {
                                      vErrors.push(err39)
                                    }
                                    errors++
                                  } else {
                                    errors = _errs68
                                    if (vErrors !== null) {
                                      if (_errs68) {
                                        vErrors.length = _errs68
                                      } else {
                                        vErrors = null
                                      }
                                    }
                                  }
                                  var valid13 = _errs67 === errors
                                } else {
                                  var valid13 = true
                                }
                              }
                            }
                          }
                        } else {
                          const err40 = { instancePath: instancePath + '/' + i0 + '/p2', schemaPath: '#/items/anyOf/2/properties/p2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                          if (vErrors === null) {
                            vErrors = [err40]
                          } else {
                            vErrors.push(err40)
                          }
                          errors++
                        }
                      }
                      var valid10 = _errs61 === errors
                    } else {
                      var valid10 = true
                    }
                    if (valid10) {
                      if (data0.p3 !== undefined) {
                        let data21 = data0.p3
                        const _errs73 = errors
                        if (errors === _errs73) {
                          if (data21 && typeof data21 == 'object' && !Array.isArray(data21)) {
                            let missing7
                            if ((data21.x === undefined && (missing7 = 'x')) || (data21.y === undefined && (missing7 = 'y'))) {
                              const err41 = {
                                instancePath: instancePath + '/' + i0 + '/p3',
                                schemaPath: '#/items/anyOf/2/properties/p3/required',
                                keyword: 'required',
                                params: { missingProperty: missing7 },
                                message: "must have required property '" + missing7 + "'",
                              }
                              if (vErrors === null) {
                                vErrors = [err41]
                              } else {
                                vErrors.push(err41)
                              }
                              errors++
                            } else {
                              if (data21.x !== undefined) {
                                let data22 = data21.x
                                const _errs75 = errors
                                if (!(typeof data22 == 'number' && isFinite(data22))) {
                                  const err42 = { instancePath: instancePath + '/' + i0 + '/p3/x', schemaPath: '#/items/anyOf/2/properties/p3/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                  if (vErrors === null) {
                                    vErrors = [err42]
                                  } else {
                                    vErrors.push(err42)
                                  }
                                  errors++
                                }
                                var valid15 = _errs75 === errors
                              } else {
                                var valid15 = true
                              }
                              if (valid15) {
                                if (data21.y !== undefined) {
                                  let data23 = data21.y
                                  const _errs77 = errors
                                  if (!(typeof data23 == 'number' && isFinite(data23))) {
                                    const err43 = { instancePath: instancePath + '/' + i0 + '/p3/y', schemaPath: '#/items/anyOf/2/properties/p3/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                    if (vErrors === null) {
                                      vErrors = [err43]
                                    } else {
                                      vErrors.push(err43)
                                    }
                                    errors++
                                  }
                                  var valid15 = _errs77 === errors
                                } else {
                                  var valid15 = true
                                }
                                if (valid15) {
                                  if (data21.slope !== undefined) {
                                    let data24 = data21.slope
                                    const _errs79 = errors
                                    const _errs80 = errors
                                    let valid16 = false
                                    const _errs81 = errors
                                    if (data24 !== null) {
                                      const err44 = {
                                        instancePath: instancePath + '/' + i0 + '/p3/slope',
                                        schemaPath: '#/items/anyOf/2/properties/p3/properties/slope/anyOf/0/type',
                                        keyword: 'type',
                                        params: { type: 'null' },
                                        message: 'must be null',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err44]
                                      } else {
                                        vErrors.push(err44)
                                      }
                                      errors++
                                    }
                                    var _valid7 = _errs81 === errors
                                    valid16 = valid16 || _valid7
                                    if (!valid16) {
                                      const _errs83 = errors
                                      if (!(typeof data24 == 'number' && isFinite(data24))) {
                                        const err45 = {
                                          instancePath: instancePath + '/' + i0 + '/p3/slope',
                                          schemaPath: '#/items/anyOf/2/properties/p3/properties/slope/anyOf/1/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err45]
                                        } else {
                                          vErrors.push(err45)
                                        }
                                        errors++
                                      }
                                      var _valid7 = _errs83 === errors
                                      valid16 = valid16 || _valid7
                                    }
                                    if (!valid16) {
                                      const err46 = {
                                        instancePath: instancePath + '/' + i0 + '/p3/slope',
                                        schemaPath: '#/items/anyOf/2/properties/p3/properties/slope/anyOf',
                                        keyword: 'anyOf',
                                        params: {},
                                        message: 'must match a schema in anyOf',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err46]
                                      } else {
                                        vErrors.push(err46)
                                      }
                                      errors++
                                    } else {
                                      errors = _errs80
                                      if (vErrors !== null) {
                                        if (_errs80) {
                                          vErrors.length = _errs80
                                        } else {
                                          vErrors = null
                                        }
                                      }
                                    }
                                    var valid15 = _errs79 === errors
                                  } else {
                                    var valid15 = true
                                  }
                                }
                              }
                            }
                          } else {
                            const err47 = { instancePath: instancePath + '/' + i0 + '/p3', schemaPath: '#/items/anyOf/2/properties/p3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                            if (vErrors === null) {
                              vErrors = [err47]
                            } else {
                              vErrors.push(err47)
                            }
                            errors++
                          }
                        }
                        var valid10 = _errs73 === errors
                      } else {
                        var valid10 = true
                      }
                      if (valid10) {
                        if (data0.width !== undefined) {
                          let data25 = data0.width
                          const _errs85 = errors
                          const _errs86 = errors
                          let valid17 = false
                          const _errs87 = errors
                          if (data25 !== null) {
                            const err48 = { instancePath: instancePath + '/' + i0 + '/width', schemaPath: '#/items/anyOf/2/properties/width/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                            if (vErrors === null) {
                              vErrors = [err48]
                            } else {
                              vErrors.push(err48)
                            }
                            errors++
                          }
                          var _valid8 = _errs87 === errors
                          valid17 = valid17 || _valid8
                          if (!valid17) {
                            const _errs89 = errors
                            if (!(typeof data25 == 'number' && isFinite(data25))) {
                              const err49 = { instancePath: instancePath + '/' + i0 + '/width', schemaPath: '#/items/anyOf/2/properties/width/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err49]
                              } else {
                                vErrors.push(err49)
                              }
                              errors++
                            }
                            var _valid8 = _errs89 === errors
                            valid17 = valid17 || _valid8
                          }
                          if (!valid17) {
                            const err50 = { instancePath: instancePath + '/' + i0 + '/width', schemaPath: '#/items/anyOf/2/properties/width/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                            if (vErrors === null) {
                              vErrors = [err50]
                            } else {
                              vErrors.push(err50)
                            }
                            errors++
                          } else {
                            errors = _errs86
                            if (vErrors !== null) {
                              if (_errs86) {
                                vErrors.length = _errs86
                              } else {
                                vErrors = null
                              }
                            }
                          }
                          var valid10 = _errs85 === errors
                        } else {
                          var valid10 = true
                        }
                        if (valid10) {
                          if (data0.height !== undefined) {
                            let data26 = data0.height
                            const _errs91 = errors
                            const _errs92 = errors
                            let valid18 = false
                            const _errs93 = errors
                            if (data26 !== null) {
                              const err51 = { instancePath: instancePath + '/' + i0 + '/height', schemaPath: '#/items/anyOf/2/properties/height/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                              if (vErrors === null) {
                                vErrors = [err51]
                              } else {
                                vErrors.push(err51)
                              }
                              errors++
                            }
                            var _valid9 = _errs93 === errors
                            valid18 = valid18 || _valid9
                            if (!valid18) {
                              const _errs95 = errors
                              if (!(typeof data26 == 'number' && isFinite(data26))) {
                                const err52 = { instancePath: instancePath + '/' + i0 + '/height', schemaPath: '#/items/anyOf/2/properties/height/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err52]
                                } else {
                                  vErrors.push(err52)
                                }
                                errors++
                              }
                              var _valid9 = _errs95 === errors
                              valid18 = valid18 || _valid9
                            }
                            if (!valid18) {
                              const err53 = { instancePath: instancePath + '/' + i0 + '/height', schemaPath: '#/items/anyOf/2/properties/height/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                              if (vErrors === null) {
                                vErrors = [err53]
                              } else {
                                vErrors.push(err53)
                              }
                              errors++
                            } else {
                              errors = _errs92
                              if (vErrors !== null) {
                                if (_errs92) {
                                  vErrors.length = _errs92
                                } else {
                                  vErrors = null
                                }
                              }
                            }
                            var valid10 = _errs91 === errors
                          } else {
                            var valid10 = true
                          }
                          if (valid10) {
                            if (data0.area !== undefined) {
                              let data27 = data0.area
                              const _errs97 = errors
                              const _errs98 = errors
                              let valid19 = false
                              const _errs99 = errors
                              if (data27 !== null) {
                                const err54 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/2/properties/area/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                                if (vErrors === null) {
                                  vErrors = [err54]
                                } else {
                                  vErrors.push(err54)
                                }
                                errors++
                              }
                              var _valid10 = _errs99 === errors
                              valid19 = valid19 || _valid10
                              if (!valid19) {
                                const _errs101 = errors
                                if (!(typeof data27 == 'number' && isFinite(data27))) {
                                  const err55 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/2/properties/area/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                  if (vErrors === null) {
                                    vErrors = [err55]
                                  } else {
                                    vErrors.push(err55)
                                  }
                                  errors++
                                }
                                var _valid10 = _errs101 === errors
                                valid19 = valid19 || _valid10
                              }
                              if (!valid19) {
                                const err56 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/2/properties/area/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                if (vErrors === null) {
                                  vErrors = [err56]
                                } else {
                                  vErrors.push(err56)
                                }
                                errors++
                              } else {
                                errors = _errs98
                                if (vErrors !== null) {
                                  if (_errs98) {
                                    vErrors.length = _errs98
                                  } else {
                                    vErrors = null
                                  }
                                }
                              }
                              var valid10 = _errs97 === errors
                            } else {
                              var valid10 = true
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                const err57 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err57]
                } else {
                  vErrors.push(err57)
                }
                errors++
              }
            }
            var _valid0 = _errs47 === errors
            valid1 = valid1 || _valid0
            if (!valid1) {
              const _errs103 = errors
              if (errors === _errs103) {
                if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                  let missing8
                  if ((data0.p1 === undefined && (missing8 = 'p1')) || (data0.p2 === undefined && (missing8 = 'p2')) || (data0.p3 === undefined && (missing8 = 'p3')) || (data0.p4 === undefined && (missing8 = 'p4'))) {
                    const err58 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/required', keyword: 'required', params: { missingProperty: missing8 }, message: "must have required property '" + missing8 + "'" }
                    if (vErrors === null) {
                      vErrors = [err58]
                    } else {
                      vErrors.push(err58)
                    }
                    errors++
                  } else {
                    if (data0.p1 !== undefined) {
                      let data28 = data0.p1
                      const _errs105 = errors
                      if (errors === _errs105) {
                        if (data28 && typeof data28 == 'object' && !Array.isArray(data28)) {
                          let missing9
                          if ((data28.x === undefined && (missing9 = 'x')) || (data28.y === undefined && (missing9 = 'y'))) {
                            const err59 = {
                              instancePath: instancePath + '/' + i0 + '/p1',
                              schemaPath: '#/items/anyOf/3/properties/p1/required',
                              keyword: 'required',
                              params: { missingProperty: missing9 },
                              message: "must have required property '" + missing9 + "'",
                            }
                            if (vErrors === null) {
                              vErrors = [err59]
                            } else {
                              vErrors.push(err59)
                            }
                            errors++
                          } else {
                            if (data28.x !== undefined) {
                              let data29 = data28.x
                              const _errs107 = errors
                              if (!(typeof data29 == 'number' && isFinite(data29))) {
                                const err60 = { instancePath: instancePath + '/' + i0 + '/p1/x', schemaPath: '#/items/anyOf/3/properties/p1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err60]
                                } else {
                                  vErrors.push(err60)
                                }
                                errors++
                              }
                              var valid21 = _errs107 === errors
                            } else {
                              var valid21 = true
                            }
                            if (valid21) {
                              if (data28.y !== undefined) {
                                let data30 = data28.y
                                const _errs109 = errors
                                if (!(typeof data30 == 'number' && isFinite(data30))) {
                                  const err61 = { instancePath: instancePath + '/' + i0 + '/p1/y', schemaPath: '#/items/anyOf/3/properties/p1/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                  if (vErrors === null) {
                                    vErrors = [err61]
                                  } else {
                                    vErrors.push(err61)
                                  }
                                  errors++
                                }
                                var valid21 = _errs109 === errors
                              } else {
                                var valid21 = true
                              }
                              if (valid21) {
                                if (data28.slope !== undefined) {
                                  let data31 = data28.slope
                                  const _errs111 = errors
                                  const _errs112 = errors
                                  let valid22 = false
                                  const _errs113 = errors
                                  if (data31 !== null) {
                                    const err62 = {
                                      instancePath: instancePath + '/' + i0 + '/p1/slope',
                                      schemaPath: '#/items/anyOf/3/properties/p1/properties/slope/anyOf/0/type',
                                      keyword: 'type',
                                      params: { type: 'null' },
                                      message: 'must be null',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err62]
                                    } else {
                                      vErrors.push(err62)
                                    }
                                    errors++
                                  }
                                  var _valid11 = _errs113 === errors
                                  valid22 = valid22 || _valid11
                                  if (!valid22) {
                                    const _errs115 = errors
                                    if (!(typeof data31 == 'number' && isFinite(data31))) {
                                      const err63 = {
                                        instancePath: instancePath + '/' + i0 + '/p1/slope',
                                        schemaPath: '#/items/anyOf/3/properties/p1/properties/slope/anyOf/1/type',
                                        keyword: 'type',
                                        params: { type: 'number' },
                                        message: 'must be number',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err63]
                                      } else {
                                        vErrors.push(err63)
                                      }
                                      errors++
                                    }
                                    var _valid11 = _errs115 === errors
                                    valid22 = valid22 || _valid11
                                  }
                                  if (!valid22) {
                                    const err64 = {
                                      instancePath: instancePath + '/' + i0 + '/p1/slope',
                                      schemaPath: '#/items/anyOf/3/properties/p1/properties/slope/anyOf',
                                      keyword: 'anyOf',
                                      params: {},
                                      message: 'must match a schema in anyOf',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err64]
                                    } else {
                                      vErrors.push(err64)
                                    }
                                    errors++
                                  } else {
                                    errors = _errs112
                                    if (vErrors !== null) {
                                      if (_errs112) {
                                        vErrors.length = _errs112
                                      } else {
                                        vErrors = null
                                      }
                                    }
                                  }
                                  var valid21 = _errs111 === errors
                                } else {
                                  var valid21 = true
                                }
                              }
                            }
                          }
                        } else {
                          const err65 = { instancePath: instancePath + '/' + i0 + '/p1', schemaPath: '#/items/anyOf/3/properties/p1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                          if (vErrors === null) {
                            vErrors = [err65]
                          } else {
                            vErrors.push(err65)
                          }
                          errors++
                        }
                      }
                      var valid20 = _errs105 === errors
                    } else {
                      var valid20 = true
                    }
                    if (valid20) {
                      if (data0.p2 !== undefined) {
                        let data32 = data0.p2
                        const _errs117 = errors
                        if (errors === _errs117) {
                          if (data32 && typeof data32 == 'object' && !Array.isArray(data32)) {
                            let missing10
                            if ((data32.x === undefined && (missing10 = 'x')) || (data32.y === undefined && (missing10 = 'y'))) {
                              const err66 = {
                                instancePath: instancePath + '/' + i0 + '/p2',
                                schemaPath: '#/items/anyOf/3/properties/p2/required',
                                keyword: 'required',
                                params: { missingProperty: missing10 },
                                message: "must have required property '" + missing10 + "'",
                              }
                              if (vErrors === null) {
                                vErrors = [err66]
                              } else {
                                vErrors.push(err66)
                              }
                              errors++
                            } else {
                              if (data32.x !== undefined) {
                                let data33 = data32.x
                                const _errs119 = errors
                                if (!(typeof data33 == 'number' && isFinite(data33))) {
                                  const err67 = { instancePath: instancePath + '/' + i0 + '/p2/x', schemaPath: '#/items/anyOf/3/properties/p2/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                  if (vErrors === null) {
                                    vErrors = [err67]
                                  } else {
                                    vErrors.push(err67)
                                  }
                                  errors++
                                }
                                var valid23 = _errs119 === errors
                              } else {
                                var valid23 = true
                              }
                              if (valid23) {
                                if (data32.y !== undefined) {
                                  let data34 = data32.y
                                  const _errs121 = errors
                                  if (!(typeof data34 == 'number' && isFinite(data34))) {
                                    const err68 = { instancePath: instancePath + '/' + i0 + '/p2/y', schemaPath: '#/items/anyOf/3/properties/p2/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                    if (vErrors === null) {
                                      vErrors = [err68]
                                    } else {
                                      vErrors.push(err68)
                                    }
                                    errors++
                                  }
                                  var valid23 = _errs121 === errors
                                } else {
                                  var valid23 = true
                                }
                                if (valid23) {
                                  if (data32.slope !== undefined) {
                                    let data35 = data32.slope
                                    const _errs123 = errors
                                    const _errs124 = errors
                                    let valid24 = false
                                    const _errs125 = errors
                                    if (data35 !== null) {
                                      const err69 = {
                                        instancePath: instancePath + '/' + i0 + '/p2/slope',
                                        schemaPath: '#/items/anyOf/3/properties/p2/properties/slope/anyOf/0/type',
                                        keyword: 'type',
                                        params: { type: 'null' },
                                        message: 'must be null',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err69]
                                      } else {
                                        vErrors.push(err69)
                                      }
                                      errors++
                                    }
                                    var _valid12 = _errs125 === errors
                                    valid24 = valid24 || _valid12
                                    if (!valid24) {
                                      const _errs127 = errors
                                      if (!(typeof data35 == 'number' && isFinite(data35))) {
                                        const err70 = {
                                          instancePath: instancePath + '/' + i0 + '/p2/slope',
                                          schemaPath: '#/items/anyOf/3/properties/p2/properties/slope/anyOf/1/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err70]
                                        } else {
                                          vErrors.push(err70)
                                        }
                                        errors++
                                      }
                                      var _valid12 = _errs127 === errors
                                      valid24 = valid24 || _valid12
                                    }
                                    if (!valid24) {
                                      const err71 = {
                                        instancePath: instancePath + '/' + i0 + '/p2/slope',
                                        schemaPath: '#/items/anyOf/3/properties/p2/properties/slope/anyOf',
                                        keyword: 'anyOf',
                                        params: {},
                                        message: 'must match a schema in anyOf',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err71]
                                      } else {
                                        vErrors.push(err71)
                                      }
                                      errors++
                                    } else {
                                      errors = _errs124
                                      if (vErrors !== null) {
                                        if (_errs124) {
                                          vErrors.length = _errs124
                                        } else {
                                          vErrors = null
                                        }
                                      }
                                    }
                                    var valid23 = _errs123 === errors
                                  } else {
                                    var valid23 = true
                                  }
                                }
                              }
                            }
                          } else {
                            const err72 = { instancePath: instancePath + '/' + i0 + '/p2', schemaPath: '#/items/anyOf/3/properties/p2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                            if (vErrors === null) {
                              vErrors = [err72]
                            } else {
                              vErrors.push(err72)
                            }
                            errors++
                          }
                        }
                        var valid20 = _errs117 === errors
                      } else {
                        var valid20 = true
                      }
                      if (valid20) {
                        if (data0.p3 !== undefined) {
                          let data36 = data0.p3
                          const _errs129 = errors
                          if (errors === _errs129) {
                            if (data36 && typeof data36 == 'object' && !Array.isArray(data36)) {
                              let missing11
                              if ((data36.x === undefined && (missing11 = 'x')) || (data36.y === undefined && (missing11 = 'y'))) {
                                const err73 = {
                                  instancePath: instancePath + '/' + i0 + '/p3',
                                  schemaPath: '#/items/anyOf/3/properties/p3/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing11 },
                                  message: "must have required property '" + missing11 + "'",
                                }
                                if (vErrors === null) {
                                  vErrors = [err73]
                                } else {
                                  vErrors.push(err73)
                                }
                                errors++
                              } else {
                                if (data36.x !== undefined) {
                                  let data37 = data36.x
                                  const _errs131 = errors
                                  if (!(typeof data37 == 'number' && isFinite(data37))) {
                                    const err74 = { instancePath: instancePath + '/' + i0 + '/p3/x', schemaPath: '#/items/anyOf/3/properties/p3/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                    if (vErrors === null) {
                                      vErrors = [err74]
                                    } else {
                                      vErrors.push(err74)
                                    }
                                    errors++
                                  }
                                  var valid25 = _errs131 === errors
                                } else {
                                  var valid25 = true
                                }
                                if (valid25) {
                                  if (data36.y !== undefined) {
                                    let data38 = data36.y
                                    const _errs133 = errors
                                    if (!(typeof data38 == 'number' && isFinite(data38))) {
                                      const err75 = { instancePath: instancePath + '/' + i0 + '/p3/y', schemaPath: '#/items/anyOf/3/properties/p3/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                      if (vErrors === null) {
                                        vErrors = [err75]
                                      } else {
                                        vErrors.push(err75)
                                      }
                                      errors++
                                    }
                                    var valid25 = _errs133 === errors
                                  } else {
                                    var valid25 = true
                                  }
                                  if (valid25) {
                                    if (data36.slope !== undefined) {
                                      let data39 = data36.slope
                                      const _errs135 = errors
                                      const _errs136 = errors
                                      let valid26 = false
                                      const _errs137 = errors
                                      if (data39 !== null) {
                                        const err76 = {
                                          instancePath: instancePath + '/' + i0 + '/p3/slope',
                                          schemaPath: '#/items/anyOf/3/properties/p3/properties/slope/anyOf/0/type',
                                          keyword: 'type',
                                          params: { type: 'null' },
                                          message: 'must be null',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err76]
                                        } else {
                                          vErrors.push(err76)
                                        }
                                        errors++
                                      }
                                      var _valid13 = _errs137 === errors
                                      valid26 = valid26 || _valid13
                                      if (!valid26) {
                                        const _errs139 = errors
                                        if (!(typeof data39 == 'number' && isFinite(data39))) {
                                          const err77 = {
                                            instancePath: instancePath + '/' + i0 + '/p3/slope',
                                            schemaPath: '#/items/anyOf/3/properties/p3/properties/slope/anyOf/1/type',
                                            keyword: 'type',
                                            params: { type: 'number' },
                                            message: 'must be number',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err77]
                                          } else {
                                            vErrors.push(err77)
                                          }
                                          errors++
                                        }
                                        var _valid13 = _errs139 === errors
                                        valid26 = valid26 || _valid13
                                      }
                                      if (!valid26) {
                                        const err78 = {
                                          instancePath: instancePath + '/' + i0 + '/p3/slope',
                                          schemaPath: '#/items/anyOf/3/properties/p3/properties/slope/anyOf',
                                          keyword: 'anyOf',
                                          params: {},
                                          message: 'must match a schema in anyOf',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err78]
                                        } else {
                                          vErrors.push(err78)
                                        }
                                        errors++
                                      } else {
                                        errors = _errs136
                                        if (vErrors !== null) {
                                          if (_errs136) {
                                            vErrors.length = _errs136
                                          } else {
                                            vErrors = null
                                          }
                                        }
                                      }
                                      var valid25 = _errs135 === errors
                                    } else {
                                      var valid25 = true
                                    }
                                  }
                                }
                              }
                            } else {
                              const err79 = { instancePath: instancePath + '/' + i0 + '/p3', schemaPath: '#/items/anyOf/3/properties/p3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                              if (vErrors === null) {
                                vErrors = [err79]
                              } else {
                                vErrors.push(err79)
                              }
                              errors++
                            }
                          }
                          var valid20 = _errs129 === errors
                        } else {
                          var valid20 = true
                        }
                        if (valid20) {
                          if (data0.p4 !== undefined) {
                            let data40 = data0.p4
                            const _errs141 = errors
                            if (errors === _errs141) {
                              if (data40 && typeof data40 == 'object' && !Array.isArray(data40)) {
                                let missing12
                                if ((data40.x === undefined && (missing12 = 'x')) || (data40.y === undefined && (missing12 = 'y'))) {
                                  const err80 = {
                                    instancePath: instancePath + '/' + i0 + '/p4',
                                    schemaPath: '#/items/anyOf/3/properties/p4/required',
                                    keyword: 'required',
                                    params: { missingProperty: missing12 },
                                    message: "must have required property '" + missing12 + "'",
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err80]
                                  } else {
                                    vErrors.push(err80)
                                  }
                                  errors++
                                } else {
                                  if (data40.x !== undefined) {
                                    let data41 = data40.x
                                    const _errs143 = errors
                                    if (!(typeof data41 == 'number' && isFinite(data41))) {
                                      const err81 = { instancePath: instancePath + '/' + i0 + '/p4/x', schemaPath: '#/items/anyOf/3/properties/p4/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                      if (vErrors === null) {
                                        vErrors = [err81]
                                      } else {
                                        vErrors.push(err81)
                                      }
                                      errors++
                                    }
                                    var valid27 = _errs143 === errors
                                  } else {
                                    var valid27 = true
                                  }
                                  if (valid27) {
                                    if (data40.y !== undefined) {
                                      let data42 = data40.y
                                      const _errs145 = errors
                                      if (!(typeof data42 == 'number' && isFinite(data42))) {
                                        const err82 = { instancePath: instancePath + '/' + i0 + '/p4/y', schemaPath: '#/items/anyOf/3/properties/p4/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                        if (vErrors === null) {
                                          vErrors = [err82]
                                        } else {
                                          vErrors.push(err82)
                                        }
                                        errors++
                                      }
                                      var valid27 = _errs145 === errors
                                    } else {
                                      var valid27 = true
                                    }
                                    if (valid27) {
                                      if (data40.slope !== undefined) {
                                        let data43 = data40.slope
                                        const _errs147 = errors
                                        const _errs148 = errors
                                        let valid28 = false
                                        const _errs149 = errors
                                        if (data43 !== null) {
                                          const err83 = {
                                            instancePath: instancePath + '/' + i0 + '/p4/slope',
                                            schemaPath: '#/items/anyOf/3/properties/p4/properties/slope/anyOf/0/type',
                                            keyword: 'type',
                                            params: { type: 'null' },
                                            message: 'must be null',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err83]
                                          } else {
                                            vErrors.push(err83)
                                          }
                                          errors++
                                        }
                                        var _valid14 = _errs149 === errors
                                        valid28 = valid28 || _valid14
                                        if (!valid28) {
                                          const _errs151 = errors
                                          if (!(typeof data43 == 'number' && isFinite(data43))) {
                                            const err84 = {
                                              instancePath: instancePath + '/' + i0 + '/p4/slope',
                                              schemaPath: '#/items/anyOf/3/properties/p4/properties/slope/anyOf/1/type',
                                              keyword: 'type',
                                              params: { type: 'number' },
                                              message: 'must be number',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err84]
                                            } else {
                                              vErrors.push(err84)
                                            }
                                            errors++
                                          }
                                          var _valid14 = _errs151 === errors
                                          valid28 = valid28 || _valid14
                                        }
                                        if (!valid28) {
                                          const err85 = {
                                            instancePath: instancePath + '/' + i0 + '/p4/slope',
                                            schemaPath: '#/items/anyOf/3/properties/p4/properties/slope/anyOf',
                                            keyword: 'anyOf',
                                            params: {},
                                            message: 'must match a schema in anyOf',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err85]
                                          } else {
                                            vErrors.push(err85)
                                          }
                                          errors++
                                        } else {
                                          errors = _errs148
                                          if (vErrors !== null) {
                                            if (_errs148) {
                                              vErrors.length = _errs148
                                            } else {
                                              vErrors = null
                                            }
                                          }
                                        }
                                        var valid27 = _errs147 === errors
                                      } else {
                                        var valid27 = true
                                      }
                                    }
                                  }
                                }
                              } else {
                                const err86 = { instancePath: instancePath + '/' + i0 + '/p4', schemaPath: '#/items/anyOf/3/properties/p4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                                if (vErrors === null) {
                                  vErrors = [err86]
                                } else {
                                  vErrors.push(err86)
                                }
                                errors++
                              }
                            }
                            var valid20 = _errs141 === errors
                          } else {
                            var valid20 = true
                          }
                          if (valid20) {
                            if (data0.width !== undefined) {
                              let data44 = data0.width
                              const _errs153 = errors
                              const _errs154 = errors
                              let valid29 = false
                              const _errs155 = errors
                              if (data44 !== null) {
                                const err87 = { instancePath: instancePath + '/' + i0 + '/width', schemaPath: '#/items/anyOf/3/properties/width/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                                if (vErrors === null) {
                                  vErrors = [err87]
                                } else {
                                  vErrors.push(err87)
                                }
                                errors++
                              }
                              var _valid15 = _errs155 === errors
                              valid29 = valid29 || _valid15
                              if (!valid29) {
                                const _errs157 = errors
                                if (!(typeof data44 == 'number' && isFinite(data44))) {
                                  const err88 = { instancePath: instancePath + '/' + i0 + '/width', schemaPath: '#/items/anyOf/3/properties/width/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                  if (vErrors === null) {
                                    vErrors = [err88]
                                  } else {
                                    vErrors.push(err88)
                                  }
                                  errors++
                                }
                                var _valid15 = _errs157 === errors
                                valid29 = valid29 || _valid15
                              }
                              if (!valid29) {
                                const err89 = { instancePath: instancePath + '/' + i0 + '/width', schemaPath: '#/items/anyOf/3/properties/width/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                if (vErrors === null) {
                                  vErrors = [err89]
                                } else {
                                  vErrors.push(err89)
                                }
                                errors++
                              } else {
                                errors = _errs154
                                if (vErrors !== null) {
                                  if (_errs154) {
                                    vErrors.length = _errs154
                                  } else {
                                    vErrors = null
                                  }
                                }
                              }
                              var valid20 = _errs153 === errors
                            } else {
                              var valid20 = true
                            }
                            if (valid20) {
                              if (data0.height !== undefined) {
                                let data45 = data0.height
                                const _errs159 = errors
                                const _errs160 = errors
                                let valid30 = false
                                const _errs161 = errors
                                if (data45 !== null) {
                                  const err90 = { instancePath: instancePath + '/' + i0 + '/height', schemaPath: '#/items/anyOf/3/properties/height/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                                  if (vErrors === null) {
                                    vErrors = [err90]
                                  } else {
                                    vErrors.push(err90)
                                  }
                                  errors++
                                }
                                var _valid16 = _errs161 === errors
                                valid30 = valid30 || _valid16
                                if (!valid30) {
                                  const _errs163 = errors
                                  if (!(typeof data45 == 'number' && isFinite(data45))) {
                                    const err91 = { instancePath: instancePath + '/' + i0 + '/height', schemaPath: '#/items/anyOf/3/properties/height/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                    if (vErrors === null) {
                                      vErrors = [err91]
                                    } else {
                                      vErrors.push(err91)
                                    }
                                    errors++
                                  }
                                  var _valid16 = _errs163 === errors
                                  valid30 = valid30 || _valid16
                                }
                                if (!valid30) {
                                  const err92 = { instancePath: instancePath + '/' + i0 + '/height', schemaPath: '#/items/anyOf/3/properties/height/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                  if (vErrors === null) {
                                    vErrors = [err92]
                                  } else {
                                    vErrors.push(err92)
                                  }
                                  errors++
                                } else {
                                  errors = _errs160
                                  if (vErrors !== null) {
                                    if (_errs160) {
                                      vErrors.length = _errs160
                                    } else {
                                      vErrors = null
                                    }
                                  }
                                }
                                var valid20 = _errs159 === errors
                              } else {
                                var valid20 = true
                              }
                              if (valid20) {
                                if (data0.area !== undefined) {
                                  let data46 = data0.area
                                  const _errs165 = errors
                                  const _errs166 = errors
                                  let valid31 = false
                                  const _errs167 = errors
                                  if (data46 !== null) {
                                    const err93 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/3/properties/area/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                                    if (vErrors === null) {
                                      vErrors = [err93]
                                    } else {
                                      vErrors.push(err93)
                                    }
                                    errors++
                                  }
                                  var _valid17 = _errs167 === errors
                                  valid31 = valid31 || _valid17
                                  if (!valid31) {
                                    const _errs169 = errors
                                    if (!(typeof data46 == 'number' && isFinite(data46))) {
                                      const err94 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/3/properties/area/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                      if (vErrors === null) {
                                        vErrors = [err94]
                                      } else {
                                        vErrors.push(err94)
                                      }
                                      errors++
                                    }
                                    var _valid17 = _errs169 === errors
                                    valid31 = valid31 || _valid17
                                  }
                                  if (!valid31) {
                                    const err95 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/3/properties/area/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                    if (vErrors === null) {
                                      vErrors = [err95]
                                    } else {
                                      vErrors.push(err95)
                                    }
                                    errors++
                                  } else {
                                    errors = _errs166
                                    if (vErrors !== null) {
                                      if (_errs166) {
                                        vErrors.length = _errs166
                                      } else {
                                        vErrors = null
                                      }
                                    }
                                  }
                                  var valid20 = _errs165 === errors
                                } else {
                                  var valid20 = true
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  const err96 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err96]
                  } else {
                    vErrors.push(err96)
                  }
                  errors++
                }
              }
              var _valid0 = _errs103 === errors
              valid1 = valid1 || _valid0
              if (!valid1) {
                const _errs171 = errors
                if (errors === _errs171) {
                  if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                    let missing13
                    if (data0.points === undefined && (missing13 = 'points')) {
                      const err97 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/required', keyword: 'required', params: { missingProperty: missing13 }, message: "must have required property '" + missing13 + "'" }
                      if (vErrors === null) {
                        vErrors = [err97]
                      } else {
                        vErrors.push(err97)
                      }
                      errors++
                    } else {
                      if (data0.points !== undefined) {
                        let data47 = data0.points
                        const _errs173 = errors
                        if (errors === _errs173) {
                          if (Array.isArray(data47)) {
                            var valid33 = true
                            const len1 = data47.length
                            for (let i1 = 0; i1 < len1; i1++) {
                              let data48 = data47[i1]
                              const _errs175 = errors
                              if (errors === _errs175) {
                                if (data48 && typeof data48 == 'object' && !Array.isArray(data48)) {
                                  let missing14
                                  if ((data48.x === undefined && (missing14 = 'x')) || (data48.y === undefined && (missing14 = 'y'))) {
                                    const err98 = {
                                      instancePath: instancePath + '/' + i0 + '/points/' + i1,
                                      schemaPath: '#/items/anyOf/4/properties/points/items/required',
                                      keyword: 'required',
                                      params: { missingProperty: missing14 },
                                      message: "must have required property '" + missing14 + "'",
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err98]
                                    } else {
                                      vErrors.push(err98)
                                    }
                                    errors++
                                  } else {
                                    if (data48.x !== undefined) {
                                      let data49 = data48.x
                                      const _errs177 = errors
                                      if (!(typeof data49 == 'number' && isFinite(data49))) {
                                        const err99 = {
                                          instancePath: instancePath + '/' + i0 + '/points/' + i1 + '/x',
                                          schemaPath: '#/items/anyOf/4/properties/points/items/properties/x/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err99]
                                        } else {
                                          vErrors.push(err99)
                                        }
                                        errors++
                                      }
                                      var valid34 = _errs177 === errors
                                    } else {
                                      var valid34 = true
                                    }
                                    if (valid34) {
                                      if (data48.y !== undefined) {
                                        let data50 = data48.y
                                        const _errs179 = errors
                                        if (!(typeof data50 == 'number' && isFinite(data50))) {
                                          const err100 = {
                                            instancePath: instancePath + '/' + i0 + '/points/' + i1 + '/y',
                                            schemaPath: '#/items/anyOf/4/properties/points/items/properties/y/type',
                                            keyword: 'type',
                                            params: { type: 'number' },
                                            message: 'must be number',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err100]
                                          } else {
                                            vErrors.push(err100)
                                          }
                                          errors++
                                        }
                                        var valid34 = _errs179 === errors
                                      } else {
                                        var valid34 = true
                                      }
                                      if (valid34) {
                                        if (data48.slope !== undefined) {
                                          let data51 = data48.slope
                                          const _errs181 = errors
                                          const _errs182 = errors
                                          let valid35 = false
                                          const _errs183 = errors
                                          if (data51 !== null) {
                                            const err101 = {
                                              instancePath: instancePath + '/' + i0 + '/points/' + i1 + '/slope',
                                              schemaPath: '#/items/anyOf/4/properties/points/items/properties/slope/anyOf/0/type',
                                              keyword: 'type',
                                              params: { type: 'null' },
                                              message: 'must be null',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err101]
                                            } else {
                                              vErrors.push(err101)
                                            }
                                            errors++
                                          }
                                          var _valid18 = _errs183 === errors
                                          valid35 = valid35 || _valid18
                                          if (!valid35) {
                                            const _errs185 = errors
                                            if (!(typeof data51 == 'number' && isFinite(data51))) {
                                              const err102 = {
                                                instancePath: instancePath + '/' + i0 + '/points/' + i1 + '/slope',
                                                schemaPath: '#/items/anyOf/4/properties/points/items/properties/slope/anyOf/1/type',
                                                keyword: 'type',
                                                params: { type: 'number' },
                                                message: 'must be number',
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err102]
                                              } else {
                                                vErrors.push(err102)
                                              }
                                              errors++
                                            }
                                            var _valid18 = _errs185 === errors
                                            valid35 = valid35 || _valid18
                                          }
                                          if (!valid35) {
                                            const err103 = {
                                              instancePath: instancePath + '/' + i0 + '/points/' + i1 + '/slope',
                                              schemaPath: '#/items/anyOf/4/properties/points/items/properties/slope/anyOf',
                                              keyword: 'anyOf',
                                              params: {},
                                              message: 'must match a schema in anyOf',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err103]
                                            } else {
                                              vErrors.push(err103)
                                            }
                                            errors++
                                          } else {
                                            errors = _errs182
                                            if (vErrors !== null) {
                                              if (_errs182) {
                                                vErrors.length = _errs182
                                              } else {
                                                vErrors = null
                                              }
                                            }
                                          }
                                          var valid34 = _errs181 === errors
                                        } else {
                                          var valid34 = true
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  const err104 = { instancePath: instancePath + '/' + i0 + '/points/' + i1, schemaPath: '#/items/anyOf/4/properties/points/items/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                                  if (vErrors === null) {
                                    vErrors = [err104]
                                  } else {
                                    vErrors.push(err104)
                                  }
                                  errors++
                                }
                              }
                              var valid33 = _errs175 === errors
                              if (!valid33) {
                                break
                              }
                            }
                          } else {
                            const err105 = { instancePath: instancePath + '/' + i0 + '/points', schemaPath: '#/items/anyOf/4/properties/points/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                            if (vErrors === null) {
                              vErrors = [err105]
                            } else {
                              vErrors.push(err105)
                            }
                            errors++
                          }
                        }
                        var valid32 = _errs173 === errors
                      } else {
                        var valid32 = true
                      }
                      if (valid32) {
                        if (data0.length !== undefined) {
                          let data52 = data0.length
                          const _errs187 = errors
                          const _errs188 = errors
                          let valid36 = false
                          const _errs189 = errors
                          if (data52 !== null) {
                            const err106 = { instancePath: instancePath + '/' + i0 + '/length', schemaPath: '#/items/anyOf/4/properties/length/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                            if (vErrors === null) {
                              vErrors = [err106]
                            } else {
                              vErrors.push(err106)
                            }
                            errors++
                          }
                          var _valid19 = _errs189 === errors
                          valid36 = valid36 || _valid19
                          if (!valid36) {
                            const _errs191 = errors
                            if (!(typeof data52 == 'number' && isFinite(data52))) {
                              const err107 = { instancePath: instancePath + '/' + i0 + '/length', schemaPath: '#/items/anyOf/4/properties/length/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err107]
                              } else {
                                vErrors.push(err107)
                              }
                              errors++
                            }
                            var _valid19 = _errs191 === errors
                            valid36 = valid36 || _valid19
                          }
                          if (!valid36) {
                            const err108 = { instancePath: instancePath + '/' + i0 + '/length', schemaPath: '#/items/anyOf/4/properties/length/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                            if (vErrors === null) {
                              vErrors = [err108]
                            } else {
                              vErrors.push(err108)
                            }
                            errors++
                          } else {
                            errors = _errs188
                            if (vErrors !== null) {
                              if (_errs188) {
                                vErrors.length = _errs188
                              } else {
                                vErrors = null
                              }
                            }
                          }
                          var valid32 = _errs187 === errors
                        } else {
                          var valid32 = true
                        }
                      }
                    }
                  } else {
                    const err109 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err109]
                    } else {
                      vErrors.push(err109)
                    }
                    errors++
                  }
                }
                var _valid0 = _errs171 === errors
                valid1 = valid1 || _valid0
                if (!valid1) {
                  const _errs193 = errors
                  if (errors === _errs193) {
                    if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                      let missing15
                      if (data0.outer === undefined && (missing15 = 'outer')) {
                        const err110 = {
                          instancePath: instancePath + '/' + i0,
                          schemaPath: '#/items/anyOf/5/required',
                          keyword: 'required',
                          params: { missingProperty: missing15 },
                          message: "must have required property '" + missing15 + "'",
                        }
                        if (vErrors === null) {
                          vErrors = [err110]
                        } else {
                          vErrors.push(err110)
                        }
                        errors++
                      } else {
                        if (data0.outer !== undefined) {
                          let data53 = data0.outer
                          const _errs195 = errors
                          if (errors === _errs195) {
                            if (data53 && typeof data53 == 'object' && !Array.isArray(data53)) {
                              let missing16
                              if (data53.points === undefined && (missing16 = 'points')) {
                                const err111 = {
                                  instancePath: instancePath + '/' + i0 + '/outer',
                                  schemaPath: '#/items/anyOf/5/properties/outer/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing16 },
                                  message: "must have required property '" + missing16 + "'",
                                }
                                if (vErrors === null) {
                                  vErrors = [err111]
                                } else {
                                  vErrors.push(err111)
                                }
                                errors++
                              } else {
                                if (data53.points !== undefined) {
                                  let data54 = data53.points
                                  const _errs197 = errors
                                  if (errors === _errs197) {
                                    if (Array.isArray(data54)) {
                                      var valid39 = true
                                      const len2 = data54.length
                                      for (let i2 = 0; i2 < len2; i2++) {
                                        let data55 = data54[i2]
                                        const _errs199 = errors
                                        if (errors === _errs199) {
                                          if (data55 && typeof data55 == 'object' && !Array.isArray(data55)) {
                                            let missing17
                                            if ((data55.x === undefined && (missing17 = 'x')) || (data55.y === undefined && (missing17 = 'y'))) {
                                              const err112 = {
                                                instancePath: instancePath + '/' + i0 + '/outer/points/' + i2,
                                                schemaPath: '#/items/anyOf/5/properties/outer/properties/points/items/required',
                                                keyword: 'required',
                                                params: { missingProperty: missing17 },
                                                message: "must have required property '" + missing17 + "'",
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err112]
                                              } else {
                                                vErrors.push(err112)
                                              }
                                              errors++
                                            } else {
                                              if (data55.x !== undefined) {
                                                let data56 = data55.x
                                                const _errs201 = errors
                                                if (!(typeof data56 == 'number' && isFinite(data56))) {
                                                  const err113 = {
                                                    instancePath: instancePath + '/' + i0 + '/outer/points/' + i2 + '/x',
                                                    schemaPath: '#/items/anyOf/5/properties/outer/properties/points/items/properties/x/type',
                                                    keyword: 'type',
                                                    params: { type: 'number' },
                                                    message: 'must be number',
                                                  }
                                                  if (vErrors === null) {
                                                    vErrors = [err113]
                                                  } else {
                                                    vErrors.push(err113)
                                                  }
                                                  errors++
                                                }
                                                var valid40 = _errs201 === errors
                                              } else {
                                                var valid40 = true
                                              }
                                              if (valid40) {
                                                if (data55.y !== undefined) {
                                                  let data57 = data55.y
                                                  const _errs203 = errors
                                                  if (!(typeof data57 == 'number' && isFinite(data57))) {
                                                    const err114 = {
                                                      instancePath: instancePath + '/' + i0 + '/outer/points/' + i2 + '/y',
                                                      schemaPath: '#/items/anyOf/5/properties/outer/properties/points/items/properties/y/type',
                                                      keyword: 'type',
                                                      params: { type: 'number' },
                                                      message: 'must be number',
                                                    }
                                                    if (vErrors === null) {
                                                      vErrors = [err114]
                                                    } else {
                                                      vErrors.push(err114)
                                                    }
                                                    errors++
                                                  }
                                                  var valid40 = _errs203 === errors
                                                } else {
                                                  var valid40 = true
                                                }
                                                if (valid40) {
                                                  if (data55.slope !== undefined) {
                                                    let data58 = data55.slope
                                                    const _errs205 = errors
                                                    const _errs206 = errors
                                                    let valid41 = false
                                                    const _errs207 = errors
                                                    if (data58 !== null) {
                                                      const err115 = {
                                                        instancePath: instancePath + '/' + i0 + '/outer/points/' + i2 + '/slope',
                                                        schemaPath: '#/items/anyOf/5/properties/outer/properties/points/items/properties/slope/anyOf/0/type',
                                                        keyword: 'type',
                                                        params: { type: 'null' },
                                                        message: 'must be null',
                                                      }
                                                      if (vErrors === null) {
                                                        vErrors = [err115]
                                                      } else {
                                                        vErrors.push(err115)
                                                      }
                                                      errors++
                                                    }
                                                    var _valid20 = _errs207 === errors
                                                    valid41 = valid41 || _valid20
                                                    if (!valid41) {
                                                      const _errs209 = errors
                                                      if (!(typeof data58 == 'number' && isFinite(data58))) {
                                                        const err116 = {
                                                          instancePath: instancePath + '/' + i0 + '/outer/points/' + i2 + '/slope',
                                                          schemaPath: '#/items/anyOf/5/properties/outer/properties/points/items/properties/slope/anyOf/1/type',
                                                          keyword: 'type',
                                                          params: { type: 'number' },
                                                          message: 'must be number',
                                                        }
                                                        if (vErrors === null) {
                                                          vErrors = [err116]
                                                        } else {
                                                          vErrors.push(err116)
                                                        }
                                                        errors++
                                                      }
                                                      var _valid20 = _errs209 === errors
                                                      valid41 = valid41 || _valid20
                                                    }
                                                    if (!valid41) {
                                                      const err117 = {
                                                        instancePath: instancePath + '/' + i0 + '/outer/points/' + i2 + '/slope',
                                                        schemaPath: '#/items/anyOf/5/properties/outer/properties/points/items/properties/slope/anyOf',
                                                        keyword: 'anyOf',
                                                        params: {},
                                                        message: 'must match a schema in anyOf',
                                                      }
                                                      if (vErrors === null) {
                                                        vErrors = [err117]
                                                      } else {
                                                        vErrors.push(err117)
                                                      }
                                                      errors++
                                                    } else {
                                                      errors = _errs206
                                                      if (vErrors !== null) {
                                                        if (_errs206) {
                                                          vErrors.length = _errs206
                                                        } else {
                                                          vErrors = null
                                                        }
                                                      }
                                                    }
                                                    var valid40 = _errs205 === errors
                                                  } else {
                                                    var valid40 = true
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            const err118 = {
                                              instancePath: instancePath + '/' + i0 + '/outer/points/' + i2,
                                              schemaPath: '#/items/anyOf/5/properties/outer/properties/points/items/type',
                                              keyword: 'type',
                                              params: { type: 'object' },
                                              message: 'must be object',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err118]
                                            } else {
                                              vErrors.push(err118)
                                            }
                                            errors++
                                          }
                                        }
                                        var valid39 = _errs199 === errors
                                        if (!valid39) {
                                          break
                                        }
                                      }
                                    } else {
                                      const err119 = {
                                        instancePath: instancePath + '/' + i0 + '/outer/points',
                                        schemaPath: '#/items/anyOf/5/properties/outer/properties/points/type',
                                        keyword: 'type',
                                        params: { type: 'array' },
                                        message: 'must be array',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err119]
                                      } else {
                                        vErrors.push(err119)
                                      }
                                      errors++
                                    }
                                  }
                                  var valid38 = _errs197 === errors
                                } else {
                                  var valid38 = true
                                }
                                if (valid38) {
                                  if (data53.length !== undefined) {
                                    let data59 = data53.length
                                    const _errs211 = errors
                                    const _errs212 = errors
                                    let valid42 = false
                                    const _errs213 = errors
                                    if (data59 !== null) {
                                      const err120 = {
                                        instancePath: instancePath + '/' + i0 + '/outer/length',
                                        schemaPath: '#/items/anyOf/5/properties/outer/properties/length/anyOf/0/type',
                                        keyword: 'type',
                                        params: { type: 'null' },
                                        message: 'must be null',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err120]
                                      } else {
                                        vErrors.push(err120)
                                      }
                                      errors++
                                    }
                                    var _valid21 = _errs213 === errors
                                    valid42 = valid42 || _valid21
                                    if (!valid42) {
                                      const _errs215 = errors
                                      if (!(typeof data59 == 'number' && isFinite(data59))) {
                                        const err121 = {
                                          instancePath: instancePath + '/' + i0 + '/outer/length',
                                          schemaPath: '#/items/anyOf/5/properties/outer/properties/length/anyOf/1/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err121]
                                        } else {
                                          vErrors.push(err121)
                                        }
                                        errors++
                                      }
                                      var _valid21 = _errs215 === errors
                                      valid42 = valid42 || _valid21
                                    }
                                    if (!valid42) {
                                      const err122 = {
                                        instancePath: instancePath + '/' + i0 + '/outer/length',
                                        schemaPath: '#/items/anyOf/5/properties/outer/properties/length/anyOf',
                                        keyword: 'anyOf',
                                        params: {},
                                        message: 'must match a schema in anyOf',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err122]
                                      } else {
                                        vErrors.push(err122)
                                      }
                                      errors++
                                    } else {
                                      errors = _errs212
                                      if (vErrors !== null) {
                                        if (_errs212) {
                                          vErrors.length = _errs212
                                        } else {
                                          vErrors = null
                                        }
                                      }
                                    }
                                    var valid38 = _errs211 === errors
                                  } else {
                                    var valid38 = true
                                  }
                                }
                              }
                            } else {
                              const err123 = { instancePath: instancePath + '/' + i0 + '/outer', schemaPath: '#/items/anyOf/5/properties/outer/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                              if (vErrors === null) {
                                vErrors = [err123]
                              } else {
                                vErrors.push(err123)
                              }
                              errors++
                            }
                          }
                          var valid37 = _errs195 === errors
                        } else {
                          var valid37 = true
                        }
                        if (valid37) {
                          if (data0.inner !== undefined) {
                            let data60 = data0.inner
                            const _errs217 = errors
                            if (errors === _errs217) {
                              if (Array.isArray(data60)) {
                                var valid43 = true
                                const len3 = data60.length
                                for (let i3 = 0; i3 < len3; i3++) {
                                  let data61 = data60[i3]
                                  const _errs219 = errors
                                  if (errors === _errs219) {
                                    if (data61 && typeof data61 == 'object' && !Array.isArray(data61)) {
                                      let missing18
                                      if (data61.points === undefined && (missing18 = 'points')) {
                                        const err124 = {
                                          instancePath: instancePath + '/' + i0 + '/inner/' + i3,
                                          schemaPath: '#/items/anyOf/5/properties/inner/items/required',
                                          keyword: 'required',
                                          params: { missingProperty: missing18 },
                                          message: "must have required property '" + missing18 + "'",
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err124]
                                        } else {
                                          vErrors.push(err124)
                                        }
                                        errors++
                                      } else {
                                        if (data61.points !== undefined) {
                                          let data62 = data61.points
                                          const _errs221 = errors
                                          if (errors === _errs221) {
                                            if (Array.isArray(data62)) {
                                              var valid45 = true
                                              const len4 = data62.length
                                              for (let i4 = 0; i4 < len4; i4++) {
                                                let data63 = data62[i4]
                                                const _errs223 = errors
                                                if (errors === _errs223) {
                                                  if (data63 && typeof data63 == 'object' && !Array.isArray(data63)) {
                                                    let missing19
                                                    if ((data63.x === undefined && (missing19 = 'x')) || (data63.y === undefined && (missing19 = 'y'))) {
                                                      const err125 = {
                                                        instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4,
                                                        schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/items/required',
                                                        keyword: 'required',
                                                        params: { missingProperty: missing19 },
                                                        message: "must have required property '" + missing19 + "'",
                                                      }
                                                      if (vErrors === null) {
                                                        vErrors = [err125]
                                                      } else {
                                                        vErrors.push(err125)
                                                      }
                                                      errors++
                                                    } else {
                                                      if (data63.x !== undefined) {
                                                        let data64 = data63.x
                                                        const _errs225 = errors
                                                        if (!(typeof data64 == 'number' && isFinite(data64))) {
                                                          const err126 = {
                                                            instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4 + '/x',
                                                            schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/items/properties/x/type',
                                                            keyword: 'type',
                                                            params: { type: 'number' },
                                                            message: 'must be number',
                                                          }
                                                          if (vErrors === null) {
                                                            vErrors = [err126]
                                                          } else {
                                                            vErrors.push(err126)
                                                          }
                                                          errors++
                                                        }
                                                        var valid46 = _errs225 === errors
                                                      } else {
                                                        var valid46 = true
                                                      }
                                                      if (valid46) {
                                                        if (data63.y !== undefined) {
                                                          let data65 = data63.y
                                                          const _errs227 = errors
                                                          if (!(typeof data65 == 'number' && isFinite(data65))) {
                                                            const err127 = {
                                                              instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4 + '/y',
                                                              schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/items/properties/y/type',
                                                              keyword: 'type',
                                                              params: { type: 'number' },
                                                              message: 'must be number',
                                                            }
                                                            if (vErrors === null) {
                                                              vErrors = [err127]
                                                            } else {
                                                              vErrors.push(err127)
                                                            }
                                                            errors++
                                                          }
                                                          var valid46 = _errs227 === errors
                                                        } else {
                                                          var valid46 = true
                                                        }
                                                        if (valid46) {
                                                          if (data63.slope !== undefined) {
                                                            let data66 = data63.slope
                                                            const _errs229 = errors
                                                            const _errs230 = errors
                                                            let valid47 = false
                                                            const _errs231 = errors
                                                            if (data66 !== null) {
                                                              const err128 = {
                                                                instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4 + '/slope',
                                                                schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/items/properties/slope/anyOf/0/type',
                                                                keyword: 'type',
                                                                params: { type: 'null' },
                                                                message: 'must be null',
                                                              }
                                                              if (vErrors === null) {
                                                                vErrors = [err128]
                                                              } else {
                                                                vErrors.push(err128)
                                                              }
                                                              errors++
                                                            }
                                                            var _valid22 = _errs231 === errors
                                                            valid47 = valid47 || _valid22
                                                            if (!valid47) {
                                                              const _errs233 = errors
                                                              if (!(typeof data66 == 'number' && isFinite(data66))) {
                                                                const err129 = {
                                                                  instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4 + '/slope',
                                                                  schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/items/properties/slope/anyOf/1/type',
                                                                  keyword: 'type',
                                                                  params: { type: 'number' },
                                                                  message: 'must be number',
                                                                }
                                                                if (vErrors === null) {
                                                                  vErrors = [err129]
                                                                } else {
                                                                  vErrors.push(err129)
                                                                }
                                                                errors++
                                                              }
                                                              var _valid22 = _errs233 === errors
                                                              valid47 = valid47 || _valid22
                                                            }
                                                            if (!valid47) {
                                                              const err130 = {
                                                                instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4 + '/slope',
                                                                schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/items/properties/slope/anyOf',
                                                                keyword: 'anyOf',
                                                                params: {},
                                                                message: 'must match a schema in anyOf',
                                                              }
                                                              if (vErrors === null) {
                                                                vErrors = [err130]
                                                              } else {
                                                                vErrors.push(err130)
                                                              }
                                                              errors++
                                                            } else {
                                                              errors = _errs230
                                                              if (vErrors !== null) {
                                                                if (_errs230) {
                                                                  vErrors.length = _errs230
                                                                } else {
                                                                  vErrors = null
                                                                }
                                                              }
                                                            }
                                                            var valid46 = _errs229 === errors
                                                          } else {
                                                            var valid46 = true
                                                          }
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    const err131 = {
                                                      instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4,
                                                      schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/items/type',
                                                      keyword: 'type',
                                                      params: { type: 'object' },
                                                      message: 'must be object',
                                                    }
                                                    if (vErrors === null) {
                                                      vErrors = [err131]
                                                    } else {
                                                      vErrors.push(err131)
                                                    }
                                                    errors++
                                                  }
                                                }
                                                var valid45 = _errs223 === errors
                                                if (!valid45) {
                                                  break
                                                }
                                              }
                                            } else {
                                              const err132 = {
                                                instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points',
                                                schemaPath: '#/items/anyOf/5/properties/inner/items/properties/points/type',
                                                keyword: 'type',
                                                params: { type: 'array' },
                                                message: 'must be array',
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err132]
                                              } else {
                                                vErrors.push(err132)
                                              }
                                              errors++
                                            }
                                          }
                                          var valid44 = _errs221 === errors
                                        } else {
                                          var valid44 = true
                                        }
                                        if (valid44) {
                                          if (data61.length !== undefined) {
                                            let data67 = data61.length
                                            const _errs235 = errors
                                            const _errs236 = errors
                                            let valid48 = false
                                            const _errs237 = errors
                                            if (data67 !== null) {
                                              const err133 = {
                                                instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/length',
                                                schemaPath: '#/items/anyOf/5/properties/inner/items/properties/length/anyOf/0/type',
                                                keyword: 'type',
                                                params: { type: 'null' },
                                                message: 'must be null',
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err133]
                                              } else {
                                                vErrors.push(err133)
                                              }
                                              errors++
                                            }
                                            var _valid23 = _errs237 === errors
                                            valid48 = valid48 || _valid23
                                            if (!valid48) {
                                              const _errs239 = errors
                                              if (!(typeof data67 == 'number' && isFinite(data67))) {
                                                const err134 = {
                                                  instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/length',
                                                  schemaPath: '#/items/anyOf/5/properties/inner/items/properties/length/anyOf/1/type',
                                                  keyword: 'type',
                                                  params: { type: 'number' },
                                                  message: 'must be number',
                                                }
                                                if (vErrors === null) {
                                                  vErrors = [err134]
                                                } else {
                                                  vErrors.push(err134)
                                                }
                                                errors++
                                              }
                                              var _valid23 = _errs239 === errors
                                              valid48 = valid48 || _valid23
                                            }
                                            if (!valid48) {
                                              const err135 = {
                                                instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/length',
                                                schemaPath: '#/items/anyOf/5/properties/inner/items/properties/length/anyOf',
                                                keyword: 'anyOf',
                                                params: {},
                                                message: 'must match a schema in anyOf',
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err135]
                                              } else {
                                                vErrors.push(err135)
                                              }
                                              errors++
                                            } else {
                                              errors = _errs236
                                              if (vErrors !== null) {
                                                if (_errs236) {
                                                  vErrors.length = _errs236
                                                } else {
                                                  vErrors = null
                                                }
                                              }
                                            }
                                            var valid44 = _errs235 === errors
                                          } else {
                                            var valid44 = true
                                          }
                                        }
                                      }
                                    } else {
                                      const err136 = {
                                        instancePath: instancePath + '/' + i0 + '/inner/' + i3,
                                        schemaPath: '#/items/anyOf/5/properties/inner/items/type',
                                        keyword: 'type',
                                        params: { type: 'object' },
                                        message: 'must be object',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err136]
                                      } else {
                                        vErrors.push(err136)
                                      }
                                      errors++
                                    }
                                  }
                                  var valid43 = _errs219 === errors
                                  if (!valid43) {
                                    break
                                  }
                                }
                              } else {
                                const err137 = { instancePath: instancePath + '/' + i0 + '/inner', schemaPath: '#/items/anyOf/5/properties/inner/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                                if (vErrors === null) {
                                  vErrors = [err137]
                                } else {
                                  vErrors.push(err137)
                                }
                                errors++
                              }
                            }
                            var valid37 = _errs217 === errors
                          } else {
                            var valid37 = true
                          }
                          if (valid37) {
                            if (data0.area !== undefined) {
                              let data68 = data0.area
                              const _errs241 = errors
                              const _errs242 = errors
                              let valid49 = false
                              const _errs243 = errors
                              if (data68 !== null) {
                                const err138 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/5/properties/area/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                                if (vErrors === null) {
                                  vErrors = [err138]
                                } else {
                                  vErrors.push(err138)
                                }
                                errors++
                              }
                              var _valid24 = _errs243 === errors
                              valid49 = valid49 || _valid24
                              if (!valid49) {
                                const _errs245 = errors
                                if (!(typeof data68 == 'number' && isFinite(data68))) {
                                  const err139 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/5/properties/area/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                  if (vErrors === null) {
                                    vErrors = [err139]
                                  } else {
                                    vErrors.push(err139)
                                  }
                                  errors++
                                }
                                var _valid24 = _errs245 === errors
                                valid49 = valid49 || _valid24
                              }
                              if (!valid49) {
                                const err140 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/5/properties/area/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                if (vErrors === null) {
                                  vErrors = [err140]
                                } else {
                                  vErrors.push(err140)
                                }
                                errors++
                              } else {
                                errors = _errs242
                                if (vErrors !== null) {
                                  if (_errs242) {
                                    vErrors.length = _errs242
                                  } else {
                                    vErrors = null
                                  }
                                }
                              }
                              var valid37 = _errs241 === errors
                            } else {
                              var valid37 = true
                            }
                          }
                        }
                      }
                    } else {
                      const err141 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/5/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err141]
                      } else {
                        vErrors.push(err141)
                      }
                      errors++
                    }
                  }
                  var _valid0 = _errs193 === errors
                  valid1 = valid1 || _valid0
                  if (!valid1) {
                    const _errs247 = errors
                    if (errors === _errs247) {
                      if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                        let missing20
                        if (data0.radius === undefined && (missing20 = 'radius')) {
                          const err142 = {
                            instancePath: instancePath + '/' + i0,
                            schemaPath: '#/items/anyOf/6/required',
                            keyword: 'required',
                            params: { missingProperty: missing20 },
                            message: "must have required property '" + missing20 + "'",
                          }
                          if (vErrors === null) {
                            vErrors = [err142]
                          } else {
                            vErrors.push(err142)
                          }
                          errors++
                        } else {
                          if (data0.centroid !== undefined) {
                            let data69 = data0.centroid
                            const _errs249 = errors
                            if (errors === _errs249) {
                              if (data69 && typeof data69 == 'object' && !Array.isArray(data69)) {
                                let missing21
                                if ((data69.x === undefined && (missing21 = 'x')) || (data69.y === undefined && (missing21 = 'y'))) {
                                  const err143 = {
                                    instancePath: instancePath + '/' + i0 + '/centroid',
                                    schemaPath: '#/items/anyOf/6/properties/centroid/required',
                                    keyword: 'required',
                                    params: { missingProperty: missing21 },
                                    message: "must have required property '" + missing21 + "'",
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err143]
                                  } else {
                                    vErrors.push(err143)
                                  }
                                  errors++
                                } else {
                                  if (data69.x !== undefined) {
                                    let data70 = data69.x
                                    const _errs251 = errors
                                    if (!(typeof data70 == 'number' && isFinite(data70))) {
                                      const err144 = {
                                        instancePath: instancePath + '/' + i0 + '/centroid/x',
                                        schemaPath: '#/items/anyOf/6/properties/centroid/properties/x/type',
                                        keyword: 'type',
                                        params: { type: 'number' },
                                        message: 'must be number',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err144]
                                      } else {
                                        vErrors.push(err144)
                                      }
                                      errors++
                                    }
                                    var valid51 = _errs251 === errors
                                  } else {
                                    var valid51 = true
                                  }
                                  if (valid51) {
                                    if (data69.y !== undefined) {
                                      let data71 = data69.y
                                      const _errs253 = errors
                                      if (!(typeof data71 == 'number' && isFinite(data71))) {
                                        const err145 = {
                                          instancePath: instancePath + '/' + i0 + '/centroid/y',
                                          schemaPath: '#/items/anyOf/6/properties/centroid/properties/y/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err145]
                                        } else {
                                          vErrors.push(err145)
                                        }
                                        errors++
                                      }
                                      var valid51 = _errs253 === errors
                                    } else {
                                      var valid51 = true
                                    }
                                    if (valid51) {
                                      if (data69.slope !== undefined) {
                                        let data72 = data69.slope
                                        const _errs255 = errors
                                        const _errs256 = errors
                                        let valid52 = false
                                        const _errs257 = errors
                                        if (data72 !== null) {
                                          const err146 = {
                                            instancePath: instancePath + '/' + i0 + '/centroid/slope',
                                            schemaPath: '#/items/anyOf/6/properties/centroid/properties/slope/anyOf/0/type',
                                            keyword: 'type',
                                            params: { type: 'null' },
                                            message: 'must be null',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err146]
                                          } else {
                                            vErrors.push(err146)
                                          }
                                          errors++
                                        }
                                        var _valid25 = _errs257 === errors
                                        valid52 = valid52 || _valid25
                                        if (!valid52) {
                                          const _errs259 = errors
                                          if (!(typeof data72 == 'number' && isFinite(data72))) {
                                            const err147 = {
                                              instancePath: instancePath + '/' + i0 + '/centroid/slope',
                                              schemaPath: '#/items/anyOf/6/properties/centroid/properties/slope/anyOf/1/type',
                                              keyword: 'type',
                                              params: { type: 'number' },
                                              message: 'must be number',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err147]
                                            } else {
                                              vErrors.push(err147)
                                            }
                                            errors++
                                          }
                                          var _valid25 = _errs259 === errors
                                          valid52 = valid52 || _valid25
                                        }
                                        if (!valid52) {
                                          const err148 = {
                                            instancePath: instancePath + '/' + i0 + '/centroid/slope',
                                            schemaPath: '#/items/anyOf/6/properties/centroid/properties/slope/anyOf',
                                            keyword: 'anyOf',
                                            params: {},
                                            message: 'must match a schema in anyOf',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err148]
                                          } else {
                                            vErrors.push(err148)
                                          }
                                          errors++
                                        } else {
                                          errors = _errs256
                                          if (vErrors !== null) {
                                            if (_errs256) {
                                              vErrors.length = _errs256
                                            } else {
                                              vErrors = null
                                            }
                                          }
                                        }
                                        var valid51 = _errs255 === errors
                                      } else {
                                        var valid51 = true
                                      }
                                    }
                                  }
                                }
                              } else {
                                const err149 = { instancePath: instancePath + '/' + i0 + '/centroid', schemaPath: '#/items/anyOf/6/properties/centroid/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                                if (vErrors === null) {
                                  vErrors = [err149]
                                } else {
                                  vErrors.push(err149)
                                }
                                errors++
                              }
                            }
                            var valid50 = _errs249 === errors
                          } else {
                            var valid50 = true
                          }
                          if (valid50) {
                            if (data0.radius !== undefined) {
                              let data73 = data0.radius
                              const _errs261 = errors
                              if (!(typeof data73 == 'number' && isFinite(data73))) {
                                const err150 = { instancePath: instancePath + '/' + i0 + '/radius', schemaPath: '#/items/anyOf/6/properties/radius/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err150]
                                } else {
                                  vErrors.push(err150)
                                }
                                errors++
                              }
                              var valid50 = _errs261 === errors
                            } else {
                              var valid50 = true
                            }
                            if (valid50) {
                              if (data0.area !== undefined) {
                                let data74 = data0.area
                                const _errs263 = errors
                                const _errs264 = errors
                                let valid53 = false
                                const _errs265 = errors
                                if (data74 !== null) {
                                  const err151 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/6/properties/area/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                                  if (vErrors === null) {
                                    vErrors = [err151]
                                  } else {
                                    vErrors.push(err151)
                                  }
                                  errors++
                                }
                                var _valid26 = _errs265 === errors
                                valid53 = valid53 || _valid26
                                if (!valid53) {
                                  const _errs267 = errors
                                  if (!(typeof data74 == 'number' && isFinite(data74))) {
                                    const err152 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/6/properties/area/anyOf/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                    if (vErrors === null) {
                                      vErrors = [err152]
                                    } else {
                                      vErrors.push(err152)
                                    }
                                    errors++
                                  }
                                  var _valid26 = _errs267 === errors
                                  valid53 = valid53 || _valid26
                                }
                                if (!valid53) {
                                  const err153 = { instancePath: instancePath + '/' + i0 + '/area', schemaPath: '#/items/anyOf/6/properties/area/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                  if (vErrors === null) {
                                    vErrors = [err153]
                                  } else {
                                    vErrors.push(err153)
                                  }
                                  errors++
                                } else {
                                  errors = _errs264
                                  if (vErrors !== null) {
                                    if (_errs264) {
                                      vErrors.length = _errs264
                                    } else {
                                      vErrors = null
                                    }
                                  }
                                }
                                var valid50 = _errs263 === errors
                              } else {
                                var valid50 = true
                              }
                            }
                          }
                        }
                      } else {
                        const err154 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/6/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                        if (vErrors === null) {
                          vErrors = [err154]
                        } else {
                          vErrors.push(err154)
                        }
                        errors++
                      }
                    }
                    var _valid0 = _errs247 === errors
                    valid1 = valid1 || _valid0
                  }
                }
              }
            }
          }
        }
        if (!valid1) {
          const err155 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
          if (vErrors === null) {
            vErrors = [err155]
          } else {
            vErrors.push(err155)
          }
          errors++
          validate10.errors = vErrors
          return false
        } else {
          errors = _errs2
          if (vErrors !== null) {
            if (_errs2) {
              vErrors.length = _errs2
            } else {
              vErrors = null
            }
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
