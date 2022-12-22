// @ts-nocheck
'use strict'
export const Array_Recursive = validate10
const schema11 = { $id: 'Array_Recursive', type: 'array', items: { $id: 'Recursive_Object', type: 'object', properties: { id: { type: 'string' }, nodes: { type: 'array', items: { $ref: 'Recursive_Object' } } }, required: ['id', 'nodes'] } }
const schema12 = { $id: 'Recursive_Object', type: 'object', properties: { id: { type: 'string' }, nodes: { type: 'array', items: { $ref: 'Recursive_Object' } } }, required: ['id', 'nodes'] }
const wrapper0 = { validate: validate11 }
function validate11(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Recursive_Object" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.id === undefined && (missing0 = 'id')) || (data.nodes === undefined && (missing0 = 'nodes'))) {
        validate11.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.id !== undefined) {
          const _errs1 = errors
          if (typeof data.id !== 'string') {
            validate11.errors = [{ instancePath: instancePath + '/id', schemaPath: '#/properties/id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
            return false
          }
          var valid0 = _errs1 === errors
        } else {
          var valid0 = true
        }
        if (valid0) {
          if (data.nodes !== undefined) {
            let data1 = data.nodes
            const _errs3 = errors
            if (errors === _errs3) {
              if (Array.isArray(data1)) {
                var valid1 = true
                const len0 = data1.length
                for (let i0 = 0; i0 < len0; i0++) {
                  const _errs5 = errors
                  if (!wrapper0.validate(data1[i0], { instancePath: instancePath + '/nodes/' + i0, parentData: data1, parentDataProperty: i0, rootData })) {
                    vErrors = vErrors === null ? wrapper0.validate.errors : vErrors.concat(wrapper0.validate.errors)
                    errors = vErrors.length
                  }
                  var valid1 = _errs5 === errors
                  if (!valid1) {
                    break
                  }
                }
              } else {
                validate11.errors = [{ instancePath: instancePath + '/nodes', schemaPath: '#/properties/nodes/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                return false
              }
            }
            var valid0 = _errs3 === errors
          } else {
            var valid0 = true
          }
        }
      }
    } else {
      validate11.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  validate11.errors = vErrors
  return errors === 0
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Recursive" */ let vErrors = null
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
            if ((data0.id === undefined && (missing0 = 'id')) || (data0.nodes === undefined && (missing0 = 'nodes'))) {
              validate10.errors = [{ instancePath: instancePath + '/' + i0, schemaPath: '#/items/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
              return false
            } else {
              if (data0.id !== undefined) {
                const _errs3 = errors
                if (typeof data0.id !== 'string') {
                  validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/id', schemaPath: '#/items/properties/id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
                  return false
                }
                var valid1 = _errs3 === errors
              } else {
                var valid1 = true
              }
              if (valid1) {
                if (data0.nodes !== undefined) {
                  let data2 = data0.nodes
                  const _errs5 = errors
                  if (errors === _errs5) {
                    if (Array.isArray(data2)) {
                      var valid2 = true
                      const len1 = data2.length
                      for (let i1 = 0; i1 < len1; i1++) {
                        const _errs7 = errors
                        if (!validate11(data2[i1], { instancePath: instancePath + '/' + i0 + '/nodes/' + i1, parentData: data2, parentDataProperty: i1, rootData })) {
                          vErrors = vErrors === null ? validate11.errors : vErrors.concat(validate11.errors)
                          errors = vErrors.length
                        }
                        var valid2 = _errs7 === errors
                        if (!valid2) {
                          break
                        }
                      }
                    } else {
                      validate10.errors = [{ instancePath: instancePath + '/' + i0 + '/nodes', schemaPath: '#/items/properties/nodes/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
                      return false
                    }
                  }
                  var valid1 = _errs5 === errors
                } else {
                  var valid1 = true
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
