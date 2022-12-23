// @ts-nocheck
'use strict'
export const Typia_Array_Recursive_Union_Implicit = validate10
const schema11 = {
  $id: 'Typia_Array_Recursive_Union_Implicit',
  description: 'Should validate the Typia_Array_Recursive_Union_Implicit structure',
  type: 'array',
  items: {
    $id: 'T2',
    anyOf: [
      {
        type: 'object',
        properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, width: { type: 'number' }, height: { type: 'number' }, url: { type: 'string' }, size: { type: 'number' } },
        required: ['id', 'name', 'path', 'width', 'height', 'url', 'size'],
      },
      { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, content: { type: 'string' } }, required: ['id', 'name', 'path', 'size', 'content'] },
      { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, count: { type: 'number' } }, required: ['id', 'name', 'path', 'size', 'count'] },
      { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, target: { $ref: 'T2' } }, required: ['id', 'name', 'path', 'target'] },
      { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, children: { type: 'array', items: { $ref: 'T2' } } }, required: ['id', 'name', 'path', 'children'] },
      {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          path: { type: 'string' },
          children: { type: 'array', items: { $ref: 'T2' } },
          access: {
            anyOf: [
              { const: 'read', type: 'string' },
              { const: 'write', type: 'string' },
            ],
          },
        },
        required: ['id', 'name', 'path', 'children', 'access'],
      },
    ],
  },
}
const schema12 = {
  $id: 'T2',
  anyOf: [
    {
      type: 'object',
      properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, width: { type: 'number' }, height: { type: 'number' }, url: { type: 'string' }, size: { type: 'number' } },
      required: ['id', 'name', 'path', 'width', 'height', 'url', 'size'],
    },
    { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, content: { type: 'string' } }, required: ['id', 'name', 'path', 'size', 'content'] },
    { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, count: { type: 'number' } }, required: ['id', 'name', 'path', 'size', 'count'] },
    { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, target: { $ref: 'T2' } }, required: ['id', 'name', 'path', 'target'] },
    { type: 'object', properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, children: { type: 'array', items: { $ref: 'T2' } } }, required: ['id', 'name', 'path', 'children'] },
    {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        path: { type: 'string' },
        children: { type: 'array', items: { $ref: 'T2' } },
        access: {
          anyOf: [
            { const: 'read', type: 'string' },
            { const: 'write', type: 'string' },
          ],
        },
      },
      required: ['id', 'name', 'path', 'children', 'access'],
    },
  ],
}
const wrapper0 = { validate: validate11 }
function validate11(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="T2" */ let vErrors = null
  let errors = 0
  const _errs0 = errors
  let valid0 = false
  const _errs1 = errors
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if (
        (data.id === undefined && (missing0 = 'id')) ||
        (data.name === undefined && (missing0 = 'name')) ||
        (data.path === undefined && (missing0 = 'path')) ||
        (data.width === undefined && (missing0 = 'width')) ||
        (data.height === undefined && (missing0 = 'height')) ||
        (data.url === undefined && (missing0 = 'url')) ||
        (data.size === undefined && (missing0 = 'size'))
      ) {
        const err0 = { instancePath, schemaPath: '#/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
        if (vErrors === null) {
          vErrors = [err0]
        } else {
          vErrors.push(err0)
        }
        errors++
      } else {
        if (data.id !== undefined) {
          let data0 = data.id
          const _errs3 = errors
          if (!(typeof data0 == 'number' && isFinite(data0))) {
            const err1 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/0/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
            if (vErrors === null) {
              vErrors = [err1]
            } else {
              vErrors.push(err1)
            }
            errors++
          }
          var valid1 = _errs3 === errors
        } else {
          var valid1 = true
        }
        if (valid1) {
          if (data.name !== undefined) {
            const _errs5 = errors
            if (typeof data.name !== 'string') {
              const err2 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/0/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
              if (vErrors === null) {
                vErrors = [err2]
              } else {
                vErrors.push(err2)
              }
              errors++
            }
            var valid1 = _errs5 === errors
          } else {
            var valid1 = true
          }
          if (valid1) {
            if (data.path !== undefined) {
              const _errs7 = errors
              if (typeof data.path !== 'string') {
                const err3 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/0/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err3]
                } else {
                  vErrors.push(err3)
                }
                errors++
              }
              var valid1 = _errs7 === errors
            } else {
              var valid1 = true
            }
            if (valid1) {
              if (data.width !== undefined) {
                let data3 = data.width
                const _errs9 = errors
                if (!(typeof data3 == 'number' && isFinite(data3))) {
                  const err4 = { instancePath: instancePath + '/width', schemaPath: '#/anyOf/0/properties/width/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                  if (vErrors === null) {
                    vErrors = [err4]
                  } else {
                    vErrors.push(err4)
                  }
                  errors++
                }
                var valid1 = _errs9 === errors
              } else {
                var valid1 = true
              }
              if (valid1) {
                if (data.height !== undefined) {
                  let data4 = data.height
                  const _errs11 = errors
                  if (!(typeof data4 == 'number' && isFinite(data4))) {
                    const err5 = { instancePath: instancePath + '/height', schemaPath: '#/anyOf/0/properties/height/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err5]
                    } else {
                      vErrors.push(err5)
                    }
                    errors++
                  }
                  var valid1 = _errs11 === errors
                } else {
                  var valid1 = true
                }
                if (valid1) {
                  if (data.url !== undefined) {
                    const _errs13 = errors
                    if (typeof data.url !== 'string') {
                      const err6 = { instancePath: instancePath + '/url', schemaPath: '#/anyOf/0/properties/url/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err6]
                      } else {
                        vErrors.push(err6)
                      }
                      errors++
                    }
                    var valid1 = _errs13 === errors
                  } else {
                    var valid1 = true
                  }
                  if (valid1) {
                    if (data.size !== undefined) {
                      let data6 = data.size
                      const _errs15 = errors
                      if (!(typeof data6 == 'number' && isFinite(data6))) {
                        const err7 = { instancePath: instancePath + '/size', schemaPath: '#/anyOf/0/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err7]
                        } else {
                          vErrors.push(err7)
                        }
                        errors++
                      }
                      var valid1 = _errs15 === errors
                    } else {
                      var valid1 = true
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      const err8 = { instancePath, schemaPath: '#/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
      if (vErrors === null) {
        vErrors = [err8]
      } else {
        vErrors.push(err8)
      }
      errors++
    }
  }
  var _valid0 = _errs1 === errors
  valid0 = valid0 || _valid0
  if (!valid0) {
    const _errs17 = errors
    if (errors === _errs17) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing1
        if (
          (data.id === undefined && (missing1 = 'id')) ||
          (data.name === undefined && (missing1 = 'name')) ||
          (data.path === undefined && (missing1 = 'path')) ||
          (data.size === undefined && (missing1 = 'size')) ||
          (data.content === undefined && (missing1 = 'content'))
        ) {
          const err9 = { instancePath, schemaPath: '#/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
          if (vErrors === null) {
            vErrors = [err9]
          } else {
            vErrors.push(err9)
          }
          errors++
        } else {
          if (data.id !== undefined) {
            let data7 = data.id
            const _errs19 = errors
            if (!(typeof data7 == 'number' && isFinite(data7))) {
              const err10 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/1/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
              if (vErrors === null) {
                vErrors = [err10]
              } else {
                vErrors.push(err10)
              }
              errors++
            }
            var valid2 = _errs19 === errors
          } else {
            var valid2 = true
          }
          if (valid2) {
            if (data.name !== undefined) {
              const _errs21 = errors
              if (typeof data.name !== 'string') {
                const err11 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/1/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err11]
                } else {
                  vErrors.push(err11)
                }
                errors++
              }
              var valid2 = _errs21 === errors
            } else {
              var valid2 = true
            }
            if (valid2) {
              if (data.path !== undefined) {
                const _errs23 = errors
                if (typeof data.path !== 'string') {
                  const err12 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/1/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err12]
                  } else {
                    vErrors.push(err12)
                  }
                  errors++
                }
                var valid2 = _errs23 === errors
              } else {
                var valid2 = true
              }
              if (valid2) {
                if (data.size !== undefined) {
                  let data10 = data.size
                  const _errs25 = errors
                  if (!(typeof data10 == 'number' && isFinite(data10))) {
                    const err13 = { instancePath: instancePath + '/size', schemaPath: '#/anyOf/1/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err13]
                    } else {
                      vErrors.push(err13)
                    }
                    errors++
                  }
                  var valid2 = _errs25 === errors
                } else {
                  var valid2 = true
                }
                if (valid2) {
                  if (data.content !== undefined) {
                    const _errs27 = errors
                    if (typeof data.content !== 'string') {
                      const err14 = { instancePath: instancePath + '/content', schemaPath: '#/anyOf/1/properties/content/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err14]
                      } else {
                        vErrors.push(err14)
                      }
                      errors++
                    }
                    var valid2 = _errs27 === errors
                  } else {
                    var valid2 = true
                  }
                }
              }
            }
          }
        }
      } else {
        const err15 = { instancePath, schemaPath: '#/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
        if (vErrors === null) {
          vErrors = [err15]
        } else {
          vErrors.push(err15)
        }
        errors++
      }
    }
    var _valid0 = _errs17 === errors
    valid0 = valid0 || _valid0
    if (!valid0) {
      const _errs29 = errors
      if (errors === _errs29) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing2
          if (
            (data.id === undefined && (missing2 = 'id')) ||
            (data.name === undefined && (missing2 = 'name')) ||
            (data.path === undefined && (missing2 = 'path')) ||
            (data.size === undefined && (missing2 = 'size')) ||
            (data.count === undefined && (missing2 = 'count'))
          ) {
            const err16 = { instancePath, schemaPath: '#/anyOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
            if (vErrors === null) {
              vErrors = [err16]
            } else {
              vErrors.push(err16)
            }
            errors++
          } else {
            if (data.id !== undefined) {
              let data12 = data.id
              const _errs31 = errors
              if (!(typeof data12 == 'number' && isFinite(data12))) {
                const err17 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/2/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                if (vErrors === null) {
                  vErrors = [err17]
                } else {
                  vErrors.push(err17)
                }
                errors++
              }
              var valid3 = _errs31 === errors
            } else {
              var valid3 = true
            }
            if (valid3) {
              if (data.name !== undefined) {
                const _errs33 = errors
                if (typeof data.name !== 'string') {
                  const err18 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/2/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err18]
                  } else {
                    vErrors.push(err18)
                  }
                  errors++
                }
                var valid3 = _errs33 === errors
              } else {
                var valid3 = true
              }
              if (valid3) {
                if (data.path !== undefined) {
                  const _errs35 = errors
                  if (typeof data.path !== 'string') {
                    const err19 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/2/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err19]
                    } else {
                      vErrors.push(err19)
                    }
                    errors++
                  }
                  var valid3 = _errs35 === errors
                } else {
                  var valid3 = true
                }
                if (valid3) {
                  if (data.size !== undefined) {
                    let data15 = data.size
                    const _errs37 = errors
                    if (!(typeof data15 == 'number' && isFinite(data15))) {
                      const err20 = { instancePath: instancePath + '/size', schemaPath: '#/anyOf/2/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                      if (vErrors === null) {
                        vErrors = [err20]
                      } else {
                        vErrors.push(err20)
                      }
                      errors++
                    }
                    var valid3 = _errs37 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data.count !== undefined) {
                      let data16 = data.count
                      const _errs39 = errors
                      if (!(typeof data16 == 'number' && isFinite(data16))) {
                        const err21 = { instancePath: instancePath + '/count', schemaPath: '#/anyOf/2/properties/count/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err21]
                        } else {
                          vErrors.push(err21)
                        }
                        errors++
                      }
                      var valid3 = _errs39 === errors
                    } else {
                      var valid3 = true
                    }
                  }
                }
              }
            }
          }
        } else {
          const err22 = { instancePath, schemaPath: '#/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
          if (vErrors === null) {
            vErrors = [err22]
          } else {
            vErrors.push(err22)
          }
          errors++
        }
      }
      var _valid0 = _errs29 === errors
      valid0 = valid0 || _valid0
      if (!valid0) {
        const _errs41 = errors
        if (errors === _errs41) {
          if (data && typeof data == 'object' && !Array.isArray(data)) {
            let missing3
            if ((data.id === undefined && (missing3 = 'id')) || (data.name === undefined && (missing3 = 'name')) || (data.path === undefined && (missing3 = 'path')) || (data.target === undefined && (missing3 = 'target'))) {
              const err23 = { instancePath, schemaPath: '#/anyOf/3/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }
              if (vErrors === null) {
                vErrors = [err23]
              } else {
                vErrors.push(err23)
              }
              errors++
            } else {
              if (data.id !== undefined) {
                let data17 = data.id
                const _errs43 = errors
                if (!(typeof data17 == 'number' && isFinite(data17))) {
                  const err24 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/3/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                  if (vErrors === null) {
                    vErrors = [err24]
                  } else {
                    vErrors.push(err24)
                  }
                  errors++
                }
                var valid4 = _errs43 === errors
              } else {
                var valid4 = true
              }
              if (valid4) {
                if (data.name !== undefined) {
                  const _errs45 = errors
                  if (typeof data.name !== 'string') {
                    const err25 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/3/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err25]
                    } else {
                      vErrors.push(err25)
                    }
                    errors++
                  }
                  var valid4 = _errs45 === errors
                } else {
                  var valid4 = true
                }
                if (valid4) {
                  if (data.path !== undefined) {
                    const _errs47 = errors
                    if (typeof data.path !== 'string') {
                      const err26 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/3/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err26]
                      } else {
                        vErrors.push(err26)
                      }
                      errors++
                    }
                    var valid4 = _errs47 === errors
                  } else {
                    var valid4 = true
                  }
                  if (valid4) {
                    if (data.target !== undefined) {
                      const _errs49 = errors
                      if (!wrapper0.validate(data.target, { instancePath: instancePath + '/target', parentData: data, parentDataProperty: 'target', rootData })) {
                        vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                        errors = vErrors.length
                      }
                      var valid4 = _errs49 === errors
                    } else {
                      var valid4 = true
                    }
                  }
                }
              }
            }
          } else {
            const err27 = { instancePath, schemaPath: '#/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err27]
            } else {
              vErrors.push(err27)
            }
            errors++
          }
        }
        var _valid0 = _errs41 === errors
        valid0 = valid0 || _valid0
        if (!valid0) {
          const _errs50 = errors
          if (errors === _errs50) {
            if (data && typeof data == 'object' && !Array.isArray(data)) {
              let missing4
              if ((data.id === undefined && (missing4 = 'id')) || (data.name === undefined && (missing4 = 'name')) || (data.path === undefined && (missing4 = 'path')) || (data.children === undefined && (missing4 = 'children'))) {
                const err28 = { instancePath, schemaPath: '#/anyOf/4/required', keyword: 'required', params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }
                if (vErrors === null) {
                  vErrors = [err28]
                } else {
                  vErrors.push(err28)
                }
                errors++
              } else {
                if (data.id !== undefined) {
                  let data21 = data.id
                  const _errs52 = errors
                  if (!(typeof data21 == 'number' && isFinite(data21))) {
                    const err29 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/4/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err29]
                    } else {
                      vErrors.push(err29)
                    }
                    errors++
                  }
                  var valid5 = _errs52 === errors
                } else {
                  var valid5 = true
                }
                if (valid5) {
                  if (data.name !== undefined) {
                    const _errs54 = errors
                    if (typeof data.name !== 'string') {
                      const err30 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/4/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err30]
                      } else {
                        vErrors.push(err30)
                      }
                      errors++
                    }
                    var valid5 = _errs54 === errors
                  } else {
                    var valid5 = true
                  }
                  if (valid5) {
                    if (data.path !== undefined) {
                      const _errs56 = errors
                      if (typeof data.path !== 'string') {
                        const err31 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/4/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err31]
                        } else {
                          vErrors.push(err31)
                        }
                        errors++
                      }
                      var valid5 = _errs56 === errors
                    } else {
                      var valid5 = true
                    }
                    if (valid5) {
                      if (data.children !== undefined) {
                        let data24 = data.children
                        const _errs58 = errors
                        if (errors === _errs58) {
                          if (Array.isArray(data24)) {
                            var valid6 = true
                            const len0 = data24.length
                            for (let i0 = 0; i0 < len0; i0++) {
                              const _errs60 = errors
                              if (!wrapper0.validate(data24[i0], { instancePath: instancePath + '/children/' + i0, parentData: data24, parentDataProperty: i0, rootData })) {
                                vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                                errors = vErrors.length
                              }
                              var valid6 = _errs60 === errors
                              if (!valid6) {
                                break
                              }
                            }
                          } else {
                            const err32 = { instancePath: instancePath + '/children', schemaPath: '#/anyOf/4/properties/children/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                            if (vErrors === null) {
                              vErrors = [err32]
                            } else {
                              vErrors.push(err32)
                            }
                            errors++
                          }
                        }
                        var valid5 = _errs58 === errors
                      } else {
                        var valid5 = true
                      }
                    }
                  }
                }
              }
            } else {
              const err33 = { instancePath, schemaPath: '#/anyOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err33]
              } else {
                vErrors.push(err33)
              }
              errors++
            }
          }
          var _valid0 = _errs50 === errors
          valid0 = valid0 || _valid0
          if (!valid0) {
            const _errs61 = errors
            if (errors === _errs61) {
              if (data && typeof data == 'object' && !Array.isArray(data)) {
                let missing5
                if (
                  (data.id === undefined && (missing5 = 'id')) ||
                  (data.name === undefined && (missing5 = 'name')) ||
                  (data.path === undefined && (missing5 = 'path')) ||
                  (data.children === undefined && (missing5 = 'children')) ||
                  (data.access === undefined && (missing5 = 'access'))
                ) {
                  const err34 = { instancePath, schemaPath: '#/anyOf/5/required', keyword: 'required', params: { missingProperty: missing5 }, message: "must have required property '" + missing5 + "'" }
                  if (vErrors === null) {
                    vErrors = [err34]
                  } else {
                    vErrors.push(err34)
                  }
                  errors++
                } else {
                  if (data.id !== undefined) {
                    let data26 = data.id
                    const _errs63 = errors
                    if (!(typeof data26 == 'number' && isFinite(data26))) {
                      const err35 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/5/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                      if (vErrors === null) {
                        vErrors = [err35]
                      } else {
                        vErrors.push(err35)
                      }
                      errors++
                    }
                    var valid7 = _errs63 === errors
                  } else {
                    var valid7 = true
                  }
                  if (valid7) {
                    if (data.name !== undefined) {
                      const _errs65 = errors
                      if (typeof data.name !== 'string') {
                        const err36 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/5/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err36]
                        } else {
                          vErrors.push(err36)
                        }
                        errors++
                      }
                      var valid7 = _errs65 === errors
                    } else {
                      var valid7 = true
                    }
                    if (valid7) {
                      if (data.path !== undefined) {
                        const _errs67 = errors
                        if (typeof data.path !== 'string') {
                          const err37 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/5/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err37]
                          } else {
                            vErrors.push(err37)
                          }
                          errors++
                        }
                        var valid7 = _errs67 === errors
                      } else {
                        var valid7 = true
                      }
                      if (valid7) {
                        if (data.children !== undefined) {
                          let data29 = data.children
                          const _errs69 = errors
                          if (errors === _errs69) {
                            if (Array.isArray(data29)) {
                              var valid8 = true
                              const len1 = data29.length
                              for (let i1 = 0; i1 < len1; i1++) {
                                const _errs71 = errors
                                if (!wrapper0.validate(data29[i1], { instancePath: instancePath + '/children/' + i1, parentData: data29, parentDataProperty: i1, rootData })) {
                                  vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                                  errors = vErrors.length
                                }
                                var valid8 = _errs71 === errors
                                if (!valid8) {
                                  break
                                }
                              }
                            } else {
                              const err38 = { instancePath: instancePath + '/children', schemaPath: '#/anyOf/5/properties/children/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                              if (vErrors === null) {
                                vErrors = [err38]
                              } else {
                                vErrors.push(err38)
                              }
                              errors++
                            }
                          }
                          var valid7 = _errs69 === errors
                        } else {
                          var valid7 = true
                        }
                        if (valid7) {
                          if (data.access !== undefined) {
                            let data31 = data.access
                            const _errs72 = errors
                            const _errs73 = errors
                            let valid9 = false
                            const _errs74 = errors
                            if (typeof data31 !== 'string') {
                              const err39 = { instancePath: instancePath + '/access', schemaPath: '#/anyOf/5/properties/access/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err39]
                              } else {
                                vErrors.push(err39)
                              }
                              errors++
                            }
                            if ('read' !== data31) {
                              const err40 = { instancePath: instancePath + '/access', schemaPath: '#/anyOf/5/properties/access/anyOf/0/const', keyword: 'const', params: { allowedValue: 'read' }, message: 'must be equal to constant' }
                              if (vErrors === null) {
                                vErrors = [err40]
                              } else {
                                vErrors.push(err40)
                              }
                              errors++
                            }
                            var _valid1 = _errs74 === errors
                            valid9 = valid9 || _valid1
                            if (!valid9) {
                              const _errs76 = errors
                              if (typeof data31 !== 'string') {
                                const err41 = { instancePath: instancePath + '/access', schemaPath: '#/anyOf/5/properties/access/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err41]
                                } else {
                                  vErrors.push(err41)
                                }
                                errors++
                              }
                              if ('write' !== data31) {
                                const err42 = { instancePath: instancePath + '/access', schemaPath: '#/anyOf/5/properties/access/anyOf/1/const', keyword: 'const', params: { allowedValue: 'write' }, message: 'must be equal to constant' }
                                if (vErrors === null) {
                                  vErrors = [err42]
                                } else {
                                  vErrors.push(err42)
                                }
                                errors++
                              }
                              var _valid1 = _errs76 === errors
                              valid9 = valid9 || _valid1
                            }
                            if (!valid9) {
                              const err43 = { instancePath: instancePath + '/access', schemaPath: '#/anyOf/5/properties/access/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                              if (vErrors === null) {
                                vErrors = [err43]
                              } else {
                                vErrors.push(err43)
                              }
                              errors++
                            } else {
                              errors = _errs73
                              if (vErrors !== null) {
                                if (_errs73) {
                                  vErrors.length = _errs73
                                } else {
                                  vErrors = null
                                }
                              }
                            }
                            var valid7 = _errs72 === errors
                          } else {
                            var valid7 = true
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                const err44 = { instancePath, schemaPath: '#/anyOf/5/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err44]
                } else {
                  vErrors.push(err44)
                }
                errors++
              }
            }
            var _valid0 = _errs61 === errors
            valid0 = valid0 || _valid0
          }
        }
      }
    }
  }
  if (!valid0) {
    const err45 = { instancePath, schemaPath: '#/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
    if (vErrors === null) {
      vErrors = [err45]
    } else {
      vErrors.push(err45)
    }
    errors++
    validate11.errors = vErrors
    return false
  } else {
    errors = _errs0
    if (vErrors !== null) {
      if (_errs0) {
        vErrors.length = _errs0
      } else {
        vErrors = null
      }
    }
  }
  validate11.errors = vErrors
  return errors === 0
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Typia_Array_Recursive_Union_Implicit" */ let vErrors = null
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
            if (
              (data0.id === undefined && (missing0 = 'id')) ||
              (data0.name === undefined && (missing0 = 'name')) ||
              (data0.path === undefined && (missing0 = 'path')) ||
              (data0.width === undefined && (missing0 = 'width')) ||
              (data0.height === undefined && (missing0 = 'height')) ||
              (data0.url === undefined && (missing0 = 'url')) ||
              (data0.size === undefined && (missing0 = 'size'))
            ) {
              const err0 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
              if (vErrors === null) {
                vErrors = [err0]
              } else {
                vErrors.push(err0)
              }
              errors++
            } else {
              if (data0.id !== undefined) {
                let data1 = data0.id
                const _errs5 = errors
                if (!(typeof data1 == 'number' && isFinite(data1))) {
                  const err1 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/0/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
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
                if (data0.name !== undefined) {
                  const _errs7 = errors
                  if (typeof data0.name !== 'string') {
                    const err2 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/0/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
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
                  if (data0.path !== undefined) {
                    const _errs9 = errors
                    if (typeof data0.path !== 'string') {
                      const err3 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/0/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err3]
                      } else {
                        vErrors.push(err3)
                      }
                      errors++
                    }
                    var valid2 = _errs9 === errors
                  } else {
                    var valid2 = true
                  }
                  if (valid2) {
                    if (data0.width !== undefined) {
                      let data4 = data0.width
                      const _errs11 = errors
                      if (!(typeof data4 == 'number' && isFinite(data4))) {
                        const err4 = { instancePath: instancePath + '/' + i0 + '/width', schemaPath: '#/items/anyOf/0/properties/width/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err4]
                        } else {
                          vErrors.push(err4)
                        }
                        errors++
                      }
                      var valid2 = _errs11 === errors
                    } else {
                      var valid2 = true
                    }
                    if (valid2) {
                      if (data0.height !== undefined) {
                        let data5 = data0.height
                        const _errs13 = errors
                        if (!(typeof data5 == 'number' && isFinite(data5))) {
                          const err5 = { instancePath: instancePath + '/' + i0 + '/height', schemaPath: '#/items/anyOf/0/properties/height/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err5]
                          } else {
                            vErrors.push(err5)
                          }
                          errors++
                        }
                        var valid2 = _errs13 === errors
                      } else {
                        var valid2 = true
                      }
                      if (valid2) {
                        if (data0.url !== undefined) {
                          const _errs15 = errors
                          if (typeof data0.url !== 'string') {
                            const err6 = { instancePath: instancePath + '/' + i0 + '/url', schemaPath: '#/items/anyOf/0/properties/url/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err6]
                            } else {
                              vErrors.push(err6)
                            }
                            errors++
                          }
                          var valid2 = _errs15 === errors
                        } else {
                          var valid2 = true
                        }
                        if (valid2) {
                          if (data0.size !== undefined) {
                            let data7 = data0.size
                            const _errs17 = errors
                            if (!(typeof data7 == 'number' && isFinite(data7))) {
                              const err7 = { instancePath: instancePath + '/' + i0 + '/size', schemaPath: '#/items/anyOf/0/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err7]
                              } else {
                                vErrors.push(err7)
                              }
                              errors++
                            }
                            var valid2 = _errs17 === errors
                          } else {
                            var valid2 = true
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            const err8 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err8]
            } else {
              vErrors.push(err8)
            }
            errors++
          }
        }
        var _valid0 = _errs3 === errors
        valid1 = valid1 || _valid0
        if (!valid1) {
          const _errs19 = errors
          if (errors === _errs19) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1
              if (
                (data0.id === undefined && (missing1 = 'id')) ||
                (data0.name === undefined && (missing1 = 'name')) ||
                (data0.path === undefined && (missing1 = 'path')) ||
                (data0.size === undefined && (missing1 = 'size')) ||
                (data0.content === undefined && (missing1 = 'content'))
              ) {
                const err9 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
                if (vErrors === null) {
                  vErrors = [err9]
                } else {
                  vErrors.push(err9)
                }
                errors++
              } else {
                if (data0.id !== undefined) {
                  let data8 = data0.id
                  const _errs21 = errors
                  if (!(typeof data8 == 'number' && isFinite(data8))) {
                    const err10 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/1/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err10]
                    } else {
                      vErrors.push(err10)
                    }
                    errors++
                  }
                  var valid3 = _errs21 === errors
                } else {
                  var valid3 = true
                }
                if (valid3) {
                  if (data0.name !== undefined) {
                    const _errs23 = errors
                    if (typeof data0.name !== 'string') {
                      const err11 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/1/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err11]
                      } else {
                        vErrors.push(err11)
                      }
                      errors++
                    }
                    var valid3 = _errs23 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data0.path !== undefined) {
                      const _errs25 = errors
                      if (typeof data0.path !== 'string') {
                        const err12 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/1/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err12]
                        } else {
                          vErrors.push(err12)
                        }
                        errors++
                      }
                      var valid3 = _errs25 === errors
                    } else {
                      var valid3 = true
                    }
                    if (valid3) {
                      if (data0.size !== undefined) {
                        let data11 = data0.size
                        const _errs27 = errors
                        if (!(typeof data11 == 'number' && isFinite(data11))) {
                          const err13 = { instancePath: instancePath + '/' + i0 + '/size', schemaPath: '#/items/anyOf/1/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err13]
                          } else {
                            vErrors.push(err13)
                          }
                          errors++
                        }
                        var valid3 = _errs27 === errors
                      } else {
                        var valid3 = true
                      }
                      if (valid3) {
                        if (data0.content !== undefined) {
                          const _errs29 = errors
                          if (typeof data0.content !== 'string') {
                            const err14 = { instancePath: instancePath + '/' + i0 + '/content', schemaPath: '#/items/anyOf/1/properties/content/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err14]
                            } else {
                              vErrors.push(err14)
                            }
                            errors++
                          }
                          var valid3 = _errs29 === errors
                        } else {
                          var valid3 = true
                        }
                      }
                    }
                  }
                }
              }
            } else {
              const err15 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err15]
              } else {
                vErrors.push(err15)
              }
              errors++
            }
          }
          var _valid0 = _errs19 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs31 = errors
            if (errors === _errs31) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing2
                if (
                  (data0.id === undefined && (missing2 = 'id')) ||
                  (data0.name === undefined && (missing2 = 'name')) ||
                  (data0.path === undefined && (missing2 = 'path')) ||
                  (data0.size === undefined && (missing2 = 'size')) ||
                  (data0.count === undefined && (missing2 = 'count'))
                ) {
                  const err16 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
                  if (vErrors === null) {
                    vErrors = [err16]
                  } else {
                    vErrors.push(err16)
                  }
                  errors++
                } else {
                  if (data0.id !== undefined) {
                    let data13 = data0.id
                    const _errs33 = errors
                    if (!(typeof data13 == 'number' && isFinite(data13))) {
                      const err17 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/2/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                      if (vErrors === null) {
                        vErrors = [err17]
                      } else {
                        vErrors.push(err17)
                      }
                      errors++
                    }
                    var valid4 = _errs33 === errors
                  } else {
                    var valid4 = true
                  }
                  if (valid4) {
                    if (data0.name !== undefined) {
                      const _errs35 = errors
                      if (typeof data0.name !== 'string') {
                        const err18 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/2/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err18]
                        } else {
                          vErrors.push(err18)
                        }
                        errors++
                      }
                      var valid4 = _errs35 === errors
                    } else {
                      var valid4 = true
                    }
                    if (valid4) {
                      if (data0.path !== undefined) {
                        const _errs37 = errors
                        if (typeof data0.path !== 'string') {
                          const err19 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/2/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err19]
                          } else {
                            vErrors.push(err19)
                          }
                          errors++
                        }
                        var valid4 = _errs37 === errors
                      } else {
                        var valid4 = true
                      }
                      if (valid4) {
                        if (data0.size !== undefined) {
                          let data16 = data0.size
                          const _errs39 = errors
                          if (!(typeof data16 == 'number' && isFinite(data16))) {
                            const err20 = { instancePath: instancePath + '/' + i0 + '/size', schemaPath: '#/items/anyOf/2/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err20]
                            } else {
                              vErrors.push(err20)
                            }
                            errors++
                          }
                          var valid4 = _errs39 === errors
                        } else {
                          var valid4 = true
                        }
                        if (valid4) {
                          if (data0.count !== undefined) {
                            let data17 = data0.count
                            const _errs41 = errors
                            if (!(typeof data17 == 'number' && isFinite(data17))) {
                              const err21 = { instancePath: instancePath + '/' + i0 + '/count', schemaPath: '#/items/anyOf/2/properties/count/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err21]
                              } else {
                                vErrors.push(err21)
                              }
                              errors++
                            }
                            var valid4 = _errs41 === errors
                          } else {
                            var valid4 = true
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                const err22 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err22]
                } else {
                  vErrors.push(err22)
                }
                errors++
              }
            }
            var _valid0 = _errs31 === errors
            valid1 = valid1 || _valid0
            if (!valid1) {
              const _errs43 = errors
              if (errors === _errs43) {
                if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                  let missing3
                  if ((data0.id === undefined && (missing3 = 'id')) || (data0.name === undefined && (missing3 = 'name')) || (data0.path === undefined && (missing3 = 'path')) || (data0.target === undefined && (missing3 = 'target'))) {
                    const err23 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }
                    if (vErrors === null) {
                      vErrors = [err23]
                    } else {
                      vErrors.push(err23)
                    }
                    errors++
                  } else {
                    if (data0.id !== undefined) {
                      let data18 = data0.id
                      const _errs45 = errors
                      if (!(typeof data18 == 'number' && isFinite(data18))) {
                        const err24 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/3/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err24]
                        } else {
                          vErrors.push(err24)
                        }
                        errors++
                      }
                      var valid5 = _errs45 === errors
                    } else {
                      var valid5 = true
                    }
                    if (valid5) {
                      if (data0.name !== undefined) {
                        const _errs47 = errors
                        if (typeof data0.name !== 'string') {
                          const err25 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/3/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err25]
                          } else {
                            vErrors.push(err25)
                          }
                          errors++
                        }
                        var valid5 = _errs47 === errors
                      } else {
                        var valid5 = true
                      }
                      if (valid5) {
                        if (data0.path !== undefined) {
                          const _errs49 = errors
                          if (typeof data0.path !== 'string') {
                            const err26 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/3/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err26]
                            } else {
                              vErrors.push(err26)
                            }
                            errors++
                          }
                          var valid5 = _errs49 === errors
                        } else {
                          var valid5 = true
                        }
                        if (valid5) {
                          if (data0.target !== undefined) {
                            const _errs51 = errors
                            if (!validate11(data0.target, { instancePath: instancePath + '/' + i0 + '/target', parentData: data0, parentDataProperty: 'target', rootData })) {
                              vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors)
                              errors = vErrors.length
                            }
                            var valid5 = _errs51 === errors
                          } else {
                            var valid5 = true
                          }
                        }
                      }
                    }
                  }
                } else {
                  const err27 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err27]
                  } else {
                    vErrors.push(err27)
                  }
                  errors++
                }
              }
              var _valid0 = _errs43 === errors
              valid1 = valid1 || _valid0
              if (!valid1) {
                const _errs52 = errors
                if (errors === _errs52) {
                  if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                    let missing4
                    if ((data0.id === undefined && (missing4 = 'id')) || (data0.name === undefined && (missing4 = 'name')) || (data0.path === undefined && (missing4 = 'path')) || (data0.children === undefined && (missing4 = 'children'))) {
                      const err28 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/required', keyword: 'required', params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }
                      if (vErrors === null) {
                        vErrors = [err28]
                      } else {
                        vErrors.push(err28)
                      }
                      errors++
                    } else {
                      if (data0.id !== undefined) {
                        let data22 = data0.id
                        const _errs54 = errors
                        if (!(typeof data22 == 'number' && isFinite(data22))) {
                          const err29 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/4/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err29]
                          } else {
                            vErrors.push(err29)
                          }
                          errors++
                        }
                        var valid6 = _errs54 === errors
                      } else {
                        var valid6 = true
                      }
                      if (valid6) {
                        if (data0.name !== undefined) {
                          const _errs56 = errors
                          if (typeof data0.name !== 'string') {
                            const err30 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/4/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err30]
                            } else {
                              vErrors.push(err30)
                            }
                            errors++
                          }
                          var valid6 = _errs56 === errors
                        } else {
                          var valid6 = true
                        }
                        if (valid6) {
                          if (data0.path !== undefined) {
                            const _errs58 = errors
                            if (typeof data0.path !== 'string') {
                              const err31 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/4/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err31]
                              } else {
                                vErrors.push(err31)
                              }
                              errors++
                            }
                            var valid6 = _errs58 === errors
                          } else {
                            var valid6 = true
                          }
                          if (valid6) {
                            if (data0.children !== undefined) {
                              let data25 = data0.children
                              const _errs60 = errors
                              if (errors === _errs60) {
                                if (Array.isArray(data25)) {
                                  var valid7 = true
                                  const len1 = data25.length
                                  for (let i1 = 0; i1 < len1; i1++) {
                                    const _errs62 = errors
                                    if (!validate11(data25[i1], { instancePath: instancePath + '/' + i0 + '/children/' + i1, parentData: data25, parentDataProperty: i1, rootData })) {
                                      vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors)
                                      errors = vErrors.length
                                    }
                                    var valid7 = _errs62 === errors
                                    if (!valid7) {
                                      break
                                    }
                                  }
                                } else {
                                  const err32 = { instancePath: instancePath + '/' + i0 + '/children', schemaPath: '#/items/anyOf/4/properties/children/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                                  if (vErrors === null) {
                                    vErrors = [err32]
                                  } else {
                                    vErrors.push(err32)
                                  }
                                  errors++
                                }
                              }
                              var valid6 = _errs60 === errors
                            } else {
                              var valid6 = true
                            }
                          }
                        }
                      }
                    }
                  } else {
                    const err33 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err33]
                    } else {
                      vErrors.push(err33)
                    }
                    errors++
                  }
                }
                var _valid0 = _errs52 === errors
                valid1 = valid1 || _valid0
                if (!valid1) {
                  const _errs63 = errors
                  if (errors === _errs63) {
                    if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                      let missing5
                      if (
                        (data0.id === undefined && (missing5 = 'id')) ||
                        (data0.name === undefined && (missing5 = 'name')) ||
                        (data0.path === undefined && (missing5 = 'path')) ||
                        (data0.children === undefined && (missing5 = 'children')) ||
                        (data0.access === undefined && (missing5 = 'access'))
                      ) {
                        const err34 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/5/required', keyword: 'required', params: { missingProperty: missing5 }, message: "must have required property '" + missing5 + "'" }
                        if (vErrors === null) {
                          vErrors = [err34]
                        } else {
                          vErrors.push(err34)
                        }
                        errors++
                      } else {
                        if (data0.id !== undefined) {
                          let data27 = data0.id
                          const _errs65 = errors
                          if (!(typeof data27 == 'number' && isFinite(data27))) {
                            const err35 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/5/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err35]
                            } else {
                              vErrors.push(err35)
                            }
                            errors++
                          }
                          var valid8 = _errs65 === errors
                        } else {
                          var valid8 = true
                        }
                        if (valid8) {
                          if (data0.name !== undefined) {
                            const _errs67 = errors
                            if (typeof data0.name !== 'string') {
                              const err36 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/5/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err36]
                              } else {
                                vErrors.push(err36)
                              }
                              errors++
                            }
                            var valid8 = _errs67 === errors
                          } else {
                            var valid8 = true
                          }
                          if (valid8) {
                            if (data0.path !== undefined) {
                              const _errs69 = errors
                              if (typeof data0.path !== 'string') {
                                const err37 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/5/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err37]
                                } else {
                                  vErrors.push(err37)
                                }
                                errors++
                              }
                              var valid8 = _errs69 === errors
                            } else {
                              var valid8 = true
                            }
                            if (valid8) {
                              if (data0.children !== undefined) {
                                let data30 = data0.children
                                const _errs71 = errors
                                if (errors === _errs71) {
                                  if (Array.isArray(data30)) {
                                    var valid9 = true
                                    const len2 = data30.length
                                    for (let i2 = 0; i2 < len2; i2++) {
                                      const _errs73 = errors
                                      if (!validate11(data30[i2], { instancePath: instancePath + '/' + i0 + '/children/' + i2, parentData: data30, parentDataProperty: i2, rootData })) {
                                        vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors)
                                        errors = vErrors.length
                                      }
                                      var valid9 = _errs73 === errors
                                      if (!valid9) {
                                        break
                                      }
                                    }
                                  } else {
                                    const err38 = { instancePath: instancePath + '/' + i0 + '/children', schemaPath: '#/items/anyOf/5/properties/children/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                                    if (vErrors === null) {
                                      vErrors = [err38]
                                    } else {
                                      vErrors.push(err38)
                                    }
                                    errors++
                                  }
                                }
                                var valid8 = _errs71 === errors
                              } else {
                                var valid8 = true
                              }
                              if (valid8) {
                                if (data0.access !== undefined) {
                                  let data32 = data0.access
                                  const _errs74 = errors
                                  const _errs75 = errors
                                  let valid10 = false
                                  const _errs76 = errors
                                  if (typeof data32 !== 'string') {
                                    const err39 = { instancePath: instancePath + '/' + i0 + '/access', schemaPath: '#/items/anyOf/5/properties/access/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                    if (vErrors === null) {
                                      vErrors = [err39]
                                    } else {
                                      vErrors.push(err39)
                                    }
                                    errors++
                                  }
                                  if ('read' !== data32) {
                                    const err40 = {
                                      instancePath: instancePath + '/' + i0 + '/access',
                                      schemaPath: '#/items/anyOf/5/properties/access/anyOf/0/const',
                                      keyword: 'const',
                                      params: { allowedValue: 'read' },
                                      message: 'must be equal to constant',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err40]
                                    } else {
                                      vErrors.push(err40)
                                    }
                                    errors++
                                  }
                                  var _valid1 = _errs76 === errors
                                  valid10 = valid10 || _valid1
                                  if (!valid10) {
                                    const _errs78 = errors
                                    if (typeof data32 !== 'string') {
                                      const err41 = { instancePath: instancePath + '/' + i0 + '/access', schemaPath: '#/items/anyOf/5/properties/access/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                      if (vErrors === null) {
                                        vErrors = [err41]
                                      } else {
                                        vErrors.push(err41)
                                      }
                                      errors++
                                    }
                                    if ('write' !== data32) {
                                      const err42 = {
                                        instancePath: instancePath + '/' + i0 + '/access',
                                        schemaPath: '#/items/anyOf/5/properties/access/anyOf/1/const',
                                        keyword: 'const',
                                        params: { allowedValue: 'write' },
                                        message: 'must be equal to constant',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err42]
                                      } else {
                                        vErrors.push(err42)
                                      }
                                      errors++
                                    }
                                    var _valid1 = _errs78 === errors
                                    valid10 = valid10 || _valid1
                                  }
                                  if (!valid10) {
                                    const err43 = { instancePath: instancePath + '/' + i0 + '/access', schemaPath: '#/items/anyOf/5/properties/access/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                                    if (vErrors === null) {
                                      vErrors = [err43]
                                    } else {
                                      vErrors.push(err43)
                                    }
                                    errors++
                                  } else {
                                    errors = _errs75
                                    if (vErrors !== null) {
                                      if (_errs75) {
                                        vErrors.length = _errs75
                                      } else {
                                        vErrors = null
                                      }
                                    }
                                  }
                                  var valid8 = _errs74 === errors
                                } else {
                                  var valid8 = true
                                }
                              }
                            }
                          }
                        }
                      }
                    } else {
                      const err44 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/5/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err44]
                      } else {
                        vErrors.push(err44)
                      }
                      errors++
                    }
                  }
                  var _valid0 = _errs63 === errors
                  valid1 = valid1 || _valid0
                }
              }
            }
          }
        }
        if (!valid1) {
          const err45 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
          if (vErrors === null) {
            vErrors = [err45]
          } else {
            vErrors.push(err45)
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
