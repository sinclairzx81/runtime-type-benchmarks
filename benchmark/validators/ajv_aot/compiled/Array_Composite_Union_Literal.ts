// @ts-nocheck
'use strict'
export const Array_Composite_Union_Literal = validate10
const schema11 = {
  $id: 'Array_Composite_Union_Literal',
  minItems: 8,
  type: 'array',
  items: {
    $id: 'Composite_Union_Literal',
    default: 'D',
    anyOf: [
      { const: 'A', type: 'string' },
      { const: 'B', type: 'string' },
      { const: 'C', type: 'string' },
      { const: 'D', type: 'string' },
    ],
  },
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Array_Composite_Union_Literal" */ let vErrors = null
  let errors = 0
  if (errors === 0) {
    if (Array.isArray(data)) {
      if (data.length < 8) {
        validate10.errors = [{ instancePath, schemaPath: '#/minItems', keyword: 'minItems', params: { limit: 8 }, message: 'must NOT have fewer than 8 items' }]
        return false
      } else {
        var valid0 = true
        const len0 = data.length
        for (let i0 = 0; i0 < len0; i0++) {
          let data0 = data[i0]
          const _errs1 = errors
          const _errs2 = errors
          let valid1 = false
          const _errs3 = errors
          if (typeof data0 !== 'string') {
            const err0 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
            if (vErrors === null) {
              vErrors = [err0]
            } else {
              vErrors.push(err0)
            }
            errors++
          }
          if ('A' !== data0) {
            const err1 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/0/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }
            if (vErrors === null) {
              vErrors = [err1]
            } else {
              vErrors.push(err1)
            }
            errors++
          }
          var _valid0 = _errs3 === errors
          valid1 = valid1 || _valid0
          if (!valid1) {
            const _errs5 = errors
            if (typeof data0 !== 'string') {
              const err2 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
              if (vErrors === null) {
                vErrors = [err2]
              } else {
                vErrors.push(err2)
              }
              errors++
            }
            if ('B' !== data0) {
              const err3 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/1/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }
              if (vErrors === null) {
                vErrors = [err3]
              } else {
                vErrors.push(err3)
              }
              errors++
            }
            var _valid0 = _errs5 === errors
            valid1 = valid1 || _valid0
            if (!valid1) {
              const _errs7 = errors
              if (typeof data0 !== 'string') {
                const err4 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err4]
                } else {
                  vErrors.push(err4)
                }
                errors++
              }
              if ('C' !== data0) {
                const err5 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/2/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }
                if (vErrors === null) {
                  vErrors = [err5]
                } else {
                  vErrors.push(err5)
                }
                errors++
              }
              var _valid0 = _errs7 === errors
              valid1 = valid1 || _valid0
              if (!valid1) {
                const _errs9 = errors
                if (typeof data0 !== 'string') {
                  const err6 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err6]
                  } else {
                    vErrors.push(err6)
                  }
                  errors++
                }
                if ('D' !== data0) {
                  const err7 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf/3/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }
                  if (vErrors === null) {
                    vErrors = [err7]
                  } else {
                    vErrors.push(err7)
                  }
                  errors++
                }
                var _valid0 = _errs9 === errors
                valid1 = valid1 || _valid0
              }
            }
          }
          if (!valid1) {
            const err8 = { instancePath: instancePath + '/' + i0, schemaPath: '#/items/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
            if (vErrors === null) {
              vErrors = [err8]
            } else {
              vErrors.push(err8)
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
      }
    } else {
      validate10.errors = [{ instancePath, schemaPath: '#/type', keyword: 'type', params: { type: 'array' }, message: 'must be array' }]
      return false
    }
  }
  validate10.errors = vErrors
  return errors === 0
}
