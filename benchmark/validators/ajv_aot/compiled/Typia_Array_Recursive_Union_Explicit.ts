// @ts-nocheck
'use strict'
export const Typia_Array_Recursive_Union_Explicit = validate10
const schema11 = {
  $id: 'Typia_Array_Recursive_Union_Explicit',
  type: 'array',
  items: {
    $id: 'T0',
    anyOf: [
      {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string' },
          path: { type: 'string' },
          width: { type: 'number' },
          height: { type: 'number' },
          url: { type: 'string' },
          size: { type: 'number' },
          type: { const: 'file', type: 'string' },
          extension: { const: 'jpg', type: 'string' },
        },
        required: ['id', 'name', 'path', 'width', 'height', 'url', 'size', 'type', 'extension'],
      },
      {
        type: 'object',
        properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, content: { type: 'string' }, type: { const: 'file', type: 'string' }, extension: { const: 'txt', type: 'string' } },
        required: ['id', 'name', 'path', 'size', 'content', 'type', 'extension'],
      },
      {
        type: 'object',
        properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, count: { type: 'number' }, type: { const: 'file', type: 'string' }, extension: { const: 'zip', type: 'string' } },
        required: ['id', 'name', 'path', 'size', 'count', 'type', 'extension'],
      },
      {
        type: 'object',
        properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, target: { $ref: 'T0' }, type: { const: 'file', type: 'string' }, extension: { const: 'lnk', type: 'string' } },
        required: ['id', 'name', 'path', 'target', 'type', 'extension'],
      },
      {
        type: 'object',
        properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, children: { type: 'array', items: { $ref: 'T0' } }, type: { const: 'directory', type: 'string' } },
        required: ['id', 'name', 'path', 'children', 'type'],
      },
    ],
  },
}
const schema12 = {
  $id: 'T0',
  anyOf: [
    {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        path: { type: 'string' },
        width: { type: 'number' },
        height: { type: 'number' },
        url: { type: 'string' },
        size: { type: 'number' },
        type: { const: 'file', type: 'string' },
        extension: { const: 'jpg', type: 'string' },
      },
      required: ['id', 'name', 'path', 'width', 'height', 'url', 'size', 'type', 'extension'],
    },
    {
      type: 'object',
      properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, content: { type: 'string' }, type: { const: 'file', type: 'string' }, extension: { const: 'txt', type: 'string' } },
      required: ['id', 'name', 'path', 'size', 'content', 'type', 'extension'],
    },
    {
      type: 'object',
      properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, size: { type: 'number' }, count: { type: 'number' }, type: { const: 'file', type: 'string' }, extension: { const: 'zip', type: 'string' } },
      required: ['id', 'name', 'path', 'size', 'count', 'type', 'extension'],
    },
    {
      type: 'object',
      properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, target: { $ref: 'T0' }, type: { const: 'file', type: 'string' }, extension: { const: 'lnk', type: 'string' } },
      required: ['id', 'name', 'path', 'target', 'type', 'extension'],
    },
    {
      type: 'object',
      properties: { id: { type: 'number' }, name: { type: 'string' }, path: { type: 'string' }, children: { type: 'array', items: { $ref: 'T0' } }, type: { const: 'directory', type: 'string' } },
      required: ['id', 'name', 'path', 'children', 'type'],
    },
  ],
}
const wrapper0 = { validate: validate11 }
function validate11(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="T0" */ let vErrors = null
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
        (data.size === undefined && (missing0 = 'size')) ||
        (data.type === undefined && (missing0 = 'type')) ||
        (data.extension === undefined && (missing0 = 'extension'))
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
                    if (valid1) {
                      if (data.type !== undefined) {
                        let data7 = data.type
                        const _errs17 = errors
                        if (typeof data7 !== 'string') {
                          const err8 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err8]
                          } else {
                            vErrors.push(err8)
                          }
                          errors++
                        }
                        if ('file' !== data7) {
                          const err9 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/0/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err9]
                          } else {
                            vErrors.push(err9)
                          }
                          errors++
                        }
                        var valid1 = _errs17 === errors
                      } else {
                        var valid1 = true
                      }
                      if (valid1) {
                        if (data.extension !== undefined) {
                          let data8 = data.extension
                          const _errs19 = errors
                          if (typeof data8 !== 'string') {
                            const err10 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/0/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err10]
                            } else {
                              vErrors.push(err10)
                            }
                            errors++
                          }
                          if ('jpg' !== data8) {
                            const err11 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/0/properties/extension/const', keyword: 'const', params: { allowedValue: 'jpg' }, message: 'must be equal to constant' }
                            if (vErrors === null) {
                              vErrors = [err11]
                            } else {
                              vErrors.push(err11)
                            }
                            errors++
                          }
                          var valid1 = _errs19 === errors
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
        }
      }
    } else {
      const err12 = { instancePath, schemaPath: '#/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
      if (vErrors === null) {
        vErrors = [err12]
      } else {
        vErrors.push(err12)
      }
      errors++
    }
  }
  var _valid0 = _errs1 === errors
  valid0 = valid0 || _valid0
  if (!valid0) {
    const _errs21 = errors
    if (errors === _errs21) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing1
        if (
          (data.id === undefined && (missing1 = 'id')) ||
          (data.name === undefined && (missing1 = 'name')) ||
          (data.path === undefined && (missing1 = 'path')) ||
          (data.size === undefined && (missing1 = 'size')) ||
          (data.content === undefined && (missing1 = 'content')) ||
          (data.type === undefined && (missing1 = 'type')) ||
          (data.extension === undefined && (missing1 = 'extension'))
        ) {
          const err13 = { instancePath, schemaPath: '#/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
          if (vErrors === null) {
            vErrors = [err13]
          } else {
            vErrors.push(err13)
          }
          errors++
        } else {
          if (data.id !== undefined) {
            let data9 = data.id
            const _errs23 = errors
            if (!(typeof data9 == 'number' && isFinite(data9))) {
              const err14 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/1/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
              if (vErrors === null) {
                vErrors = [err14]
              } else {
                vErrors.push(err14)
              }
              errors++
            }
            var valid2 = _errs23 === errors
          } else {
            var valid2 = true
          }
          if (valid2) {
            if (data.name !== undefined) {
              const _errs25 = errors
              if (typeof data.name !== 'string') {
                const err15 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/1/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err15]
                } else {
                  vErrors.push(err15)
                }
                errors++
              }
              var valid2 = _errs25 === errors
            } else {
              var valid2 = true
            }
            if (valid2) {
              if (data.path !== undefined) {
                const _errs27 = errors
                if (typeof data.path !== 'string') {
                  const err16 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/1/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err16]
                  } else {
                    vErrors.push(err16)
                  }
                  errors++
                }
                var valid2 = _errs27 === errors
              } else {
                var valid2 = true
              }
              if (valid2) {
                if (data.size !== undefined) {
                  let data12 = data.size
                  const _errs29 = errors
                  if (!(typeof data12 == 'number' && isFinite(data12))) {
                    const err17 = { instancePath: instancePath + '/size', schemaPath: '#/anyOf/1/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err17]
                    } else {
                      vErrors.push(err17)
                    }
                    errors++
                  }
                  var valid2 = _errs29 === errors
                } else {
                  var valid2 = true
                }
                if (valid2) {
                  if (data.content !== undefined) {
                    const _errs31 = errors
                    if (typeof data.content !== 'string') {
                      const err18 = { instancePath: instancePath + '/content', schemaPath: '#/anyOf/1/properties/content/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err18]
                      } else {
                        vErrors.push(err18)
                      }
                      errors++
                    }
                    var valid2 = _errs31 === errors
                  } else {
                    var valid2 = true
                  }
                  if (valid2) {
                    if (data.type !== undefined) {
                      let data14 = data.type
                      const _errs33 = errors
                      if (typeof data14 !== 'string') {
                        const err19 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err19]
                        } else {
                          vErrors.push(err19)
                        }
                        errors++
                      }
                      if ('file' !== data14) {
                        const err20 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                        if (vErrors === null) {
                          vErrors = [err20]
                        } else {
                          vErrors.push(err20)
                        }
                        errors++
                      }
                      var valid2 = _errs33 === errors
                    } else {
                      var valid2 = true
                    }
                    if (valid2) {
                      if (data.extension !== undefined) {
                        let data15 = data.extension
                        const _errs35 = errors
                        if (typeof data15 !== 'string') {
                          const err21 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/1/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err21]
                          } else {
                            vErrors.push(err21)
                          }
                          errors++
                        }
                        if ('txt' !== data15) {
                          const err22 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/1/properties/extension/const', keyword: 'const', params: { allowedValue: 'txt' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err22]
                          } else {
                            vErrors.push(err22)
                          }
                          errors++
                        }
                        var valid2 = _errs35 === errors
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
        const err23 = { instancePath, schemaPath: '#/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
        if (vErrors === null) {
          vErrors = [err23]
        } else {
          vErrors.push(err23)
        }
        errors++
      }
    }
    var _valid0 = _errs21 === errors
    valid0 = valid0 || _valid0
    if (!valid0) {
      const _errs37 = errors
      if (errors === _errs37) {
        if (data && typeof data == 'object' && !Array.isArray(data)) {
          let missing2
          if (
            (data.id === undefined && (missing2 = 'id')) ||
            (data.name === undefined && (missing2 = 'name')) ||
            (data.path === undefined && (missing2 = 'path')) ||
            (data.size === undefined && (missing2 = 'size')) ||
            (data.count === undefined && (missing2 = 'count')) ||
            (data.type === undefined && (missing2 = 'type')) ||
            (data.extension === undefined && (missing2 = 'extension'))
          ) {
            const err24 = { instancePath, schemaPath: '#/anyOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
            if (vErrors === null) {
              vErrors = [err24]
            } else {
              vErrors.push(err24)
            }
            errors++
          } else {
            if (data.id !== undefined) {
              let data16 = data.id
              const _errs39 = errors
              if (!(typeof data16 == 'number' && isFinite(data16))) {
                const err25 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/2/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                if (vErrors === null) {
                  vErrors = [err25]
                } else {
                  vErrors.push(err25)
                }
                errors++
              }
              var valid3 = _errs39 === errors
            } else {
              var valid3 = true
            }
            if (valid3) {
              if (data.name !== undefined) {
                const _errs41 = errors
                if (typeof data.name !== 'string') {
                  const err26 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/2/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err26]
                  } else {
                    vErrors.push(err26)
                  }
                  errors++
                }
                var valid3 = _errs41 === errors
              } else {
                var valid3 = true
              }
              if (valid3) {
                if (data.path !== undefined) {
                  const _errs43 = errors
                  if (typeof data.path !== 'string') {
                    const err27 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/2/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err27]
                    } else {
                      vErrors.push(err27)
                    }
                    errors++
                  }
                  var valid3 = _errs43 === errors
                } else {
                  var valid3 = true
                }
                if (valid3) {
                  if (data.size !== undefined) {
                    let data19 = data.size
                    const _errs45 = errors
                    if (!(typeof data19 == 'number' && isFinite(data19))) {
                      const err28 = { instancePath: instancePath + '/size', schemaPath: '#/anyOf/2/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                      if (vErrors === null) {
                        vErrors = [err28]
                      } else {
                        vErrors.push(err28)
                      }
                      errors++
                    }
                    var valid3 = _errs45 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data.count !== undefined) {
                      let data20 = data.count
                      const _errs47 = errors
                      if (!(typeof data20 == 'number' && isFinite(data20))) {
                        const err29 = { instancePath: instancePath + '/count', schemaPath: '#/anyOf/2/properties/count/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err29]
                        } else {
                          vErrors.push(err29)
                        }
                        errors++
                      }
                      var valid3 = _errs47 === errors
                    } else {
                      var valid3 = true
                    }
                    if (valid3) {
                      if (data.type !== undefined) {
                        let data21 = data.type
                        const _errs49 = errors
                        if (typeof data21 !== 'string') {
                          const err30 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/2/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err30]
                          } else {
                            vErrors.push(err30)
                          }
                          errors++
                        }
                        if ('file' !== data21) {
                          const err31 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/2/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err31]
                          } else {
                            vErrors.push(err31)
                          }
                          errors++
                        }
                        var valid3 = _errs49 === errors
                      } else {
                        var valid3 = true
                      }
                      if (valid3) {
                        if (data.extension !== undefined) {
                          let data22 = data.extension
                          const _errs51 = errors
                          if (typeof data22 !== 'string') {
                            const err32 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/2/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err32]
                            } else {
                              vErrors.push(err32)
                            }
                            errors++
                          }
                          if ('zip' !== data22) {
                            const err33 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/2/properties/extension/const', keyword: 'const', params: { allowedValue: 'zip' }, message: 'must be equal to constant' }
                            if (vErrors === null) {
                              vErrors = [err33]
                            } else {
                              vErrors.push(err33)
                            }
                            errors++
                          }
                          var valid3 = _errs51 === errors
                        } else {
                          var valid3 = true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          const err34 = { instancePath, schemaPath: '#/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
          if (vErrors === null) {
            vErrors = [err34]
          } else {
            vErrors.push(err34)
          }
          errors++
        }
      }
      var _valid0 = _errs37 === errors
      valid0 = valid0 || _valid0
      if (!valid0) {
        const _errs53 = errors
        if (errors === _errs53) {
          if (data && typeof data == 'object' && !Array.isArray(data)) {
            let missing3
            if (
              (data.id === undefined && (missing3 = 'id')) ||
              (data.name === undefined && (missing3 = 'name')) ||
              (data.path === undefined && (missing3 = 'path')) ||
              (data.target === undefined && (missing3 = 'target')) ||
              (data.type === undefined && (missing3 = 'type')) ||
              (data.extension === undefined && (missing3 = 'extension'))
            ) {
              const err35 = { instancePath, schemaPath: '#/anyOf/3/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }
              if (vErrors === null) {
                vErrors = [err35]
              } else {
                vErrors.push(err35)
              }
              errors++
            } else {
              if (data.id !== undefined) {
                let data23 = data.id
                const _errs55 = errors
                if (!(typeof data23 == 'number' && isFinite(data23))) {
                  const err36 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/3/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                  if (vErrors === null) {
                    vErrors = [err36]
                  } else {
                    vErrors.push(err36)
                  }
                  errors++
                }
                var valid4 = _errs55 === errors
              } else {
                var valid4 = true
              }
              if (valid4) {
                if (data.name !== undefined) {
                  const _errs57 = errors
                  if (typeof data.name !== 'string') {
                    const err37 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/3/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                    if (vErrors === null) {
                      vErrors = [err37]
                    } else {
                      vErrors.push(err37)
                    }
                    errors++
                  }
                  var valid4 = _errs57 === errors
                } else {
                  var valid4 = true
                }
                if (valid4) {
                  if (data.path !== undefined) {
                    const _errs59 = errors
                    if (typeof data.path !== 'string') {
                      const err38 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/3/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err38]
                      } else {
                        vErrors.push(err38)
                      }
                      errors++
                    }
                    var valid4 = _errs59 === errors
                  } else {
                    var valid4 = true
                  }
                  if (valid4) {
                    if (data.target !== undefined) {
                      const _errs61 = errors
                      if (!wrapper0.validate(data.target, { instancePath: instancePath + '/target', parentData: data, parentDataProperty: 'target', rootData })) {
                        vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                        errors = vErrors.length
                      }
                      var valid4 = _errs61 === errors
                    } else {
                      var valid4 = true
                    }
                    if (valid4) {
                      if (data.type !== undefined) {
                        let data27 = data.type
                        const _errs62 = errors
                        if (typeof data27 !== 'string') {
                          const err39 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/3/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err39]
                          } else {
                            vErrors.push(err39)
                          }
                          errors++
                        }
                        if ('file' !== data27) {
                          const err40 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/3/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                          if (vErrors === null) {
                            vErrors = [err40]
                          } else {
                            vErrors.push(err40)
                          }
                          errors++
                        }
                        var valid4 = _errs62 === errors
                      } else {
                        var valid4 = true
                      }
                      if (valid4) {
                        if (data.extension !== undefined) {
                          let data28 = data.extension
                          const _errs64 = errors
                          if (typeof data28 !== 'string') {
                            const err41 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/3/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err41]
                            } else {
                              vErrors.push(err41)
                            }
                            errors++
                          }
                          if ('lnk' !== data28) {
                            const err42 = { instancePath: instancePath + '/extension', schemaPath: '#/anyOf/3/properties/extension/const', keyword: 'const', params: { allowedValue: 'lnk' }, message: 'must be equal to constant' }
                            if (vErrors === null) {
                              vErrors = [err42]
                            } else {
                              vErrors.push(err42)
                            }
                            errors++
                          }
                          var valid4 = _errs64 === errors
                        } else {
                          var valid4 = true
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            const err43 = { instancePath, schemaPath: '#/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err43]
            } else {
              vErrors.push(err43)
            }
            errors++
          }
        }
        var _valid0 = _errs53 === errors
        valid0 = valid0 || _valid0
        if (!valid0) {
          const _errs66 = errors
          if (errors === _errs66) {
            if (data && typeof data == 'object' && !Array.isArray(data)) {
              let missing4
              if (
                (data.id === undefined && (missing4 = 'id')) ||
                (data.name === undefined && (missing4 = 'name')) ||
                (data.path === undefined && (missing4 = 'path')) ||
                (data.children === undefined && (missing4 = 'children')) ||
                (data.type === undefined && (missing4 = 'type'))
              ) {
                const err44 = { instancePath, schemaPath: '#/anyOf/4/required', keyword: 'required', params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }
                if (vErrors === null) {
                  vErrors = [err44]
                } else {
                  vErrors.push(err44)
                }
                errors++
              } else {
                if (data.id !== undefined) {
                  let data29 = data.id
                  const _errs68 = errors
                  if (!(typeof data29 == 'number' && isFinite(data29))) {
                    const err45 = { instancePath: instancePath + '/id', schemaPath: '#/anyOf/4/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err45]
                    } else {
                      vErrors.push(err45)
                    }
                    errors++
                  }
                  var valid5 = _errs68 === errors
                } else {
                  var valid5 = true
                }
                if (valid5) {
                  if (data.name !== undefined) {
                    const _errs70 = errors
                    if (typeof data.name !== 'string') {
                      const err46 = { instancePath: instancePath + '/name', schemaPath: '#/anyOf/4/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err46]
                      } else {
                        vErrors.push(err46)
                      }
                      errors++
                    }
                    var valid5 = _errs70 === errors
                  } else {
                    var valid5 = true
                  }
                  if (valid5) {
                    if (data.path !== undefined) {
                      const _errs72 = errors
                      if (typeof data.path !== 'string') {
                        const err47 = { instancePath: instancePath + '/path', schemaPath: '#/anyOf/4/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err47]
                        } else {
                          vErrors.push(err47)
                        }
                        errors++
                      }
                      var valid5 = _errs72 === errors
                    } else {
                      var valid5 = true
                    }
                    if (valid5) {
                      if (data.children !== undefined) {
                        let data32 = data.children
                        const _errs74 = errors
                        if (errors === _errs74) {
                          if (Array.isArray(data32)) {
                            var valid6 = true
                            const len0 = data32.length
                            for (let i0 = 0; i0 < len0; i0++) {
                              const _errs76 = errors
                              if (!wrapper0.validate(data32[i0], { instancePath: instancePath + '/children/' + i0, parentData: data32, parentDataProperty: i0, rootData })) {
                                vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                                errors = vErrors.length
                              }
                              var valid6 = _errs76 === errors
                              if (!valid6) {
                                break
                              }
                            }
                          } else {
                            const err48 = { instancePath: instancePath + '/children', schemaPath: '#/anyOf/4/properties/children/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                            if (vErrors === null) {
                              vErrors = [err48]
                            } else {
                              vErrors.push(err48)
                            }
                            errors++
                          }
                        }
                        var valid5 = _errs74 === errors
                      } else {
                        var valid5 = true
                      }
                      if (valid5) {
                        if (data.type !== undefined) {
                          let data34 = data.type
                          const _errs77 = errors
                          if (typeof data34 !== 'string') {
                            const err49 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/4/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err49]
                            } else {
                              vErrors.push(err49)
                            }
                            errors++
                          }
                          if ('directory' !== data34) {
                            const err50 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/4/properties/type/const', keyword: 'const', params: { allowedValue: 'directory' }, message: 'must be equal to constant' }
                            if (vErrors === null) {
                              vErrors = [err50]
                            } else {
                              vErrors.push(err50)
                            }
                            errors++
                          }
                          var valid5 = _errs77 === errors
                        } else {
                          var valid5 = true
                        }
                      }
                    }
                  }
                }
              }
            } else {
              const err51 = { instancePath, schemaPath: '#/anyOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err51]
              } else {
                vErrors.push(err51)
              }
              errors++
            }
          }
          var _valid0 = _errs66 === errors
          valid0 = valid0 || _valid0
        }
      }
    }
  }
  if (!valid0) {
    const err52 = { instancePath, schemaPath: '#/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
    if (vErrors === null) {
      vErrors = [err52]
    } else {
      vErrors.push(err52)
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
  /*# sourceURL="Typia_Array_Recursive_Union_Explicit" */ let vErrors = null
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
              (data0.size === undefined && (missing0 = 'size')) ||
              (data0.type === undefined && (missing0 = 'type')) ||
              (data0.extension === undefined && (missing0 = 'extension'))
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
                          if (valid2) {
                            if (data0.type !== undefined) {
                              let data8 = data0.type
                              const _errs19 = errors
                              if (typeof data8 !== 'string') {
                                const err8 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err8]
                                } else {
                                  vErrors.push(err8)
                                }
                                errors++
                              }
                              if ('file' !== data8) {
                                const err9 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/0/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                                if (vErrors === null) {
                                  vErrors = [err9]
                                } else {
                                  vErrors.push(err9)
                                }
                                errors++
                              }
                              var valid2 = _errs19 === errors
                            } else {
                              var valid2 = true
                            }
                            if (valid2) {
                              if (data0.extension !== undefined) {
                                let data9 = data0.extension
                                const _errs21 = errors
                                if (typeof data9 !== 'string') {
                                  const err10 = { instancePath: instancePath + '/' + i0 + '/extension', schemaPath: '#/items/anyOf/0/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                  if (vErrors === null) {
                                    vErrors = [err10]
                                  } else {
                                    vErrors.push(err10)
                                  }
                                  errors++
                                }
                                if ('jpg' !== data9) {
                                  const err11 = {
                                    instancePath: instancePath + '/' + i0 + '/extension',
                                    schemaPath: '#/items/anyOf/0/properties/extension/const',
                                    keyword: 'const',
                                    params: { allowedValue: 'jpg' },
                                    message: 'must be equal to constant',
                                  }
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
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            const err12 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
            if (vErrors === null) {
              vErrors = [err12]
            } else {
              vErrors.push(err12)
            }
            errors++
          }
        }
        var _valid0 = _errs3 === errors
        valid1 = valid1 || _valid0
        if (!valid1) {
          const _errs23 = errors
          if (errors === _errs23) {
            if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
              let missing1
              if (
                (data0.id === undefined && (missing1 = 'id')) ||
                (data0.name === undefined && (missing1 = 'name')) ||
                (data0.path === undefined && (missing1 = 'path')) ||
                (data0.size === undefined && (missing1 = 'size')) ||
                (data0.content === undefined && (missing1 = 'content')) ||
                (data0.type === undefined && (missing1 = 'type')) ||
                (data0.extension === undefined && (missing1 = 'extension'))
              ) {
                const err13 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
                if (vErrors === null) {
                  vErrors = [err13]
                } else {
                  vErrors.push(err13)
                }
                errors++
              } else {
                if (data0.id !== undefined) {
                  let data10 = data0.id
                  const _errs25 = errors
                  if (!(typeof data10 == 'number' && isFinite(data10))) {
                    const err14 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/1/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                    if (vErrors === null) {
                      vErrors = [err14]
                    } else {
                      vErrors.push(err14)
                    }
                    errors++
                  }
                  var valid3 = _errs25 === errors
                } else {
                  var valid3 = true
                }
                if (valid3) {
                  if (data0.name !== undefined) {
                    const _errs27 = errors
                    if (typeof data0.name !== 'string') {
                      const err15 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/1/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                      if (vErrors === null) {
                        vErrors = [err15]
                      } else {
                        vErrors.push(err15)
                      }
                      errors++
                    }
                    var valid3 = _errs27 === errors
                  } else {
                    var valid3 = true
                  }
                  if (valid3) {
                    if (data0.path !== undefined) {
                      const _errs29 = errors
                      if (typeof data0.path !== 'string') {
                        const err16 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/1/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err16]
                        } else {
                          vErrors.push(err16)
                        }
                        errors++
                      }
                      var valid3 = _errs29 === errors
                    } else {
                      var valid3 = true
                    }
                    if (valid3) {
                      if (data0.size !== undefined) {
                        let data13 = data0.size
                        const _errs31 = errors
                        if (!(typeof data13 == 'number' && isFinite(data13))) {
                          const err17 = { instancePath: instancePath + '/' + i0 + '/size', schemaPath: '#/items/anyOf/1/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
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
                        if (data0.content !== undefined) {
                          const _errs33 = errors
                          if (typeof data0.content !== 'string') {
                            const err18 = { instancePath: instancePath + '/' + i0 + '/content', schemaPath: '#/items/anyOf/1/properties/content/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
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
                          if (data0.type !== undefined) {
                            let data15 = data0.type
                            const _errs35 = errors
                            if (typeof data15 !== 'string') {
                              const err19 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err19]
                              } else {
                                vErrors.push(err19)
                              }
                              errors++
                            }
                            if ('file' !== data15) {
                              const err20 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                              if (vErrors === null) {
                                vErrors = [err20]
                              } else {
                                vErrors.push(err20)
                              }
                              errors++
                            }
                            var valid3 = _errs35 === errors
                          } else {
                            var valid3 = true
                          }
                          if (valid3) {
                            if (data0.extension !== undefined) {
                              let data16 = data0.extension
                              const _errs37 = errors
                              if (typeof data16 !== 'string') {
                                const err21 = { instancePath: instancePath + '/' + i0 + '/extension', schemaPath: '#/items/anyOf/1/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err21]
                                } else {
                                  vErrors.push(err21)
                                }
                                errors++
                              }
                              if ('txt' !== data16) {
                                const err22 = {
                                  instancePath: instancePath + '/' + i0 + '/extension',
                                  schemaPath: '#/items/anyOf/1/properties/extension/const',
                                  keyword: 'const',
                                  params: { allowedValue: 'txt' },
                                  message: 'must be equal to constant',
                                }
                                if (vErrors === null) {
                                  vErrors = [err22]
                                } else {
                                  vErrors.push(err22)
                                }
                                errors++
                              }
                              var valid3 = _errs37 === errors
                            } else {
                              var valid3 = true
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              const err23 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
              if (vErrors === null) {
                vErrors = [err23]
              } else {
                vErrors.push(err23)
              }
              errors++
            }
          }
          var _valid0 = _errs23 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs39 = errors
            if (errors === _errs39) {
              if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                let missing2
                if (
                  (data0.id === undefined && (missing2 = 'id')) ||
                  (data0.name === undefined && (missing2 = 'name')) ||
                  (data0.path === undefined && (missing2 = 'path')) ||
                  (data0.size === undefined && (missing2 = 'size')) ||
                  (data0.count === undefined && (missing2 = 'count')) ||
                  (data0.type === undefined && (missing2 = 'type')) ||
                  (data0.extension === undefined && (missing2 = 'extension'))
                ) {
                  const err24 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/required', keyword: 'required', params: { missingProperty: missing2 }, message: "must have required property '" + missing2 + "'" }
                  if (vErrors === null) {
                    vErrors = [err24]
                  } else {
                    vErrors.push(err24)
                  }
                  errors++
                } else {
                  if (data0.id !== undefined) {
                    let data17 = data0.id
                    const _errs41 = errors
                    if (!(typeof data17 == 'number' && isFinite(data17))) {
                      const err25 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/2/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                      if (vErrors === null) {
                        vErrors = [err25]
                      } else {
                        vErrors.push(err25)
                      }
                      errors++
                    }
                    var valid4 = _errs41 === errors
                  } else {
                    var valid4 = true
                  }
                  if (valid4) {
                    if (data0.name !== undefined) {
                      const _errs43 = errors
                      if (typeof data0.name !== 'string') {
                        const err26 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/2/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                        if (vErrors === null) {
                          vErrors = [err26]
                        } else {
                          vErrors.push(err26)
                        }
                        errors++
                      }
                      var valid4 = _errs43 === errors
                    } else {
                      var valid4 = true
                    }
                    if (valid4) {
                      if (data0.path !== undefined) {
                        const _errs45 = errors
                        if (typeof data0.path !== 'string') {
                          const err27 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/2/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err27]
                          } else {
                            vErrors.push(err27)
                          }
                          errors++
                        }
                        var valid4 = _errs45 === errors
                      } else {
                        var valid4 = true
                      }
                      if (valid4) {
                        if (data0.size !== undefined) {
                          let data20 = data0.size
                          const _errs47 = errors
                          if (!(typeof data20 == 'number' && isFinite(data20))) {
                            const err28 = { instancePath: instancePath + '/' + i0 + '/size', schemaPath: '#/items/anyOf/2/properties/size/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err28]
                            } else {
                              vErrors.push(err28)
                            }
                            errors++
                          }
                          var valid4 = _errs47 === errors
                        } else {
                          var valid4 = true
                        }
                        if (valid4) {
                          if (data0.count !== undefined) {
                            let data21 = data0.count
                            const _errs49 = errors
                            if (!(typeof data21 == 'number' && isFinite(data21))) {
                              const err29 = { instancePath: instancePath + '/' + i0 + '/count', schemaPath: '#/items/anyOf/2/properties/count/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                              if (vErrors === null) {
                                vErrors = [err29]
                              } else {
                                vErrors.push(err29)
                              }
                              errors++
                            }
                            var valid4 = _errs49 === errors
                          } else {
                            var valid4 = true
                          }
                          if (valid4) {
                            if (data0.type !== undefined) {
                              let data22 = data0.type
                              const _errs51 = errors
                              if (typeof data22 !== 'string') {
                                const err30 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/2/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err30]
                                } else {
                                  vErrors.push(err30)
                                }
                                errors++
                              }
                              if ('file' !== data22) {
                                const err31 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/2/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                                if (vErrors === null) {
                                  vErrors = [err31]
                                } else {
                                  vErrors.push(err31)
                                }
                                errors++
                              }
                              var valid4 = _errs51 === errors
                            } else {
                              var valid4 = true
                            }
                            if (valid4) {
                              if (data0.extension !== undefined) {
                                let data23 = data0.extension
                                const _errs53 = errors
                                if (typeof data23 !== 'string') {
                                  const err32 = { instancePath: instancePath + '/' + i0 + '/extension', schemaPath: '#/items/anyOf/2/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                  if (vErrors === null) {
                                    vErrors = [err32]
                                  } else {
                                    vErrors.push(err32)
                                  }
                                  errors++
                                }
                                if ('zip' !== data23) {
                                  const err33 = {
                                    instancePath: instancePath + '/' + i0 + '/extension',
                                    schemaPath: '#/items/anyOf/2/properties/extension/const',
                                    keyword: 'const',
                                    params: { allowedValue: 'zip' },
                                    message: 'must be equal to constant',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err33]
                                  } else {
                                    vErrors.push(err33)
                                  }
                                  errors++
                                }
                                var valid4 = _errs53 === errors
                              } else {
                                var valid4 = true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                const err34 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                if (vErrors === null) {
                  vErrors = [err34]
                } else {
                  vErrors.push(err34)
                }
                errors++
              }
            }
            var _valid0 = _errs39 === errors
            valid1 = valid1 || _valid0
            if (!valid1) {
              const _errs55 = errors
              if (errors === _errs55) {
                if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                  let missing3
                  if (
                    (data0.id === undefined && (missing3 = 'id')) ||
                    (data0.name === undefined && (missing3 = 'name')) ||
                    (data0.path === undefined && (missing3 = 'path')) ||
                    (data0.target === undefined && (missing3 = 'target')) ||
                    (data0.type === undefined && (missing3 = 'type')) ||
                    (data0.extension === undefined && (missing3 = 'extension'))
                  ) {
                    const err35 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/required', keyword: 'required', params: { missingProperty: missing3 }, message: "must have required property '" + missing3 + "'" }
                    if (vErrors === null) {
                      vErrors = [err35]
                    } else {
                      vErrors.push(err35)
                    }
                    errors++
                  } else {
                    if (data0.id !== undefined) {
                      let data24 = data0.id
                      const _errs57 = errors
                      if (!(typeof data24 == 'number' && isFinite(data24))) {
                        const err36 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/3/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                        if (vErrors === null) {
                          vErrors = [err36]
                        } else {
                          vErrors.push(err36)
                        }
                        errors++
                      }
                      var valid5 = _errs57 === errors
                    } else {
                      var valid5 = true
                    }
                    if (valid5) {
                      if (data0.name !== undefined) {
                        const _errs59 = errors
                        if (typeof data0.name !== 'string') {
                          const err37 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/3/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                          if (vErrors === null) {
                            vErrors = [err37]
                          } else {
                            vErrors.push(err37)
                          }
                          errors++
                        }
                        var valid5 = _errs59 === errors
                      } else {
                        var valid5 = true
                      }
                      if (valid5) {
                        if (data0.path !== undefined) {
                          const _errs61 = errors
                          if (typeof data0.path !== 'string') {
                            const err38 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/3/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err38]
                            } else {
                              vErrors.push(err38)
                            }
                            errors++
                          }
                          var valid5 = _errs61 === errors
                        } else {
                          var valid5 = true
                        }
                        if (valid5) {
                          if (data0.target !== undefined) {
                            const _errs63 = errors
                            if (!validate11(data0.target, { instancePath: instancePath + '/' + i0 + '/target', parentData: data0, parentDataProperty: 'target', rootData })) {
                              vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors)
                              errors = vErrors.length
                            }
                            var valid5 = _errs63 === errors
                          } else {
                            var valid5 = true
                          }
                          if (valid5) {
                            if (data0.type !== undefined) {
                              let data28 = data0.type
                              const _errs64 = errors
                              if (typeof data28 !== 'string') {
                                const err39 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/3/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                if (vErrors === null) {
                                  vErrors = [err39]
                                } else {
                                  vErrors.push(err39)
                                }
                                errors++
                              }
                              if ('file' !== data28) {
                                const err40 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/3/properties/type/const', keyword: 'const', params: { allowedValue: 'file' }, message: 'must be equal to constant' }
                                if (vErrors === null) {
                                  vErrors = [err40]
                                } else {
                                  vErrors.push(err40)
                                }
                                errors++
                              }
                              var valid5 = _errs64 === errors
                            } else {
                              var valid5 = true
                            }
                            if (valid5) {
                              if (data0.extension !== undefined) {
                                let data29 = data0.extension
                                const _errs66 = errors
                                if (typeof data29 !== 'string') {
                                  const err41 = { instancePath: instancePath + '/' + i0 + '/extension', schemaPath: '#/items/anyOf/3/properties/extension/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                  if (vErrors === null) {
                                    vErrors = [err41]
                                  } else {
                                    vErrors.push(err41)
                                  }
                                  errors++
                                }
                                if ('lnk' !== data29) {
                                  const err42 = {
                                    instancePath: instancePath + '/' + i0 + '/extension',
                                    schemaPath: '#/items/anyOf/3/properties/extension/const',
                                    keyword: 'const',
                                    params: { allowedValue: 'lnk' },
                                    message: 'must be equal to constant',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err42]
                                  } else {
                                    vErrors.push(err42)
                                  }
                                  errors++
                                }
                                var valid5 = _errs66 === errors
                              } else {
                                var valid5 = true
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  const err43 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                  if (vErrors === null) {
                    vErrors = [err43]
                  } else {
                    vErrors.push(err43)
                  }
                  errors++
                }
              }
              var _valid0 = _errs55 === errors
              valid1 = valid1 || _valid0
              if (!valid1) {
                const _errs68 = errors
                if (errors === _errs68) {
                  if (data0 && typeof data0 == 'object' && !Array.isArray(data0)) {
                    let missing4
                    if (
                      (data0.id === undefined && (missing4 = 'id')) ||
                      (data0.name === undefined && (missing4 = 'name')) ||
                      (data0.path === undefined && (missing4 = 'path')) ||
                      (data0.children === undefined && (missing4 = 'children')) ||
                      (data0.type === undefined && (missing4 = 'type'))
                    ) {
                      const err44 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/required', keyword: 'required', params: { missingProperty: missing4 }, message: "must have required property '" + missing4 + "'" }
                      if (vErrors === null) {
                        vErrors = [err44]
                      } else {
                        vErrors.push(err44)
                      }
                      errors++
                    } else {
                      if (data0.id !== undefined) {
                        let data30 = data0.id
                        const _errs70 = errors
                        if (!(typeof data30 == 'number' && isFinite(data30))) {
                          const err45 = { instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/anyOf/4/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err45]
                          } else {
                            vErrors.push(err45)
                          }
                          errors++
                        }
                        var valid6 = _errs70 === errors
                      } else {
                        var valid6 = true
                      }
                      if (valid6) {
                        if (data0.name !== undefined) {
                          const _errs72 = errors
                          if (typeof data0.name !== 'string') {
                            const err46 = { instancePath: instancePath + '/' + i0 + '/name', schemaPath: '#/items/anyOf/4/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                            if (vErrors === null) {
                              vErrors = [err46]
                            } else {
                              vErrors.push(err46)
                            }
                            errors++
                          }
                          var valid6 = _errs72 === errors
                        } else {
                          var valid6 = true
                        }
                        if (valid6) {
                          if (data0.path !== undefined) {
                            const _errs74 = errors
                            if (typeof data0.path !== 'string') {
                              const err47 = { instancePath: instancePath + '/' + i0 + '/path', schemaPath: '#/items/anyOf/4/properties/path/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err47]
                              } else {
                                vErrors.push(err47)
                              }
                              errors++
                            }
                            var valid6 = _errs74 === errors
                          } else {
                            var valid6 = true
                          }
                          if (valid6) {
                            if (data0.children !== undefined) {
                              let data33 = data0.children
                              const _errs76 = errors
                              if (errors === _errs76) {
                                if (Array.isArray(data33)) {
                                  var valid7 = true
                                  const len1 = data33.length
                                  for (let i1 = 0; i1 < len1; i1++) {
                                    const _errs78 = errors
                                    if (!validate11(data33[i1], { instancePath: instancePath + '/' + i0 + '/children/' + i1, parentData: data33, parentDataProperty: i1, rootData })) {
                                      vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors)
                                      errors = vErrors.length
                                    }
                                    var valid7 = _errs78 === errors
                                    if (!valid7) {
                                      break
                                    }
                                  }
                                } else {
                                  const err48 = { instancePath: instancePath + '/' + i0 + '/children', schemaPath: '#/items/anyOf/4/properties/children/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                                  if (vErrors === null) {
                                    vErrors = [err48]
                                  } else {
                                    vErrors.push(err48)
                                  }
                                  errors++
                                }
                              }
                              var valid6 = _errs76 === errors
                            } else {
                              var valid6 = true
                            }
                            if (valid6) {
                              if (data0.type !== undefined) {
                                let data35 = data0.type
                                const _errs79 = errors
                                if (typeof data35 !== 'string') {
                                  const err49 = { instancePath: instancePath + '/' + i0 + '/type', schemaPath: '#/items/anyOf/4/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                                  if (vErrors === null) {
                                    vErrors = [err49]
                                  } else {
                                    vErrors.push(err49)
                                  }
                                  errors++
                                }
                                if ('directory' !== data35) {
                                  const err50 = {
                                    instancePath: instancePath + '/' + i0 + '/type',
                                    schemaPath: '#/items/anyOf/4/properties/type/const',
                                    keyword: 'const',
                                    params: { allowedValue: 'directory' },
                                    message: 'must be equal to constant',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err50]
                                  } else {
                                    vErrors.push(err50)
                                  }
                                  errors++
                                }
                                var valid6 = _errs79 === errors
                              } else {
                                var valid6 = true
                              }
                            }
                          }
                        }
                      }
                    }
                  } else {
                    const err51 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/4/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err51]
                    } else {
                      vErrors.push(err51)
                    }
                    errors++
                  }
                }
                var _valid0 = _errs68 === errors
                valid1 = valid1 || _valid0
              }
            }
          }
        }
        if (!valid1) {
          const err52 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
          if (vErrors === null) {
            vErrors = [err52]
          } else {
            vErrors.push(err52)
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
