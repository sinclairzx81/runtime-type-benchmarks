// @ts-nocheck
'use strict'
export const Object_RTTB_Loose = validate10
const schema11 = {
  description: 'Moltar Runtime Type Benchmark Loose Variant',
  $id: 'Object_RTTB_Loose',
  type: 'object',
  properties: {
    number: { type: 'number' },
    negNumber: { type: 'number' },
    maxNumber: { type: 'number' },
    string: { type: 'string' },
    longString: { type: 'string' },
    boolean: { type: 'boolean' },
    deeplyNested: { type: 'object', properties: { foo: { type: 'string' }, num: { type: 'number' }, bool: { type: 'boolean' } }, required: ['foo', 'num', 'bool'] },
  },
  required: ['number', 'negNumber', 'maxNumber', 'string', 'longString', 'boolean', 'deeplyNested'],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Object_RTTB_Loose" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if (
        (data.number === undefined && (missing0 = 'number')) ||
        (data.negNumber === undefined && (missing0 = 'negNumber')) ||
        (data.maxNumber === undefined && (missing0 = 'maxNumber')) ||
        (data.string === undefined && (missing0 = 'string')) ||
        (data.longString === undefined && (missing0 = 'longString')) ||
        (data.boolean === undefined && (missing0 = 'boolean')) ||
        (data.deeplyNested === undefined && (missing0 = 'deeplyNested'))
      ) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.number !== undefined) {
          let data0 = data.number
          const _errs1 = errors
          if (!(typeof data0 == 'number' && isFinite(data0))) {
            validate10.errors = [{ instancePath: instancePath + '/number', schemaPath: '#/properties/number/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
            return false
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.negNumber !== undefined) {
            let data1 = data.negNumber
            const _errs3 = errors
            if (!(typeof data1 == 'number' && isFinite(data1))) {
              validate10.errors = [{ instancePath: instancePath + '/negNumber', schemaPath: '#/properties/negNumber/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
              return false
            }
            var valid0 = _errs3 === errors
          } else {
            var valid0 = true
          }
          if (valid0) {
            if (data.maxNumber !== undefined) {
              let data2 = data.maxNumber
              const _errs5 = errors
              if (!(typeof data2 == 'number' && isFinite(data2))) {
                validate10.errors = [{ instancePath: instancePath + '/maxNumber', schemaPath: '#/properties/maxNumber/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' }]
                return false
              }
              var valid0 = _errs5 === errors
            } else {
              var valid0 = true
            }
            if (valid0) {
              if (data.string !== undefined) {
                const _errs7 = errors
                if (typeof data.string !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/string', schemaPath: '#/properties/string/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid0 = _errs7 === errors
              } else {
                var valid0 = true
              }
              if (valid0) {
                if (data.longString !== undefined) {
                  const _errs9 = errors
                  if (typeof data.longString !== 'string') {
                    validate10.errors = [{ instancePath: instancePath + '/longString', schemaPath: '#/properties/longString/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                    return false
                  }
                  var valid0 = _errs9 === errors
                } else {
                  var valid0 = true
                }
                if (valid0) {
                  if (data.boolean !== undefined) {
                    const _errs11 = errors
                    if (typeof data.boolean !== 'boolean') {
                      validate10.errors = [{ instancePath: instancePath + '/boolean', schemaPath: '#/properties/boolean/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' }]
                      return false
                    }
                    var valid0 = _errs11 === errors
                  } else {
                    var valid0 = true
                  }
                  if (valid0) {
                    if (data.deeplyNested !== undefined) {
                      let data6 = data.deeplyNested
                      const _errs13 = errors
                      if (errors === _errs13) {
                        if (data6 && typeof data6 == 'object' && !Array.isArray(data6)) {
                          let missing1
                          if ((data6.foo === undefined && (missing1 = 'foo')) || (data6.num === undefined && (missing1 = 'num')) || (data6.bool === undefined && (missing1 = 'bool'))) {
                            validate10.errors = [
                              {
                                instancePath: instancePath + '/deeplyNested',
                                schemaPath: '#/properties/deeplyNested/required',
                                keyword: 'required',
                                params: { missingProperty: missing1 },
                                message: "must have required property '" + missing1 + "'",
                              },
                            ]
                            return false
                          } else {
                            if (data6.foo !== undefined) {
                              const _errs15 = errors
                              if (typeof data6.foo !== 'string') {
                                validate10.errors = [{ instancePath: instancePath + '/deeplyNested/foo', schemaPath: '#/properties/deeplyNested/properties/foo/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                                return false
                              }
                              var valid1 = _errs15 === errors
                            } else {
                              var valid1 = true
                            }
                            if (valid1) {
                              if (data6.num !== undefined) {
                                let data8 = data6.num
                                const _errs17 = errors
                                if (!(typeof data8 == 'number' && isFinite(data8))) {
                                  validate10.errors = [
                                    { instancePath: instancePath + '/deeplyNested/num', schemaPath: '#/properties/deeplyNested/properties/num/type', keyword: 'type', params: { type: 'number' }, message: 'must be number' },
                                  ]
                                  return false
                                }
                                var valid1 = _errs17 === errors
                              } else {
                                var valid1 = true
                              }
                              if (valid1) {
                                if (data6.bool !== undefined) {
                                  const _errs19 = errors
                                  if (typeof data6.bool !== 'boolean') {
                                    validate10.errors = [
                                      { instancePath: instancePath + '/deeplyNested/bool', schemaPath: '#/properties/deeplyNested/properties/bool/type', keyword: 'type', params: { type: 'boolean' }, message: 'must be boolean' },
                                    ]
                                    return false
                                  }
                                  var valid1 = _errs19 === errors
                                } else {
                                  var valid1 = true
                                }
                              }
                            }
                          }
                        } else {
                          validate10.errors = [{ instancePath: instancePath + '/deeplyNested', schemaPath: '#/properties/deeplyNested/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
                          return false
                        }
                      }
                      var valid0 = _errs13 === errors
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
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
