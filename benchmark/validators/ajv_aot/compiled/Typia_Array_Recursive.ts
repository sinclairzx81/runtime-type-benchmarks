// @ts-nocheck
'use strict'
export const Typia_Array_Recursive = validate10
const schema11 = {
  $id: 'Typia_Array_Recursive',
  type: 'object',
  properties: {
    children: { type: 'array', items: { $ref: 'Typia_Array_Recursive' } },
    id: { type: 'number' },
    code: { type: 'string' },
    sequence: { type: 'number' },
    created_at: { type: 'object', properties: { time: { type: 'number' }, zone: { type: 'number' } }, required: ['time', 'zone'] },
  },
  required: ['children', 'id', 'code', 'sequence', 'created_at'],
}
const wrapper0 = { validate: validate10 }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Typia_Array_Recursive" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if (
        (data.children === undefined && (missing0 = 'children')) ||
        (data.id === undefined && (missing0 = 'id')) ||
        (data.code === undefined && (missing0 = 'code')) ||
        (data.sequence === undefined && (missing0 = 'sequence')) ||
        (data.created_at === undefined && (missing0 = 'created_at'))
      ) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.children !== undefined) {
          let data0 = data.children
          const _errs1 = errors
          if (errors === _errs1) {
            if (Array.isArray(data0)) {
              var valid1 = true
              const len0 = data0.length
              for (let i0 = 0; i0 < len0; i0++) {
                const _errs3 = errors
                if (!wrapper0.validate(data0[i0], { instancePath: instancePath + '/children/' + i0, parentData: data0, parentDataProperty: i0, rootData })) {
                  vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                  errors = vErrors.length
                }
                var valid1 = _errs3 === errors
                if (!valid1) {
                  break
                }
              }
            } else {
              validate10.errors = [{ instancePath: instancePath + '/children', schemaPath: '#/properties/children/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
              return false
            }
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.id !== undefined) {
            let data2 = data.id
            const _errs4 = errors
            if (!(typeof data2 == 'number' && isFinite(data2))) {
              validate10.errors = [{ instancePath: instancePath + '/id', schemaPath: '#/properties/id/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
              return false
            }
            var valid0 = _errs4 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.code !== undefined) {
              const _errs6 = errors
              if (typeof data.code !== 'string') {
                validate10.errors = [{ instancePath: instancePath + '/code', schemaPath: '#/properties/code/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                return false
              }
              var valid0 = _errs6 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.sequence !== undefined) {
                let data4 = data.sequence
                const _errs8 = errors
                if (!(typeof data4 == 'number' && isFinite(data4))) {
                  validate10.errors = [{ instancePath: instancePath + '/sequence', schemaPath: '#/properties/sequence/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                  return false
                }
                var valid0 = _errs8 === errors
              } else {
                var valid0 = true
              }
              if (valid0) {
                if (data.created_at !== undefined) {
                  let data5 = data.created_at
                  const _errs10 = errors
                  if (errors === _errs10) {
                    if (data5 && typeof data5 == 'object' && !Array.isArray(data5)) {
                      let missing1
                      if ((data5.time === undefined && (missing1 = 'time')) || (data5.zone === undefined && (missing1 = 'zone'))) {
                        validate10.errors = [
                          { instancePath: instancePath + '/created_at', schemaPath: '#/properties/created_at/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" },
                        ]
                        return false
                      } else {
                        if (data5.time !== undefined) {
                          let data6 = data5.time
                          const _errs12 = errors
                          if (!(typeof data6 == 'number' && isFinite(data6))) {
                            validate10.errors = [{ instancePath: instancePath + '/created_at/time', schemaPath: '#/properties/created_at/properties/time/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                            return false
                          }
                          var valid2 = _errs12 === errors
                        } else {
                          var valid2 = true
                        }
                        if (valid2) {
                          if (data5.zone !== undefined) {
                            let data7 = data5.zone
                            const _errs14 = errors
                            if (!(typeof data7 == 'number' && isFinite(data7))) {
                              validate10.errors = [{ instancePath: instancePath + '/created_at/zone', schemaPath: '#/properties/created_at/properties/zone/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                              return false
                            }
                            var valid2 = _errs14 === errors
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
                  var valid0 = _errs10 === errors
                } else {
                  var valid0 = true
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
