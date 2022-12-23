// @ts-nocheck
'use strict'
export const Recursive_Union = validate10
const schema11 = {
  $id: 'Recursive_Union',
  anyOf: [
    { type: 'object', properties: { type: { const: 'Node', type: 'string' }, nodes: { type: 'array', items: { $ref: 'Recursive_Union' } } }, required: ['type', 'nodes'] },
    { type: 'object', properties: { type: { const: 'Leaf', type: 'string' }, value: { type: 'string' } }, required: ['type', 'value'] },
  ],
}
const wrapper0 = { validate: validate10 }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Recursive_Union" */ let vErrors = null
  let errors = 0
  const _errs0 = errors
  let valid0 = false
  const _errs1 = errors
  if (errors === _errs1) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.type === undefined && (missing0 = 'type')) || (data.nodes === undefined && (missing0 = 'nodes'))) {
        const err0 = { instancePath, schemaPath: '#/anyOf/0/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }
        if (vErrors === null) {
          vErrors = [err0]
        } else {
          vErrors.push(err0)
        }
        errors++
      } else {
        if (data.type !== undefined) {
          let data0 = data.type
          const _errs3 = errors
          if (typeof data0 !== 'string') {
            const err1 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/0/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
            if (vErrors === null) {
              vErrors = [err1]
            } else {
              vErrors.push(err1)
            }
            errors++
          }
          if ('Node' !== data0) {
            const err2 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/0/properties/type/const', keyword: 'const', params: { allowedValue: 'Node' }, message: 'must be equal to constant' }
            if (vErrors === null) {
              vErrors = [err2]
            } else {
              vErrors.push(err2)
            }
            errors++
          }
          var valid1 = _errs3 === errors
        } else {
          var valid1 = true
        }
        if (valid1) {
          if (data.nodes !== undefined) {
            let data1 = data.nodes
            const _errs5 = errors
            if (errors === _errs5) {
              if (Array.isArray(data1)) {
                var valid2 = true
                const len0 = data1.length
                for (let i0 = 0; i0 < len0; i0++) {
                  const _errs7 = errors
                  if (!wrapper0.validate(data1[i0], { instancePath: instancePath + '/nodes/' + i0, parentData: data1, parentDataProperty: i0, rootData })) {
                    vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                    errors = vErrors.length
                  }
                  var valid2 = _errs7 === errors
                  if (!valid2) {
                    break
                  }
                }
              } else {
                const err3 = { instancePath: instancePath + '/nodes', schemaPath: '#/anyOf/0/properties/nodes/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }
                if (vErrors === null) {
                  vErrors = [err3]
                } else {
                  vErrors.push(err3)
                }
                errors++
              }
            }
            var valid1 = _errs5 === errors
          } else {
            var valid1 = true
          }
        }
      }
    } else {
      const err4 = { instancePath, schemaPath: '#/anyOf/0/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
      if (vErrors === null) {
        vErrors = [err4]
      } else {
        vErrors.push(err4)
      }
      errors++
    }
  }
  var _valid0 = _errs1 === errors
  valid0 = valid0 || _valid0
  if (!valid0) {
    const _errs8 = errors
    if (errors === _errs8) {
      if (data && typeof data == 'object' && !Array.isArray(data)) {
        let missing1
        if ((data.type === undefined && (missing1 = 'type')) || (data.value === undefined && (missing1 = 'value'))) {
          const err5 = { instancePath, schemaPath: '#/anyOf/1/required', keyword: 'required', params: { missingProperty: missing1 }, message: "must have required property '" + missing1 + "'" }
          if (vErrors === null) {
            vErrors = [err5]
          } else {
            vErrors.push(err5)
          }
          errors++
        } else {
          if (data.type !== undefined) {
            let data3 = data.type
            const _errs10 = errors
            if (typeof data3 !== 'string') {
              const err6 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/1/properties/type/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
              if (vErrors === null) {
                vErrors = [err6]
              } else {
                vErrors.push(err6)
              }
              errors++
            }
            if ('Leaf' !== data3) {
              const err7 = { instancePath: instancePath + '/type', schemaPath: '#/anyOf/1/properties/type/const', keyword: 'const', params: { allowedValue: 'Leaf' }, message: 'must be equal to constant' }
              if (vErrors === null) {
                vErrors = [err7]
              } else {
                vErrors.push(err7)
              }
              errors++
            }
            var valid3 = _errs10 === errors
          } else {
            var valid3 = true
          }
          if (valid3) {
            if (data.value !== undefined) {
              const _errs12 = errors
              if (typeof data.value !== 'string') {
                const err8 = { instancePath: instancePath + '/value', schemaPath: '#/anyOf/1/properties/value/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err8]
                } else {
                  vErrors.push(err8)
                }
                errors++
              }
              var valid3 = _errs12 === errors
            } else {
              var valid3 = true
            }
          }
        }
      } else {
        const err9 = { instancePath, schemaPath: '#/anyOf/1/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }
        if (vErrors === null) {
          vErrors = [err9]
        } else {
          vErrors.push(err9)
        }
        errors++
      }
    }
    var _valid0 = _errs8 === errors
    valid0 = valid0 || _valid0
  }
  if (!valid0) {
    const err10 = { instancePath, schemaPath: '#/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
    if (vErrors === null) {
      vErrors = [err10]
    } else {
      vErrors.push(err10)
    }
    errors++
    validate10.errors = vErrors
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
  validate10.errors = vErrors
  return errors === 0
}
