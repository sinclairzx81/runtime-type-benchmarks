// @ts-nocheck
'use strict'
export const Typia_Object_Union_Explicit = validate10
const schema11 = {
  $id: 'Typia_Object_Union_Explicit',
  description: 'Should validate the Typia_Object_Union_Explicit structure',
  type: 'array',
  items: {
    anyOf: [
      {
        type: 'object',
        allOf: [
          { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
          { type: 'object', properties: { type: { const: 'point', type: 'string' } }, required: ['type'] },
        ],
      },
      {
        type: 'object',
        allOf: [
          {
            type: 'object',
            properties: {
              p1: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
              p2: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
            },
            required: ['p1', 'p2'],
          },
          { type: 'object', properties: { type: { const: 'line', type: 'string' } }, required: ['type'] },
        ],
      },
      {
        type: 'object',
        allOf: [
          {
            type: 'object',
            properties: {
              p1: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
              p2: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
              p3: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
            },
            required: ['p1', 'p2', 'p3'],
          },
          { type: 'object', properties: { type: { const: 'triangle', type: 'string' } }, required: ['type'] },
        ],
      },
      {
        type: 'object',
        allOf: [
          {
            type: 'object',
            properties: {
              p1: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
              p2: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
              p3: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
              p4: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] },
            },
            required: ['p1', 'p2', 'p3', 'p4'],
          },
          { type: 'object', properties: { type: { const: 'rectangle', type: 'string' } }, required: ['type'] },
        ],
      },
      {
        type: 'object',
        allOf: [
          { type: 'object', properties: { points: { type: 'array', items: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] } } }, required: ['points'] },
          { type: 'object', properties: { type: { const: 'polyline', type: 'string' } }, required: ['type'] },
        ],
      },
      {
        type: 'object',
        allOf: [
          {
            type: 'object',
            properties: {
              outer: { type: 'object', properties: { points: { type: 'array', items: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] } } }, required: ['points'] },
              inner: {
                type: 'array',
                items: { type: 'object', properties: { points: { type: 'array', items: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] } } }, required: ['points'] },
              },
            },
            required: ['outer', 'inner'],
          },
          { type: 'object', properties: { type: { const: 'polygon', type: 'string' } }, required: ['type'] },
        ],
      },
      {
        type: 'object',
        allOf: [
          { type: 'object', properties: { centroid: { type: 'object', properties: { x: { type: 'number' }, y: { type: 'number' } }, required: ['x', 'y'] }, radius: { type: 'number' } }, required: ['centroid', 'radius'] },
          { type: 'object', properties: { type: { const: 'circle', type: 'string' } }, required: ['type'] },
        ],
      },
    ],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Typia_Object_Union_Explicit" */ let vErrors = null
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
        if (!(data0 && typeof data0 == 'object' && !Array.isArray(data0))) {
          const err0 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
          if (vErrors === null) {
            vErrors = [err0]
          } else {
            vErrors.push(err0)
          }
          errors++
        }
        const _errs5 = errors
        if (errors === _errs5) {
          if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
            let missing0
            if ((data0.x === undefined && (missing0 = 'x')) || (data0.y === undefined && (missing0 = 'y'))) {
              const err1 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/allOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
              if (vErrors === null) {
                vErrors = [err1]
              } else {
                vErrors.push(err1)
              }
              errors++
            } else {
              if (data0.x !== undefined) {
                let data1 = data0.x
                const _errs7 = errors
                if (!(typeof data1 == 'number' && isFinite(data1))) {
                  const err2 = { instancePath: instancePath + '/' + i0 + '/x', schemaPath: '#/items/anyOf/0/allOf/0/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                  if (vErrors === null) {
                    vErrors = [err2]
                  } else {
                    vErrors.push(err2)
                  }
                  errors++
                }
                var valid3 = _errs7 === errors
              } else {
                var valid3 = true
              }
              if (valid3) {
                if (data0.y !== undefined) {
                  let data2 = data0.y
                  const _errs9 = errors
                  if (!(typeof data2 == 'number' && isFinite(data2))) {
                    const err3 = { instancePath: instancePath + '/' + i0 + '/y', schemaPath: '#/items/anyOf/0/allOf/0/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err3]
                    } else {
                      vErrors.push(err3)
                    }
                    errors++
                  }
                  var valid3 = _errs9 === errors
                } else {
                  var valid3 = true
                }
              }
            }
          } else {
            const err4 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err4]
            } else {
              vErrors.push(err4)
            }
            errors++
          }
        }
        var valid2 = _errs5 === errors
        if (valid2) {
          const _errs11 = errors
          if (errors === _errs11) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1
              if (data0.type === undefined && (missing1 = 'type')) {
                const err5 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/allOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
                if (vErrors === null) {
                  vErrors = [err5]
                } else {
                  vErrors.push(err5)
                }
                errors++
              } else {
                if (data0.type !== undefined) {
                  let data3 = data0.type
                  if (typeof data3 !== 'string') {
                    const err6 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/0/allOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err6]
                    } else {
                      vErrors.push(err6)
                    }
                    errors++
                  }
                  if ('point' !== data3) {
                    const err7 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/0/allOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'point' }, message: 'must be equal to constant' }
                    if (vErrors === null) {
                      vErrors = [err7]
                    } else {
                      vErrors.push(err7)
                    }
                    errors++
                  }
                }
              }
            } else {
              const err8 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err8]
              } else {
                vErrors.push(err8)
              }
              errors++
            }
          }
          var valid2 = _errs11 === errors
        }
        var _valid0 = _errs3 === errors
        valid1 = valid1 || _valid0
        if (!valid1) {
          const _errs15 = errors
          if (!(data0 && typeof data0 == 'object' && !Array.isArray(data0))) {
            const err9 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err9]
            } else {
              vErrors.push(err9)
            }
            errors++
          }
          const _errs17 = errors
          if (errors === _errs17) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing2
              if ((data0.p1 === undefined && (missing2 = 'p1')) || (data0.p2 === undefined && (missing2 = 'p2'))) {
                const err10 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/allOf/0/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
                if (vErrors === null) {
                  vErrors = [err10]
                } else {
                  vErrors.push(err10)
                }
                errors++
              } else {
                if (data0.p1 !== undefined) {
                  let data4 = data0.p1
                  const _errs19 = errors
                  if (errors === _errs19) {
                    if (data4 && typeof data4 == 'object' && !Array.isArray(data4)) {
                      let missing3
                      if ((data4.x === undefined && (missing3 = 'x')) || (data4.y === undefined && (missing3 = 'y'))) {
                        const err11 = {
                          instancePath: instancePath + '/' + i0 + '/p1',
                          schemaPath: '#/items/anyOf/1/allOf/0/properties/p1/required',
                          keyword: 'required',
                          params: { missingProperty: missing3 },
                          message: "must have required property '" + missing3 + "'",
                        }
                        if (vErrors === null) {
                          vErrors = [err11]
                        } else {
                          vErrors.push(err11)
                        }
                        errors++
                      } else {
                        if (data4.x !== undefined) {
                          let data5 = data4.x
                          const _errs21 = errors
                          if (!(typeof data5 == 'number' && isFinite(data5))) {
                            const err12 = { instancePath: instancePath + '/' + i0 + '/p1/x', schemaPath: '#/items/anyOf/1/allOf/0/properties/p1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err12]
                            } else {
                              vErrors.push(err12)
                            }
                            errors++
                          }
                          var valid7 = _errs21 === errors
                        } else {
                          var valid7 = true
                        }
                        if (valid7) {
                          if (data4.y !== undefined) {
                            let data6 = data4.y
                            const _errs23 = errors
                            if (!(typeof data6 == 'number' && isFinite(data6))) {
                              const err13 = { instancePath: instancePath + '/' + i0 + '/p1/y', schemaPath: '#/items/anyOf/1/allOf/0/properties/p1/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err13]
                              } else {
                                vErrors.push(err13)
                              }
                              errors++
                            }
                            var valid7 = _errs23 === errors
                          } else {
                            var valid7 = true
                          }
                        }
                      }
                    } else {
                      const err14 = { instancePath: instancePath + '/' + i0 + '/p1', schemaPath: '#/items/anyOf/1/allOf/0/properties/p1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err14]
                      } else {
                        vErrors.push(err14)
                      }
                      errors++
                    }
                  }
                  var valid6 = _errs19 === errors
                } else {
                  var valid6 = true
                }
                if (valid6) {
                  if (data0.p2 !== undefined) {
                    let data7 = data0.p2
                    const _errs25 = errors
                    if (errors === _errs25) {
                      if (data7 && typeof data7 == 'object' && !Array.isArray(data7)) {
                        let missing4
                        if ((data7.x === undefined && (missing4 = 'x')) || (data7.y === undefined && (missing4 = 'y'))) {
                          const err15 = {
                            instancePath: instancePath + '/' + i0 + '/p2',
                            schemaPath: '#/items/anyOf/1/allOf/0/properties/p2/required',
                            keyword: 'required',
                            params: { missingProperty: missing4 },
                            message: "must have required property '" + missing4 + "'",
                          }
                          if (vErrors === null) {
                            vErrors = [err15]
                          } else {
                            vErrors.push(err15)
                          }
                          errors++
                        } else {
                          if (data7.x !== undefined) {
                            let data8 = data7.x
                            const _errs27 = errors
                            if (!(typeof data8 == 'number' && isFinite(data8))) {
                              const err16 = { instancePath: instancePath + '/' + i0 + '/p2/x', schemaPath: '#/items/anyOf/1/allOf/0/properties/p2/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err16]
                              } else {
                                vErrors.push(err16)
                              }
                              errors++
                            }
                            var valid8 = _errs27 === errors
                          } else {
                            var valid8 = true
                          }
                          if (valid8) {
                            if (data7.y !== undefined) {
                              let data9 = data7.y
                              const _errs29 = errors
                              if (!(typeof data9 == 'number' && isFinite(data9))) {
                                const err17 = { instancePath: instancePath + '/' + i0 + '/p2/y', schemaPath: '#/items/anyOf/1/allOf/0/properties/p2/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err17]
                                } else {
                                  vErrors.push(err17)
                                }
                                errors++
                              }
                              var valid8 = _errs29 === errors
                            } else {
                              var valid8 = true
                            }
                          }
                        }
                      } else {
                        const err18 = { instancePath: instancePath + '/' + i0 + '/p2', schemaPath: '#/items/anyOf/1/allOf/0/properties/p2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                        if (vErrors === null) {
                          vErrors = [err18]
                        } else {
                          vErrors.push(err18)
                        }
                        errors++
                      }
                    }
                    var valid6 = _errs25 === errors
                  } else {
                    var valid6 = true
                  }
                }
              }
            } else {
              const err19 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err19]
              } else {
                vErrors.push(err19)
              }
              errors++
            }
          }
          var valid5 = _errs17 === errors
          if (valid5) {
            const _errs31 = errors
            if (errors === _errs31) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing5
                if (data0.type === undefined && (missing5 = 'type')) {
                  const err20 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/allOf/1/required', keyword: 'required', params: { missingProperty: missing5 }, message: "must have required property '" + missing5 + "'" }
                  if (vErrors === null) {
                    vErrors = [err20]
                  } else {
                    vErrors.push(err20)
                  }
                  errors++
                } else {
                  if (data0.type !== undefined) {
                    let data10 = data0.type
                    if (typeof data10 !== 'string') {
                      const err21 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/allOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err21]
                      } else {
                        vErrors.push(err21)
                      }
                      errors++
                    }
                    if ('line' !== data10) {
                      const err22 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/allOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'line' }, message: 'must be equal to constant' }
                      if (vErrors === null) {
                        vErrors = [err22]
                      } else {
                        vErrors.push(err22)
                      }
                      errors++
                    }
                  }
                }
              } else {
                const err23 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err23]
                } else {
                  vErrors.push(err23)
                }
                errors++
              }
            }
            var valid5 = _errs31 === errors
          }
          var _valid0 = _errs15 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs35 = errors
            if (!(data0 && typeof data0 == 'object' && !Array.isArray(data0))) {
              const err24 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err24]
              } else {
                vErrors.push(err24)
              }
              errors++
            }
            const _errs37 = errors
            if (errors === _errs37) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing6
                if ((data0.p1 === undefined && (missing6 = 'p1')) || (data0.p2 === undefined && (missing6 = 'p2')) || (data0.p3 === undefined && (missing6 = 'p3'))) {
                  const err25 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/allOf/0/required', keyword: 'required', params: { missingProperty: missing6 }, message: "must have required property '" + missing6 + "'" }
                  if (vErrors === null) {
                    vErrors = [err25]
                  } else {
                    vErrors.push(err25)
                  }
                  errors++
                } else {
                  if (data0.p1 !== undefined) {
                    let data11 = data0.p1
                    const _errs39 = errors
                    if (errors === _errs39) {
                      if (data11 && typeof data11 == 'object' && !Array.isArray(data11)) {
                        let missing7
                        if ((data11.x === undefined && (missing7 = 'x')) || (data11.y === undefined && (missing7 = 'y'))) {
                          const err26 = {
                            instancePath: instancePath + '/' + i0 + '/p1',
                            schemaPath: '#/items/anyOf/2/allOf/0/properties/p1/required',
                            keyword: 'required',
                            params: { missingProperty: missing7 },
                            message: "must have required property '" + missing7 + "'",
                          }
                          if (vErrors === null) {
                            vErrors = [err26]
                          } else {
                            vErrors.push(err26)
                          }
                          errors++
                        } else {
                          if (data11.x !== undefined) {
                            let data12 = data11.x
                            const _errs41 = errors
                            if (!(typeof data12 == 'number' && isFinite(data12))) {
                              const err27 = { instancePath: instancePath + '/' + i0 + '/p1/x', schemaPath: '#/items/anyOf/2/allOf/0/properties/p1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err27]
                              } else {
                                vErrors.push(err27)
                              }
                              errors++
                            }
                            var valid12 = _errs41 === errors
                          } else {
                            var valid12 = true
                          }
                          if (valid12) {
                            if (data11.y !== undefined) {
                              let data13 = data11.y
                              const _errs43 = errors
                              if (!(typeof data13 == 'number' && isFinite(data13))) {
                                const err28 = { instancePath: instancePath + '/' + i0 + '/p1/y', schemaPath: '#/items/anyOf/2/allOf/0/properties/p1/properties/y/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err28]
                                } else {
                                  vErrors.push(err28)
                                }
                                errors++
                              }
                              var valid12 = _errs43 === errors
                            } else {
                              var valid12 = true
                            }
                          }
                        }
                      } else {
                        const err29 = { instancePath: instancePath + '/' + i0 + '/p1', schemaPath: '#/items/anyOf/2/allOf/0/properties/p1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                        if (vErrors === null) {
                          vErrors = [err29]
                        } else {
                          vErrors.push(err29)
                        }
                        errors++
                      }
                    }
                    var valid11 = _errs39 === errors
                  } else {
                    var valid11 = true
                  }
                  if (valid11) {
                    if (data0.p2 !== undefined) {
                      let data14 = data0.p2
                      const _errs45 = errors
                      if (errors === _errs45) {
                        if (data14 && typeof data14 == 'object' && !Array.isArray(data14)) {
                          let missing8
                          if ((data14.x === undefined && (missing8 = 'x')) || (data14.y === undefined && (missing8 = 'y'))) {
                            const err30 = {
                              instancePath: instancePath + '/' + i0 + '/p2',
                              schemaPath: '#/items/anyOf/2/allOf/0/properties/p2/required',
                              keyword: 'required',
                              params: { missingProperty: missing8 },
                              message: "must have required property '" + missing8 + "'",
                            }
                            if (vErrors === null) {
                              vErrors = [err30]
                            } else {
                              vErrors.push(err30)
                            }
                            errors++
                          } else {
                            if (data14.x !== undefined) {
                              let data15 = data14.x
                              const _errs47 = errors
                              if (!(typeof data15 == 'number' && isFinite(data15))) {
                                const err31 = { instancePath: instancePath + '/' + i0 + '/p2/x', schemaPath: '#/items/anyOf/2/allOf/0/properties/p2/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err31]
                                } else {
                                  vErrors.push(err31)
                                }
                                errors++
                              }
                              var valid13 = _errs47 === errors
                            } else {
                              var valid13 = true
                            }
                            if (valid13) {
                              if (data14.y !== undefined) {
                                let data16 = data14.y
                                const _errs49 = errors
                                if (!(typeof data16 == 'number' && isFinite(data16))) {
                                  const err32 = {
                                    instancePath: instancePath + '/' + i0 + '/p2/y',
                                    schemaPath: '#/items/anyOf/2/allOf/0/properties/p2/properties/y/type',
                                    keyword: 'type',
                                    params: { type: 'number' },
                                    message: 'must be number',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err32]
                                  } else {
                                    vErrors.push(err32)
                                  }
                                  errors++
                                }
                                var valid13 = _errs49 === errors
                              } else {
                                var valid13 = true
                              }
                            }
                          }
                        } else {
                          const err33 = { instancePath: instancePath + '/' + i0 + '/p2', schemaPath: '#/items/anyOf/2/allOf/0/properties/p2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                          if (vErrors === null) {
                            vErrors = [err33]
                          } else {
                            vErrors.push(err33)
                          }
                          errors++
                        }
                      }
                      var valid11 = _errs45 === errors
                    } else {
                      var valid11 = true
                    }
                    if (valid11) {
                      if (data0.p3 !== undefined) {
                        let data17 = data0.p3
                        const _errs51 = errors
                        if (errors === _errs51) {
                          if (data17 && typeof data17 == 'object' && !Array.isArray(data17)) {
                            let missing9
                            if ((data17.x === undefined && (missing9 = 'x')) || (data17.y === undefined && (missing9 = 'y'))) {
                              const err34 = {
                                instancePath: instancePath + '/' + i0 + '/p3',
                                schemaPath: '#/items/anyOf/2/allOf/0/properties/p3/required',
                                keyword: 'required',
                                params: { missingProperty: missing9 },
                                message: "must have required property '" + missing9 + "'",
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
                                const _errs53 = errors
                                if (!(typeof data18 == 'number' && isFinite(data18))) {
                                  const err35 = {
                                    instancePath: instancePath + '/' + i0 + '/p3/x',
                                    schemaPath: '#/items/anyOf/2/allOf/0/properties/p3/properties/x/type',
                                    keyword: 'type',
                                    params: { type: 'number' },
                                    message: 'must be number',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err35]
                                  } else {
                                    vErrors.push(err35)
                                  }
                                  errors++
                                }
                                var valid14 = _errs53 === errors
                              } else {
                                var valid14 = true
                              }
                              if (valid14) {
                                if (data17.y !== undefined) {
                                  let data19 = data17.y
                                  const _errs55 = errors
                                  if (!(typeof data19 == 'number' && isFinite(data19))) {
                                    const err36 = {
                                      instancePath: instancePath + '/' + i0 + '/p3/y',
                                      schemaPath: '#/items/anyOf/2/allOf/0/properties/p3/properties/y/type',
                                      keyword: 'type',
                                      params: { type: 'number' },
                                      message: 'must be number',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err36]
                                    } else {
                                      vErrors.push(err36)
                                    }
                                    errors++
                                  }
                                  var valid14 = _errs55 === errors
                                } else {
                                  var valid14 = true
                                }
                              }
                            }
                          } else {
                            const err37 = { instancePath: instancePath + '/' + i0 + '/p3', schemaPath: '#/items/anyOf/2/allOf/0/properties/p3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                            if (vErrors === null) {
                              vErrors = [err37]
                            } else {
                              vErrors.push(err37)
                            }
                            errors++
                          }
                        }
                        var valid11 = _errs51 === errors
                      } else {
                        var valid11 = true
                      }
                    }
                  }
                }
              } else {
                const err38 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err38]
                } else {
                  vErrors.push(err38)
                }
                errors++
              }
            }
            var valid10 = _errs37 === errors
            if (valid10) {
              const _errs57 = errors
              if (errors === _errs57) {
                if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                  let missing10
                  if (data0.type === undefined && (missing10 = 'type')) {
                    const err39 = {
                      instancePath: instancePath + '/' + i0,
                      schemaPath: '#/items/anyOf/2/allOf/1/required',
                      keyword: 'required',
                      params: { missingProperty: missing10 },
                      message: "must have required property '" + missing10 + "'",
                    }
                    if (vErrors === null) {
                      vErrors = [err39]
                    } else {
                      vErrors.push(err39)
                    }
                    errors++
                  } else {
                    if (data0.type !== undefined) {
                      let data20 = data0.type
                      if (typeof data20 !== 'string') {
                        const err40 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/2/allOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err40]
                        } else {
                          vErrors.push(err40)
                        }
                        errors++
                      }
                      if ('triangle' !== data20) {
                        const err41 = {
                          instancePath: instancePath + '/' + i0 + '/type',
                          schemaPath: '#/items/anyOf/2/allOf/1/properties/type/const',
                          keyword: 'const',
                          params: { allowedValue: 'triangle' },
                          message: 'must be equal to constant',
                        }
                        if (vErrors === null) {
                          vErrors = [err41]
                        } else {
                          vErrors.push(err41)
                        }
                        errors++
                      }
                    }
                  }
                } else {
                  const err42 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err42]
                  } else {
                    vErrors.push(err42)
                  }
                  errors++
                }
              }
              var valid10 = _errs57 === errors
            }
            var _valid0 = _errs35 === errors
            valid1 = valid1 || _valid0
            if (!valid1) {
              const _errs61 = errors
              if (!(data0 && typeof data0 == 'object' && !Array.isArray(data0))) {
                const err43 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err43]
                } else {
                  vErrors.push(err43)
                }
                errors++
              }
              const _errs63 = errors
              if (errors === _errs63) {
                if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                  let missing11
                  if ((data0.p1 === undefined && (missing11 = 'p1')) || (data0.p2 === undefined && (missing11 = 'p2')) || (data0.p3 === undefined && (missing11 = 'p3')) || (data0.p4 === undefined && (missing11 = 'p4'))) {
                    const err44 = {
                      instancePath: instancePath + '/' + i0,
                      schemaPath: '#/items/anyOf/3/allOf/0/required',
                      keyword: 'required',
                      params: { missingProperty: missing11 },
                      message: "must have required property '" + missing11 + "'",
                    }
                    if (vErrors === null) {
                      vErrors = [err44]
                    } else {
                      vErrors.push(err44)
                    }
                    errors++
                  } else {
                    if (data0.p1 !== undefined) {
                      let data21 = data0.p1
                      const _errs65 = errors
                      if (errors === _errs65) {
                        if (data21 && typeof data21 == 'object' && !Array.isArray(data21)) {
                          let missing12
                          if ((data21.x === undefined && (missing12 = 'x')) || (data21.y === undefined && (missing12 = 'y'))) {
                            const err45 = {
                              instancePath: instancePath + '/' + i0 + '/p1',
                              schemaPath: '#/items/anyOf/3/allOf/0/properties/p1/required',
                              keyword: 'required',
                              params: { missingProperty: missing12 },
                              message: "must have required property '" + missing12 + "'",
                            }
                            if (vErrors === null) {
                              vErrors = [err45]
                            } else {
                              vErrors.push(err45)
                            }
                            errors++
                          } else {
                            if (data21.x !== undefined) {
                              let data22 = data21.x
                              const _errs67 = errors
                              if (!(typeof data22 == 'number' && isFinite(data22))) {
                                const err46 = { instancePath: instancePath + '/' + i0 + '/p1/x', schemaPath: '#/items/anyOf/3/allOf/0/properties/p1/properties/x/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err46]
                                } else {
                                  vErrors.push(err46)
                                }
                                errors++
                              }
                              var valid18 = _errs67 === errors
                            } else {
                              var valid18 = true
                            }
                            if (valid18) {
                              if (data21.y !== undefined) {
                                let data23 = data21.y
                                const _errs69 = errors
                                if (!(typeof data23 == 'number' && isFinite(data23))) {
                                  const err47 = {
                                    instancePath: instancePath + '/' + i0 + '/p1/y',
                                    schemaPath: '#/items/anyOf/3/allOf/0/properties/p1/properties/y/type',
                                    keyword: 'type',
                                    params: { type: 'number' },
                                    message: 'must be number',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err47]
                                  } else {
                                    vErrors.push(err47)
                                  }
                                  errors++
                                }
                                var valid18 = _errs69 === errors
                              } else {
                                var valid18 = true
                              }
                            }
                          }
                        } else {
                          const err48 = { instancePath: instancePath + '/' + i0 + '/p1', schemaPath: '#/items/anyOf/3/allOf/0/properties/p1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                          if (vErrors === null) {
                            vErrors = [err48]
                          } else {
                            vErrors.push(err48)
                          }
                          errors++
                        }
                      }
                      var valid17 = _errs65 === errors
                    } else {
                      var valid17 = true
                    }
                    if (valid17) {
                      if (data0.p2 !== undefined) {
                        let data24 = data0.p2
                        const _errs71 = errors
                        if (errors === _errs71) {
                          if (data24 && typeof data24 == 'object' && !Array.isArray(data24)) {
                            let missing13
                            if ((data24.x === undefined && (missing13 = 'x')) || (data24.y === undefined && (missing13 = 'y'))) {
                              const err49 = {
                                instancePath: instancePath + '/' + i0 + '/p2',
                                schemaPath: '#/items/anyOf/3/allOf/0/properties/p2/required',
                                keyword: 'required',
                                params: { missingProperty: missing13 },
                                message: "must have required property '" + missing13 + "'",
                              }
                              if (vErrors === null) {
                                vErrors = [err49]
                              } else {
                                vErrors.push(err49)
                              }
                              errors++
                            } else {
                              if (data24.x !== undefined) {
                                let data25 = data24.x
                                const _errs73 = errors
                                if (!(typeof data25 == 'number' && isFinite(data25))) {
                                  const err50 = {
                                    instancePath: instancePath + '/' + i0 + '/p2/x',
                                    schemaPath: '#/items/anyOf/3/allOf/0/properties/p2/properties/x/type',
                                    keyword: 'type',
                                    params: { type: 'number' },
                                    message: 'must be number',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err50]
                                  } else {
                                    vErrors.push(err50)
                                  }
                                  errors++
                                }
                                var valid19 = _errs73 === errors
                              } else {
                                var valid19 = true
                              }
                              if (valid19) {
                                if (data24.y !== undefined) {
                                  let data26 = data24.y
                                  const _errs75 = errors
                                  if (!(typeof data26 == 'number' && isFinite(data26))) {
                                    const err51 = {
                                      instancePath: instancePath + '/' + i0 + '/p2/y',
                                      schemaPath: '#/items/anyOf/3/allOf/0/properties/p2/properties/y/type',
                                      keyword: 'type',
                                      params: { type: 'number' },
                                      message: 'must be number',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err51]
                                    } else {
                                      vErrors.push(err51)
                                    }
                                    errors++
                                  }
                                  var valid19 = _errs75 === errors
                                } else {
                                  var valid19 = true
                                }
                              }
                            }
                          } else {
                            const err52 = { instancePath: instancePath + '/' + i0 + '/p2', schemaPath: '#/items/anyOf/3/allOf/0/properties/p2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                            if (vErrors === null) {
                              vErrors = [err52]
                            } else {
                              vErrors.push(err52)
                            }
                            errors++
                          }
                        }
                        var valid17 = _errs71 === errors
                      } else {
                        var valid17 = true
                      }
                      if (valid17) {
                        if (data0.p3 !== undefined) {
                          let data27 = data0.p3
                          const _errs77 = errors
                          if (errors === _errs77) {
                            if (data27 && typeof data27 == 'object' && !Array.isArray(data27)) {
                              let missing14
                              if ((data27.x === undefined && (missing14 = 'x')) || (data27.y === undefined && (missing14 = 'y'))) {
                                const err53 = {
                                  instancePath: instancePath + '/' + i0 + '/p3',
                                  schemaPath: '#/items/anyOf/3/allOf/0/properties/p3/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing14 },
                                  message: "must have required property '" + missing14 + "'",
                                }
                                if (vErrors === null) {
                                  vErrors = [err53]
                                } else {
                                  vErrors.push(err53)
                                }
                                errors++
                              } else {
                                if (data27.x !== undefined) {
                                  let data28 = data27.x
                                  const _errs79 = errors
                                  if (!(typeof data28 == 'number' && isFinite(data28))) {
                                    const err54 = {
                                      instancePath: instancePath + '/' + i0 + '/p3/x',
                                      schemaPath: '#/items/anyOf/3/allOf/0/properties/p3/properties/x/type',
                                      keyword: 'type',
                                      params: { type: 'number' },
                                      message: 'must be number',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err54]
                                    } else {
                                      vErrors.push(err54)
                                    }
                                    errors++
                                  }
                                  var valid20 = _errs79 === errors
                                } else {
                                  var valid20 = true
                                }
                                if (valid20) {
                                  if (data27.y !== undefined) {
                                    let data29 = data27.y
                                    const _errs81 = errors
                                    if (!(typeof data29 == 'number' && isFinite(data29))) {
                                      const err55 = {
                                        instancePath: instancePath + '/' + i0 + '/p3/y',
                                        schemaPath: '#/items/anyOf/3/allOf/0/properties/p3/properties/y/type',
                                        keyword: 'type',
                                        params: { type: 'number' },
                                        message: 'must be number',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err55]
                                      } else {
                                        vErrors.push(err55)
                                      }
                                      errors++
                                    }
                                    var valid20 = _errs81 === errors
                                  } else {
                                    var valid20 = true
                                  }
                                }
                              }
                            } else {
                              const err56 = { instancePath: instancePath + '/' + i0 + '/p3', schemaPath: '#/items/anyOf/3/allOf/0/properties/p3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                              if (vErrors === null) {
                                vErrors = [err56]
                              } else {
                                vErrors.push(err56)
                              }
                              errors++
                            }
                          }
                          var valid17 = _errs77 === errors
                        } else {
                          var valid17 = true
                        }
                        if (valid17) {
                          if (data0.p4 !== undefined) {
                            let data30 = data0.p4
                            const _errs83 = errors
                            if (errors === _errs83) {
                              if (data30 && typeof data30 == 'object' && !Array.isArray(data30)) {
                                let missing15
                                if ((data30.x === undefined && (missing15 = 'x')) || (data30.y === undefined && (missing15 = 'y'))) {
                                  const err57 = {
                                    instancePath: instancePath + '/' + i0 + '/p4',
                                    schemaPath: '#/items/anyOf/3/allOf/0/properties/p4/required',
                                    keyword: 'required',
                                    params: { missingProperty: missing15 },
                                    message: "must have required property '" + missing15 + "'",
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err57]
                                  } else {
                                    vErrors.push(err57)
                                  }
                                  errors++
                                } else {
                                  if (data30.x !== undefined) {
                                    let data31 = data30.x
                                    const _errs85 = errors
                                    if (!(typeof data31 == 'number' && isFinite(data31))) {
                                      const err58 = {
                                        instancePath: instancePath + '/' + i0 + '/p4/x',
                                        schemaPath: '#/items/anyOf/3/allOf/0/properties/p4/properties/x/type',
                                        keyword: 'type',
                                        params: { type: 'number' },
                                        message: 'must be number',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err58]
                                      } else {
                                        vErrors.push(err58)
                                      }
                                      errors++
                                    }
                                    var valid21 = _errs85 === errors
                                  } else {
                                    var valid21 = true
                                  }
                                  if (valid21) {
                                    if (data30.y !== undefined) {
                                      let data32 = data30.y
                                      const _errs87 = errors
                                      if (!(typeof data32 == 'number' && isFinite(data32))) {
                                        const err59 = {
                                          instancePath: instancePath + '/' + i0 + '/p4/y',
                                          schemaPath: '#/items/anyOf/3/allOf/0/properties/p4/properties/y/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err59]
                                        } else {
                                          vErrors.push(err59)
                                        }
                                        errors++
                                      }
                                      var valid21 = _errs87 === errors
                                    } else {
                                      var valid21 = true
                                    }
                                  }
                                }
                              } else {
                                const err60 = { instancePath: instancePath + '/' + i0 + '/p4', schemaPath: '#/items/anyOf/3/allOf/0/properties/p4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                                if (vErrors === null) {
                                  vErrors = [err60]
                                } else {
                                  vErrors.push(err60)
                                }
                                errors++
                              }
                            }
                            var valid17 = _errs83 === errors
                          } else {
                            var valid17 = true
                          }
                        }
                      }
                    }
                  }
                } else {
                  const err61 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err61]
                  } else {
                    vErrors.push(err61)
                  }
                  errors++
                }
              }
              var valid16 = _errs63 === errors
              if (valid16) {
                const _errs89 = errors
                if (errors === _errs89) {
                  if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                    let missing16
                    if (data0.type === undefined && (missing16 = 'type')) {
                      const err62 = {
                        instancePath: instancePath + '/' + i0,
                        schemaPath: '#/items/anyOf/3/allOf/1/required',
                        keyword: 'required',
                        params: { missingProperty: missing16 },
                        message: "must have required property '" + missing16 + "'",
                      }
                      if (vErrors === null) {
                        vErrors = [err62]
                      } else {
                        vErrors.push(err62)
                      }
                      errors++
                    } else {
                      if (data0.type !== undefined) {
                        let data33 = data0.type
                        if (typeof data33 !== 'string') {
                          const err63 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/3/allOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err63]
                          } else {
                            vErrors.push(err63)
                          }
                          errors++
                        }
                        if ('rectangle' !== data33) {
                          const err64 = {
                            instancePath: instancePath + '/' + i0 + '/type',
                            schemaPath: '#/items/anyOf/3/allOf/1/properties/type/const',
                            keyword: 'const',
                            params: { allowedValue: 'rectangle' },
                            message: 'must be equal to constant',
                          }
                          if (vErrors === null) {
                            vErrors = [err64]
                          } else {
                            vErrors.push(err64)
                          }
                          errors++
                        }
                      }
                    }
                  } else {
                    const err65 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err65]
                    } else {
                      vErrors.push(err65)
                    }
                    errors++
                  }
                }
                var valid16 = _errs89 === errors
              }
              var _valid0 = _errs61 === errors
              valid1 = valid1 || _valid0
              if (!valid1) {
                const _errs93 = errors
                if (!(data0 && typeof data0 == 'object' && !Array.isArray(data0))) {
                  const err66 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err66]
                  } else {
                    vErrors.push(err66)
                  }
                  errors++
                }
                const _errs95 = errors
                if (errors === _errs95) {
                  if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                    let missing17
                    if (data0.points === undefined && (missing17 = 'points')) {
                      const err67 = {
                        instancePath: instancePath + '/' + i0,
                        schemaPath: '#/items/anyOf/4/allOf/0/required',
                        keyword: 'required',
                        params: { missingProperty: missing17 },
                        message: "must have required property '" + missing17 + "'",
                      }
                      if (vErrors === null) {
                        vErrors = [err67]
                      } else {
                        vErrors.push(err67)
                      }
                      errors++
                    } else {
                      if (data0.points !== undefined) {
                        let data34 = data0.points
                        const _errs97 = errors
                        if (errors === _errs97) {
                          if (Array.isArray(data34)) {
                            var valid25 = true
                            const len1 = data34.length
                            for (let i1 = 0; i1 < len1; i1++) {
                              let data35 = data34[i1]
                              const _errs99 = errors
                              if (errors === _errs99) {
                                if (data35 && typeof data35 == 'object' && !Array.isArray(data35)) {
                                  let missing18
                                  if ((data35.x === undefined && (missing18 = 'x')) || (data35.y === undefined && (missing18 = 'y'))) {
                                    const err68 = {
                                      instancePath: instancePath + '/' + i0 + '/points/' + i1,
                                      schemaPath: '#/items/anyOf/4/allOf/0/properties/points/items/required',
                                      keyword: 'required',
                                      params: { missingProperty: missing18 },
                                      message: "must have required property '" + missing18 + "'",
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err68]
                                    } else {
                                      vErrors.push(err68)
                                    }
                                    errors++
                                  } else {
                                    if (data35.x !== undefined) {
                                      let data36 = data35.x
                                      const _errs101 = errors
                                      if (!(typeof data36 == 'number' && isFinite(data36))) {
                                        const err69 = {
                                          instancePath: instancePath + '/' + i0 + '/points/' + i1 + '/x',
                                          schemaPath: '#/items/anyOf/4/allOf/0/properties/points/items/properties/x/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err69]
                                        } else {
                                          vErrors.push(err69)
                                        }
                                        errors++
                                      }
                                      var valid26 = _errs101 === errors
                                    } else {
                                      var valid26 = true
                                    }
                                    if (valid26) {
                                      if (data35.y !== undefined) {
                                        let data37 = data35.y
                                        const _errs103 = errors
                                        if (!(typeof data37 == 'number' && isFinite(data37))) {
                                          const err70 = {
                                            instancePath: instancePath + '/' + i0 + '/points/' + i1 + '/y',
                                            schemaPath: '#/items/anyOf/4/allOf/0/properties/points/items/properties/y/type',
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
                                        var valid26 = _errs103 === errors
                                      } else {
                                        var valid26 = true
                                      }
                                    }
                                  }
                                } else {
                                  const err71 = {
                                    instancePath: instancePath + '/' + i0 + '/points/' + i1,
                                    schemaPath: '#/items/anyOf/4/allOf/0/properties/points/items/type',
                                    keyword: 'type',
                                    params: { type: 'object' },
                                    message: 'must be object',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err71]
                                  } else {
                                    vErrors.push(err71)
                                  }
                                  errors++
                                }
                              }
                              var valid25 = _errs99 === errors
                              if (!valid25) {
                                break
                              }
                            }
                          } else {
                            const err72 = { instancePath: instancePath + '/' + i0 + '/points', schemaPath: '#/items/anyOf/4/allOf/0/properties/points/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                            if (vErrors === null) {
                              vErrors = [err72]
                            } else {
                              vErrors.push(err72)
                            }
                            errors++
                          }
                        }
                      }
                    }
                  } else {
                    const err73 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err73]
                    } else {
                      vErrors.push(err73)
                    }
                    errors++
                  }
                }
                var valid23 = _errs95 === errors
                if (valid23) {
                  const _errs105 = errors
                  if (errors === _errs105) {
                    if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                      let missing19
                      if (data0.type === undefined && (missing19 = 'type')) {
                        const err74 = {
                          instancePath: instancePath + '/' + i0,
                          schemaPath: '#/items/anyOf/4/allOf/1/required',
                          keyword: 'required',
                          params: { missingProperty: missing19 },
                          message: "must have required property '" + missing19 + "'",
                        }
                        if (vErrors === null) {
                          vErrors = [err74]
                        } else {
                          vErrors.push(err74)
                        }
                        errors++
                      } else {
                        if (data0.type !== undefined) {
                          let data38 = data0.type
                          if (typeof data38 !== 'string') {
                            const err75 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/4/allOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err75]
                            } else {
                              vErrors.push(err75)
                            }
                            errors++
                          }
                          if ('polyline' !== data38) {
                            const err76 = {
                              instancePath: instancePath + '/' + i0 + '/type',
                              schemaPath: '#/items/anyOf/4/allOf/1/properties/type/const',
                              keyword: 'const',
                              params: { allowedValue: 'polyline' },
                              message: 'must be equal to constant',
                            }
                            if (vErrors === null) {
                              vErrors = [err76]
                            } else {
                              vErrors.push(err76)
                            }
                            errors++
                          }
                        }
                      }
                    } else {
                      const err77 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err77]
                      } else {
                        vErrors.push(err77)
                      }
                      errors++
                    }
                  }
                  var valid23 = _errs105 === errors
                }
                var _valid0 = _errs93 === errors
                valid1 = valid1 || _valid0
                if (!valid1) {
                  const _errs109 = errors
                  if (!(data0 && typeof data0 == 'object' && !Array.isArray(data0))) {
                    const err78 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/5/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err78]
                    } else {
                      vErrors.push(err78)
                    }
                    errors++
                  }
                  const _errs111 = errors
                  if (errors === _errs111) {
                    if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                      let missing20
                      if ((data0.outer === undefined && (missing20 = 'outer')) || (data0.inner === undefined && (missing20 = 'inner'))) {
                        const err79 = {
                          instancePath: instancePath + '/' + i0,
                          schemaPath: '#/items/anyOf/5/allOf/0/required',
                          keyword: 'required',
                          params: { missingProperty: missing20 },
                          message: "must have required property '" + missing20 + "'",
                        }
                        if (vErrors === null) {
                          vErrors = [err79]
                        } else {
                          vErrors.push(err79)
                        }
                        errors++
                      } else {
                        if (data0.outer !== undefined) {
                          let data39 = data0.outer
                          const _errs113 = errors
                          if (errors === _errs113) {
                            if (data39 && typeof data39 == 'object' && !Array.isArray(data39)) {
                              let missing21
                              if (data39.points === undefined && (missing21 = 'points')) {
                                const err80 = {
                                  instancePath: instancePath + '/' + i0 + '/outer',
                                  schemaPath: '#/items/anyOf/5/allOf/0/properties/outer/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing21 },
                                  message: "must have required property '" + missing21 + "'",
                                }
                                if (vErrors === null) {
                                  vErrors = [err80]
                                } else {
                                  vErrors.push(err80)
                                }
                                errors++
                              } else {
                                if (data39.points !== undefined) {
                                  let data40 = data39.points
                                  const _errs115 = errors
                                  if (errors === _errs115) {
                                    if (Array.isArray(data40)) {
                                      var valid31 = true
                                      const len2 = data40.length
                                      for (let i2 = 0; i2 < len2; i2++) {
                                        let data41 = data40[i2]
                                        const _errs117 = errors
                                        if (errors === _errs117) {
                                          if (data41 && typeof data41 == 'object' && !Array.isArray(data41)) {
                                            let missing22
                                            if ((data41.x === undefined && (missing22 = 'x')) || (data41.y === undefined && (missing22 = 'y'))) {
                                              const err81 = {
                                                instancePath: instancePath + '/' + i0 + '/outer/points/' + i2,
                                                schemaPath: '#/items/anyOf/5/allOf/0/properties/outer/properties/points/items/required',
                                                keyword: 'required',
                                                params: { missingProperty: missing22 },
                                                message: "must have required property '" + missing22 + "'",
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err81]
                                              } else {
                                                vErrors.push(err81)
                                              }
                                              errors++
                                            } else {
                                              if (data41.x !== undefined) {
                                                let data42 = data41.x
                                                const _errs119 = errors
                                                if (!(typeof data42 == 'number' && isFinite(data42))) {
                                                  const err82 = {
                                                    instancePath: instancePath + '/' + i0 + '/outer/points/' + i2 + '/x',
                                                    schemaPath: '#/items/anyOf/5/allOf/0/properties/outer/properties/points/items/properties/x/type',
                                                    keyword: 'type',
                                                    params: { type: 'number' },
                                                    message: 'must be number',
                                                  }
                                                  if (vErrors === null) {
                                                    vErrors = [err82]
                                                  } else {
                                                    vErrors.push(err82)
                                                  }
                                                  errors++
                                                }
                                                var valid32 = _errs119 === errors
                                              } else {
                                                var valid32 = true
                                              }
                                              if (valid32) {
                                                if (data41.y !== undefined) {
                                                  let data43 = data41.y
                                                  const _errs121 = errors
                                                  if (!(typeof data43 == 'number' && isFinite(data43))) {
                                                    const err83 = {
                                                      instancePath: instancePath + '/' + i0 + '/outer/points/' + i2 + '/y',
                                                      schemaPath: '#/items/anyOf/5/allOf/0/properties/outer/properties/points/items/properties/y/type',
                                                      keyword: 'type',
                                                      params: { type: 'number' },
                                                      message: 'must be number',
                                                    }
                                                    if (vErrors === null) {
                                                      vErrors = [err83]
                                                    } else {
                                                      vErrors.push(err83)
                                                    }
                                                    errors++
                                                  }
                                                  var valid32 = _errs121 === errors
                                                } else {
                                                  var valid32 = true
                                                }
                                              }
                                            }
                                          } else {
                                            const err84 = {
                                              instancePath: instancePath + '/' + i0 + '/outer/points/' + i2,
                                              schemaPath: '#/items/anyOf/5/allOf/0/properties/outer/properties/points/items/type',
                                              keyword: 'type',
                                              params: { type: 'object' },
                                              message: 'must be object',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err84]
                                            } else {
                                              vErrors.push(err84)
                                            }
                                            errors++
                                          }
                                        }
                                        var valid31 = _errs117 === errors
                                        if (!valid31) {
                                          break
                                        }
                                      }
                                    } else {
                                      const err85 = {
                                        instancePath: instancePath + '/' + i0 + '/outer/points',
                                        schemaPath: '#/items/anyOf/5/allOf/0/properties/outer/properties/points/type',
                                        keyword: 'type',
                                        params: { type: 'array' },
                                        message: 'must be array',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err85]
                                      } else {
                                        vErrors.push(err85)
                                      }
                                      errors++
                                    }
                                  }
                                }
                              }
                            } else {
                              const err86 = { instancePath: instancePath + '/' + i0 + '/outer', schemaPath: '#/items/anyOf/5/allOf/0/properties/outer/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                              if (vErrors === null) {
                                vErrors = [err86]
                              } else {
                                vErrors.push(err86)
                              }
                              errors++
                            }
                          }
                          var valid29 = _errs113 === errors
                        } else {
                          var valid29 = true
                        }
                        if (valid29) {
                          if (data0.inner !== undefined) {
                            let data44 = data0.inner
                            const _errs123 = errors
                            if (errors === _errs123) {
                              if (Array.isArray(data44)) {
                                var valid33 = true
                                const len3 = data44.length
                                for (let i3 = 0; i3 < len3; i3++) {
                                  let data45 = data44[i3]
                                  const _errs125 = errors
                                  if (errors === _errs125) {
                                    if (data45 && typeof data45 == 'object' && !Array.isArray(data45)) {
                                      let missing23
                                      if (data45.points === undefined && (missing23 = 'points')) {
                                        const err87 = {
                                          instancePath: instancePath + '/' + i0 + '/inner/' + i3,
                                          schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/items/required',
                                          keyword: 'required',
                                          params: { missingProperty: missing23 },
                                          message: "must have required property '" + missing23 + "'",
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err87]
                                        } else {
                                          vErrors.push(err87)
                                        }
                                        errors++
                                      } else {
                                        if (data45.points !== undefined) {
                                          let data46 = data45.points
                                          const _errs127 = errors
                                          if (errors === _errs127) {
                                            if (Array.isArray(data46)) {
                                              var valid35 = true
                                              const len4 = data46.length
                                              for (let i4 = 0; i4 < len4; i4++) {
                                                let data47 = data46[i4]
                                                const _errs129 = errors
                                                if (errors === _errs129) {
                                                  if (data47 && typeof data47 == 'object' && !Array.isArray(data47)) {
                                                    let missing24
                                                    if ((data47.x === undefined && (missing24 = 'x')) || (data47.y === undefined && (missing24 = 'y'))) {
                                                      const err88 = {
                                                        instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4,
                                                        schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/items/properties/points/items/required',
                                                        keyword: 'required',
                                                        params: { missingProperty: missing24 },
                                                        message: "must have required property '" + missing24 + "'",
                                                      }
                                                      if (vErrors === null) {
                                                        vErrors = [err88]
                                                      } else {
                                                        vErrors.push(err88)
                                                      }
                                                      errors++
                                                    } else {
                                                      if (data47.x !== undefined) {
                                                        let data48 = data47.x
                                                        const _errs131 = errors
                                                        if (!(typeof data48 == 'number' && isFinite(data48))) {
                                                          const err89 = {
                                                            instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4 + '/x',
                                                            schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/items/properties/points/items/properties/x/type',
                                                            keyword: 'type',
                                                            params: { type: 'number' },
                                                            message: 'must be number',
                                                          }
                                                          if (vErrors === null) {
                                                            vErrors = [err89]
                                                          } else {
                                                            vErrors.push(err89)
                                                          }
                                                          errors++
                                                        }
                                                        var valid36 = _errs131 === errors
                                                      } else {
                                                        var valid36 = true
                                                      }
                                                      if (valid36) {
                                                        if (data47.y !== undefined) {
                                                          let data49 = data47.y
                                                          const _errs133 = errors
                                                          if (!(typeof data49 == 'number' && isFinite(data49))) {
                                                            const err90 = {
                                                              instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4 + '/y',
                                                              schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/items/properties/points/items/properties/y/type',
                                                              keyword: 'type',
                                                              params: { type: 'number' },
                                                              message: 'must be number',
                                                            }
                                                            if (vErrors === null) {
                                                              vErrors = [err90]
                                                            } else {
                                                              vErrors.push(err90)
                                                            }
                                                            errors++
                                                          }
                                                          var valid36 = _errs133 === errors
                                                        } else {
                                                          var valid36 = true
                                                        }
                                                      }
                                                    }
                                                  } else {
                                                    const err91 = {
                                                      instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points/' + i4,
                                                      schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/items/properties/points/items/type',
                                                      keyword: 'type',
                                                      params: { type: 'object' },
                                                      message: 'must be object',
                                                    }
                                                    if (vErrors === null) {
                                                      vErrors = [err91]
                                                    } else {
                                                      vErrors.push(err91)
                                                    }
                                                    errors++
                                                  }
                                                }
                                                var valid35 = _errs129 === errors
                                                if (!valid35) {
                                                  break
                                                }
                                              }
                                            } else {
                                              const err92 = {
                                                instancePath: instancePath + '/' + i0 + '/inner/' + i3 + '/points',
                                                schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/items/properties/points/type',
                                                keyword: 'type',
                                                params: { type: 'array' },
                                                message: 'must be array',
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err92]
                                              } else {
                                                vErrors.push(err92)
                                              }
                                              errors++
                                            }
                                          }
                                        }
                                      }
                                    } else {
                                      const err93 = {
                                        instancePath: instancePath + '/' + i0 + '/inner/' + i3,
                                        schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/items/type',
                                        keyword: 'type',
                                        params: { type: 'object' },
                                        message: 'must be object',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err93]
                                      } else {
                                        vErrors.push(err93)
                                      }
                                      errors++
                                    }
                                  }
                                  var valid33 = _errs125 === errors
                                  if (!valid33) {
                                    break
                                  }
                                }
                              } else {
                                const err94 = { instancePath: instancePath + '/' + i0 + '/inner', schemaPath: '#/items/anyOf/5/allOf/0/properties/inner/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                                if (vErrors === null) {
                                  vErrors = [err94]
                                } else {
                                  vErrors.push(err94)
                                }
                                errors++
                              }
                            }
                            var valid29 = _errs123 === errors
                          } else {
                            var valid29 = true
                          }
                        }
                      }
                    } else {
                      const err95 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/5/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err95]
                      } else {
                        vErrors.push(err95)
                      }
                      errors++
                    }
                  }
                  var valid28 = _errs111 === errors
                  if (valid28) {
                    const _errs135 = errors
                    if (errors === _errs135) {
                      if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                        let missing25
                        if (data0.type === undefined && (missing25 = 'type')) {
                          const err96 = {
                            instancePath: instancePath + '/' + i0,
                            schemaPath: '#/items/anyOf/5/allOf/1/required',
                            keyword: 'required',
                            params: { missingProperty: missing25 },
                            message: "must have required property '" + missing25 + "'",
                          }
                          if (vErrors === null) {
                            vErrors = [err96]
                          } else {
                            vErrors.push(err96)
                          }
                          errors++
                        } else {
                          if (data0.type !== undefined) {
                            let data50 = data0.type
                            if (typeof data50 !== 'string') {
                              const err97 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/5/allOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err97]
                              } else {
                                vErrors.push(err97)
                              }
                              errors++
                            }
                            if ('polygon' !== data50) {
                              const err98 = {
                                instancePath: instancePath + '/' + i0 + '/type',
                                schemaPath: '#/items/anyOf/5/allOf/1/properties/type/const',
                                keyword: 'const',
                                params: { allowedValue: 'polygon' },
                                message: 'must be equal to constant',
                              }
                              if (vErrors === null) {
                                vErrors = [err98]
                              } else {
                                vErrors.push(err98)
                              }
                              errors++
                            }
                          }
                        }
                      } else {
                        const err99 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/5/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                        if (vErrors === null) {
                          vErrors = [err99]
                        } else {
                          vErrors.push(err99)
                        }
                        errors++
                      }
                    }
                    var valid28 = _errs135 === errors
                  }
                  var _valid0 = _errs109 === errors
                  valid1 = valid1 || _valid0
                  if (!valid1) {
                    const _errs139 = errors
                    if (!(data0 && typeof data0 == 'object' && !Array.isArray(data0))) {
                      const err100 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/6/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err100]
                      } else {
                        vErrors.push(err100)
                      }
                      errors++
                    }
                    const _errs141 = errors
                    if (errors === _errs141) {
                      if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                        let missing26
                        if ((data0.centroid === undefined && (missing26 = 'centroid')) || (data0.radius === undefined && (missing26 = 'radius'))) {
                          const err101 = {
                            instancePath: instancePath + '/' + i0,
                            schemaPath: '#/items/anyOf/6/allOf/0/required',
                            keyword: 'required',
                            params: { missingProperty: missing26 },
                            message: "must have required property '" + missing26 + "'",
                          }
                          if (vErrors === null) {
                            vErrors = [err101]
                          } else {
                            vErrors.push(err101)
                          }
                          errors++
                        } else {
                          if (data0.centroid !== undefined) {
                            let data51 = data0.centroid
                            const _errs143 = errors
                            if (errors === _errs143) {
                              if (data51 && typeof data51 == 'object' && !Array.isArray(data51)) {
                                let missing27
                                if ((data51.x === undefined && (missing27 = 'x')) || (data51.y === undefined && (missing27 = 'y'))) {
                                  const err102 = {
                                    instancePath: instancePath + '/' + i0 + '/centroid',
                                    schemaPath: '#/items/anyOf/6/allOf/0/properties/centroid/required',
                                    keyword: 'required',
                                    params: { missingProperty: missing27 },
                                    message: "must have required property '" + missing27 + "'",
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err102]
                                  } else {
                                    vErrors.push(err102)
                                  }
                                  errors++
                                } else {
                                  if (data51.x !== undefined) {
                                    let data52 = data51.x
                                    const _errs145 = errors
                                    if (!(typeof data52 == 'number' && isFinite(data52))) {
                                      const err103 = {
                                        instancePath: instancePath + '/' + i0 + '/centroid/x',
                                        schemaPath: '#/items/anyOf/6/allOf/0/properties/centroid/properties/x/type',
                                        keyword: 'type',
                                        params: { type: 'number' },
                                        message: 'must be number',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err103]
                                      } else {
                                        vErrors.push(err103)
                                      }
                                      errors++
                                    }
                                    var valid40 = _errs145 === errors
                                  } else {
                                    var valid40 = true
                                  }
                                  if (valid40) {
                                    if (data51.y !== undefined) {
                                      let data53 = data51.y
                                      const _errs147 = errors
                                      if (!(typeof data53 == 'number' && isFinite(data53))) {
                                        const err104 = {
                                          instancePath: instancePath + '/' + i0 + '/centroid/y',
                                          schemaPath: '#/items/anyOf/6/allOf/0/properties/centroid/properties/y/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err104]
                                        } else {
                                          vErrors.push(err104)
                                        }
                                        errors++
                                      }
                                      var valid40 = _errs147 === errors
                                    } else {
                                      var valid40 = true
                                    }
                                  }
                                }
                              } else {
                                const err105 = { instancePath: instancePath + '/' + i0 + '/centroid', schemaPath: '#/items/anyOf/6/allOf/0/properties/centroid/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                                if (vErrors === null) {
                                  vErrors = [err105]
                                } else {
                                  vErrors.push(err105)
                                }
                                errors++
                              }
                            }
                            var valid39 = _errs143 === errors
                          } else {
                            var valid39 = true
                          }
                          if (valid39) {
                            if (data0.radius !== undefined) {
                              let data54 = data0.radius
                              const _errs149 = errors
                              if (!(typeof data54 == 'number' && isFinite(data54))) {
                                const err106 = { instancePath: instancePath + '/' + i0 + '/radius', schemaPath: '#/items/anyOf/6/allOf/0/properties/radius/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                                if (vErrors === null) {
                                  vErrors = [err106]
                                } else {
                                  vErrors.push(err106)
                                }
                                errors++
                              }
                              var valid39 = _errs149 === errors
                            } else {
                              var valid39 = true
                            }
                          }
                        }
                      } else {
                        const err107 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/6/allOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                        if (vErrors === null) {
                          vErrors = [err107]
                        } else {
                          vErrors.push(err107)
                        }
                        errors++
                      }
                    }
                    var valid38 = _errs141 === errors
                    if (valid38) {
                      const _errs151 = errors
                      if (errors === _errs151) {
                        if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                          let missing28
                          if (data0.type === undefined && (missing28 = 'type')) {
                            const err108 = {
                              instancePath: instancePath + '/' + i0,
                              schemaPath: '#/items/anyOf/6/allOf/1/required',
                              keyword: 'required',
                              params: { missingProperty: missing28 },
                              message: "must have required property '" + missing28 + "'",
                            }
                            if (vErrors === null) {
                              vErrors = [err108]
                            } else {
                              vErrors.push(err108)
                            }
                            errors++
                          } else {
                            if (data0.type !== undefined) {
                              let data55 = data0.type
                              if (typeof data55 !== 'string') {
                                const err109 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/6/allOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err109]
                                } else {
                                  vErrors.push(err109)
                                }
                                errors++
                              }
                              if ('circle' !== data55) {
                                const err110 = {
                                  instancePath: instancePath + '/' + i0 + '/type',
                                  schemaPath: '#/items/anyOf/6/allOf/1/properties/type/const',
                                  keyword: 'const',
                                  params: { allowedValue: 'circle' },
                                  message: 'must be equal to constant',
                                }
                                if (vErrors === null) {
                                  vErrors = [err110]
                                } else {
                                  vErrors.push(err110)
                                }
                                errors++
                              }
                            }
                          }
                        } else {
                          const err111 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/6/allOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                          if (vErrors === null) {
                            vErrors = [err111]
                          } else {
                            vErrors.push(err111)
                          }
                          errors++
                        }
                      }
                      var valid38 = _errs151 === errors
                    }
                    var _valid0 = _errs139 === errors
                    valid1 = valid1 || _valid0
                  }
                }
              }
            }
          }
        }
        if (!valid1) {
          const err112 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
          if (vErrors === null) {
            vErrors = [err112]
          } else {
            vErrors.push(err112)
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
