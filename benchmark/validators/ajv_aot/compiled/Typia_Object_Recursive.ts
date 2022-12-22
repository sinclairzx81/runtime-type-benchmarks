// @ts-nocheck
'use strict'
export const Typia_Object_Recursive = validate10
const schema11 = {
  $id: 'Typia_Object_Recursive',
  type: 'object',
  properties: {
    parent: { anyOf: [{ $ref: 'Typia_Object_Recursive' }, { type: 'null' }] },
    id: { type: 'number' },
    code: { type: 'string' },
    name: { type: 'string' },
    sequence: { type: 'number' },
    created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] },
  },
  required: ['parent', 'id', 'code', 'name', 'sequence', 'created_at'],
}
const wrapper0 = { validate: validate10 }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Typia_Object_Recursive" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if (
        (data.parent === undefined && (missing0 = 'parent')) ||
        (data.id === undefined && (missing0 = 'id')) ||
        (data.code === undefined && (missing0 = 'code')) ||
        (data.name === undefined && (missing0 = 'name')) ||
        (data.sequence === undefined && (missing0 = 'sequence')) ||
        (data.created_at === undefined && (missing0 = 'created_at'))
      ) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.parent !== undefined) {
          let data0 = data.parent
          const _errs1 = errors
          const _errs2 = errors
          let valid1 = false
          const _errs3 = errors
          if (!wrapper0.validate(data0, { instancePath: instancePath + '/parent', parentData: data, parentDataProperty: 'parent', rootData })) {
            vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
            errors = vErrors.length
          }
          var _valid0 = _errs3 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs4 = errors
            if (data0 !== null) {
              const err0 = { instancePath: instancePath + '/parent', schemaPath: '#/properties/parent/anyOf/1/type', keyword: 'type', params: { type: 'null' }, message: 'must be null' }
              if (vErrors === null) {
                vErrors = [err0]
              } else {
                vErrors.push(err0)
              }
              errors++
            }
            var _valid0 = _errs4 === errors
            valid1 = valid1 || _valid0
          }
          if (!valid1) {
            const err1 = { instancePath: instancePath + '/parent', schemaPath: '#/properties/parent/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
            if (vErrors === null) {
              vErrors = [err1]
            } else {
              vErrors.push(err1)
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
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.id !== undefined) {
            let data1 = data.id
            const _errs6 = errors
            if (!(typeof data1 == 'number' && isFinite(data1))) {
              validate10.errors = [{ instancePath: instancePath + '/id', schemaPath: '#/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
              return false
            }
            var valid0 = _errs6 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.code !== undefined) {
              const _errs8 = errors
              if (typeof data.code !== 'string') {
                validate10.errors = [{ instancePath: instancePath + '/code', schemaPath: '#/properties/code/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                return false
              }
              var valid0 = _errs8 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.name !== undefined) {
                const _errs10 = errors
                if (typeof data.name !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/name', schemaPath: '#/properties/name/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid0 = _errs10 === errors
              } else {
                var valid0 = true
              }
              if (valid0) {
                if (data.sequence !== undefined) {
                  let data4 = data.sequence
                  const _errs12 = errors
                  if (!(typeof data4 == 'number' && isFinite(data4))) {
                    validate10.errors = [{ instancePath: instancePath + '/sequence', schemaPath: '#/properties/sequence/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                    return false
                  }
                  var valid0 = _errs12 === errors
                } else {
                  var valid0 = true
                }
                if (valid0) {
                  if (data.created_at !== undefined) {
                    let data5 = data.created_at
                    const _errs14 = errors
                    if (errors === _errs14) {
                      if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                        let missing1
                        if ((data5.time === undefined && (missing1 = 'time')) || (data5.zone === undefined && (missing1 = 'zone'))) {
                          validate10.errors = [
                            {
                              instancePath: instancePath + '/created_at',
                              schemaPath: '#/properties/created_at/required',
                              keyword: 'required',
                              params: { missingProperty: missing1 },
                              message: "must have required property '" + missing1 + "'",
                            },
                          ]
                          return false
                        } else {
                          if (data5.time !== undefined) {
                            let data6 = data5.time
                            const _errs16 = errors
                            if (!(typeof data6 == 'number' && isFinite(data6))) {
                              validate10.errors = [{ instancePath: instancePath + '/created_at/time', schemaPath: '#/properties/created_at/properties/time/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                              return false
                            }
                            var valid2 = _errs16 === errors
                          } else {
                            var valid2 = true
                          }
                          if (valid2) {
                            if (data5.zone !== undefined) {
                              let data7 = data5.zone
                              const _errs18 = errors
                              if (!(typeof data7 == 'number' && isFinite(data7))) {
                                validate10.errors = [{ instancePath: instancePath + '/created_at/zone', schemaPath: '#/properties/created_at/properties/zone/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                                return false
                              }
                              var valid2 = _errs18 === errors
                            } else {
                              var valid2 = true
                            }
                          }
                        }
                      } else {
                        validate10.errors = [{ instancePath: instancePath + '/created_at', schemaPath: '#/properties/created_at/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                        return false
                      }
                    }
                    var valid0 = _errs14 === errors
                  } else {
                    var valid0 = true
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
