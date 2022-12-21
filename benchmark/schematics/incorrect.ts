import { Type, Static, TSchema } from '@sinclair/typebox'
import { Value } from '@sinclair/typebox/value'
import * as Correct from './correct'

// ---------------------------------------------------------------
// Benchmark
// ---------------------------------------------------------------
export type BenchmarkSetup = (schema: TSchema) => BenchmarkCheck
export type BenchmarkCheck = (value: unknown) => boolean
const typenames = new Set<string>()
export function Benchmark(schema: TSchema, iterations: number, results: Map<string, number>, setup: BenchmarkSetup) {
  if (schema.$id === undefined) throw Error('Schema must have a specify a unique type $id')
  if (typenames.has(schema.$id)) throw Error(`Duplicate schema $id ${schema.$id}`)
  typenames.add(schema.$id)
  process.stdout.write(`\x1b[36m${schema.$id}\x1b[0m`)
  const check = setup(schema)
  const value = Value.Create(schema)
  const start = Date.now()
  for (let i = 0; i < iterations; i++) {
    if (check(value)) throw Error('Expected Fail')
  }
  const elapsed = Date.now() - start
  process.stdout.write(` ${elapsed} ms\n`)
  results.set(schema.$id, elapsed)
}

// ---------------------------------------------------------------
// Primitive
// ---------------------------------------------------------------
export type Primitive_Number = Correct.Primitive_Number
export const Primitive_Number = Value.Clone(Correct.Primitive_Number)
Primitive_Number.default = true

export type Primitive_String = Correct.Primitive_String
export const Primitive_String = Value.Clone(Correct.Primitive_String)
Primitive_String.default = 1

export type Primitive_Boolean = Correct.Primitive_Boolean
export const Primitive_Boolean = Value.Clone(Correct.Primitive_Boolean)
Primitive_Boolean.default = 1

export type Primitive_Integer = Correct.Primitive_Integer
export const Primitive_Integer = Value.Clone(Correct.Primitive_Integer)
Primitive_Integer.default = 3.14

export type Primitive_Null = Correct.Primitive_Null
export const Primitive_Null = Value.Clone(Correct.Primitive_Null)
Primitive_Null.default = 1

export type Primitive_Undefined = Correct.Primitive_Undefined
export const Primitive_Undefined = Value.Clone(Correct.Primitive_Undefined)
Primitive_Undefined.default = 1

export type Primitive_RegEx = Correct.Primitive_RegEx
export const Primitive_RegEx = Value.Clone(Correct.Primitive_RegEx)
Primitive_RegEx.default = 'invalid-pattern'

// ---------------------------------------------------------------
// Literal
// ---------------------------------------------------------------
export type Literal_String = Correct.Literal_String
export const Literal_String = Value.Clone(Correct.Literal_String)
Literal_String.default = 'bar'

export type Literal_Number = Correct.Literal_Number
export const Literal_Number = Value.Clone(Correct.Literal_Number)
Literal_Number.default = 2

export type Literal_Boolean = Correct.Literal_Boolean
export const Literal_Boolean = Value.Clone(Correct.Literal_Boolean)
Literal_Boolean.default = false

// ---------------------------------------------------------------
// Math
// ---------------------------------------------------------------

export type Math_Vector3 = Correct.Math_Vector3
export const Math_Vector3 = Value.Clone(Correct.Math_Vector3)
Math_Vector3.default = {
  x: 0,
  y: 0,
  z: false, // error
}

export type Math_Matrix4 = Correct.Math_Matrix4
export const Math_Matrix4 = Value.Clone(Correct.Math_Matrix4)
Math_Matrix4.default = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, true], // error
]

export type Math_Box3D = Correct.Math_Box3D
export const Math_Box3D = Value.Clone(Correct.Math_Box3D)
Math_Box3D.default = {
  scale: { x: 0, y: 0, z: 0 },
  position: { x: 0, y: 0, z: 0 },
  rotate: { x: 0, y: 0, z: 0 },
  pivot: { x: 0, y: 0, z: false }, // error
}

export type Math_Mesh = Correct.Math_Mesh
export const Math_Mesh = Value.Clone(Correct.Math_Mesh)
Math_Mesh.default.indices[299] = 'not-a-number'

// ---------------------------------------------------------------
// Object
// ---------------------------------------------------------------
export type Object_Loose = Correct.Object_Loose
export const Object_Loose = Value.Clone(Correct.Object_Loose)
Object_Loose.default = {
  A: 1,
  B: 1,
  C: 1,
  D: 'string',
  E: Array.from({ length: 512 })
    .map((x) => 'x')
    .join(''),
  F: true,
  G: {
    H: 'foo',
    I: 1,
    J: 1, // error
  },
}

export type Object_Strict = Correct.Object_Strict
export const Object_Strict = Value.Clone(Correct.Object_Strict)
Object_Strict.default = {
  A: 1,
  B: 1,
  C: 1,
  D: 'string',
  E: Array.from({ length: 512 })
    .map((x) => 'x')
    .join(''),
  F: true,
  G: {
    H: 'foo',
    I: 1,
    J: 1, // error
  },
  K: 'extra', // error
}

export type Object_Simple = Correct.Object_Simple
export const Object_Simple = Value.Clone(Correct.Object_Simple)
Object_Simple.default = {
  position: { x: 1, y: 2, z: 3 },
  rotation: { x: 1, y: 2, z: 3 },
  scale: { x: 1, y: 2, z: true }, // error
}

export type Object_Partial = Correct.Object_Partial
export const Object_Partial = Value.Clone(Correct.Object_Partial)
Object_Partial.default = {
  position: { x: 1, y: 2, z: 3 },
  rotation: { x: 1, y: 2, z: true }, // error
}

// ---------------------------------------------------------------
// Tuple
// ---------------------------------------------------------------

export type Tuple_Number = Correct.Tuple_Number
export const Tuple_Number = Value.Clone(Correct.Tuple_Number)
Tuple_Number.default = [0, 0, true]

export type Tuple_Object = Correct.Tuple_Object
export const Tuple_Object = Value.Clone(Correct.Tuple_Object)
Tuple_Object.default = [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: true }, // error
]

export type Tuple_Union_Literal = Correct.Tuple_Union_Literal
export const Tuple_Union_Literal = Value.Clone(Correct.Tuple_Union_Literal)
Tuple_Union_Literal.default = ['B', 'D', 'G']

// ---------------------------------------------------------------
// Composite
// ---------------------------------------------------------------

export type Composite_Union_Literal = Correct.Composite_Union_Literal
export const Composite_Union_Literal = Value.Clone(Correct.Composite_Union_Literal)
Composite_Union_Literal.default = 'E'

export type Composite_Union_Discriminated = Correct.Composite_Union_Discriminated
export const Composite_Union_Discriminated = Value.Clone(Correct.Composite_Union_Discriminated)
Composite_Union_Discriminated.default = { type: 'E', value: true }

export type Composite_Union_Non_Discriminated = Correct.Composite_Union_Non_Discriminated
export const Composite_Union_Non_Discriminated = Value.Clone(Correct.Composite_Union_Non_Discriminated)
Composite_Union_Non_Discriminated.default = { A: 'A', C: 'C' }

export type Composite_Intersect = Correct.Composite_Intersect
export const Composite_Intersect = Value.Clone(Correct.Composite_Intersect)
Composite_Intersect.default = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'A', // error
}

// ---------------------------------------------------------------
// Recursive
// ---------------------------------------------------------------

export type Recursive_Object = Correct.Recursive_Object
export const Recursive_Object = Value.Clone(Correct.Recursive_Object)
Recursive_Object.default = {
  id: '',
  nodes: [
    {
      id: '',
      nodes: [
        { id: '', nodes: [] },
        { id: '', nodes: [] },
        { id: '', nodes: [] },
      ],
    },
    {
      id: '',
      nodes: [
        { id: '', nodes: [] },
        { id: '', nodes: [] },
        { id: '', nodes: [] },
      ],
    },
    {
      id: '',
      nodes: [
        { id: '', nodes: [] },
        { id: '', nodes: [] },
        { id: '', nodes: [1] }, // error
      ],
    },
  ],
}

export type Recursive_Union = Correct.Recursive_Union
export const Recursive_Union = Value.Clone(Correct.Recursive_Union)
Recursive_Union.default = {
  type: 'Node',
  nodes: [
    {
      type: 'Node',
      nodes: [
        { type: 'Leaf', value: 'x' },
        { type: 'Leaf', value: 'x' },
        { type: 'Leaf', value: 'x' },
      ],
    },
    {
      type: 'Node',
      nodes: [
        { type: 'Leaf', value: 'x' },
        { type: 'Leaf', value: 'x' },
        { type: 'Leaf', value: 'x' },
      ],
    },
    {
      type: 'Node',
      nodes: [
        { type: 'Leaf', value: 'x' },
        { type: 'Leaf', value: 'x' },
        { type: 'Leaf', value: true }, // error
      ],
    },
  ],
}

// ---------------------------------------------------------------
// Array
// ---------------------------------------------------------------

export type Array_Primitive_Number = Correct.Array_Primitive_Number
export const Array_Primitive_Number = Value.Clone(Correct.Array_Primitive_Number)
Array_Primitive_Number.default = Value.Create(Array_Primitive_Number)
Array_Primitive_Number.default[7] = Value.Create(Primitive_Number)

export type Array_Primitive_String = Correct.Array_Primitive_String
export const Array_Primitive_String = Value.Clone(Correct.Array_Primitive_String)
Array_Primitive_String.default = Value.Create(Array_Primitive_String)
Array_Primitive_String.default[7] = Value.Create(Primitive_String)

export type Array_Primitive_Boolean = Correct.Array_Primitive_Boolean
export const Array_Primitive_Boolean = Value.Clone(Correct.Array_Primitive_Boolean)
Array_Primitive_Boolean.default = Value.Create(Array_Primitive_Boolean)
Array_Primitive_Boolean.default[7] = Value.Create(Primitive_Boolean)

export type Array_Object_Loose = Correct.Array_Object_Loose
export const Array_Object_Loose = Value.Clone(Correct.Array_Object_Loose)
Array_Object_Loose.default = Value.Create(Array_Object_Loose)
Array_Object_Loose.default[7] = Value.Create(Object_Loose)

export type Array_Object_Strict = Correct.Array_Object_Strict
export const Array_Object_Strict = Value.Clone(Correct.Array_Object_Strict)
Array_Object_Strict.default = Value.Create(Array_Object_Strict)
Array_Object_Strict.default[7] = Value.Create(Object_Strict)

export type Array_Object_Partial = Correct.Array_Object_Partial
export const Array_Object_Partial = Value.Clone(Correct.Array_Object_Partial)
Array_Object_Partial.default = Value.Create(Array_Object_Partial)
Array_Object_Partial.default[7] = Value.Create(Object_Partial)

export type Array_Object_Simple = Correct.Array_Object_Simple
export const Array_Object_Simple = Value.Clone(Correct.Array_Object_Simple)
Array_Object_Simple.default = Value.Create(Array_Object_Simple)
Array_Object_Simple.default[7] = Value.Create(Object_Simple)

export type Array_Tuple_Number = Correct.Array_Tuple_Number
export const Array_Tuple_Number = Value.Clone(Correct.Array_Tuple_Number)
Array_Tuple_Number.default = Value.Create(Array_Tuple_Number)
Array_Tuple_Number.default[7] = Value.Create(Tuple_Number)

export type Array_Tuple_Object = Correct.Array_Tuple_Object
export const Array_Tuple_Object = Value.Clone(Correct.Array_Tuple_Object)
Array_Tuple_Object.default = Value.Create(Array_Tuple_Object)
Array_Tuple_Object.default[7] = Value.Create(Tuple_Object)

export type Array_Tuple_Union_Literal = Correct.Array_Tuple_Union_Literal
export const Array_Tuple_Union_Literal = Value.Clone(Correct.Array_Tuple_Union_Literal)
Array_Tuple_Union_Literal.default = Value.Create(Array_Tuple_Union_Literal)
Array_Tuple_Union_Literal.default[7] = Value.Create(Tuple_Union_Literal)

export type Array_Composite_Union_Literal = Correct.Array_Composite_Union_Literal
export const Array_Composite_Union_Literal = Value.Clone(Correct.Array_Composite_Union_Literal)
Array_Composite_Union_Literal.default = Value.Create(Array_Composite_Union_Literal)
Array_Composite_Union_Literal.default[7] = Value.Create(Composite_Union_Discriminated)

export type Array_Composite_Union_Discriminated = Correct.Array_Composite_Union_Discriminated
export const Array_Composite_Union_Discriminated = Value.Clone(Correct.Array_Composite_Union_Discriminated)
Array_Composite_Union_Discriminated.default = Value.Create(Array_Composite_Union_Discriminated)
Array_Composite_Union_Discriminated.default[7] = Value.Create(Composite_Union_Discriminated)

export type Array_Composite_Union_Non_Discriminated = Correct.Array_Composite_Union_Non_Discriminated
export const Array_Composite_Union_Non_Discriminated = Value.Clone(Correct.Array_Composite_Union_Non_Discriminated)
Array_Composite_Union_Non_Discriminated.default = Value.Create(Array_Composite_Union_Non_Discriminated)
Array_Composite_Union_Non_Discriminated.default[7] = Value.Create(Composite_Union_Non_Discriminated)

export type Array_Composite_Intersect = Correct.Array_Composite_Intersect
export const Array_Composite_Intersect = Value.Clone(Correct.Array_Composite_Intersect)
Array_Composite_Intersect.default = Value.Create(Array_Composite_Intersect)
Array_Composite_Intersect.default[7] = Value.Create(Composite_Intersect)

export type Array_Recursive_Object = Correct.Array_Recursive_Object
export const Array_Recursive_Object = Value.Clone(Correct.Array_Recursive_Object)
Array_Recursive_Object.default = Value.Create(Array_Recursive_Object)
Array_Recursive_Object.default[7] = Value.Create(Recursive_Object)

export type Array_Recursive_Union = Correct.Array_Recursive_Union
export const Array_Recursive_Union = Value.Clone(Correct.Array_Recursive_Union)
Array_Recursive_Union.default = Value.Create(Array_Recursive_Union)
Array_Recursive_Union.default[7] = Value.Create(Recursive_Union)

export type Array_Math_Vector3 = Correct.Array_Math_Vector3
export const Array_Math_Vector3 = Value.Clone(Correct.Array_Math_Vector3)
Array_Math_Vector3.default = Value.Create(Array_Math_Vector3)
Array_Math_Vector3.default[7] = Value.Create(Math_Vector3)

export type Array_Math_Matrix4 = Correct.Array_Math_Matrix4
export const Array_Math_Matrix4 = Value.Clone(Correct.Array_Math_Matrix4)
Array_Math_Matrix4.default = Value.Create(Array_Math_Matrix4)
Array_Math_Matrix4.default[7] = Value.Create(Math_Matrix4)

export type Array_Math_Box3D = Correct.Array_Math_Box3D
export const Array_Math_Box3D = Value.Clone(Correct.Array_Math_Box3D)
Array_Math_Box3D.default = Value.Create(Array_Math_Box3D)
Array_Math_Box3D.default[7] = Value.Create(Math_Box3D)

export type Array_Math_Mesh = Correct.Array_Math_Mesh
export const Array_Math_Mesh = Value.Clone(Correct.Array_Math_Mesh)
Array_Math_Mesh.default = Value.Create(Array_Math_Mesh)
Array_Math_Mesh.default[7] = Value.Create(Math_Mesh)
