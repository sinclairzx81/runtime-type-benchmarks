// @ts-nocheck
import { Command } from '../../command/index'
import * as Cases from '../../schematics/incorrect'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => {
    function check_Array_Number(value) {
      return Array.isArray(value) && value.every((value) => typeof value === 'number')
    }
    return function check(value) {
      return check_Array_Number(value)
    }
  })
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => {
    function check_Array_Object(value) {
      return Array.isArray(value) && value.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number')
    }
    return function check(value) {
      return check_Array_Object(value)
    }
  })
  Cases.Benchmark(Cases.Array_Recursive, iterations, results, () => {
    function check_Recursive_Object(value) {
      return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.id === 'string' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_Object(value))
    }
    function check_Array_Recursive(value) {
      return Array.isArray(value) && value.every((value) => check_Recursive_Object(value))
    }
    return function check(value) {
      return check_Array_Recursive(value)
    }
  })
  Cases.Benchmark(Cases.Array_Union, iterations, results, () => {
    function check_Array_Union(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'Vector2' && typeof value.x === 'number' && typeof value.y === 'number') ||
            (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'Vector3' && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number') ||
            (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'Vector4' && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number' && typeof value.w === 'number'),
        )
      )
    }
    return function check(value) {
      return check_Array_Union(value)
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
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'A' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'B' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'C' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && value.type === 'D' && typeof value.value === 'number')
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
        typeof value.scale.y === 'number' &&
        typeof value.scale.z === 'number' &&
        typeof value.position === 'object' &&
        value.position !== null &&
        !Array.isArray(value.position) &&
        typeof value.position.x === 'number' &&
        typeof value.position.y === 'number' &&
        typeof value.position.z === 'number' &&
        typeof value.rotate === 'object' &&
        value.rotate !== null &&
        !Array.isArray(value.rotate) &&
        typeof value.rotate.x === 'number' &&
        typeof value.rotate.y === 'number' &&
        typeof value.rotate.z === 'number' &&
        typeof value.pivot === 'object' &&
        value.pivot !== null &&
        !Array.isArray(value.pivot) &&
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
        !Array.isArray(value) &&
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
      return typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number'
    }
    return function check(value) {
      return check_Math_Vector3(value)
    }
  })
  Cases.Benchmark(Cases.Number_Exclusive_Maximum, iterations, results, () => {
    function check_Number_Exclusive_Maximum(value) {
      return typeof value === 'number' && value < 8
    }
    return function check(value) {
      return check_Number_Exclusive_Maximum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Exclusive_Minimum, iterations, results, () => {
    function check_Number_Exclusive_Minimum(value) {
      return typeof value === 'number' && value > 8
    }
    return function check(value) {
      return check_Number_Exclusive_Minimum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Maximum, iterations, results, () => {
    function check_Number_Maximum(value) {
      return typeof value === 'number' && value <= 8
    }
    return function check(value) {
      return check_Number_Maximum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Minimum, iterations, results, () => {
    function check_Number_Minimum(value) {
      return typeof value === 'number' && value >= 8
    }
    return function check(value) {
      return check_Number_Minimum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Multiple_Of, iterations, results, () => {
    function check_Number_Multiple_Of(value) {
      return typeof value === 'number' && value % 8 === 0
    }
    return function check(value) {
      return check_Number_Multiple_Of(value)
    }
  })
  Cases.Benchmark(Cases.Object_Loose, iterations, results, () => {
    function check_Object_Loose(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        typeof value.A === 'number' &&
        typeof value.B === 'number' &&
        typeof value.C === 'number' &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        !Array.isArray(value.G) &&
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
        !Array.isArray(value) &&
        (value.position === undefined
          ? true
          : typeof value.position === 'object' && value.position !== null && !Array.isArray(value.position) && typeof value.position.x === 'number' && typeof value.position.y === 'number' && typeof value.position.z === 'number') &&
        (value.rotation === undefined
          ? true
          : typeof value.rotation === 'object' && value.rotation !== null && !Array.isArray(value.rotation) && typeof value.rotation.x === 'number' && typeof value.rotation.y === 'number' && typeof value.rotation.z === 'number') &&
        (value.scale === undefined
          ? true
          : typeof value.scale === 'object' && value.scale !== null && !Array.isArray(value.scale) && typeof value.scale.x === 'number' && typeof value.scale.y === 'number' && typeof value.scale.z === 'number')
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
        typeof value.position.y === 'number' &&
        typeof value.position.z === 'number' &&
        typeof value.rotation === 'object' &&
        value.rotation !== null &&
        !Array.isArray(value.rotation) &&
        typeof value.rotation.x === 'number' &&
        typeof value.rotation.y === 'number' &&
        typeof value.rotation.z === 'number' &&
        typeof value.scale === 'object' &&
        value.scale !== null &&
        !Array.isArray(value.scale) &&
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
        !Array.isArray(value) &&
        Object.getOwnPropertyNames(value).length === 7 &&
        typeof value.A === 'number' &&
        typeof value.B === 'number' &&
        typeof value.C === 'number' &&
        typeof value.D === 'string' &&
        typeof value.E === 'string' &&
        typeof value.F === 'boolean' &&
        typeof value.G === 'object' &&
        value.G !== null &&
        !Array.isArray(value.G) &&
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
  Cases.Benchmark(Cases.String_MaxLength, iterations, results, () => {
    function check_String_MaxLength(value) {
      return typeof value === 'string' && value.length <= 8
    }
    return function check(value) {
      return check_String_MaxLength(value)
    }
  })
  Cases.Benchmark(Cases.String_MinLength, iterations, results, () => {
    function check_String_MinLength(value) {
      return typeof value === 'string' && value.length >= 8
    }
    return function check(value) {
      return check_String_MinLength(value)
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
        !Array.isArray(value[0]) &&
        typeof value[0].x === 'number' &&
        typeof value[0].y === 'number' &&
        typeof value[0].z === 'number' &&
        typeof value[1] === 'object' &&
        value[1] !== null &&
        !Array.isArray(value[1]) &&
        typeof value[1].x === 'number' &&
        typeof value[1].y === 'number' &&
        typeof value[1].z === 'number' &&
        typeof value[2] === 'object' &&
        value[2] !== null &&
        !Array.isArray(value[2]) &&
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
  Cases.Benchmark(Cases.Typia_Array_Hierarchical, iterations, results, () => {
    function check_Typia_Array_Hierarchical(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value) &&
            typeof value.id === 'number' &&
            typeof value.serial === 'number' &&
            typeof value.name === 'string' &&
            typeof value.established_at === 'object' &&
            value.established_at !== null &&
            !Array.isArray(value.established_at) &&
            typeof value.established_at.time === 'number' &&
            typeof value.established_at.zone === 'number' &&
            Array.isArray(value.departments) &&
            value.departments.every(
              (value) =>
                typeof value === 'object' &&
                value !== null &&
                !Array.isArray(value) &&
                typeof value.id === 'number' &&
                typeof value.code === 'string' &&
                typeof value.sales === 'number' &&
                typeof value.created_at === 'object' &&
                value.created_at !== null &&
                !Array.isArray(value.created_at) &&
                typeof value.created_at.time === 'number' &&
                typeof value.created_at.zone === 'number' &&
                Array.isArray(value.employees) &&
                value.employees.every(
                  (value) =>
                    typeof value === 'object' &&
                    value !== null &&
                    !Array.isArray(value) &&
                    typeof value.id === 'number' &&
                    typeof value.name === 'string' &&
                    typeof value.age === 'number' &&
                    typeof value.grade === 'number' &&
                    typeof value.employeed_at === 'object' &&
                    value.employeed_at !== null &&
                    !Array.isArray(value.employeed_at) &&
                    typeof value.employeed_at.time === 'number' &&
                    typeof value.employeed_at.zone === 'number',
                ),
            ),
        )
      )
    }
    return function check(value) {
      return check_Typia_Array_Hierarchical(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Recursive, iterations, results, () => {
    function check_Typia_Array_Recursive(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        Array.isArray(value.children) &&
        value.children.every((value) => check_Typia_Array_Recursive(value)) &&
        typeof value.id === 'number' &&
        typeof value.code === 'string' &&
        typeof value.sequence === 'number' &&
        typeof value.created_at === 'object' &&
        value.created_at !== null &&
        !Array.isArray(value.created_at) &&
        typeof value.created_at.time === 'number' &&
        typeof value.created_at.zone === 'number'
      )
    }
    return function check(value) {
      return check_Typia_Array_Recursive(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Explicit, iterations, results, () => {
    function check_T0(value) {
      return (
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.width === 'number' &&
          typeof value.height === 'number' &&
          typeof value.url === 'string' &&
          typeof value.size === 'number' &&
          value.type === 'file' &&
          value.extension === 'jpg') ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.size === 'number' &&
          typeof value.content === 'string' &&
          value.type === 'file' &&
          value.extension === 'txt') ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.size === 'number' &&
          typeof value.count === 'number' &&
          value.type === 'file' &&
          value.extension === 'zip') ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          check_T0(value.target) &&
          value.type === 'file' &&
          value.extension === 'lnk') ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          Array.isArray(value.children) &&
          value.children.every((value) => check_T0(value)) &&
          value.type === 'directory')
      )
    }
    function check_Typia_Array_Recursive_Union_Explicit(value) {
      return Array.isArray(value) && value.every((value) => check_T0(value))
    }
    return function check(value) {
      return check_Typia_Array_Recursive_Union_Explicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Implicit, iterations, results, () => {
    function check_T1(value) {
      return (
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.width === 'number' &&
          typeof value.height === 'number' &&
          typeof value.url === 'string' &&
          typeof value.size === 'number') ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.size === 'number' &&
          typeof value.content === 'string') ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.size === 'number' &&
          typeof value.count === 'number') ||
        (typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.id === 'number' && typeof value.name === 'string' && typeof value.path === 'string' && check_T1(value.target)) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          Array.isArray(value.children) &&
          value.children.every((value) => check_T1(value))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          Array.isArray(value.children) &&
          value.children.every((value) => check_T1(value)) &&
          (value.access === 'read' || value.access === 'write'))
      )
    }
    function check_Typia_Array_Recursive_Union_Implicit(value) {
      return Array.isArray(value) && value.every((value) => check_T1(value))
    }
    return function check(value) {
      return check_Typia_Array_Recursive_Union_Implicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Simple, iterations, results, () => {
    function check_Typia_Array_Simple(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value) &&
            typeof value.name === 'string' &&
            typeof value.email === 'string' &&
            ((Array.isArray(value.hobbies) && value.hobbies.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.name === 'string' && typeof value.rank === 'number')) ||
              (Array.isArray(value.hobbies) && value.hobbies.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.body === 'string')) ||
              (Array.isArray(value.hobbies) && value.hobbies.every((value) => typeof value === 'string'))),
        )
      )
    }
    return function check(value) {
      return check_Typia_Array_Simple(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Hierarchical, iterations, results, () => {
    function check_Typia_Object_Hierarchical(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        typeof value.id === 'number' &&
        typeof value.channel === 'object' &&
        value.channel !== null &&
        !Array.isArray(value.channel) &&
        typeof value.channel.id === 'number' &&
        typeof value.channel.code === 'string' &&
        typeof value.channel.name === 'string' &&
        typeof value.channel.sequence === 'number' &&
        typeof value.channel.exclusive === 'boolean' &&
        typeof value.channel.priority === 'number' &&
        typeof value.channel.created_at === 'object' &&
        value.channel.created_at !== null &&
        !Array.isArray(value.channel.created_at) &&
        typeof value.channel.created_at.time === 'number' &&
        typeof value.channel.created_at.zone === 'number' &&
        (value.member === null ||
          (typeof value.member === 'object' &&
            value.member !== null &&
            !Array.isArray(value.member) &&
            typeof value.member.id === 'number' &&
            typeof value.member.account === 'object' &&
            value.member.account !== null &&
            !Array.isArray(value.member.account) &&
            typeof value.member.account.id === 'number' &&
            typeof value.member.account.code === 'string' &&
            typeof value.member.account.created_at === 'object' &&
            value.member.account.created_at !== null &&
            !Array.isArray(value.member.account.created_at) &&
            typeof value.member.account.created_at.time === 'number' &&
            typeof value.member.account.created_at.zone === 'number' &&
            (value.member.enterprise === null ||
              (typeof value.member.enterprise === 'object' &&
                value.member.enterprise !== null &&
                !Array.isArray(value.member.enterprise) &&
                typeof value.member.enterprise.id === 'number' &&
                typeof value.member.enterprise.account === 'object' &&
                value.member.enterprise.account !== null &&
                !Array.isArray(value.member.enterprise.account) &&
                typeof value.member.enterprise.account.id === 'number' &&
                typeof value.member.enterprise.account.code === 'string' &&
                typeof value.member.enterprise.account.created_at === 'object' &&
                value.member.enterprise.account.created_at !== null &&
                !Array.isArray(value.member.enterprise.account.created_at) &&
                typeof value.member.enterprise.account.created_at.time === 'number' &&
                typeof value.member.enterprise.account.created_at.zone === 'number' &&
                typeof value.member.enterprise.name === 'string' &&
                typeof value.member.enterprise.grade === 'number' &&
                typeof value.member.enterprise.created_at === 'object' &&
                value.member.enterprise.created_at !== null &&
                !Array.isArray(value.member.enterprise.created_at) &&
                typeof value.member.enterprise.created_at.time === 'number' &&
                typeof value.member.enterprise.created_at.zone === 'number')) &&
            Array.isArray(value.member.emails) &&
            value.member.emails.every((value) => typeof value === 'string') &&
            typeof value.member.created_at === 'object' &&
            value.member.created_at !== null &&
            !Array.isArray(value.member.created_at) &&
            typeof value.member.created_at.time === 'number' &&
            typeof value.member.created_at.zone === 'number' &&
            typeof value.member.authorized === 'boolean')) &&
        (value.account === null ||
          (typeof value.account === 'object' &&
            value.account !== null &&
            !Array.isArray(value.account) &&
            typeof value.account.id === 'number' &&
            typeof value.account.code === 'string' &&
            typeof value.account.created_at === 'object' &&
            value.account.created_at !== null &&
            !Array.isArray(value.account.created_at) &&
            typeof value.account.created_at.time === 'number' &&
            typeof value.account.created_at.zone === 'number')) &&
        typeof value.href === 'string' &&
        typeof value.referrer === 'string' &&
        Array.isArray(value.ip) &&
        value.ip.length === 4 &&
        typeof value.ip[0] === 'number' &&
        typeof value.ip[1] === 'number' &&
        typeof value.ip[2] === 'number' &&
        typeof value.ip[3] === 'number' &&
        typeof value.created_at === 'object' &&
        value.created_at !== null &&
        !Array.isArray(value.created_at) &&
        typeof value.created_at.time === 'number' &&
        typeof value.created_at.zone === 'number'
      )
    }
    return function check(value) {
      return check_Typia_Object_Hierarchical(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Recursive, iterations, results, () => {
    function check_Typia_Object_Recursive(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        !Array.isArray(value) &&
        (check_Typia_Object_Recursive(value.parent) || value.parent === null) &&
        typeof value.id === 'number' &&
        typeof value.code === 'string' &&
        typeof value.name === 'string' &&
        typeof value.sequence === 'number' &&
        typeof value.created_at === 'object' &&
        value.created_at !== null &&
        !Array.isArray(value.created_at) &&
        typeof value.created_at.time === 'number' &&
        typeof value.created_at.zone === 'number'
      )
    }
    return function check(value) {
      return check_Typia_Object_Recursive(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Union_Explicit, iterations, results, () => {
    function check_Typia_Object_Union_Explicit(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            (typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && typeof value.y === 'number' && value.type === 'point') ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              !Array.isArray(value.p1) &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              !Array.isArray(value.p2) &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              value.type === 'line') ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              !Array.isArray(value.p1) &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              !Array.isArray(value.p2) &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              !Array.isArray(value.p3) &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              value.type === 'triangle') ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              !Array.isArray(value.p1) &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              !Array.isArray(value.p2) &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              !Array.isArray(value.p3) &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              typeof value.p4 === 'object' &&
              value.p4 !== null &&
              !Array.isArray(value.p4) &&
              typeof value.p4.x === 'number' &&
              typeof value.p4.y === 'number' &&
              value.type === 'rectangle') ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              Array.isArray(value.points) &&
              value.points.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && typeof value.y === 'number') &&
              value.type === 'polyline') ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.outer === 'object' &&
              value.outer !== null &&
              !Array.isArray(value.outer) &&
              Array.isArray(value.outer.points) &&
              value.outer.points.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && typeof value.y === 'number') &&
              Array.isArray(value.inner) &&
              value.inner.every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  Array.isArray(value.points) &&
                  value.points.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.x === 'number' && typeof value.y === 'number'),
              ) &&
              value.type === 'polygon') ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.centroid === 'object' &&
              value.centroid !== null &&
              !Array.isArray(value.centroid) &&
              typeof value.centroid.x === 'number' &&
              typeof value.centroid.y === 'number' &&
              typeof value.radius === 'number' &&
              value.type === 'circle'),
        )
      )
    }
    return function check(value) {
      return check_Typia_Object_Union_Explicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Union_Implicit, iterations, results, () => {
    function check_Typia_Object_Union_Implicit(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.x === 'number' &&
              typeof value.y === 'number' &&
              (value.slope === undefined ? true : value.slope === null || typeof value.slope === 'number')) ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              !Array.isArray(value.p1) &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              (value.p1.slope === undefined ? true : value.p1.slope === null || typeof value.p1.slope === 'number') &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              !Array.isArray(value.p2) &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              (value.p2.slope === undefined ? true : value.p2.slope === null || typeof value.p2.slope === 'number') &&
              (value.distance === undefined ? true : value.distance === null || typeof value.distance === 'number')) ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              !Array.isArray(value.p1) &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              (value.p1.slope === undefined ? true : value.p1.slope === null || typeof value.p1.slope === 'number') &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              !Array.isArray(value.p2) &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              (value.p2.slope === undefined ? true : value.p2.slope === null || typeof value.p2.slope === 'number') &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              !Array.isArray(value.p3) &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              (value.p3.slope === undefined ? true : value.p3.slope === null || typeof value.p3.slope === 'number') &&
              (value.width === undefined ? true : value.width === null || typeof value.width === 'number') &&
              (value.height === undefined ? true : value.height === null || typeof value.height === 'number') &&
              (value.area === undefined ? true : value.area === null || typeof value.area === 'number')) ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              !Array.isArray(value.p1) &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              (value.p1.slope === undefined ? true : value.p1.slope === null || typeof value.p1.slope === 'number') &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              !Array.isArray(value.p2) &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              (value.p2.slope === undefined ? true : value.p2.slope === null || typeof value.p2.slope === 'number') &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              !Array.isArray(value.p3) &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              (value.p3.slope === undefined ? true : value.p3.slope === null || typeof value.p3.slope === 'number') &&
              typeof value.p4 === 'object' &&
              value.p4 !== null &&
              !Array.isArray(value.p4) &&
              typeof value.p4.x === 'number' &&
              typeof value.p4.y === 'number' &&
              (value.p4.slope === undefined ? true : value.p4.slope === null || typeof value.p4.slope === 'number') &&
              (value.width === undefined ? true : value.width === null || typeof value.width === 'number') &&
              (value.height === undefined ? true : value.height === null || typeof value.height === 'number') &&
              (value.area === undefined ? true : value.area === null || typeof value.area === 'number')) ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              Array.isArray(value.points) &&
              value.points.every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.x === 'number' &&
                  typeof value.y === 'number' &&
                  (value.slope === undefined ? true : value.slope === null || typeof value.slope === 'number'),
              ) &&
              (value.length === undefined ? true : value.length === null || typeof value.length === 'number')) ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              typeof value.outer === 'object' &&
              value.outer !== null &&
              !Array.isArray(value.outer) &&
              Array.isArray(value.outer.points) &&
              value.outer.points.every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.x === 'number' &&
                  typeof value.y === 'number' &&
                  (value.slope === undefined ? true : value.slope === null || typeof value.slope === 'number'),
              ) &&
              (value.outer.length === undefined ? true : value.outer.length === null || typeof value.outer.length === 'number') &&
              (value.inner === undefined
                ? true
                : Array.isArray(value.inner) &&
                  value.inner.every(
                    (value) =>
                      typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      Array.isArray(value.points) &&
                      value.points.every(
                        (value) =>
                          typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          typeof value.x === 'number' &&
                          typeof value.y === 'number' &&
                          (value.slope === undefined ? true : value.slope === null || typeof value.slope === 'number'),
                      ) &&
                      (value.length === undefined ? true : value.length === null || typeof value.length === 'number'),
                  )) &&
              (value.area === undefined ? true : value.area === null || typeof value.area === 'number')) ||
            (typeof value === 'object' &&
              value !== null &&
              !Array.isArray(value) &&
              (value.centroid === undefined
                ? true
                : typeof value.centroid === 'object' &&
                  value.centroid !== null &&
                  !Array.isArray(value.centroid) &&
                  typeof value.centroid.x === 'number' &&
                  typeof value.centroid.y === 'number' &&
                  (value.centroid.slope === undefined ? true : value.centroid.slope === null || typeof value.centroid.slope === 'number')) &&
              typeof value.radius === 'number' &&
              (value.area === undefined ? true : value.area === null || typeof value.area === 'number')),
        )
      )
    }
    return function check(value) {
      return check_Typia_Object_Union_Implicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Ultimate_Union, iterations, results, () => {
    function check_T2(value) {
      return (
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'boolean' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'boolean') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'integer' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'number') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'bigint' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'number') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'number' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'number') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'string' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'string') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'boolean' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'boolean') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              )) &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'boolean')) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'integer' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'number') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              )) &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'number')) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'bigint' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'number') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              )) &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'number')) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'number' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'number') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              )) &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'number')) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'string' &&
          typeof value.nullable === 'boolean' &&
          (value.default === undefined ? true : typeof value.default === 'string') &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              )) &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'string')) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'array' &&
          check_T2(value.items) &&
          typeof value.nullable === 'boolean' &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'array' &&
          Array.isArray(value.items) &&
          value.items.every((value) => check_T2(value)) &&
          typeof value.nullable === 'boolean' &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.$ref === 'string' &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          typeof value.$recursiveRef === 'string' &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          Array.isArray(value.oneOf) &&
          value.oneOf.every((value) => check_T2(value)) &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              ))) ||
        (typeof value === 'object' &&
          value !== null &&
          !Array.isArray(value) &&
          value.type === 'null' &&
          (value.description === undefined ? true : typeof value.description === 'string') &&
          (value['x-tson-metaTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
          (value['x-tson-jsDocTags'] === undefined
            ? true
            : Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value) &&
                  typeof value.name === 'string' &&
                  (value.text === undefined
                    ? true
                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
              )))
      )
    }
    const local_1 = new RegExp(/^.*$/)
    const local_2 = new RegExp(/^.*$/)
    const local_3 = new RegExp(/^.*$/)
    function check_Typia_Ultimate_Union(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            typeof value === 'object' &&
            value !== null &&
            !Array.isArray(value) &&
            Array.isArray(value.schemas) &&
            value.schemas.every((value) => check_T2(value)) &&
            typeof value.components === 'object' &&
            value.components !== null &&
            !Array.isArray(value.components) &&
            typeof value.components.schemas === 'object' &&
            value.components.schemas !== null &&
            !(value.components.schemas instanceof Date) &&
            !Array.isArray(value.components.schemas) &&
            Object.getOwnPropertyNames(value.components.schemas).every((key) => local_1.test(key)) &&
            Object.values(value.components.schemas).every(
              (value) =>
                typeof value === 'object' &&
                value !== null &&
                !Array.isArray(value) &&
                (value.$id === undefined ? true : typeof value.$id === 'string') &&
                value.type === 'object' &&
                typeof value.nullable === 'boolean' &&
                typeof value.properties === 'object' &&
                value.properties !== null &&
                !(value.properties instanceof Date) &&
                !Array.isArray(value.properties) &&
                Object.getOwnPropertyNames(value.properties).every((key) => local_2.test(key)) &&
                Object.values(value.properties).every(
                  (value) =>
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'boolean' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'boolean') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'integer' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'number') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'bigint' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'number') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'number' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'number') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'string' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'string') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'boolean' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'boolean') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'boolean')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'integer' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'number') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'number')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'bigint' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'number') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'number')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'number' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'number') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'number')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'string' &&
                      typeof value.nullable === 'boolean' &&
                      (value.default === undefined ? true : typeof value.default === 'string') &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'string')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'array' &&
                      check_T2(value.items) &&
                      typeof value.nullable === 'boolean' &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'array' &&
                      Array.isArray(value.items) &&
                      value.items.every((value) => check_T2(value)) &&
                      typeof value.nullable === 'boolean' &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      typeof value.$ref === 'string' &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      typeof value.$recursiveRef === 'string' &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      Array.isArray(value.oneOf) &&
                      value.oneOf.every((value) => check_T2(value)) &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      !Array.isArray(value) &&
                      value.type === 'null' &&
                      (value.description === undefined ? true : typeof value.description === 'string') &&
                      (value['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))),
                ) &&
                (value.patternProperties === undefined
                  ? true
                  : typeof value.patternProperties === 'object' &&
                    value.patternProperties !== null &&
                    !(value.patternProperties instanceof Date) &&
                    !Array.isArray(value.patternProperties) &&
                    Object.getOwnPropertyNames(value.patternProperties).every((key) => local_3.test(key)) &&
                    Object.values(value.patternProperties).every(
                      (value) =>
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'boolean' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'boolean') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'integer' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'number') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'bigint' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'number') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'number' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'number') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'string' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'string') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'boolean' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'boolean') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              )) &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'boolean')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'integer' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'number') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              )) &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'number')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'bigint' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'number') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              )) &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'number')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'number' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'number') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              )) &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'number')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'string' &&
                          typeof value.nullable === 'boolean' &&
                          (value.default === undefined ? true : typeof value.default === 'string') &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              )) &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'string')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'array' &&
                          check_T2(value.items) &&
                          typeof value.nullable === 'boolean' &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'array' &&
                          Array.isArray(value.items) &&
                          value.items.every((value) => check_T2(value)) &&
                          typeof value.nullable === 'boolean' &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          typeof value.$ref === 'string' &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          typeof value.$recursiveRef === 'string' &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          Array.isArray(value.oneOf) &&
                          value.oneOf.every((value) => check_T2(value)) &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value) &&
                          value.type === 'null' &&
                          (value.description === undefined ? true : typeof value.description === 'string') &&
                          (value['x-tson-metaTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                          (value['x-tson-jsDocTags'] === undefined
                            ? true
                            : Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  !Array.isArray(value) &&
                                  typeof value.name === 'string' &&
                                  (value.text === undefined
                                    ? true
                                    : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                              ))),
                    )) &&
                (value.additionalProperties === undefined
                  ? true
                  : (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'boolean' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'boolean') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'integer' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'number') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'bigint' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'number') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'number' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'number') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'string' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'string') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'boolean' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'boolean') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'boolean')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'integer' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'number') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'number')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'bigint' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'number') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'number')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'number' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'number') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'number')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'string' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.default === undefined ? true : typeof value.additionalProperties.default === 'string') &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )) &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'string')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'array' &&
                      check_T2(value.additionalProperties.items) &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'array' &&
                      Array.isArray(value.additionalProperties.items) &&
                      value.additionalProperties.items.every((value) => check_T2(value)) &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      typeof value.additionalProperties.$ref === 'string' &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      typeof value.additionalProperties.$recursiveRef === 'string' &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      Array.isArray(value.additionalProperties.oneOf) &&
                      value.additionalProperties.oneOf.every((value) => check_T2(value)) &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          ))) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      !Array.isArray(value.additionalProperties) &&
                      value.additionalProperties.type === 'null' &&
                      (value.additionalProperties.description === undefined ? true : typeof value.additionalProperties.description === 'string') &&
                      (value.additionalProperties['x-tson-metaTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-metaTags']) &&
                          value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.kind === 'string')) &&
                      (value.additionalProperties['x-tson-jsDocTags'] === undefined
                        ? true
                        : Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              !Array.isArray(value) &&
                              typeof value.name === 'string' &&
                              (value.text === undefined
                                ? true
                                : Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && !Array.isArray(value) && typeof value.text === 'string' && typeof value.kind === 'string')),
                          )))) &&
                (value.required === undefined ? true : Array.isArray(value.required) && value.required.every((value) => typeof value === 'string')) &&
                (value.description === undefined ? true : typeof value.description === 'string') &&
                (value['x-tson_jsDocTags'] === undefined ? true : Array.isArray(value['x-tson_jsDocTags']) && value['x-tson_jsDocTags'].every((value) => true)) &&
                (value.$recursiveAnchor === undefined ? true : typeof value.$recursiveAnchor === 'boolean'),
            ) &&
            (value.purpose === 'swagger' || value.purpose === 'ajv') &&
            typeof value.prefix === 'string',
        )
      )
    }
    return function check(value) {
      return check_Typia_Ultimate_Union(value)
    }
  })
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
