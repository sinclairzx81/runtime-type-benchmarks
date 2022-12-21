// @ts-nocheck
'use strict'
export const Composite_Union_Literal = validate10
const schema11 = {
  $id: 'Composite_Union_Literal',
  default: 'H',
  anyOf: [
    { const: 'A', type: 'string' },
    { const: 'B', type: 'string' },
    { const: 'C', type: 'string' },
    { const: 'D', type: 'string' },
    { const: 'E', type: 'string' },
    { const: 'F', type: 'string' },
    { const: 'G', type: 'string' },
    { const: 'H', type: 'string' },
  ],
}
function validate10(data, { instancePath = '', parentData, parentDataProperty, rootData = data } = {}) {
  /*# sourceURL="Composite_Union_Literal" */ let vErrors = null
  let errors = 0
  const _errs0 = errors
  let valid0 = false
  const _errs1 = errors
  if (typeof data !== 'string') {
    const err0 = { instancePath, schemaPath: '#/anyOf/0/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
    if (vErrors === null) {
      vErrors = [err0]
    } else {
      vErrors.push(err0)
    }
    errors++
  }
  if ('A' !== data) {
    const err1 = { instancePath, schemaPath: '#/anyOf/0/const', keyword: 'const', params: { allowedValue: 'A' }, message: 'must be equal to constant' }
    if (vErrors === null) {
      vErrors = [err1]
    } else {
      vErrors.push(err1)
    }
    errors++
  }
  var _valid0 = _errs1 === errors
  valid0 = valid0 || _valid0
  if (!valid0) {
    const _errs3 = errors
    if (typeof data !== 'string') {
      const err2 = { instancePath, schemaPath: '#/anyOf/1/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
      if (vErrors === null) {
        vErrors = [err2]
      } else {
        vErrors.push(err2)
      }
      errors++
    }
    if ('B' !== data) {
      const err3 = { instancePath, schemaPath: '#/anyOf/1/const', keyword: 'const', params: { allowedValue: 'B' }, message: 'must be equal to constant' }
      if (vErrors === null) {
        vErrors = [err3]
      } else {
        vErrors.push(err3)
      }
      errors++
    }
    var _valid0 = _errs3 === errors
    valid0 = valid0 || _valid0
    if (!valid0) {
      const _errs5 = errors
      if (typeof data !== 'string') {
        const err4 = { instancePath, schemaPath: '#/anyOf/2/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
        if (vErrors === null) {
          vErrors = [err4]
        } else {
          vErrors.push(err4)
        }
        errors++
      }
      if ('C' !== data) {
        const err5 = { instancePath, schemaPath: '#/anyOf/2/const', keyword: 'const', params: { allowedValue: 'C' }, message: 'must be equal to constant' }
        if (vErrors === null) {
          vErrors = [err5]
        } else {
          vErrors.push(err5)
        }
        errors++
      }
      var _valid0 = _errs5 === errors
      valid0 = valid0 || _valid0
      if (!valid0) {
        const _errs7 = errors
        if (typeof data !== 'string') {
          const err6 = { instancePath, schemaPath: '#/anyOf/3/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
          if (vErrors === null) {
            vErrors = [err6]
          } else {
            vErrors.push(err6)
          }
          errors++
        }
        if ('D' !== data) {
          const err7 = { instancePath, schemaPath: '#/anyOf/3/const', keyword: 'const', params: { allowedValue: 'D' }, message: 'must be equal to constant' }
          if (vErrors === null) {
            vErrors = [err7]
          } else {
            vErrors.push(err7)
          }
          errors++
        }
        var _valid0 = _errs7 === errors
        valid0 = valid0 || _valid0
        if (!valid0) {
          const _errs9 = errors
          if (typeof data !== 'string') {
            const err8 = { instancePath, schemaPath: '#/anyOf/4/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
            if (vErrors === null) {
              vErrors = [err8]
            } else {
              vErrors.push(err8)
            }
            errors++
          }
          if ('E' !== data) {
            const err9 = { instancePath, schemaPath: '#/anyOf/4/const', keyword: 'const', params: { allowedValue: 'E' }, message: 'must be equal to constant' }
            if (vErrors === null) {
              vErrors = [err9]
            } else {
              vErrors.push(err9)
            }
            errors++
          }
          var _valid0 = _errs9 === errors
          valid0 = valid0 || _valid0
          if (!valid0) {
            const _errs11 = errors
            if (typeof data !== 'string') {
              const err10 = { instancePath, schemaPath: '#/anyOf/5/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
              if (vErrors === null) {
                vErrors = [err10]
              } else {
                vErrors.push(err10)
              }
              errors++
            }
            if ('F' !== data) {
              const err11 = { instancePath, schemaPath: '#/anyOf/5/const', keyword: 'const', params: { allowedValue: 'F' }, message: 'must be equal to constant' }
              if (vErrors === null) {
                vErrors = [err11]
              } else {
                vErrors.push(err11)
              }
              errors++
            }
            var _valid0 = _errs11 === errors
            valid0 = valid0 || _valid0
            if (!valid0) {
              const _errs13 = errors
              if (typeof data !== 'string') {
                const err12 = { instancePath, schemaPath: '#/anyOf/6/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                if (vErrors === null) {
                  vErrors = [err12]
                } else {
                  vErrors.push(err12)
                }
                errors++
              }
              if ('G' !== data) {
                const err13 = { instancePath, schemaPath: '#/anyOf/6/const', keyword: 'const', params: { allowedValue: 'G' }, message: 'must be equal to constant' }
                if (vErrors === null) {
                  vErrors = [err13]
                } else {
                  vErrors.push(err13)
                }
                errors++
              }
              var _valid0 = _errs13 === errors
              valid0 = valid0 || _valid0
              if (!valid0) {
                const _errs15 = errors
                if (typeof data !== 'string') {
                  const err14 = { instancePath, schemaPath: '#/anyOf/7/type', keyword: 'type', params: { type: 'string' }, message: 'must be string' }
                  if (vErrors === null) {
                    vErrors = [err14]
                  } else {
                    vErrors.push(err14)
                  }
                  errors++
                }
                if ('H' !== data) {
                  const err15 = { instancePath, schemaPath: '#/anyOf/7/const', keyword: 'const', params: { allowedValue: 'H' }, message: 'must be equal to constant' }
                  if (vErrors === null) {
                    vErrors = [err15]
                  } else {
                    vErrors.push(err15)
                  }
                  errors++
                }
                var _valid0 = _errs15 === errors
                valid0 = valid0 || _valid0
              }
            }
          }
        }
      }
    }
  }
  if (!valid0) {
    const err16 = { instancePath, schemaPath: '#/anyOf', keyword: 'anyOf', params: {}, message: 'must match a schema in anyOf' }
    if (vErrors === null) {
      vErrors = [err16]
    } else {
      vErrors.push(err16)
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
