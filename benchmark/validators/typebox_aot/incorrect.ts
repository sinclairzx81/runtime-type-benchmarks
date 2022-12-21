// @ts-nocheck
import { Command } from '../../command/index'
import * as Cases from '../../schematics/incorrect'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Composite_Intersect, iterations, results, () => {
    function check_Composite_Intersect(value) {
      return typeof value === 'object' && value !== null && value.A === 'A' && value.B === 'B' && value.C === 'C' && value.D === 'D' && value.E === 'E' && value.F === 'F' && value.G === 'G' && value.H === 'H'
    }
    function check_Array_Composite_Intersect(value) {
      return Array.isArray(value) && value.every((value) => check_Composite_Intersect(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Composite_Intersect(value)
    }
  })
  Cases.Benchmark(Cases.Array_Composite_Union_Discriminated, iterations, results, () => {
    function check_Composite_Union_Discriminated(value) {
      return (
        (typeof value === 'object' && value !== null && value.type === 'A' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'B' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'C' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'D' && typeof value.value === 'number')
      )
    }
    function check_Array_Composite_Union_Discriminated(value) {
      return Array.isArray(value) && value.every((value) => check_Composite_Union_Discriminated(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Composite_Union_Discriminated(value)
    }
  })
  Cases.Benchmark(Cases.Array_Composite_Union_Literal, iterations, results, () => {
    function check_Composite_Union_Literal(value) {
      return value === 'A' || value === 'B' || value === 'C' || value === 'D'
    }
    function check_Array_Composite_Union_Literal(value) {
      return Array.isArray(value) && value.every((value) => check_Composite_Union_Literal(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Composite_Union_Literal(value)
    }
  })
  Cases.Benchmark(Cases.Array_Composite_Union_Non_Discriminated, iterations, results, () => {
    function check_Composite_Union_Non_Discriminated(value) {
      return (typeof value === 'object' && value !== null && typeof value.A === 'string' && typeof value.B === 'string') || (typeof value === 'object' && value !== null && typeof value.C === 'string' && typeof value.D === 'string')
    }
    function check_Array_Composite_Union_Non_Discriminated(value) {
      return Array.isArray(value) && value.every((value) => check_Composite_Union_Non_Discriminated(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Composite_Union_Non_Discriminated(value)
    }
  })
  Cases.Benchmark(Cases.Array_Math_Box3D, iterations, results, () => {
    function check_Math_Box3D(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        typeof value.scale.x === 'number' &&
        typeof value.scale.y === 'number' &&
        typeof value.scale.z === 'number' &&
        typeof value.position === 'object' &&
        value.position !== null &&
        typeof value.position.x === 'number' &&
        typeof value.position.y === 'number' &&
        typeof value.position.z === 'number' &&
        typeof value.rotate === 'object' &&
        value.rotate !== null &&
        typeof value.rotate.x === 'number' &&
        typeof value.rotate.y === 'number' &&
        typeof value.rotate.z === 'number' &&
        typeof value.pivot === 'object' &&
        value.pivot !== null &&
        typeof value.pivot.x === 'number' &&
        typeof value.pivot.y === 'number' &&
        typeof value.pivot.z === 'number'
      )
    }
    function check_Array_Math_Box3D(value) {
      return Array.isArray(value) && value.every((value) => check_Math_Box3D(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Math_Box3D(value)
    }
  })
  Cases.Benchmark(Cases.Array_Math_Matrix4, iterations, results, () => {
    function check_Math_Matrix4(value) {
      return Array.isArray(value) && value.every((value) => Array.isArray(value) && value.every((value) => typeof value === 'number'))
    }
    function check_Array_Math_Matrix4(value) {
      return Array.isArray(value) && value.every((value) => check_Math_Matrix4(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Math_Matrix4(value)
    }
  })
  Cases.Benchmark(Cases.Array_Math_Mesh, iterations, results, () => {
    function check_Math_Mesh(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        Array.isArray(value.vertices) &&
        value.vertices.every((value) => typeof value === 'number') &&
        Array.isArray(value.normals) &&
        value.normals.every((value) => typeof value === 'number') &&
        Array.isArray(value.texoords) &&
        value.texoords.every((value) => typeof value === 'number') &&
        Array.isArray(value.indices) &&
        value.indices.every((value) => typeof value === 'number' && Number.isInteger(value))
      )
    }
    function check_Array_Math_Mesh(value) {
      return Array.isArray(value) && value.every((value) => check_Math_Mesh(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Math_Mesh(value)
    }
  })
  Cases.Benchmark(Cases.Array_Math_Vector3, iterations, results, () => {
    function check_Math_Vector3(value) {
      return typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number'
    }
    function check_Array_Math_Vector3(value) {
      return Array.isArray(value) && value.every((value) => check_Math_Vector3(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Math_Vector3(value)
    }
  })
  Cases.Benchmark(Cases.Array_Object_Loose, iterations, results, () => {
    function check_Object_Loose(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.A === 'number' &&
        typeof value.B === 'number' &&
        typeof value.C === 'number' &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        typeof value.G.J === 'boolean'
      )
    }
    function check_Array_Object_Loose(value) {
      return Array.isArray(value) && value.every((value) => check_Object_Loose(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Object_Loose(value)
    }
  })
  Cases.Benchmark(Cases.Array_Object_Partial, iterations, results, () => {
    function check_Object_Partial(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        (value.position === undefined ? true : typeof value.position === 'object' && value.position !== null && typeof value.position.x === 'number' && typeof value.position.y === 'number' && typeof value.position.z === 'number') &&
        (value.rotation === undefined ? true : typeof value.rotation === 'object' && value.rotation !== null && typeof value.rotation.x === 'number' && typeof value.rotation.y === 'number' && typeof value.rotation.z === 'number') &&
        (value.scale === undefined ? true : typeof value.scale === 'object' && value.scale !== null && typeof value.scale.x === 'number' && typeof value.scale.y === 'number' && typeof value.scale.z === 'number')
      )
    }
    function check_Array_Object_Partial(value) {
      return Array.isArray(value) && value.every((value) => check_Object_Partial(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Object_Partial(value)
    }
  })
  Cases.Benchmark(Cases.Array_Object_Simple, iterations, results, () => {
    function check_Object_Simple(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.position === 'object' &&
        value.position !== null &&
        typeof value.position.x === 'number' &&
        typeof value.position.y === 'number' &&
        typeof value.position.z === 'number' &&
        typeof value.rotation === 'object' &&
        value.rotation !== null &&
        typeof value.rotation.x === 'number' &&
        typeof value.rotation.y === 'number' &&
        typeof value.rotation.z === 'number' &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        typeof value.scale.x === 'number' &&
        typeof value.scale.y === 'number' &&
        typeof value.scale.z === 'number'
      )
    }
    function check_Array_Object_Simple(value) {
      return Array.isArray(value) && value.every((value) => check_Object_Simple(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Object_Simple(value)
    }
  })
  Cases.Benchmark(Cases.Array_Object_Strict, iterations, results, () => {
    function check_Object_Strict(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        Object.getOwnPropertyNames(value).length === 7 &&
        typeof value.A === 'number' &&
        typeof value.B === 'number' &&
        typeof value.C === 'number' &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        Object.getOwnPropertyNames(value.G).length === 3 &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        typeof value.G.J === 'boolean'
      )
    }
    function check_Array_Object_Strict(value) {
      return Array.isArray(value) && value.every((value) => check_Object_Strict(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Object_Strict(value)
    }
  })
  Cases.Benchmark(Cases.Array_Primitive_Boolean, iterations, results, () => {
    function check_Array_Primitive_Boolean(value) {
      return Array.isArray(value) && value.every((value) => typeof value === 'boolean') && value.length >= 8
    }
    return function check(value) {
      return check_Array_Primitive_Boolean(value)
    }
  })
  Cases.Benchmark(Cases.Array_Primitive_Number, iterations, results, () => {
    function check_Array_Primitive_Number(value) {
      return Array.isArray(value) && value.every((value) => typeof value === 'number') && value.length >= 8
    }
    return function check(value) {
      return check_Array_Primitive_Number(value)
    }
  })
  Cases.Benchmark(Cases.Array_Primitive_String, iterations, results, () => {
    function check_Array_Primitive_String(value) {
      return Array.isArray(value) && value.every((value) => typeof value === 'string') && value.length >= 8
    }
    return function check(value) {
      return check_Array_Primitive_String(value)
    }
  })
  Cases.Benchmark(Cases.Array_Recursive_Object, iterations, results, () => {
    function check_Recursive_Object(value) {
      return typeof value === 'object' && value !== null && typeof value.id === 'string' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Object(value))
    }
    function check_Array_Recursive_Object(value) {
      return Array.isArray(value) && value.every((value) => check_Recursive_Object(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Recursive_Object(value)
    }
  })
  Cases.Benchmark(Cases.Array_Recursive_Union, iterations, results, () => {
    function check_Recursive_Union(value) {
      return (
        (typeof value === 'object' && value !== null && value.type === 'Node' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Union(value))) ||
        (typeof value === 'object' && value !== null && value.type === 'Leaf' && typeof value.value === 'string')
      )
    }
    function check_Array_Recursive_Union(value) {
      return Array.isArray(value) && value.every((value) => check_Recursive_Union(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Recursive_Union(value)
    }
  })
  Cases.Benchmark(Cases.Array_Tuple_Number, iterations, results, () => {
    function check_Tuple_Number(value) {
      return Array.isArray(value) && value.length === 3 && typeof value[0] === 'number' && typeof value[1] === 'number' && typeof value[2] === 'number'
    }
    function check_Array_Tuple_Number(value) {
      return Array.isArray(value) && value.every((value) => check_Tuple_Number(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Tuple_Number(value)
    }
  })
  Cases.Benchmark(Cases.Array_Tuple_Object, iterations, results, () => {
    function check_Tuple_Object(value) {
      return (
        Array.isArray(value) &&
        value.length === 3 &&
        typeof value[0] === 'object' &&
        value[0] !== null &&
        typeof value[0].x === 'number' &&
        typeof value[0].y === 'number' &&
        typeof value[0].z === 'number' &&
        typeof value[1] === 'object' &&
        value[1] !== null &&
        typeof value[1].x === 'number' &&
        typeof value[1].y === 'number' &&
        typeof value[1].z === 'number' &&
        typeof value[2] === 'object' &&
        value[2] !== null &&
        typeof value[2].x === 'number' &&
        typeof value[2].y === 'number' &&
        typeof value[2].z === 'number'
      )
    }
    function check_Array_Tuple_Object(value) {
      return Array.isArray(value) && value.every((value) => check_Tuple_Object(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Tuple_Object(value)
    }
  })
  Cases.Benchmark(Cases.Array_Tuple_Union_Literal, iterations, results, () => {
    function check_Tuple_Union_Literal(value) {
      return Array.isArray(value) && value.length === 3 && (value[0] === 'A' || value[0] === 'B') && (value[1] === 'C' || value[1] === 'D') && (value[2] === 'E' || value[2] === 'F')
    }
    function check_Array_Tuple_Union_Literal(value) {
      return Array.isArray(value) && value.every((value) => check_Tuple_Union_Literal(value)) && value.length >= 8
    }
    return function check(value) {
      return check_Array_Tuple_Union_Literal(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => {
    function check_Composite_Intersect(value) {
      return typeof value === 'object' && value !== null && value.A === 'A' && value.B === 'B' && value.C === 'C' && value.D === 'D' && value.E === 'E' && value.F === 'F' && value.G === 'G' && value.H === 'H'
    }
    return function check(value) {
      return check_Composite_Intersect(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, () => {
    function check_Composite_Union_Discriminated(value) {
      return (
        (typeof value === 'object' && value !== null && value.type === 'A' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'B' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'C' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'D' && typeof value.value === 'number')
      )
    }
    return function check(value) {
      return check_Composite_Union_Discriminated(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Literal, iterations, results, () => {
    function check_Composite_Union_Literal(value) {
      return value === 'A' || value === 'B' || value === 'C' || value === 'D'
    }
    return function check(value) {
      return check_Composite_Union_Literal(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Non_Discriminated, iterations, results, () => {
    function check_Composite_Union_Non_Discriminated(value) {
      return (typeof value === 'object' && value !== null && typeof value.A === 'string' && typeof value.B === 'string') || (typeof value === 'object' && value !== null && typeof value.C === 'string' && typeof value.D === 'string')
    }
    return function check(value) {
      return check_Composite_Union_Non_Discriminated(value)
    }
  })
  Cases.Benchmark(Cases.Literal_Boolean, iterations, results, () => {
    function check_Literal_Boolean(value) {
      return value === true
    }
    return function check(value) {
      return check_Literal_Boolean(value)
    }
  })
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => {
    function check_Literal_Number(value) {
      return value === 42
    }
    return function check(value) {
      return check_Literal_Number(value)
    }
  })
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => {
    function check_Literal_String(value) {
      return value === 'hello'
    }
    return function check(value) {
      return check_Literal_String(value)
    }
  })
  Cases.Benchmark(Cases.Math_Box3D, iterations, results, () => {
    function check_Math_Box3D(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        typeof value.scale.x === 'number' &&
        typeof value.scale.y === 'number' &&
        typeof value.scale.z === 'number' &&
        typeof value.position === 'object' &&
        value.position !== null &&
        typeof value.position.x === 'number' &&
        typeof value.position.y === 'number' &&
        typeof value.position.z === 'number' &&
        typeof value.rotate === 'object' &&
        value.rotate !== null &&
        typeof value.rotate.x === 'number' &&
        typeof value.rotate.y === 'number' &&
        typeof value.rotate.z === 'number' &&
        typeof value.pivot === 'object' &&
        value.pivot !== null &&
        typeof value.pivot.x === 'number' &&
        typeof value.pivot.y === 'number' &&
        typeof value.pivot.z === 'number'
      )
    }
    return function check(value) {
      return check_Math_Box3D(value)
    }
  })
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => {
    function check_Math_Matrix4(value) {
      return Array.isArray(value) && value.every((value) => Array.isArray(value) && value.every((value) => typeof value === 'number'))
    }
    return function check(value) {
      return check_Math_Matrix4(value)
    }
  })
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => {
    function check_Math_Mesh(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        Array.isArray(value.vertices) &&
        value.vertices.every((value) => typeof value === 'number') &&
        Array.isArray(value.normals) &&
        value.normals.every((value) => typeof value === 'number') &&
        Array.isArray(value.texoords) &&
        value.texoords.every((value) => typeof value === 'number') &&
        Array.isArray(value.indices) &&
        value.indices.every((value) => typeof value === 'number' && Number.isInteger(value))
      )
    }
    return function check(value) {
      return check_Math_Mesh(value)
    }
  })
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => {
    function check_Math_Vector3(value) {
      return typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number'
    }
    return function check(value) {
      return check_Math_Vector3(value)
    }
  })
  Cases.Benchmark(Cases.Object_Loose, iterations, results, () => {
    function check_Object_Loose(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.A === 'number' &&
        typeof value.B === 'number' &&
        typeof value.C === 'number' &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        typeof value.G.J === 'boolean'
      )
    }
    return function check(value) {
      return check_Object_Loose(value)
    }
  })
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => {
    function check_Object_Partial(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        (value.position === undefined ? true : typeof value.position === 'object' && value.position !== null && typeof value.position.x === 'number' && typeof value.position.y === 'number' && typeof value.position.z === 'number') &&
        (value.rotation === undefined ? true : typeof value.rotation === 'object' && value.rotation !== null && typeof value.rotation.x === 'number' && typeof value.rotation.y === 'number' && typeof value.rotation.z === 'number') &&
        (value.scale === undefined ? true : typeof value.scale === 'object' && value.scale !== null && typeof value.scale.x === 'number' && typeof value.scale.y === 'number' && typeof value.scale.z === 'number')
      )
    }
    return function check(value) {
      return check_Object_Partial(value)
    }
  })
  Cases.Benchmark(Cases.Object_Simple, iterations, results, () => {
    function check_Object_Simple(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.position === 'object' &&
        value.position !== null &&
        typeof value.position.x === 'number' &&
        typeof value.position.y === 'number' &&
        typeof value.position.z === 'number' &&
        typeof value.rotation === 'object' &&
        value.rotation !== null &&
        typeof value.rotation.x === 'number' &&
        typeof value.rotation.y === 'number' &&
        typeof value.rotation.z === 'number' &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        typeof value.scale.x === 'number' &&
        typeof value.scale.y === 'number' &&
        typeof value.scale.z === 'number'
      )
    }
    return function check(value) {
      return check_Object_Simple(value)
    }
  })
  Cases.Benchmark(Cases.Object_Strict, iterations, results, () => {
    function check_Object_Strict(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        Object.getOwnPropertyNames(value).length === 7 &&
        typeof value.A === 'number' &&
        typeof value.B === 'number' &&
        typeof value.C === 'number' &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        Object.getOwnPropertyNames(value.G).length === 3 &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        typeof value.G.J === 'boolean'
      )
    }
    return function check(value) {
      return check_Object_Strict(value)
    }
  })
  Cases.Benchmark(Cases.Primitive_Boolean, iterations, results, () => {
    function check_Primitive_Boolean(value) {
      return typeof value === 'boolean'
    }
    return function check(value) {
      return check_Primitive_Boolean(value)
    }
  })
  Cases.Benchmark(Cases.Primitive_Integer, iterations, results, () => {
    function check_Primitive_Integer(value) {
      return typeof value === 'number' && Number.isInteger(value)
    }
    return function check(value) {
      return check_Primitive_Integer(value)
    }
  })
  Cases.Benchmark(Cases.Primitive_Null, iterations, results, () => {
    function check_Primitive_Null(value) {
      return value === null
    }
    return function check(value) {
      return check_Primitive_Null(value)
    }
  })
  Cases.Benchmark(Cases.Primitive_Number, iterations, results, () => {
    function check_Primitive_Number(value) {
      return typeof value === 'number'
    }
    return function check(value) {
      return check_Primitive_Number(value)
    }
  })
  Cases.Benchmark(Cases.Primitive_RegEx, iterations, results, () => {
    const local_0 = new RegExp(/hello/)
    function check_Primitive_RegEx(value) {
      return typeof value === 'string' && local_0.test(value)
    }
    return function check(value) {
      return check_Primitive_RegEx(value)
    }
  })
  Cases.Benchmark(Cases.Primitive_String, iterations, results, () => {
    function check_Primitive_String(value) {
      return typeof value === 'string'
    }
    return function check(value) {
      return check_Primitive_String(value)
    }
  })
  Cases.Benchmark(Cases.Primitive_Undefined, iterations, results, () => {
    function check_Primitive_Undefined(value) {
      return value === undefined
    }
    return function check(value) {
      return check_Primitive_Undefined(value)
    }
  })
  Cases.Benchmark(Cases.Recursive_Object, iterations, results, () => {
    function check_Recursive_Object(value) {
      return typeof value === 'object' && value !== null && typeof value.id === 'string' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Object(value))
    }
    return function check(value) {
      return check_Recursive_Object(value)
    }
  })
  Cases.Benchmark(Cases.Recursive_Union, iterations, results, () => {
    function check_Recursive_Union(value) {
      return (
        (typeof value === 'object' && value !== null && value.type === 'Node' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Union(value))) ||
        (typeof value === 'object' && value !== null && value.type === 'Leaf' && typeof value.value === 'string')
      )
    }
    return function check(value) {
      return check_Recursive_Union(value)
    }
  })
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => {
    function check_Tuple_Number(value) {
      return Array.isArray(value) && value.length === 3 && typeof value[0] === 'number' && typeof value[1] === 'number' && typeof value[2] === 'number'
    }
    return function check(value) {
      return check_Tuple_Number(value)
    }
  })
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => {
    function check_Tuple_Object(value) {
      return (
        Array.isArray(value) &&
        value.length === 3 &&
        typeof value[0] === 'object' &&
        value[0] !== null &&
        typeof value[0].x === 'number' &&
        typeof value[0].y === 'number' &&
        typeof value[0].z === 'number' &&
        typeof value[1] === 'object' &&
        value[1] !== null &&
        typeof value[1].x === 'number' &&
        typeof value[1].y === 'number' &&
        typeof value[1].z === 'number' &&
        typeof value[2] === 'object' &&
        value[2] !== null &&
        typeof value[2].x === 'number' &&
        typeof value[2].y === 'number' &&
        typeof value[2].z === 'number'
      )
    }
    return function check(value) {
      return check_Tuple_Object(value)
    }
  })
  Cases.Benchmark(Cases.Tuple_Union_Literal, iterations, results, () => {
    function check_Tuple_Union_Literal(value) {
      return Array.isArray(value) && value.length === 3 && (value[0] === 'A' || value[0] === 'B') && (value[1] === 'C' || value[1] === 'D') && (value[2] === 'E' || value[2] === 'F')
    }
    return function check(value) {
      return check_Tuple_Union_Literal(value)
    }
  })
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
