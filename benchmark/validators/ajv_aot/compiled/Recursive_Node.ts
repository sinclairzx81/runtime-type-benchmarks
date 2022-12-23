// @ts-nocheck
'use strict'
export const Recursive_Node = validate10
const schema11 = { $id: 'Recursive_Node', description: 'Should validate a recursive object', type: 'object', properties: { id: { type: 'string' }, nodes: { type: 'array', items: { $ref: 'Recursive_Node' } } }, required: ['id', 'nodes'] }
const wrapper0 = { validate: validate10 }
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Recursive_Node" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (data && typeof data == 'object' && !Array.isArray(data)) {
      let missing0
      if ((data.id === undefined && (missing0 = 'id')) || (data.nodes === undefined && (missing0 = 'nodes'))) {
        validate10.errors = [{ instancePath, schemaPath: '#/required', keyword: 'required', params: { missingProperty: missing0 }, message: "must have required property '" + missing0 + "'" }]
        return false
      } else {
        if (data.id !== undefined) {
          const _errs1 = errors
          if (typeof data.id !== 'string') {
            validate10.errors = [{ instancePath: instancePath + '/id', schemaPath: '#/properties/id/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }]
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
                validate10.errors = [{ instancePath: instancePath + '/nodes', schemaPath: '#/properties/nodes/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
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
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'object' }, message: 'must be object' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
