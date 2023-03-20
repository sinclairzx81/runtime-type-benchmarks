// @ts-nocheck
import { Command } from '../../command/index'
import * as Cases from '../../schematics/correct'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => {
    function check_Array_95_Number(value) {
      return Array.isArray(value) && value.every((value) => typeof value === 'number')
    }
    return function check(value) {
      return check_Array_95_Number(value)
    }
  })
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => {
    function check_Array_95_Object(value) {
      return Array.isArray(value) && value.every((value) => typeof value === 'object' && value !== null && typeof value.x === 'boolean' && typeof value.y === 'boolean' && typeof value.z === 'boolean')
    }
    return function check(value) {
      return check_Array_95_Object(value)
    }
  })
  Cases.Benchmark(Cases.Array_Recursive, iterations, results, () => {
    function check_T0(value) {
      return typeof value === 'object' && value !== null && typeof value.id === 'string' && Array.isArray(value.nodes) && value.nodes.every((value) => check_T0(value))
    }
    function check_Array_95_Recursive(value) {
      return Array.isArray(value) && value.every((value) => check_T0(value))
    }
    return function check(value) {
      return check_Array_95_Recursive(value)
    }
  })
  Cases.Benchmark(Cases.Array_Union, iterations, results, () => {
    function check_Array_95_Union(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            (typeof value === 'object' && value !== null && value.type === 'BitVector2' && typeof value.x === 'boolean' && typeof value.y === 'boolean') ||
            (typeof value === 'object' && value !== null && value.type === 'BitVector3' && typeof value.x === 'boolean' && typeof value.y === 'boolean' && typeof value.z === 'boolean') ||
            (typeof value === 'object' && value !== null && value.type === 'BitVector4' && typeof value.x === 'boolean' && typeof value.y === 'boolean' && typeof value.z === 'boolean' && typeof value.w === 'boolean'),
        )
      )
    }
    return function check(value) {
      return check_Array_95_Union(value)
    }
  })
  Cases.Benchmark(Cases.Boolean_Boolean, iterations, results, () => {
    function check_Boolean_95_Boolean(value) {
      return typeof value === 'boolean'
    }
    return function check(value) {
      return check_Boolean_95_Boolean(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => {
    function check_Composite_95_Intersect(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        value.A === 'A' &&
        value.B === 'B' &&
        typeof value === 'object' &&
        value !== null &&
        value.C === 'C' &&
        value.D === 'D' &&
        typeof value === 'object' &&
        value !== null &&
        value.E === 'E' &&
        value.F === 'F' &&
        typeof value === 'object' &&
        value !== null &&
        value.G === 'G' &&
        value.H === 'H'
      )
    }
    return function check(value) {
      return check_Composite_95_Intersect(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, () => {
    function check_Composite_95_Union_95_Discriminated(value) {
      return (
        (typeof value === 'object' && value !== null && value.type === 'A' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'B' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'C' && typeof value.value === 'number') ||
        (typeof value === 'object' && value !== null && value.type === 'D' && typeof value.value === 'number')
      )
    }
    return function check(value) {
      return check_Composite_95_Union_95_Discriminated(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Non_Discriminated, iterations, results, () => {
    function check_Composite_95_Union_95_Non_95_Discriminated(value) {
      return (typeof value === 'object' && value !== null && typeof value.A === 'string' && typeof value.B === 'string') || (typeof value === 'object' && value !== null && typeof value.C === 'string' && typeof value.D === 'string')
    }
    return function check(value) {
      return check_Composite_95_Union_95_Non_95_Discriminated(value)
    }
  })
  Cases.Benchmark(Cases.Composite_Union_String_Literal, iterations, results, () => {
    function check_Composite_95_Union_95_String_95_Literal(value) {
      return value === 'A' || value === 'B' || value === 'C' || value === 'D'
    }
    return function check(value) {
      return check_Composite_95_Union_95_String_95_Literal(value)
    }
  })
  Cases.Benchmark(Cases.Literal_Boolean, iterations, results, () => {
    function check_Literal_95_Boolean(value) {
      return value === true
    }
    return function check(value) {
      return check_Literal_95_Boolean(value)
    }
  })
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => {
    function check_Literal_95_Number(value) {
      return value === 42
    }
    return function check(value) {
      return check_Literal_95_Number(value)
    }
  })
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => {
    function check_Literal_95_String(value) {
      return value === 'hello'
    }
    return function check(value) {
      return check_Literal_95_String(value)
    }
  })
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => {
    function check_Math_95_Matrix4(value) {
      return Array.isArray(value) && value.every((value) => Array.isArray(value) && value.every((value) => typeof value === 'number'))
    }
    return function check(value) {
      return check_Math_95_Matrix4(value)
    }
  })
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => {
    function check_Math_95_Mesh(value) {
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
        value.indices.every((value) => typeof value === 'number')
      )
    }
    return function check(value) {
      return check_Math_95_Mesh(value)
    }
  })
  Cases.Benchmark(Cases.Math_Transform3D, iterations, results, () => {
    function check_Math_95_Transform3D(value) {
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
      return check_Math_95_Transform3D(value)
    }
  })
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => {
    function check_Math_95_Vector3(value) {
      return typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && typeof value.z === 'number'
    }
    return function check(value) {
      return check_Math_95_Vector3(value)
    }
  })
  Cases.Benchmark(Cases.Null_Null, iterations, results, () => {
    function check_Null_95_Null(value) {
      return value === null
    }
    return function check(value) {
      return check_Null_95_Null(value)
    }
  })
  Cases.Benchmark(Cases.Number_Exclusive_Maximum, iterations, results, () => {
    function check_Number_95_Exclusive_95_Maximum(value) {
      return typeof value === 'number' && value < 8
    }
    return function check(value) {
      return check_Number_95_Exclusive_95_Maximum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Exclusive_Minimum, iterations, results, () => {
    function check_Number_95_Exclusive_95_Minimum(value) {
      return typeof value === 'number' && value > 8
    }
    return function check(value) {
      return check_Number_95_Exclusive_95_Minimum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Integer, iterations, results, () => {
    function check_Number_95_Integer(value) {
      return typeof value === 'number' && Number.isInteger(value)
    }
    return function check(value) {
      return check_Number_95_Integer(value)
    }
  })
  Cases.Benchmark(Cases.Number_Maximum, iterations, results, () => {
    function check_Number_95_Maximum(value) {
      return typeof value === 'number' && value <= 8
    }
    return function check(value) {
      return check_Number_95_Maximum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Minimum, iterations, results, () => {
    function check_Number_95_Minimum(value) {
      return typeof value === 'number' && value >= 8
    }
    return function check(value) {
      return check_Number_95_Minimum(value)
    }
  })
  Cases.Benchmark(Cases.Number_Multiple_Of, iterations, results, () => {
    function check_Number_95_Multiple_95_Of(value) {
      return typeof value === 'number' && value % 8 === 0
    }
    return function check(value) {
      return check_Number_95_Multiple_95_Of(value)
    }
  })
  Cases.Benchmark(Cases.Number_Number, iterations, results, () => {
    function check_Number_95_Number(value) {
      return typeof value === 'number'
    }
    return function check(value) {
      return check_Number_95_Number(value)
    }
  })
  Cases.Benchmark(Cases.Object_Additional_Properties_Boolean, iterations, results, () => {
    function check_Object_95_Additional_95_Properties_95_Boolean(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.A === 'string' &&
        typeof value.B === 'string' &&
        typeof value.C === 'string' &&
        typeof value.D === 'string' &&
        Object.getOwnPropertyNames(value).every((key) => ['A', 'B', 'C', 'D'].includes(key) || typeof value[key] === 'boolean')
      )
    }
    return function check(value) {
      return check_Object_95_Additional_95_Properties_95_Boolean(value)
    }
  })
  Cases.Benchmark(Cases.Object_Additional_Properties_False, iterations, results, () => {
    function check_Object_95_Additional_95_Properties_95_False(value) {
      return typeof value === 'object' && value !== null && typeof value.A === 'string' && typeof value.B === 'string' && typeof value.C === 'string' && typeof value.D === 'string' && Object.getOwnPropertyNames(value).length === 4
    }
    return function check(value) {
      return check_Object_95_Additional_95_Properties_95_False(value)
    }
  })
  Cases.Benchmark(Cases.Object_Additional_Properties_True, iterations, results, () => {
    function check_Object_95_Additional_95_Properties_95_True(value) {
      return typeof value === 'object' && value !== null && typeof value.A === 'string' && typeof value.B === 'string' && typeof value.C === 'string' && typeof value.D === 'string'
    }
    return function check(value) {
      return check_Object_95_Additional_95_Properties_95_True(value)
    }
  })
  Cases.Benchmark(Cases.Object_Object, iterations, results, () => {
    function check_Object_95_Object(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.A === 'object' &&
        value.A !== null &&
        typeof value.A.A === 'string' &&
        typeof value.A.B === 'string' &&
        typeof value.A.C === 'string' &&
        typeof value.B === 'object' &&
        value.B !== null &&
        typeof value.B.A === 'string' &&
        typeof value.B.B === 'string' &&
        typeof value.B.C === 'string' &&
        typeof value.C === 'object' &&
        value.C !== null &&
        typeof value.C.A === 'string' &&
        typeof value.C.B === 'string' &&
        typeof value.C.C === 'string'
      )
    }
    return function check(value) {
      return check_Object_95_Object(value)
    }
  })
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => {
    function check_Object_95_Partial(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        ('A' in value
          ? typeof value.A === 'object' && value.A !== null && ('A' in value.A ? typeof value.A.A === 'string' : true) && ('B' in value.A ? typeof value.A.B === 'string' : true) && ('C' in value.A ? typeof value.A.C === 'string' : true)
          : true) &&
        ('B' in value
          ? typeof value.B === 'object' && value.B !== null && ('A' in value.B ? typeof value.B.A === 'string' : true) && ('B' in value.B ? typeof value.B.B === 'string' : true) && ('C' in value.B ? typeof value.B.C === 'string' : true)
          : true) &&
        ('C' in value
          ? typeof value.C === 'object' && value.C !== null && ('A' in value.C ? typeof value.C.A === 'string' : true) && ('B' in value.C ? typeof value.C.B === 'string' : true) && ('C' in value.C ? typeof value.C.C === 'string' : true)
          : true)
      )
    }
    return function check(value) {
      return check_Object_95_Partial(value)
    }
  })
  Cases.Benchmark(Cases.Recursive_Node, iterations, results, () => {
    function check_Recursive_95_Node(value) {
      return typeof value === 'object' && value !== null && typeof value.id === 'string' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_95_Node(value))
    }
    return function check(value) {
      return check_Recursive_95_Node(value)
    }
  })
  Cases.Benchmark(Cases.Recursive_Union_Node, iterations, results, () => {
    function check_Recursive_95_Union_95_Node(value) {
      return (
        (typeof value === 'object' && value !== null && value.type === 'Node' && Array.isArray(value.nodes) && value.nodes.every((value) => check_Recursive_95_Union_95_Node(value))) ||
        (typeof value === 'object' && value !== null && value.type === 'Leaf' && typeof value.value === 'string')
      )
    }
    return function check(value) {
      return check_Recursive_95_Union_95_Node(value)
    }
  })
  Cases.Benchmark(Cases.String_MaxLength, iterations, results, () => {
    function check_String_95_MaxLength(value) {
      return typeof value === 'string' && value.length <= 8
    }
    return function check(value) {
      return check_String_95_MaxLength(value)
    }
  })
  Cases.Benchmark(Cases.String_MinLength, iterations, results, () => {
    function check_String_95_MinLength(value) {
      return typeof value === 'string' && value.length >= 8
    }
    return function check(value) {
      return check_String_95_MinLength(value)
    }
  })
  Cases.Benchmark(Cases.String_Pattern, iterations, results, () => {
    const local_0 = /12343567890/
    function check_String_95_Pattern(value) {
      return typeof value === 'string' && local_0.test(value)
    }
    return function check(value) {
      return check_String_95_Pattern(value)
    }
  })
  Cases.Benchmark(Cases.String_String, iterations, results, () => {
    function check_String_95_String(value) {
      return typeof value === 'string'
    }
    return function check(value) {
      return check_String_95_String(value)
    }
  })
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => {
    function check_Tuple_95_Number(value) {
      return Array.isArray(value) && value.length === 3 && typeof value[0] === 'number' && typeof value[1] === 'number' && typeof value[2] === 'number'
    }
    return function check(value) {
      return check_Tuple_95_Number(value)
    }
  })
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => {
    function check_Tuple_95_Object(value) {
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
      return check_Tuple_95_Object(value)
    }
  })
  Cases.Benchmark(Cases.Tuple_Union_String_Literal, iterations, results, () => {
    function check_Tuple_95_Union_95_String_95_Literal(value) {
      return Array.isArray(value) && value.length === 3 && (value[0] === 'A' || value[0] === 'B') && (value[1] === 'C' || value[1] === 'D') && (value[2] === 'E' || value[2] === 'F')
    }
    return function check(value) {
      return check_Tuple_95_Union_95_String_95_Literal(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Hierarchical, iterations, results, () => {
    function check_Typia_95_Array_95_Hierarchical(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            typeof value === 'object' &&
            value !== null &&
            typeof value.id === 'number' &&
            typeof value.serial === 'number' &&
            typeof value.name === 'string' &&
            typeof value.established_at === 'object' &&
            value.established_at !== null &&
            typeof value.established_at.time === 'number' &&
            typeof value.established_at.zone === 'number' &&
            Array.isArray(value.departments) &&
            value.departments.every(
              (value) =>
                typeof value === 'object' &&
                value !== null &&
                typeof value.id === 'number' &&
                typeof value.code === 'string' &&
                typeof value.sales === 'number' &&
                typeof value.created_at === 'object' &&
                value.created_at !== null &&
                typeof value.created_at.time === 'number' &&
                typeof value.created_at.zone === 'number' &&
                Array.isArray(value.employees) &&
                value.employees.every(
                  (value) =>
                    typeof value === 'object' &&
                    value !== null &&
                    typeof value.id === 'number' &&
                    typeof value.name === 'string' &&
                    typeof value.age === 'number' &&
                    typeof value.grade === 'number' &&
                    typeof value.employeed_at === 'object' &&
                    value.employeed_at !== null &&
                    typeof value.employeed_at.time === 'number' &&
                    typeof value.employeed_at.zone === 'number',
                ),
            ),
        )
      )
    }
    return function check(value) {
      return check_Typia_95_Array_95_Hierarchical(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Recursive, iterations, results, () => {
    function check_Typia_95_Array_95_Recursive(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        Array.isArray(value.children) &&
        value.children.every((value) => check_Typia_95_Array_95_Recursive(value)) &&
        typeof value.id === 'number' &&
        typeof value.code === 'string' &&
        typeof value.sequence === 'number' &&
        typeof value.created_at === 'object' &&
        value.created_at !== null &&
        typeof value.created_at.time === 'number' &&
        typeof value.created_at.zone === 'number'
      )
    }
    return function check(value) {
      return check_Typia_95_Array_95_Recursive(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Explicit, iterations, results, () => {
    function check_T1(value) {
      return (
        (typeof value === 'object' &&
          value !== null &&
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
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.size === 'number' &&
          typeof value.content === 'string' &&
          value.type === 'file' &&
          value.extension === 'txt') ||
        (typeof value === 'object' &&
          value !== null &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.size === 'number' &&
          typeof value.count === 'number' &&
          value.type === 'file' &&
          value.extension === 'zip') ||
        (typeof value === 'object' && value !== null && typeof value.id === 'number' && typeof value.name === 'string' && typeof value.path === 'string' && check_T1(value.target) && value.type === 'file' && value.extension === 'lnk') ||
        (typeof value === 'object' &&
          value !== null &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          Array.isArray(value.children) &&
          value.children.every((value) => check_T1(value)) &&
          value.type === 'directory')
      )
    }
    function check_Typia_95_Array_95_Recursive_95_Union_95_Explicit(value) {
      return Array.isArray(value) && value.every((value) => check_T1(value))
    }
    return function check(value) {
      return check_Typia_95_Array_95_Recursive_95_Union_95_Explicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Implicit, iterations, results, () => {
    function check_T2(value) {
      return (
        (typeof value === 'object' &&
          value !== null &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          typeof value.width === 'number' &&
          typeof value.height === 'number' &&
          typeof value.url === 'string' &&
          typeof value.size === 'number') ||
        (typeof value === 'object' && value !== null && typeof value.id === 'number' && typeof value.name === 'string' && typeof value.path === 'string' && typeof value.size === 'number' && typeof value.content === 'string') ||
        (typeof value === 'object' && value !== null && typeof value.id === 'number' && typeof value.name === 'string' && typeof value.path === 'string' && typeof value.size === 'number' && typeof value.count === 'number') ||
        (typeof value === 'object' && value !== null && typeof value.id === 'number' && typeof value.name === 'string' && typeof value.path === 'string' && check_T2(value.target)) ||
        (typeof value === 'object' &&
          value !== null &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          Array.isArray(value.children) &&
          value.children.every((value) => check_T2(value))) ||
        (typeof value === 'object' &&
          value !== null &&
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.path === 'string' &&
          Array.isArray(value.children) &&
          value.children.every((value) => check_T2(value)) &&
          (value.access === 'read' || value.access === 'write'))
      )
    }
    function check_Typia_95_Array_95_Recursive_95_Union_95_Implicit(value) {
      return Array.isArray(value) && value.every((value) => check_T2(value))
    }
    return function check(value) {
      return check_Typia_95_Array_95_Recursive_95_Union_95_Implicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Simple, iterations, results, () => {
    function check_Typia_95_Array_95_Simple(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            typeof value === 'object' &&
            value !== null &&
            typeof value.name === 'string' &&
            typeof value.email === 'string' &&
            ((Array.isArray(value.hobbies) && value.hobbies.every((value) => typeof value === 'object' && value !== null && typeof value.name === 'string' && typeof value.rank === 'number')) ||
              (Array.isArray(value.hobbies) && value.hobbies.every((value) => typeof value === 'object' && value !== null && typeof value.body === 'string')) ||
              (Array.isArray(value.hobbies) && value.hobbies.every((value) => typeof value === 'string'))),
        )
      )
    }
    return function check(value) {
      return check_Typia_95_Array_95_Simple(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Hierarchical, iterations, results, () => {
    function check_Typia_95_Object_95_Hierarchical(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        typeof value.id === 'number' &&
        typeof value.channel === 'object' &&
        value.channel !== null &&
        typeof value.channel.id === 'number' &&
        typeof value.channel.code === 'string' &&
        typeof value.channel.name === 'string' &&
        typeof value.channel.sequence === 'number' &&
        typeof value.channel.exclusive === 'boolean' &&
        typeof value.channel.priority === 'number' &&
        typeof value.channel.created_at === 'object' &&
        value.channel.created_at !== null &&
        typeof value.channel.created_at.time === 'number' &&
        typeof value.channel.created_at.zone === 'number' &&
        (value.member === null ||
          (typeof value.member === 'object' &&
            value.member !== null &&
            typeof value.member.id === 'number' &&
            typeof value.member.account === 'object' &&
            value.member.account !== null &&
            typeof value.member.account.id === 'number' &&
            typeof value.member.account.code === 'string' &&
            typeof value.member.account.created_at === 'object' &&
            value.member.account.created_at !== null &&
            typeof value.member.account.created_at.time === 'number' &&
            typeof value.member.account.created_at.zone === 'number' &&
            (value.member.enterprise === null ||
              (typeof value.member.enterprise === 'object' &&
                value.member.enterprise !== null &&
                typeof value.member.enterprise.id === 'number' &&
                typeof value.member.enterprise.account === 'object' &&
                value.member.enterprise.account !== null &&
                typeof value.member.enterprise.account.id === 'number' &&
                typeof value.member.enterprise.account.code === 'string' &&
                typeof value.member.enterprise.account.created_at === 'object' &&
                value.member.enterprise.account.created_at !== null &&
                typeof value.member.enterprise.account.created_at.time === 'number' &&
                typeof value.member.enterprise.account.created_at.zone === 'number' &&
                typeof value.member.enterprise.name === 'string' &&
                typeof value.member.enterprise.grade === 'number' &&
                typeof value.member.enterprise.created_at === 'object' &&
                value.member.enterprise.created_at !== null &&
                typeof value.member.enterprise.created_at.time === 'number' &&
                typeof value.member.enterprise.created_at.zone === 'number')) &&
            Array.isArray(value.member.emails) &&
            value.member.emails.every((value) => typeof value === 'string') &&
            typeof value.member.created_at === 'object' &&
            value.member.created_at !== null &&
            typeof value.member.created_at.time === 'number' &&
            typeof value.member.created_at.zone === 'number' &&
            typeof value.member.authorized === 'boolean')) &&
        (value.account === null ||
          (typeof value.account === 'object' &&
            value.account !== null &&
            typeof value.account.id === 'number' &&
            typeof value.account.code === 'string' &&
            typeof value.account.created_at === 'object' &&
            value.account.created_at !== null &&
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
        typeof value.created_at.time === 'number' &&
        typeof value.created_at.zone === 'number'
      )
    }
    return function check(value) {
      return check_Typia_95_Object_95_Hierarchical(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Recursive, iterations, results, () => {
    function check_Typia_95_Object_95_Recursive(value) {
      return (
        typeof value === 'object' &&
        value !== null &&
        (check_Typia_95_Object_95_Recursive(value.parent) || value.parent === null) &&
        typeof value.id === 'number' &&
        typeof value.code === 'string' &&
        typeof value.name === 'string' &&
        typeof value.sequence === 'number' &&
        typeof value.created_at === 'object' &&
        value.created_at !== null &&
        typeof value.created_at.time === 'number' &&
        typeof value.created_at.zone === 'number'
      )
    }
    return function check(value) {
      return check_Typia_95_Object_95_Recursive(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Simple, iterations, results, () => {
    function check_Typia_95_Object_95_Simple(value) {
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
      return check_Typia_95_Object_95_Simple(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Union_Explicit, iterations, results, () => {
    function check_Typia_95_Object_95_Union_95_Explicit(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            (typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && typeof value === 'object' && value !== null && value.type === 'point') ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              typeof value === 'object' &&
              value !== null &&
              value.type === 'line') ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              typeof value === 'object' &&
              value !== null &&
              value.type === 'triangle') ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              typeof value.p4 === 'object' &&
              value.p4 !== null &&
              typeof value.p4.x === 'number' &&
              typeof value.p4.y === 'number' &&
              typeof value === 'object' &&
              value !== null &&
              value.type === 'rectangle') ||
            (typeof value === 'object' &&
              value !== null &&
              Array.isArray(value.points) &&
              value.points.every((value) => typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number') &&
              typeof value === 'object' &&
              value !== null &&
              value.type === 'polyline') ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.outer === 'object' &&
              value.outer !== null &&
              Array.isArray(value.outer.points) &&
              value.outer.points.every((value) => typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number') &&
              Array.isArray(value.inner) &&
              value.inner.every(
                (value) =>
                  typeof value === 'object' && value !== null && Array.isArray(value.points) && value.points.every((value) => typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number'),
              ) &&
              typeof value === 'object' &&
              value !== null &&
              value.type === 'polygon') ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.centroid === 'object' &&
              value.centroid !== null &&
              typeof value.centroid.x === 'number' &&
              typeof value.centroid.y === 'number' &&
              typeof value.radius === 'number' &&
              typeof value === 'object' &&
              value !== null &&
              value.type === 'circle'),
        )
      )
    }
    return function check(value) {
      return check_Typia_95_Object_95_Union_95_Explicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Union_Implicit, iterations, results, () => {
    function check_Typia_95_Object_95_Union_95_Implicit(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            (typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && ('slope' in value ? value.slope === null || typeof value.slope === 'number' : true)) ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              ('slope' in value.p1 ? value.p1.slope === null || typeof value.p1.slope === 'number' : true) &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              ('slope' in value.p2 ? value.p2.slope === null || typeof value.p2.slope === 'number' : true) &&
              ('distance' in value ? value.distance === null || typeof value.distance === 'number' : true)) ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              ('slope' in value.p1 ? value.p1.slope === null || typeof value.p1.slope === 'number' : true) &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              ('slope' in value.p2 ? value.p2.slope === null || typeof value.p2.slope === 'number' : true) &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              ('slope' in value.p3 ? value.p3.slope === null || typeof value.p3.slope === 'number' : true) &&
              ('width' in value ? value.width === null || typeof value.width === 'number' : true) &&
              ('height' in value ? value.height === null || typeof value.height === 'number' : true) &&
              ('area' in value ? value.area === null || typeof value.area === 'number' : true)) ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.p1 === 'object' &&
              value.p1 !== null &&
              typeof value.p1.x === 'number' &&
              typeof value.p1.y === 'number' &&
              ('slope' in value.p1 ? value.p1.slope === null || typeof value.p1.slope === 'number' : true) &&
              typeof value.p2 === 'object' &&
              value.p2 !== null &&
              typeof value.p2.x === 'number' &&
              typeof value.p2.y === 'number' &&
              ('slope' in value.p2 ? value.p2.slope === null || typeof value.p2.slope === 'number' : true) &&
              typeof value.p3 === 'object' &&
              value.p3 !== null &&
              typeof value.p3.x === 'number' &&
              typeof value.p3.y === 'number' &&
              ('slope' in value.p3 ? value.p3.slope === null || typeof value.p3.slope === 'number' : true) &&
              typeof value.p4 === 'object' &&
              value.p4 !== null &&
              typeof value.p4.x === 'number' &&
              typeof value.p4.y === 'number' &&
              ('slope' in value.p4 ? value.p4.slope === null || typeof value.p4.slope === 'number' : true) &&
              ('width' in value ? value.width === null || typeof value.width === 'number' : true) &&
              ('height' in value ? value.height === null || typeof value.height === 'number' : true) &&
              ('area' in value ? value.area === null || typeof value.area === 'number' : true)) ||
            (typeof value === 'object' &&
              value !== null &&
              Array.isArray(value.points) &&
              value.points.every((value) => typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && ('slope' in value ? value.slope === null || typeof value.slope === 'number' : true)) &&
              ('length' in value ? value.length === null || typeof value.length === 'number' : true)) ||
            (typeof value === 'object' &&
              value !== null &&
              typeof value.outer === 'object' &&
              value.outer !== null &&
              Array.isArray(value.outer.points) &&
              value.outer.points.every(
                (value) => typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && ('slope' in value ? value.slope === null || typeof value.slope === 'number' : true),
              ) &&
              ('length' in value.outer ? value.outer.length === null || typeof value.outer.length === 'number' : true) &&
              ('inner' in value
                ? Array.isArray(value.inner) &&
                  value.inner.every(
                    (value) =>
                      typeof value === 'object' &&
                      value !== null &&
                      Array.isArray(value.points) &&
                      value.points.every(
                        (value) => typeof value === 'object' && value !== null && typeof value.x === 'number' && typeof value.y === 'number' && ('slope' in value ? value.slope === null || typeof value.slope === 'number' : true),
                      ) &&
                      ('length' in value ? value.length === null || typeof value.length === 'number' : true),
                  )
                : true) &&
              ('area' in value ? value.area === null || typeof value.area === 'number' : true)) ||
            (typeof value === 'object' &&
              value !== null &&
              ('centroid' in value
                ? typeof value.centroid === 'object' &&
                  value.centroid !== null &&
                  typeof value.centroid.x === 'number' &&
                  typeof value.centroid.y === 'number' &&
                  ('slope' in value.centroid ? value.centroid.slope === null || typeof value.centroid.slope === 'number' : true)
                : true) &&
              typeof value.radius === 'number' &&
              ('area' in value ? value.area === null || typeof value.area === 'number' : true)),
        )
      )
    }
    return function check(value) {
      return check_Typia_95_Object_95_Union_95_Implicit(value)
    }
  })
  Cases.Benchmark(Cases.Typia_Ultimate_Union, iterations, results, () => {
    function check_T3(value) {
      return (
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'boolean' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'boolean' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'integer' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'number' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'bigint' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'number' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'number' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'number' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'string' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'string' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'boolean' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'boolean' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true) &&
          typeof value === 'object' &&
          value !== null &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'boolean')) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'integer' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'number' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true) &&
          typeof value === 'object' &&
          value !== null &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'number')) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'bigint' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'number' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true) &&
          typeof value === 'object' &&
          value !== null &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'number')) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'number' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'number' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true) &&
          typeof value === 'object' &&
          value !== null &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'number')) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'string' &&
          typeof value.nullable === 'boolean' &&
          ('default' in value ? typeof value.default === 'string' : true) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true) &&
          typeof value === 'object' &&
          value !== null &&
          Array.isArray(value.enum) &&
          value.enum.every((value) => typeof value === 'string')) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'array' &&
          check_T3(value.items) &&
          typeof value.nullable === 'boolean' &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'array' &&
          Array.isArray(value.items) &&
          value.items.every((value) => check_T3(value)) &&
          typeof value.nullable === 'boolean' &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          typeof value.$ref === 'string' &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          typeof value.$recursiveRef === 'string' &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          Array.isArray(value.oneOf) &&
          value.oneOf.every((value) => check_T3(value)) &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true)) ||
        (typeof value === 'object' &&
          value !== null &&
          value.type === 'null' &&
          ('description' in value ? typeof value.description === 'string' : true) &&
          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
          ('x-tson-jsDocTags' in value
            ? Array.isArray(value['x-tson-jsDocTags']) &&
              value['x-tson-jsDocTags'].every(
                (value) =>
                  typeof value === 'object' &&
                  value !== null &&
                  typeof value.name === 'string' &&
                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
              )
            : true))
      )
    }
    const local_1 = new RegExp(/^.*$/)
    const local_2 = new RegExp(/^.*$/)
    const local_3 = new RegExp(/^.*$/)
    function check_Typia_95_Ultimate_95_Union(value) {
      return (
        Array.isArray(value) &&
        value.every(
          (value) =>
            typeof value === 'object' &&
            value !== null &&
            Array.isArray(value.schemas) &&
            value.schemas.every((value) => check_T3(value)) &&
            typeof value.components === 'object' &&
            value.components !== null &&
            typeof value.components.schemas === 'object' &&
            value.components.schemas !== null &&
            !(value.components.schemas instanceof Date) &&
            !(value.components.schemas instanceof Uint8Array) &&
            Object.getOwnPropertyNames(value.components.schemas).every((key) => local_1.test(key)) &&
            Object.values(value.components.schemas).every(
              (value) =>
                typeof value === 'object' &&
                value !== null &&
                ('$id' in value ? typeof value.$id === 'string' : true) &&
                value.type === 'object' &&
                typeof value.nullable === 'boolean' &&
                typeof value.properties === 'object' &&
                value.properties !== null &&
                !(value.properties instanceof Date) &&
                !(value.properties instanceof Uint8Array) &&
                Object.getOwnPropertyNames(value.properties).every((key) => local_2.test(key)) &&
                Object.values(value.properties).every(
                  (value) =>
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'boolean' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'boolean' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'integer' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'number' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'bigint' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'number' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'number' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'number' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'string' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'string' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'boolean' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'boolean' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value === 'object' &&
                      value !== null &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'boolean')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'integer' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'number' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value === 'object' &&
                      value !== null &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'number')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'bigint' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'number' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value === 'object' &&
                      value !== null &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'number')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'number' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'number' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value === 'object' &&
                      value !== null &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'number')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'string' &&
                      typeof value.nullable === 'boolean' &&
                      ('default' in value ? typeof value.default === 'string' : true) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value === 'object' &&
                      value !== null &&
                      Array.isArray(value.enum) &&
                      value.enum.every((value) => typeof value === 'string')) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'array' &&
                      check_T3(value.items) &&
                      typeof value.nullable === 'boolean' &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'array' &&
                      Array.isArray(value.items) &&
                      value.items.every((value) => check_T3(value)) &&
                      typeof value.nullable === 'boolean' &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      typeof value.$ref === 'string' &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      typeof value.$recursiveRef === 'string' &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      Array.isArray(value.oneOf) &&
                      value.oneOf.every((value) => check_T3(value)) &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      value.type === 'null' &&
                      ('description' in value ? typeof value.description === 'string' : true) &&
                      ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                      ('x-tson-jsDocTags' in value
                        ? Array.isArray(value['x-tson-jsDocTags']) &&
                          value['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)),
                ) &&
                ('patternProperties' in value
                  ? typeof value.patternProperties === 'object' &&
                    value.patternProperties !== null &&
                    !(value.patternProperties instanceof Date) &&
                    !(value.patternProperties instanceof Uint8Array) &&
                    Object.getOwnPropertyNames(value.patternProperties).every((key) => local_3.test(key)) &&
                    Object.values(value.patternProperties).every(
                      (value) =>
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'boolean' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'boolean' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'integer' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'number' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'bigint' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'number' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'number' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'number' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'string' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'string' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'boolean' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'boolean' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true) &&
                          typeof value === 'object' &&
                          value !== null &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'boolean')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'integer' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'number' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true) &&
                          typeof value === 'object' &&
                          value !== null &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'number')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'bigint' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'number' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true) &&
                          typeof value === 'object' &&
                          value !== null &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'number')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'number' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'number' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true) &&
                          typeof value === 'object' &&
                          value !== null &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'number')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'string' &&
                          typeof value.nullable === 'boolean' &&
                          ('default' in value ? typeof value.default === 'string' : true) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true) &&
                          typeof value === 'object' &&
                          value !== null &&
                          Array.isArray(value.enum) &&
                          value.enum.every((value) => typeof value === 'string')) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'array' &&
                          check_T3(value.items) &&
                          typeof value.nullable === 'boolean' &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'array' &&
                          Array.isArray(value.items) &&
                          value.items.every((value) => check_T3(value)) &&
                          typeof value.nullable === 'boolean' &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          typeof value.$ref === 'string' &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          typeof value.$recursiveRef === 'string' &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          Array.isArray(value.oneOf) &&
                          value.oneOf.every((value) => check_T3(value)) &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)) ||
                        (typeof value === 'object' &&
                          value !== null &&
                          value.type === 'null' &&
                          ('description' in value ? typeof value.description === 'string' : true) &&
                          ('x-tson-metaTags' in value ? Array.isArray(value['x-tson-metaTags']) && value['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string') : true) &&
                          ('x-tson-jsDocTags' in value
                            ? Array.isArray(value['x-tson-jsDocTags']) &&
                              value['x-tson-jsDocTags'].every(
                                (value) =>
                                  typeof value === 'object' &&
                                  value !== null &&
                                  typeof value.name === 'string' &&
                                  ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                              )
                            : true)),
                    )
                  : true) &&
                ('additionalProperties' in value
                  ? (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'boolean' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'boolean' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'integer' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'number' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'bigint' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'number' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'number' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'number' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'string' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'string' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'boolean' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'boolean' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'boolean')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'integer' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'number' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'number')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'bigint' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'number' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'number')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'number' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'number' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'number')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'string' &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('default' in value.additionalProperties ? typeof value.additionalProperties.default === 'string' : true) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true) &&
                      typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      Array.isArray(value.additionalProperties.enum) &&
                      value.additionalProperties.enum.every((value) => typeof value === 'string')) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'array' &&
                      check_T3(value.additionalProperties.items) &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'array' &&
                      Array.isArray(value.additionalProperties.items) &&
                      value.additionalProperties.items.every((value) => check_T3(value)) &&
                      typeof value.additionalProperties.nullable === 'boolean' &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      typeof value.additionalProperties.$ref === 'string' &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      typeof value.additionalProperties.$recursiveRef === 'string' &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      Array.isArray(value.additionalProperties.oneOf) &&
                      value.additionalProperties.oneOf.every((value) => check_T3(value)) &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true)) ||
                    (typeof value.additionalProperties === 'object' &&
                      value.additionalProperties !== null &&
                      value.additionalProperties.type === 'null' &&
                      ('description' in value.additionalProperties ? typeof value.additionalProperties.description === 'string' : true) &&
                      ('x-tson-metaTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-metaTags']) && value.additionalProperties['x-tson-metaTags'].every((value) => typeof value === 'object' && value !== null && typeof value.kind === 'string')
                        : true) &&
                      ('x-tson-jsDocTags' in value.additionalProperties
                        ? Array.isArray(value.additionalProperties['x-tson-jsDocTags']) &&
                          value.additionalProperties['x-tson-jsDocTags'].every(
                            (value) =>
                              typeof value === 'object' &&
                              value !== null &&
                              typeof value.name === 'string' &&
                              ('text' in value ? Array.isArray(value.text) && value.text.every((value) => typeof value === 'object' && value !== null && typeof value.text === 'string' && typeof value.kind === 'string') : true),
                          )
                        : true))
                  : true) &&
                ('required' in value ? Array.isArray(value.required) && value.required.every((value) => typeof value === 'string') : true) &&
                ('description' in value ? typeof value.description === 'string' : true) &&
                ('x-tson_jsDocTags' in value ? Array.isArray(value['x-tson_jsDocTags']) && value['x-tson_jsDocTags'].every((value) => true) : true) &&
                ('$recursiveAnchor' in value ? typeof value.$recursiveAnchor === 'boolean' : true),
            ) &&
            (value.purpose === 'swagger' || value.purpose === 'ajv') &&
            typeof value.prefix === 'string',
        )
      )
    }
    return function check(value) {
      return check_Typia_95_Ultimate_95_Union(value)
    }
  })
  Cases.Benchmark(Cases.Undefined_Undefined, iterations, results, () => {
    function check_Undefined_95_Undefined(value) {
      return value === undefined
    }
    return function check(value) {
      return check_Undefined_95_Undefined(value)
    }
  })
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
