// @ts-nocheck
'use strict'
export const Typia_Object_Hierarchical = validate10
const schema11 = {
  $id: 'Typia_Object_Hierarchical',
  description: 'Should validate the Typia_Object_Hierarchical structure',
  type: 'object',
  properties: {
    id: { type: 'number' },
    channel: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        code: { type: 'string' },
        name: { type: 'string' },
        sequence: { type: 'number' },
        exclusive: { type: 'boolean' },
        priority: { type: 'number' },
        created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] },
      },
      required: ['id', 'code', 'name', 'sequence', 'exclusive', 'priority', 'created_at'],
    },
    member: {
      anyOf: [
        { type: 'null' },
        {
          type: 'object',
          properties: {
            id: { type: 'number' },
            account: {
              type: 'object',
              properties: { id: { type: 'number' }, code: { type: 'string' }, created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] } },
              required: ['id', 'code', 'created_at'],
            },
            enterprise: {
              anyOf: [
                { type: 'null' },
                {
                  type: 'object',
                  properties: {
                    id: { type: 'number' },
                    account: {
                      type: 'object',
                      properties: { id: { type: 'number' }, code: { type: 'string' }, created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] } },
                      required: ['id', 'code', 'created_at'],
                    },
                    name: { type: 'string' },
                    grade: { type: 'number' },
                    created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] },
                  },
                  required: ['id', 'account', 'name', 'grade', 'created_at'],
                },
              ],
            },
            emails: { type: 'array', items: { type: 'string' } },
            created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] },
            authorized: { type: 'boolean' },
          },
          required: ['id', 'account', 'enterprise', 'emails', 'created_at', 'authorized'],
        },
      ],
    },
    account: {
      anyOf: [
        { type: 'null' },
        {
          type: 'object',
          properties: { id: { type: 'number' }, code: { type: 'string' }, created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] } },
          required: ['id', 'code', 'created_at'],
        },
      ],
    },
    href: { type: 'string' },
    referrer: { type: 'string' },
    ip: { type: 'array', items: [{ type: 'number' }, { type: 'number' }, { type: 'number' }, { type: 'number' }], additionalItems: false, minItems: 4, maxItems: 4 },
    created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] },
  },
  required: ['id', 'channel', 'member', 'account', 'href', 'referrer', 'ip', 'created_at'],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Typia_Object_Hierarchical" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if (
        (data.id === undefined && (missing0 = 'id')) ||
        (data.channel === undefined && (missing0 = 'channel')) ||
        (data.member === undefined && (missing0 = 'member')) ||
        (data.account === undefined && (missing0 = 'account')) ||
        (data.href === undefined && (missing0 = 'href')) ||
        (data.referrer === undefined && (missing0 = 'referrer')) ||
        (data.ip === undefined && (missing0 = 'ip')) ||
        (data.created_at === undefined && (missing0 = 'created_at'))
      ) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.id !== undefined) {
          let data0 = data.id
          const _errs1 = errors
          if (!(typeof data0 == 'number' && isFinite(data0))) {
            validate10.errors = [{ instancePath: instancePath + '/id', schemaPath: '#/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
            return false
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.channel !== undefined) {
            let data1 = data.channel
            const _errs3 = errors
            if (errors === _errs3) {
              if (data1 && typeof data1 == 'object' && !Array.isArray(data1)) {
                let missing1
                if (
                  (data1.id === undefined && (missing1 = 'id')) ||
                  (data1.code === undefined && (missing1 = 'code')) ||
                  (data1.name === undefined && (missing1 = 'name')) ||
                  (data1.sequence === undefined && (missing1 = 'sequence')) ||
                  (data1.exclusive === undefined && (missing1 = 'exclusive')) ||
                  (data1.priority === undefined && (missing1 = 'priority')) ||
                  (data1.created_at === undefined && (missing1 = 'created_at'))
                ) {
                  validate10.errors = [
                    { instancePath: instancePath + '/channel', schemaPath: '#/properties/channel/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" },
                  ]
                  return false
                } else {
                  if (data1.id !== undefined) {
                    let data2 = data1.id
                    const _errs5 = errors
                    if (!(typeof data2 == 'number' && isFinite(data2))) {
                      validate10.errors = [{ instancePath: instancePath + '/channel/id', schemaPath: '#/properties/channel/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                      return false
                    }
                    var valid1 = _errs5 === errors
                  } else {
                    var valid1 = true
                  }
                  if (valid1) {
                    if (data1.code !== undefined) {
                      const _errs7 = errors
                      if (typeof data1.code !== 'string') {
                        validate10.errors = [{ instancePath: instancePath + '/channel/code', schemaPath: '#/properties/channel/properties/code/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                        return false
                      }
                      var valid1 = _errs7 === errors
                    } else {
                      var valid1 = true
                    }
                    if (valid1) {
                      if (data1.name !== undefined) {
                        const _errs9 = errors
                        if (typeof data1.name !== 'string') {
                          validate10.errors = [{ instancePath: instancePath + '/channel/name', schemaPath: '#/properties/channel/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                          return false
                        }
                        var valid1 = _errs9 === errors
                      } else {
                        var valid1 = true
                      }
                      if (valid1) {
                        if (data1.sequence !== undefined) {
                          let data5 = data1.sequence
                          const _errs11 = errors
                          if (!(typeof data5 == 'number' && isFinite(data5))) {
                            validate10.errors = [{ instancePath: instancePath + '/channel/sequence', schemaPath: '#/properties/channel/properties/sequence/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                            return false
                          }
                          var valid1 = _errs11 === errors
                        } else {
                          var valid1 = true
                        }
                        if (valid1) {
                          if (data1.exclusive !== undefined) {
                            const _errs13 = errors
                            if (typeof data1.exclusive !== 'boolean') {
                              validate10.errors = [
                                { instancePath: instancePath + '/channel/exclusive', schemaPath: '#/properties/channel/properties/exclusive/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' },
                              ]
                              return false
                            }
                            var valid1 = _errs13 === errors
                          } else {
                            var valid1 = true
                          }
                          if (valid1) {
                            if (data1.priority !== undefined) {
                              let data7 = data1.priority
                              const _errs15 = errors
                              if (!(typeof data7 == 'number' && isFinite(data7))) {
                                validate10.errors = [{ instancePath: instancePath + '/channel/priority', schemaPath: '#/properties/channel/properties/priority/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                return false
                              }
                              var valid1 = _errs15 === errors
                            } else {
                              var valid1 = true
                            }
                            if (valid1) {
                              if (data1.created_at !== undefined) {
                                let data8 = data1.created_at
                                const _errs17 = errors
                                if (errors === _errs17) {
                                  if (data8 && typeof data8 == 'object' && !Array.isArray(data8)) {
                                    let missing2
                                    if ((data8.time === undefined && (missing2 = 'time')) || (data8.zone === undefined && (missing2 = 'zone'))) {
                                      validate10.errors = [
                                        {
                                          instancePath: instancePath + '/channel/created_at',
                                          schemaPath: '#/properties/channel/properties/created_at/required',
                                          keyword: 'required',
                                          params: { missingProperty: missing2 },
                                          message: "must have required property '" + missing2 + "'",
                                        },
                                      ]
                                      return false
                                    } else {
                                      if (data8.time !== undefined) {
                                        let data9 = data8.time
                                        const _errs19 = errors
                                        if (!(typeof data9 == 'number' && isFinite(data9))) {
                                          validate10.errors = [
                                            {
                                              instancePath: instancePath + '/channel/created_at/time',
                                              schemaPath: '#/properties/channel/properties/created_at/properties/time/type',
                                              keyword: 'type',
                                              params: { type: 'number' },
                                              message: 'must be number',
                                            },
                                          ]
                                          return false
                                        }
                                        var valid2 = _errs19 === errors
                                      } else {
                                        var valid2 = true
                                      }
                                      if (valid2) {
                                        if (data8.zone !== undefined) {
                                          let data10 = data8.zone
                                          const _errs21 = errors
                                          if (!(typeof data10 == 'number' && isFinite(data10))) {
                                            validate10.errors = [
                                              {
                                                instancePath: instancePath + '/channel/created_at/zone',
                                                schemaPath: '#/properties/channel/properties/created_at/properties/zone/type',
                                                keyword: 'type',
                                                params: { type: 'number' },
                                                message: 'must be number',
                                              },
                                            ]
                                            return false
                                          }
                                          var valid2 = _errs21 === errors
                                        } else {
                                          var valid2 = true
                                        }
                                      }
                                    }
                                  } else {
                                    validate10.errors = [
                                      { instancePath: instancePath + '/channel/created_at', schemaPath: '#/properties/channel/properties/created_at/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' },
                                    ]
                                    return false
                                  }
                                }
                                var valid1 = _errs17 === errors
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
                validate10.errors = [{ instancePath: instancePath + '/channel', schemaPath: '#/properties/channel/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                return false
              }
            }
            var valid0 = _errs3 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.member !== undefined) {
              let data11 = data.member
              const _errs23 = errors
              const _errs24 = errors
              let valid3 = false
              const _errs25 = errors
              if (data11 !== null) {
                const err0 = { instancePath: instancePath + '/member', schemaPath: '#/properties/member/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                if (vErrors === null) {
                  vErrors = [err0]
                } else {
                  vErrors.push(err0)
                }
                errors++
              }
              var _valid0 = _errs25 === errors
              valid3 = valid3 || _valid0
              if (!valid3) {
                const _errs27 = errors
                if (errors === _errs27) {
                  if (data11 && typeof data11 == 'object' && !Array.isArray(data11)) {
                    let missing3
                    if (
                      (data11.id === undefined && (missing3 = 'id')) ||
                      (data11.account === undefined && (missing3 = 'account')) ||
                      (data11.enterprise === undefined && (missing3 = 'enterprise')) ||
                      (data11.emails === undefined && (missing3 = 'emails')) ||
                      (data11.created_at === undefined && (missing3 = 'created_at')) ||
                      (data11.authorized === undefined && (missing3 = 'authorized'))
                    ) {
                      const err1 = {
                        instancePath: instancePath + '/member',
                        schemaPath: '#/properties/member/anyOf/1/required',
                        keyword: 'required',
                        params: { missingProperty: missing3 },
                        message: "must have required property '" + missing3 + "'",
                      }
                      if (vErrors === null) {
                        vErrors = [err1]
                      } else {
                        vErrors.push(err1)
                      }
                      errors++
                    } else {
                      if (data11.id !== undefined) {
                        let data12 = data11.id
                        const _errs29 = errors
                        if (!(typeof data12 == 'number' && isFinite(data12))) {
                          const err2 = { instancePath: instancePath + '/member/id', schemaPath: '#/properties/member/anyOf/1/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                          if (vErrors === null) {
                            vErrors = [err2]
                          } else {
                            vErrors.push(err2)
                          }
                          errors++
                        }
                        var valid4 = _errs29 === errors
                      } else {
                        var valid4 = true
                      }
                      if (valid4) {
                        if (data11.account !== undefined) {
                          let data13 = data11.account
                          const _errs31 = errors
                          if (errors === _errs31) {
                            if (data13 && typeof data13 == 'object' && !Array.isArray(data13)) {
                              let missing4
                              if ((data13.id === undefined && (missing4 = 'id')) || (data13.code === undefined && (missing4 = 'code')) || (data13.created_at === undefined && (missing4 = 'created_at'))) {
                                const err3 = {
                                  instancePath: instancePath + '/member/account',
                                  schemaPath: '#/properties/member/anyOf/1/properties/account/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing4 },
                                  message: "must have required property '" + missing4 + "'",
                                }
                                if (vErrors === null) {
                                  vErrors = [err3]
                                } else {
                                  vErrors.push(err3)
                                }
                                errors++
                              } else {
                                if (data13.id !== undefined) {
                                  let data14 = data13.id
                                  const _errs33 = errors
                                  if (!(typeof data14 == 'number' && isFinite(data14))) {
                                    const err4 = {
                                      instancePath: instancePath + '/member/account/id',
                                      schemaPath: '#/properties/member/anyOf/1/properties/account/properties/id/type',
                                      keyword: 'type',
                                      params: { type: 'number' },
                                      message: 'must be number',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err4]
                                    } else {
                                      vErrors.push(err4)
                                    }
                                    errors++
                                  }
                                  var valid5 = _errs33 === errors
                                } else {
                                  var valid5 = true
                                }
                                if (valid5) {
                                  if (data13.code !== undefined) {
                                    const _errs35 = errors
                                    if (typeof data13.code !== 'string') {
                                      const err5 = {
                                        instancePath: instancePath + '/member/account/code',
                                        schemaPath: '#/properties/member/anyOf/1/properties/account/properties/code/type',
                                        keyword: 'type',
                                        params: { type: 'string' },
                                        message: 'must be string',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err5]
                                      } else {
                                        vErrors.push(err5)
                                      }
                                      errors++
                                    }
                                    var valid5 = _errs35 === errors
                                  } else {
                                    var valid5 = true
                                  }
                                  if (valid5) {
                                    if (data13.created_at !== undefined) {
                                      let data16 = data13.created_at
                                      const _errs37 = errors
                                      if (errors === _errs37) {
                                        if (data16 && typeof data16 == 'object' && !Array.isArray(data16)) {
                                          let missing5
                                          if ((data16.time === undefined && (missing5 = 'time')) || (data16.zone === undefined && (missing5 = 'zone'))) {
                                            const err6 = {
                                              instancePath: instancePath + '/member/account/created_at',
                                              schemaPath: '#/properties/member/anyOf/1/properties/account/properties/created_at/required',
                                              keyword: 'required',
                                              params: { missingProperty: missing5 },
                                              message: "must have required property '" + missing5 + "'",
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err6]
                                            } else {
                                              vErrors.push(err6)
                                            }
                                            errors++
                                          } else {
                                            if (data16.time !== undefined) {
                                              let data17 = data16.time
                                              const _errs39 = errors
                                              if (!(typeof data17 == 'number' && isFinite(data17))) {
                                                const err7 = {
                                                  instancePath: instancePath + '/member/account/created_at/time',
                                                  schemaPath: '#/properties/member/anyOf/1/properties/account/properties/created_at/properties/time/type',
                                                  keyword: 'type',
                                                  params: { type: 'number' },
                                                  message: 'must be number',
                                                }
                                                if (vErrors === null) {
                                                  vErrors = [err7]
                                                } else {
                                                  vErrors.push(err7)
                                                }
                                                errors++
                                              }
                                              var valid6 = _errs39 === errors
                                            } else {
                                              var valid6 = true
                                            }
                                            if (valid6) {
                                              if (data16.zone !== undefined) {
                                                let data18 = data16.zone
                                                const _errs41 = errors
                                                if (!(typeof data18 == 'number' && isFinite(data18))) {
                                                  const err8 = {
                                                    instancePath: instancePath + '/member/account/created_at/zone',
                                                    schemaPath: '#/properties/member/anyOf/1/properties/account/properties/created_at/properties/zone/type',
                                                    keyword: 'type',
                                                    params: { type: 'number' },
                                                    message: 'must be number',
                                                  }
                                                  if (vErrors === null) {
                                                    vErrors = [err8]
                                                  } else {
                                                    vErrors.push(err8)
                                                  }
                                                  errors++
                                                }
                                                var valid6 = _errs41 === errors
                                              } else {
                                                var valid6 = true
                                              }
                                            }
                                          }
                                        } else {
                                          const err9 = {
                                            instancePath: instancePath + '/member/account/created_at',
                                            schemaPath: '#/properties/member/anyOf/1/properties/account/properties/created_at/type',
                                            keyword: 'type',
                                            params: { type: 'object' },
                                            message: 'must be object',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err9]
                                          } else {
                                            vErrors.push(err9)
                                          }
                                          errors++
                                        }
                                      }
                                      var valid5 = _errs37 === errors
                                    } else {
                                      var valid5 = true
                                    }
                                  }
                                }
                              }
                            } else {
                              const err10 = { instancePath: instancePath + '/member/account', schemaPath: '#/properties/member/anyOf/1/properties/account/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                              if (vErrors === null) {
                                vErrors = [err10]
                              } else {
                                vErrors.push(err10)
                              }
                              errors++
                            }
                          }
                          var valid4 = _errs31 === errors
                        } else {
                          var valid4 = true
                        }
                        if (valid4) {
                          if (data11.enterprise !== undefined) {
                            let data19 = data11.enterprise
                            const _errs43 = errors
                            const _errs44 = errors
                            let valid7 = false
                            const _errs45 = errors
                            if (data19 !== null) {
                              const err11 = {
                                instancePath: instancePath + '/member/enterprise',
                                schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/0/type',
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
                            var _valid1 = _errs45 === errors
                            valid7 = valid7 || _valid1
                            if (!valid7) {
                              const _errs47 = errors
                              if (errors === _errs47) {
                                if (data19 && typeof data19 == 'object' && !Array.isArray(data19)) {
                                  let missing6
                                  if (
                                    (data19.id === undefined && (missing6 = 'id')) ||
                                    (data19.account === undefined && (missing6 = 'account')) ||
                                    (data19.name === undefined && (missing6 = 'name')) ||
                                    (data19.grade === undefined && (missing6 = 'grade')) ||
                                    (data19.created_at === undefined && (missing6 = 'created_at'))
                                  ) {
                                    const err12 = {
                                      instancePath: instancePath + '/member/enterprise',
                                      schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/required',
                                      keyword: 'required',
                                      params: { missingProperty: missing6 },
                                      message: "must have required property '" + missing6 + "'",
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err12]
                                    } else {
                                      vErrors.push(err12)
                                    }
                                    errors++
                                  } else {
                                    if (data19.id !== undefined) {
                                      let data20 = data19.id
                                      const _errs49 = errors
                                      if (!(typeof data20 == 'number' && isFinite(data20))) {
                                        const err13 = {
                                          instancePath: instancePath + '/member/enterprise/id',
                                          schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/id/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err13]
                                        } else {
                                          vErrors.push(err13)
                                        }
                                        errors++
                                      }
                                      var valid8 = _errs49 === errors
                                    } else {
                                      var valid8 = true
                                    }
                                    if (valid8) {
                                      if (data19.account !== undefined) {
                                        let data21 = data19.account
                                        const _errs51 = errors
                                        if (errors === _errs51) {
                                          if (data21 && typeof data21 == 'object' && !Array.isArray(data21)) {
                                            let missing7
                                            if ((data21.id === undefined && (missing7 = 'id')) || (data21.code === undefined && (missing7 = 'code')) || (data21.created_at === undefined && (missing7 = 'created_at'))) {
                                              const err14 = {
                                                instancePath: instancePath + '/member/enterprise/account',
                                                schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/required',
                                                keyword: 'required',
                                                params: { missingProperty: missing7 },
                                                message: "must have required property '" + missing7 + "'",
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err14]
                                              } else {
                                                vErrors.push(err14)
                                              }
                                              errors++
                                            } else {
                                              if (data21.id !== undefined) {
                                                let data22 = data21.id
                                                const _errs53 = errors
                                                if (!(typeof data22 == 'number' && isFinite(data22))) {
                                                  const err15 = {
                                                    instancePath: instancePath + '/member/enterprise/account/id',
                                                    schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/properties/id/type',
                                                    keyword: 'type',
                                                    params: { type: 'number' },
                                                    message: 'must be number',
                                                  }
                                                  if (vErrors === null) {
                                                    vErrors = [err15]
                                                  } else {
                                                    vErrors.push(err15)
                                                  }
                                                  errors++
                                                }
                                                var valid9 = _errs53 === errors
                                              } else {
                                                var valid9 = true
                                              }
                                              if (valid9) {
                                                if (data21.code !== undefined) {
                                                  const _errs55 = errors
                                                  if (typeof data21.code !== 'string') {
                                                    const err16 = {
                                                      instancePath: instancePath + '/member/enterprise/account/code',
                                                      schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/properties/code/type',
                                                      keyword: 'type',
                                                      params: { type: 'string' },
                                                      message: 'must be string',
                                                    }
                                                    if (vErrors === null) {
                                                      vErrors = [err16]
                                                    } else {
                                                      vErrors.push(err16)
                                                    }
                                                    errors++
                                                  }
                                                  var valid9 = _errs55 === errors
                                                } else {
                                                  var valid9 = true
                                                }
                                                if (valid9) {
                                                  if (data21.created_at !== undefined) {
                                                    let data24 = data21.created_at
                                                    const _errs57 = errors
                                                    if (errors === _errs57) {
                                                      if (data24 && typeof data24 == 'object' && !Array.isArray(data24)) {
                                                        let missing8
                                                        if ((data24.time === undefined && (missing8 = 'time')) || (data24.zone === undefined && (missing8 = 'zone'))) {
                                                          const err17 = {
                                                            instancePath: instancePath + '/member/enterprise/account/created_at',
                                                            schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/properties/created_at/required',
                                                            keyword: 'required',
                                                            params: { missingProperty: missing8 },
                                                            message: "must have required property '" + missing8 + "'",
                                                          }
                                                          if (vErrors === null) {
                                                            vErrors = [err17]
                                                          } else {
                                                            vErrors.push(err17)
                                                          }
                                                          errors++
                                                        } else {
                                                          if (data24.time !== undefined) {
                                                            let data25 = data24.time
                                                            const _errs59 = errors
                                                            if (!(typeof data25 == 'number' && isFinite(data25))) {
                                                              const err18 = {
                                                                instancePath: instancePath + '/member/enterprise/account/created_at/time',
                                                                schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/properties/created_at/properties/time/type',
                                                                keyword: 'type',
                                                                params: { type: 'number' },
                                                                message: 'must be number',
                                                              }
                                                              if (vErrors === null) {
                                                                vErrors = [err18]
                                                              } else {
                                                                vErrors.push(err18)
                                                              }
                                                              errors++
                                                            }
                                                            var valid10 = _errs59 === errors
                                                          } else {
                                                            var valid10 = true
                                                          }
                                                          if (valid10) {
                                                            if (data24.zone !== undefined) {
                                                              let data26 = data24.zone
                                                              const _errs61 = errors
                                                              if (!(typeof data26 == 'number' && isFinite(data26))) {
                                                                const err19 = {
                                                                  instancePath: instancePath + '/member/enterprise/account/created_at/zone',
                                                                  schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/properties/created_at/properties/zone/type',
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
                                                              var valid10 = _errs61 === errors
                                                            } else {
                                                              var valid10 = true
                                                            }
                                                          }
                                                        }
                                                      } else {
                                                        const err20 = {
                                                          instancePath: instancePath + '/member/enterprise/account/created_at',
                                                          schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/properties/created_at/type',
                                                          keyword: 'type',
                                                          params: { type: 'object' },
                                                          message: 'must be object',
                                                        }
                                                        if (vErrors === null) {
                                                          vErrors = [err20]
                                                        } else {
                                                          vErrors.push(err20)
                                                        }
                                                        errors++
                                                      }
                                                    }
                                                    var valid9 = _errs57 === errors
                                                  } else {
                                                    var valid9 = true
                                                  }
                                                }
                                              }
                                            }
                                          } else {
                                            const err21 = {
                                              instancePath: instancePath + '/member/enterprise/account',
                                              schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/account/type',
                                              keyword: 'type',
                                              params: { type: 'object' },
                                              message: 'must be object',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err21]
                                            } else {
                                              vErrors.push(err21)
                                            }
                                            errors++
                                          }
                                        }
                                        var valid8 = _errs51 === errors
                                      } else {
                                        var valid8 = true
                                      }
                                      if (valid8) {
                                        if (data19.name !== undefined) {
                                          const _errs63 = errors
                                          if (typeof data19.name !== 'string') {
                                            const err22 = {
                                              instancePath: instancePath + '/member/enterprise/name',
                                              schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/name/type',
                                              keyword: 'type',
                                              params: { type: 'string' },
                                              message: 'must be string',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err22]
                                            } else {
                                              vErrors.push(err22)
                                            }
                                            errors++
                                          }
                                          var valid8 = _errs63 === errors
                                        } else {
                                          var valid8 = true
                                        }
                                        if (valid8) {
                                          if (data19.grade !== undefined) {
                                            let data28 = data19.grade
                                            const _errs65 = errors
                                            if (!(typeof data28 == 'number' && isFinite(data28))) {
                                              const err23 = {
                                                instancePath: instancePath + '/member/enterprise/grade',
                                                schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/grade/type',
                                                keyword: 'type',
                                                params: { type: 'number' },
                                                message: 'must be number',
                                              }
                                              if (vErrors === null) {
                                                vErrors = [err23]
                                              } else {
                                                vErrors.push(err23)
                                              }
                                              errors++
                                            }
                                            var valid8 = _errs65 === errors
                                          } else {
                                            var valid8 = true
                                          }
                                          if (valid8) {
                                            if (data19.created_at !== undefined) {
                                              let data29 = data19.created_at
                                              const _errs67 = errors
                                              if (errors === _errs67) {
                                                if (data29 && typeof data29 == 'object' && !Array.isArray(data29)) {
                                                  let missing9
                                                  if ((data29.time === undefined && (missing9 = 'time')) || (data29.zone === undefined && (missing9 = 'zone'))) {
                                                    const err24 = {
                                                      instancePath: instancePath + '/member/enterprise/created_at',
                                                      schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/created_at/required',
                                                      keyword: 'required',
                                                      params: { missingProperty: missing9 },
                                                      message: "must have required property '" + missing9 + "'",
                                                    }
                                                    if (vErrors === null) {
                                                      vErrors = [err24]
                                                    } else {
                                                      vErrors.push(err24)
                                                    }
                                                    errors++
                                                  } else {
                                                    if (data29.time !== undefined) {
                                                      let data30 = data29.time
                                                      const _errs69 = errors
                                                      if (!(typeof data30 == 'number' && isFinite(data30))) {
                                                        const err25 = {
                                                          instancePath: instancePath + '/member/enterprise/created_at/time',
                                                          schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/created_at/properties/time/type',
                                                          keyword: 'type',
                                                          params: { type: 'number' },
                                                          message: 'must be number',
                                                        }
                                                        if (vErrors === null) {
                                                          vErrors = [err25]
                                                        } else {
                                                          vErrors.push(err25)
                                                        }
                                                        errors++
                                                      }
                                                      var valid11 = _errs69 === errors
                                                    } else {
                                                      var valid11 = true
                                                    }
                                                    if (valid11) {
                                                      if (data29.zone !== undefined) {
                                                        let data31 = data29.zone
                                                        const _errs71 = errors
                                                        if (!(typeof data31 == 'number' && isFinite(data31))) {
                                                          const err26 = {
                                                            instancePath: instancePath + '/member/enterprise/created_at/zone',
                                                            schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/created_at/properties/zone/type',
                                                            keyword: 'type',
                                                            params: { type: 'number' },
                                                            message: 'must be number',
                                                          }
                                                          if (vErrors === null) {
                                                            vErrors = [err26]
                                                          } else {
                                                            vErrors.push(err26)
                                                          }
                                                          errors++
                                                        }
                                                        var valid11 = _errs71 === errors
                                                      } else {
                                                        var valid11 = true
                                                      }
                                                    }
                                                  }
                                                } else {
                                                  const err27 = {
                                                    instancePath: instancePath + '/member/enterprise/created_at',
                                                    schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/properties/created_at/type',
                                                    keyword: 'type',
                                                    params: { type: 'object' },
                                                    message: 'must be object',
                                                  }
                                                  if (vErrors === null) {
                                                    vErrors = [err27]
                                                  } else {
                                                    vErrors.push(err27)
                                                  }
                                                  errors++
                                                }
                                              }
                                              var valid8 = _errs67 === errors
                                            } else {
                                              var valid8 = true
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                } else {
                                  const err28 = {
                                    instancePath: instancePath + '/member/enterprise',
                                    schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf/1/type',
                                    keyword: 'type',
                                    params: { type: 'object' },
                                    message: 'must be object',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err28]
                                  } else {
                                    vErrors.push(err28)
                                  }
                                  errors++
                                }
                              }
                              var _valid1 = _errs47 === errors
                              valid7 = valid7 || _valid1
                            }
                            if (!valid7) {
                              const err29 = { instancePath: instancePath + '/member/enterprise', schemaPath: '#/properties/member/anyOf/1/properties/enterprise/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                              if (vErrors === null) {
                                vErrors = [err29]
                              } else {
                                vErrors.push(err29)
                              }
                              errors++
                            } else {
                              errors = _errs44
                              if (vErrors !== null) {
                                if (_errs44) {
                                  vErrors.length = _errs44
                                } else {
                                  vErrors = null
                                }
                              }
                            }
                            var valid4 = _errs43 === errors
                          } else {
                            var valid4 = true
                          }
                          if (valid4) {
                            if (data11.emails !== undefined) {
                              let data32 = data11.emails
                              const _errs73 = errors
                              if (errors === _errs73) {
                                if (Array.isArray(data32)) {
                                  var valid12 = true
                                  const len0 = data32.length
                                  for (let i0 = 0; i0 < len0; i0++) {
                                    const _errs75 = errors
                                    if (typeof data32[i0] !== 'string') {
                                      const err30 = {
                                        instancePath: instancePath + '/member/emails/' + i0,
                                        schemaPath: '#/properties/member/anyOf/1/properties/emails/items/type',
                                        keyword: 'type',
                                        params: { type: 'string' },
                                        message: 'must be string',
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err30]
                                      } else {
                                        vErrors.push(err30)
                                      }
                                      errors++
                                    }
                                    var valid12 = _errs75 === errors
                                    if (!valid12) {
                                      break
                                    }
                                  }
                                } else {
                                  const err31 = { instancePath: instancePath + '/member/emails', schemaPath: '#/properties/member/anyOf/1/properties/emails/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                                  if (vErrors === null) {
                                    vErrors = [err31]
                                  } else {
                                    vErrors.push(err31)
                                  }
                                  errors++
                                }
                              }
                              var valid4 = _errs73 === errors
                            } else {
                              var valid4 = true
                            }
                            if (valid4) {
                              if (data11.created_at !== undefined) {
                                let data34 = data11.created_at
                                const _errs77 = errors
                                if (errors === _errs77) {
                                  if (data34 && typeof data34 == 'object' && !Array.isArray(data34)) {
                                    let missing10
                                    if ((data34.time === undefined && (missing10 = 'time')) || (data34.zone === undefined && (missing10 = 'zone'))) {
                                      const err32 = {
                                        instancePath: instancePath + '/member/created_at',
                                        schemaPath: '#/properties/member/anyOf/1/properties/created_at/required',
                                        keyword: 'required',
                                        params: { missingProperty: missing10 },
                                        message: "must have required property '" + missing10 + "'",
                                      }
                                      if (vErrors === null) {
                                        vErrors = [err32]
                                      } else {
                                        vErrors.push(err32)
                                      }
                                      errors++
                                    } else {
                                      if (data34.time !== undefined) {
                                        let data35 = data34.time
                                        const _errs79 = errors
                                        if (!(typeof data35 == 'number' && isFinite(data35))) {
                                          const err33 = {
                                            instancePath: instancePath + '/member/created_at/time',
                                            schemaPath: '#/properties/member/anyOf/1/properties/created_at/properties/time/type',
                                            keyword: 'type',
                                            params: { type: 'number' },
                                            message: 'must be number',
                                          }
                                          if (vErrors === null) {
                                            vErrors = [err33]
                                          } else {
                                            vErrors.push(err33)
                                          }
                                          errors++
                                        }
                                        var valid13 = _errs79 === errors
                                      } else {
                                        var valid13 = true
                                      }
                                      if (valid13) {
                                        if (data34.zone !== undefined) {
                                          let data36 = data34.zone
                                          const _errs81 = errors
                                          if (!(typeof data36 == 'number' && isFinite(data36))) {
                                            const err34 = {
                                              instancePath: instancePath + '/member/created_at/zone',
                                              schemaPath: '#/properties/member/anyOf/1/properties/created_at/properties/zone/type',
                                              keyword: 'type',
                                              params: { type: 'number' },
                                              message: 'must be number',
                                            }
                                            if (vErrors === null) {
                                              vErrors = [err34]
                                            } else {
                                              vErrors.push(err34)
                                            }
                                            errors++
                                          }
                                          var valid13 = _errs81 === errors
                                        } else {
                                          var valid13 = true
                                        }
                                      }
                                    }
                                  } else {
                                    const err35 = {
                                      instancePath: instancePath + '/member/created_at',
                                      schemaPath: '#/properties/member/anyOf/1/properties/created_at/type',
                                      keyword: 'type',
                                      params: { type: 'object' },
                                      message: 'must be object',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err35]
                                    } else {
                                      vErrors.push(err35)
                                    }
                                    errors++
                                  }
                                }
                                var valid4 = _errs77 === errors
                              } else {
                                var valid4 = true
                              }
                              if (valid4) {
                                if (data11.authorized !== undefined) {
                                  const _errs83 = errors
                                  if (typeof data11.authorized !== 'boolean') {
                                    const err36 = {
                                      instancePath: instancePath + '/member/authorized',
                                      schemaPath: '#/properties/member/anyOf/1/properties/authorized/type',
                                      keyword: 'type',
                                      params: { type: 'boolean' },
                                      message: 'must be boolean',
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err36]
                                    } else {
                                      vErrors.push(err36)
                                    }
                                    errors++
                                  }
                                  var valid4 = _errs83 === errors
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
                    const err37 = { instancePath: instancePath + '/member', schemaPath: '#/properties/member/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                    if (vErrors === null) {
                      vErrors = [err37]
                    } else {
                      vErrors.push(err37)
                    }
                    errors++
                  }
                }
                var _valid0 = _errs27 === errors
                valid3 = valid3 || _valid0
              }
              if (!valid3) {
                const err38 = { instancePath: instancePath + '/member', schemaPath: '#/properties/member/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                if (vErrors === null) {
                  vErrors = [err38]
                } else {
                  vErrors.push(err38)
                }
                errors++
                validate10.errors = vErrors
                return false
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
              var valid0 = _errs23 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.account !== undefined) {
                let data38 = data.account
                const _errs85 = errors
                const _errs86 = errors
                let valid14 = false
                const _errs87 = errors
                if (data38 !== null) {
                  const err39 = { instancePath: instancePath + '/account', schemaPath: '#/properties/account/anyOf/0/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
                  if (vErrors === null) {
                    vErrors = [err39]
                  } else {
                    vErrors.push(err39)
                  }
                  errors++
                }
                var _valid2 = _errs87 === errors
                valid14 = valid14 || _valid2
                if (!valid14) {
                  const _errs89 = errors
                  if (errors === _errs89) {
                    if (data38 && typeof data38 == 'object' && !Array.isArray(data38)) {
                      let missing11
                      if ((data38.id === undefined && (missing11 = 'id')) || (data38.code === undefined && (missing11 = 'code')) || (data38.created_at === undefined && (missing11 = 'created_at'))) {
                        const err40 = {
                          instancePath: instancePath + '/account',
                          schemaPath: '#/properties/account/anyOf/1/required',
                          keyword: 'required',
                          params: { missingProperty: missing11 },
                          message: "must have required property '" + missing11 + "'",
                        }
                        if (vErrors === null) {
                          vErrors = [err40]
                        } else {
                          vErrors.push(err40)
                        }
                        errors++
                      } else {
                        if (data38.id !== undefined) {
                          let data39 = data38.id
                          const _errs91 = errors
                          if (!(typeof data39 == 'number' && isFinite(data39))) {
                            const err41 = { instancePath: instancePath + '/account/id', schemaPath: '#/properties/account/anyOf/1/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }
                            if (vErrors === null) {
                              vErrors = [err41]
                            } else {
                              vErrors.push(err41)
                            }
                            errors++
                          }
                          var valid15 = _errs91 === errors
                        } else {
                          var valid15 = true
                        }
                        if (valid15) {
                          if (data38.code !== undefined) {
                            const _errs93 = errors
                            if (typeof data38.code !== 'string') {
                              const err42 = { instancePath: instancePath + '/account/code', schemaPath: '#/properties/account/anyOf/1/properties/code/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                              if (vErrors === null) {
                                vErrors = [err42]
                              } else {
                                vErrors.push(err42)
                              }
                              errors++
                            }
                            var valid15 = _errs93 === errors
                          } else {
                            var valid15 = true
                          }
                          if (valid15) {
                            if (data38.created_at !== undefined) {
                              let data41 = data38.created_at
                              const _errs95 = errors
                              if (errors === _errs95) {
                                if (data41 && typeof data41 == 'object' && !Array.isArray(data41)) {
                                  let missing12
                                  if ((data41.time === undefined && (missing12 = 'time')) || (data41.zone === undefined && (missing12 = 'zone'))) {
                                    const err43 = {
                                      instancePath: instancePath + '/account/created_at',
                                      schemaPath: '#/properties/account/anyOf/1/properties/created_at/required',
                                      keyword: 'required',
                                      params: { missingProperty: missing12 },
                                      message: "must have required property '" + missing12 + "'",
                                    }
                                    if (vErrors === null) {
                                      vErrors = [err43]
                                    } else {
                                      vErrors.push(err43)
                                    }
                                    errors++
                                  } else {
                                    if (data41.time !== undefined) {
                                      let data42 = data41.time
                                      const _errs97 = errors
                                      if (!(typeof data42 == 'number' && isFinite(data42))) {
                                        const err44 = {
                                          instancePath: instancePath + '/account/created_at/time',
                                          schemaPath: '#/properties/account/anyOf/1/properties/created_at/properties/time/type',
                                          keyword: 'type',
                                          params: { type: 'number' },
                                          message: 'must be number',
                                        }
                                        if (vErrors === null) {
                                          vErrors = [err44]
                                        } else {
                                          vErrors.push(err44)
                                        }
                                        errors++
                                      }
                                      var valid16 = _errs97 === errors
                                    } else {
                                      var valid16 = true
                                    }
                                    if (valid16) {
                                      if (data41.zone !== undefined) {
                                        let data43 = data41.zone
                                        const _errs99 = errors
                                        if (!(typeof data43 == 'number' && isFinite(data43))) {
                                          const err45 = {
                                            instancePath: instancePath + '/account/created_at/zone',
                                            schemaPath: '#/properties/account/anyOf/1/properties/created_at/properties/zone/type',
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
                                        var valid16 = _errs99 === errors
                                      } else {
                                        var valid16 = true
                                      }
                                    }
                                  }
                                } else {
                                  const err46 = {
                                    instancePath: instancePath + '/account/created_at',
                                    schemaPath: '#/properties/account/anyOf/1/properties/created_at/type',
                                    keyword: 'type',
                                    params: { type: 'object' },
                                    message: 'must be object',
                                  }
                                  if (vErrors === null) {
                                    vErrors = [err46]
                                  } else {
                                    vErrors.push(err46)
                                  }
                                  errors++
                                }
                              }
                              var valid15 = _errs95 === errors
                            } else {
                              var valid15 = true
                            }
                          }
                        }
                      }
                    } else {
                      const err47 = { instancePath: instancePath + '/account', schemaPath: '#/properties/account/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
                      if (vErrors === null) {
                        vErrors = [err47]
                      } else {
                        vErrors.push(err47)
                      }
                      errors++
                    }
                  }
                  var _valid2 = _errs89 === errors
                  valid14 = valid14 || _valid2
                }
                if (!valid14) {
                  const err48 = { instancePath: instancePath + '/account', schemaPath: '#/properties/account/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
                  if (vErrors === null) {
                    vErrors = [err48]
                  } else {
                    vErrors.push(err48)
                  }
                  errors++
                  validate10.errors = vErrors
                  return false
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
                var valid0 = _errs85 === errors
              } else {
                var valid0 = true
              }
              if (valid0) {
                if (data.href !== undefined) {
                  const _errs101 = errors
                  if (typeof data.href !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/href', schemaPath: '#/properties/href/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid0 = _errs101 === errors
                } else {
                  var valid0 = true
                }
                if (valid0) {
                  if (data.referrer !== undefined) {
                    const _errs103 = errors
                    if (typeof data.referrer !== 'string') {
                      validate10.errors = [{ instancePath: instancePath + '/referrer', schemaPath: '#/properties/referrer/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                      return false
                    }
                    var valid0 = _errs103 === errors
                  } else {
                    var valid0 = true
                  }
                  if (valid0) {
                    if (data.ip !== undefined) {
                      let data46 = data.ip
                      const _errs105 = errors
                      if (errors === _errs105) {
                        if (Array.isArray(data46)) {
                          if (data46.length > 4) {
                            validate10.errors = [{ instancePath: instancePath + '/ip', schemaPath: '#/properties/ip/maxItems', keyword: 'maxItems', params: { limit: 4 }, message: 'must NOT have more than 4 items' }]
                            return false
                          } else {
                            if (data46.length < 4) {
                              validate10.errors = [{ instancePath: instancePath + '/ip', schemaPath: '#/properties/ip/minItems', keyword: 'minItems', params: { limit: 4 }, message: 'must NOT have fewer than 4 items' }]
                              return false
                            } else {
                              const len1 = data46.length
                              if (!(len1 <= 4)) {
                                validate10.errors = [{ instancePath: instancePath + '/ip', schemaPath: '#/properties/ip/additionalItems', keyword: 'additionalItems', params: { limit: 4 }, message: 'must NOT have more than 4 items' }]
                                return false
                              } else {
                                const len2 = data46.length
                                if (len2 > 0) {
                                  let data47 = data46[0]
                                  const _errs107 = errors
                                  if (!(typeof data47 == 'number' && isFinite(data47))) {
                                    validate10.errors = [{ instancePath: instancePath + '/ip/0', schemaPath: '#/properties/ip/items/0/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                    return false
                                  }
                                  var valid17 = _errs107 === errors
                                }
                                if (valid17) {
                                  if (len2 > 1) {
                                    let data48 = data46[1]
                                    const _errs109 = errors
                                    if (!(typeof data48 == 'number' && isFinite(data48))) {
                                      validate10.errors = [{ instancePath: instancePath + '/ip/1', schemaPath: '#/properties/ip/items/1/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                      return false
                                    }
                                    var valid17 = _errs109 === errors
                                  }
                                  if (valid17) {
                                    if (len2 > 2) {
                                      let data49 = data46[2]
                                      const _errs111 = errors
                                      if (!(typeof data49 == 'number' && isFinite(data49))) {
                                        validate10.errors = [{ instancePath: instancePath + '/ip/2', schemaPath: '#/properties/ip/items/2/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                        return false
                                      }
                                      var valid17 = _errs111 === errors
                                    }
                                    if (valid17) {
                                      if (len2 > 3) {
                                        let data50 = data46[3]
                                        const _errs113 = errors
                                        if (!(typeof data50 == 'number' && isFinite(data50))) {
                                          validate10.errors = [{ instancePath: instancePath + '/ip/3', schemaPath: '#/properties/ip/items/3/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                          return false
                                        }
                                        var valid17 = _errs113 === errors
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        } else {
                          validate10.errors = [{ instancePath: instancePath + '/ip', schemaPath: '#/properties/ip/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                          return false
                        }
                      }
                      var valid0 = _errs105 === errors
                    } else {
                      var valid0 = true
                    }
                    if (valid0) {
                      if (data.created_at !== undefined) {
                        let data51 = data.created_at
                        const _errs115 = errors
                        if (errors === _errs115) {
                          if (data51 && typeof data51 == 'object' && !Array.isArray(data51)) {
                            let missing13
                            if ((data51.time === undefined && (missing13 = 'time')) || (data51.zone === undefined && (missing13 = 'zone'))) {
                              validate10.errors = [
                                {
                                  instancePath: instancePath + '/created_at',
                                  schemaPath: '#/properties/created_at/required',
                                  keyword: 'required',
                                  params: { missingProperty: missing13 },
                                  message: "must have required property '" + missing13 + "'",
                                },
                              ]
                              return false
                            } else {
                              if (data51.time !== undefined) {
                                let data52 = data51.time
                                const _errs117 = errors
                                if (!(typeof data52 == 'number' && isFinite(data52))) {
                                  validate10.errors = [{ instancePath: instancePath + '/created_at/time', schemaPath: '#/properties/created_at/properties/time/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                  return false
                                }
                                var valid18 = _errs117 === errors
                              } else {
                                var valid18 = true
                              }
                              if (valid18) {
                                if (data51.zone !== undefined) {
                                  let data53 = data51.zone
                                  const _errs119 = errors
                                  if (!(typeof data53 == 'number' && isFinite(data53))) {
                                    validate10.errors = [
                                      { instancePath: instancePath + '/created_at/zone', schemaPath: '#/properties/created_at/properties/zone/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' },
                                    ]
                                    return false
                                  }
                                  var valid18 = _errs119 === errors
                                } else {
                                  var valid18 = true
                                }
                              }
                            }
                          } else {
                            validate10.errors = [{ instancePath: instancePath + '/created_at', schemaPath: '#/properties/created_at/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                            return false
                          }
                        }
                        var valid0 = _errs115 === errors
                      } else {
                        var valid0 = true
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
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
