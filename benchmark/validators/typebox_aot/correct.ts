// @ts-nocheck
import { Command } from '../../command/index'
import * as Cases from '../../schematics/correct'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Composite_Intersect, iterations, results, () => {
    function check_Composite_Intersect(value) {
      return typeof value === 'object' && value !== null && !Array.isArray(value) && value.A === 'A' && value.B === 'B' && value.C === 'C' && value.D === 'D' && value.E === 'E' && value.F === 'F' && value.G === 'G' && value.H === 'H'
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
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'A' && typeof value.value === 'number' && !isNaN(value.value)) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'B' && typeof value.value === 'number' && !isNaN(value.value)) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'C' && typeof value.value === 'number' && !isNaN(value.value)) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'D' && typeof value.value === 'number' && !isNaN(value.value))
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
      return (
        (typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.A === 'string' && typeof value.B === 'string') ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.C === 'string' && typeof value.D === 'string')
      )
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
        !Array.isArray(value) &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        !Array.isArray(value.scale) &&
        typeof value.scale.x === 'number' &&
        !isNaN(value.scale.x) &&
        typeof value.scale.y === 'number' &&
        !isNaN(value.scale.y) &&
        typeof value.scale.z === 'number' &&
        !isNaN(value.scale.z) &&
        typeof value.position === 'object' &&
        value.position !== null &&
        !Array.isArray(value.position) &&
        typeof value.position.x === 'number' &&
        !isNaN(value.position.x) &&
        typeof value.position.y === 'number' &&
        !isNaN(value.position.y) &&
        typeof value.position.z === 'number' &&
        !isNaN(value.position.z) &&
        typeof value.rotate === 'object' &&
        value.rotate !== null &&
        !Array.isArray(value.rotate) &&
        typeof value.rotate.x === 'number' &&
        !isNaN(value.rotate.x) &&
        typeof value.rotate.y === 'number' &&
        !isNaN(value.rotate.y) &&
        typeof value.rotate.z === 'number' &&
        !isNaN(value.rotate.z) &&
        typeof value.pivot === 'object' &&
        value.pivot !== null &&
        !Array.isArray(value.pivot) &&
        typeof value.pivot.x === 'number' &&
        !isNaN(value.pivot.x) &&
        typeof value.pivot.y === 'number' &&
        !isNaN(value.pivot.y) &&
        typeof value.pivot.z === 'number' &&
        !isNaN(value.pivot.z)
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
      return Array.isArray(value) && value.every((value) => Array.isArray(value) && value.every((value) => typeof value === 'number' && !isNaN(value)))
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
        !Array.isArray(value) &&
        Array.isArray(value.vertices) &&
        value.vertices.every((value) => typeof value === 'number' && !isNaN(value)) &&
        Array.isArray(value.normals) &&
        value.normals.every((value) => typeof value === 'number' && !isNaN(value)) &&
        Array.isArray(value.texoords) &&
        value.texoords.every((value) => typeof value === 'number' && !isNaN(value)) &&
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
      return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && !isNaN(value.x) && typeof value.y === 'number' && !isNaN(value.y) && typeof value.z === 'number' && !isNaN(value.z)
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
        !Array.isArray(value) &&
        typeof value.A === 'number' &&
        !isNaN(value.A) &&
        typeof value.B === 'number' &&
        !isNaN(value.B) &&
        typeof value.C === 'number' &&
        !isNaN(value.C) &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        !Array.isArray(value.G) &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        !isNaN(value.G.I) &&
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
        !Array.isArray(value) &&
        (value.position === undefined
          ? true
          : typeof value.position === 'object' &&
            value.position !== null &&
            !Array.isArray(value.position) &&
            typeof value.position.x === 'number' &&
            !isNaN(value.position.x) &&
            typeof value.position.y === 'number' &&
            !isNaN(value.position.y) &&
            typeof value.position.z === 'number' &&
            !isNaN(value.position.z)) &&
        (value.rotation === undefined
          ? true
          : typeof value.rotation === 'object' &&
            value.rotation !== null &&
            !Array.isArray(value.rotation) &&
            typeof value.rotation.x === 'number' &&
            !isNaN(value.rotation.x) &&
            typeof value.rotation.y === 'number' &&
            !isNaN(value.rotation.y) &&
            typeof value.rotation.z === 'number' &&
            !isNaN(value.rotation.z)) &&
        (value.scale === undefined
          ? true
          : typeof value.scale === 'object' &&
            value.scale !== null &&
            !Array.isArray(value.scale) &&
            typeof value.scale.x === 'number' &&
            !isNaN(value.scale.x) &&
            typeof value.scale.y === 'number' &&
            !isNaN(value.scale.y) &&
            typeof value.scale.z === 'number' &&
            !isNaN(value.scale.z))
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
        !Array.isArray(value) &&
        typeof value.position === 'object' &&
        value.position !== null &&
        !Array.isArray(value.position) &&
        typeof value.position.x === 'number' &&
        !isNaN(value.position.x) &&
        typeof value.position.y === 'number' &&
        !isNaN(value.position.y) &&
        typeof value.position.z === 'number' &&
        !isNaN(value.position.z) &&
        typeof value.rotation === 'object' &&
        value.rotation !== null &&
        !Array.isArray(value.rotation) &&
        typeof value.rotation.x === 'number' &&
        !isNaN(value.rotation.x) &&
        typeof value.rotation.y === 'number' &&
        !isNaN(value.rotation.y) &&
        typeof value.rotation.z === 'number' &&
        !isNaN(value.rotation.z) &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        !Array.isArray(value.scale) &&
        typeof value.scale.x === 'number' &&
        !isNaN(value.scale.x) &&
        typeof value.scale.y === 'number' &&
        !isNaN(value.scale.y) &&
        typeof value.scale.z === 'number' &&
        !isNaN(value.scale.z)
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
        !Array.isArray(value) &&
        Object.getOwnPropertyNames(value).length === 7 &&
        typeof value.A === 'number' &&
        !isNaN(value.A) &&
        typeof value.B === 'number' &&
        !isNaN(value.B) &&
        typeof value.C === 'number' &&
        !isNaN(value.C) &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        !Array.isArray(value.G) &&
        Object.getOwnPropertyNames(value.G).length === 3 &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        !isNaN(value.G.I) &&
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
      return Array.isArray(value) && value.every((value) => typeof value === 'number' && !isNaN(value)) && value.length >= 8
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
      return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.id === 'string' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Object(value))
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
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'Node' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Union(value))) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'Leaf' && typeof value.value === 'string')
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
      return Array.isArray(value) && value.length === 3 && typeof value[0] === 'number' && !isNaN(value[0]) && typeof value[1] === 'number' && !isNaN(value[1]) && typeof value[2] === 'number' && !isNaN(value[2])
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
        !Array.isArray(value[0]) &&
        typeof value[0].x === 'number' &&
        !isNaN(value[0].x) &&
        typeof value[0].y === 'number' &&
        !isNaN(value[0].y) &&
        typeof value[0].z === 'number' &&
        !isNaN(value[0].z) &&
        typeof value[1] === 'object' &&
        value[1] !== null &&
        !Array.isArray(value[1]) &&
        typeof value[1].x === 'number' &&
        !isNaN(value[1].x) &&
        typeof value[1].y === 'number' &&
        !isNaN(value[1].y) &&
        typeof value[1].z === 'number' &&
        !isNaN(value[1].z) &&
        typeof value[2] === 'object' &&
        value[2] !== null &&
        !Array.isArray(value[2]) &&
        typeof value[2].x === 'number' &&
        !isNaN(value[2].x) &&
        typeof value[2].y === 'number' &&
        !isNaN(value[2].y) &&
        typeof value[2].z === 'number' &&
        !isNaN(value[2].z)
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
      return typeof value === 'object' && value !== null && !Array.isArray(value) && value.A === 'A' && value.B === 'B' && value.C === 'C' && value.D === 'D' && value.E === 'E' && value.F === 'F' && value.G === 'G' && value.H === 'H'
    }
    return function check(value) {
      return check_Composite_Intersect(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, () => {
    function check_Composite_Union_Discriminated(value) {
      return (
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'A' && typeof value.value === 'number' && !isNaN(value.value)) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'B' && typeof value.value === 'number' && !isNaN(value.value)) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'C' && typeof value.value === 'number' && !isNaN(value.value)) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'D' && typeof value.value === 'number' && !isNaN(value.value))
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
      return (
        (typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.A === 'string' && typeof value.B === 'string') ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.C === 'string' && typeof value.D === 'string')
      )
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
        !Array.isArray(value) &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        !Array.isArray(value.scale) &&
        typeof value.scale.x === 'number' &&
        !isNaN(value.scale.x) &&
        typeof value.scale.y === 'number' &&
        !isNaN(value.scale.y) &&
        typeof value.scale.z === 'number' &&
        !isNaN(value.scale.z) &&
        typeof value.position === 'object' &&
        value.position !== null &&
        !Array.isArray(value.position) &&
        typeof value.position.x === 'number' &&
        !isNaN(value.position.x) &&
        typeof value.position.y === 'number' &&
        !isNaN(value.position.y) &&
        typeof value.position.z === 'number' &&
        !isNaN(value.position.z) &&
        typeof value.rotate === 'object' &&
        value.rotate !== null &&
        !Array.isArray(value.rotate) &&
        typeof value.rotate.x === 'number' &&
        !isNaN(value.rotate.x) &&
        typeof value.rotate.y === 'number' &&
        !isNaN(value.rotate.y) &&
        typeof value.rotate.z === 'number' &&
        !isNaN(value.rotate.z) &&
        typeof value.pivot === 'object' &&
        value.pivot !== null &&
        !Array.isArray(value.pivot) &&
        typeof value.pivot.x === 'number' &&
        !isNaN(value.pivot.x) &&
        typeof value.pivot.y === 'number' &&
        !isNaN(value.pivot.y) &&
        typeof value.pivot.z === 'number' &&
        !isNaN(value.pivot.z)
      )
    }
    return function check(value) {
      return check_Math_Box3D(value)
    }
  })
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => {
    function check_Math_Matrix4(value) {
      return Array.isArray(value) && value.every((value) => Array.isArray(value) && value.every((value) => typeof value === 'number' && !isNaN(value)))
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
        !Array.isArray(value) &&
        Array.isArray(value.vertices) &&
        value.vertices.every((value) => typeof value === 'number' && !isNaN(value)) &&
        Array.isArray(value.normals) &&
        value.normals.every((value) => typeof value === 'number' && !isNaN(value)) &&
        Array.isArray(value.texoords) &&
        value.texoords.every((value) => typeof value === 'number' && !isNaN(value)) &&
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
      return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && !isNaN(value.x) && typeof value.y === 'number' && !isNaN(value.y) && typeof value.z === 'number' && !isNaN(value.z)
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
        !Array.isArray(value) &&
        typeof value.A === 'number' &&
        !isNaN(value.A) &&
        typeof value.B === 'number' &&
        !isNaN(value.B) &&
        typeof value.C === 'number' &&
        !isNaN(value.C) &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        !Array.isArray(value.G) &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        !isNaN(value.G.I) &&
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
        !Array.isArray(value) &&
        (value.position === undefined
          ? true
          : typeof value.position === 'object' &&
            value.position !== null &&
            !Array.isArray(value.position) &&
            typeof value.position.x === 'number' &&
            !isNaN(value.position.x) &&
            typeof value.position.y === 'number' &&
            !isNaN(value.position.y) &&
            typeof value.position.z === 'number' &&
            !isNaN(value.position.z)) &&
        (value.rotation === undefined
          ? true
          : typeof value.rotation === 'object' &&
            value.rotation !== null &&
            !Array.isArray(value.rotation) &&
            typeof value.rotation.x === 'number' &&
            !isNaN(value.rotation.x) &&
            typeof value.rotation.y === 'number' &&
            !isNaN(value.rotation.y) &&
            typeof value.rotation.z === 'number' &&
            !isNaN(value.rotation.z)) &&
        (value.scale === undefined
          ? true
          : typeof value.scale === 'object' &&
            value.scale !== null &&
            !Array.isArray(value.scale) &&
            typeof value.scale.x === 'number' &&
            !isNaN(value.scale.x) &&
            typeof value.scale.y === 'number' &&
            !isNaN(value.scale.y) &&
            typeof value.scale.z === 'number' &&
            !isNaN(value.scale.z))
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
        !Array.isArray(value) &&
        typeof value.position === 'object' &&
        value.position !== null &&
        !Array.isArray(value.position) &&
        typeof value.position.x === 'number' &&
        !isNaN(value.position.x) &&
        typeof value.position.y === 'number' &&
        !isNaN(value.position.y) &&
        typeof value.position.z === 'number' &&
        !isNaN(value.position.z) &&
        typeof value.rotation === 'object' &&
        value.rotation !== null &&
        !Array.isArray(value.rotation) &&
        typeof value.rotation.x === 'number' &&
        !isNaN(value.rotation.x) &&
        typeof value.rotation.y === 'number' &&
        !isNaN(value.rotation.y) &&
        typeof value.rotation.z === 'number' &&
        !isNaN(value.rotation.z) &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        !Array.isArray(value.scale) &&
        typeof value.scale.x === 'number' &&
        !isNaN(value.scale.x) &&
        typeof value.scale.y === 'number' &&
        !isNaN(value.scale.y) &&
        typeof value.scale.z === 'number' &&
        !isNaN(value.scale.z)
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
        !Array.isArray(value) &&
        Object.getOwnPropertyNames(value).length === 7 &&
        typeof value.A === 'number' &&
        !isNaN(value.A) &&
        typeof value.B === 'number' &&
        !isNaN(value.B) &&
        typeof value.C === 'number' &&
        !isNaN(value.C) &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        !Array.isArray(value.G) &&
        Object.getOwnPropertyNames(value.G).length === 3 &&
        typeof value.G.H === 'string' &&
        typeof value.G.I === 'number' &&
        !isNaN(value.G.I) &&
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
      return typeof value === 'number' && !isNaN(value)
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
      return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.id === 'string' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Object(value))
    }
    return function check(value) {
      return check_Recursive_Object(value)
    }
  })
  Cases.Benchmark(Cases.Recursive_Union, iterations, results, () => {
    function check_Recursive_Union(value) {
      return (
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'Node' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Union(value))) ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'Leaf' && typeof value.value === 'string')
      )
    }
    return function check(value) {
      return check_Recursive_Union(value)
    }
  })
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => {
    function check_Tuple_Number(value) {
      return Array.isArray(value) && value.length === 3 && typeof value[0] === 'number' && !isNaN(value[0]) && typeof value[1] === 'number' && !isNaN(value[1]) && typeof value[2] === 'number' && !isNaN(value[2])
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
        !Array.isArray(value[0]) &&
        typeof value[0].x === 'number' &&
        !isNaN(value[0].x) &&
        typeof value[0].y === 'number' &&
        !isNaN(value[0].y) &&
        typeof value[0].z === 'number' &&
        !isNaN(value[0].z) &&
        typeof value[1] === 'object' &&
        value[1] !== null &&
        !Array.isArray(value[1]) &&
        typeof value[1].x === 'number' &&
        !isNaN(value[1].x) &&
        typeof value[1].y === 'number' &&
        !isNaN(value[1].y) &&
        typeof value[1].z === 'number' &&
        !isNaN(value[1].z) &&
        typeof value[2] === 'object' &&
        value[2] !== null &&
        !Array.isArray(value[2]) &&
        typeof value[2].x === 'number' &&
        !isNaN(value[2].x) &&
        typeof value[2].y === 'number' &&
        !isNaN(value[2].y) &&
        typeof value[2].z === 'number' &&
        !isNaN(value[2].z)
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
