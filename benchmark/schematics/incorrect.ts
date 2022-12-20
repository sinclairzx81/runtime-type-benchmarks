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
  console.log(schema.$id)
  const check = setup(schema)
  const value = Value.Create(schema)
  const start = Date.now()
  for (let i = 0; i < iterations; i++) {
    if (check(value)) throw Error('Expected Fail')
  }
  results.set(schema.$id, Date.now() - start)
}

// ---------------------------------------------------------------
// Primitive
// ---------------------------------------------------------------
export type Primitive_Number = Static<typeof Primitive_Number>
export const Primitive_Number = Type.Number({ $id: 'Primitive_Number', default: true })

export type Primitive_String = Static<typeof Primitive_String>
export const Primitive_String = Type.String({ $id: 'Primitive_String', default: 1 })

export type Primitive_Boolean = Static<typeof Primitive_Boolean>
export const Primitive_Boolean = Type.Boolean({ $id: 'Primitive_Boolean', default: 1 })

export type Primitive_Null = Static<typeof Primitive_Null>
export const Primitive_Null = Type.Null({ $id: 'Primitive_Null', default: 1 })

export type Primitive_Undefined = Static<typeof Primitive_Undefined>
export const Primitive_Undefined = Type.Undefined({ $id: 'Primitive_Undefined', default: 1 })

export type Primitive_RegEx = Static<typeof Primitive_RegEx>
export const Primitive_RegEx = Type.RegEx(/foo/, { $id: 'Primitive_RegEx', default: 'bar' })

// ---------------------------------------------------------------
// Literal
// ---------------------------------------------------------------
export type Literal_String = Static<typeof Literal_String>
export const Literal_String = Type.Literal('foo', { $id: 'Literal_String', default: 'bar' })

export type Literal_Number = Static<typeof Literal_Number>
export const Literal_Number = Type.Literal(1, { $id: 'Literal_Number', default: 2 })

export type Literal_Boolean = Static<typeof Literal_Boolean>
export const Literal_Boolean = Type.Literal(true, { $id: 'Literal_Boolean', default: false })

// ---------------------------------------------------------------
// Math
// ---------------------------------------------------------------

export type Math_Vector3 = Static<typeof Math_Vector3>
export const Math_Vector3 = Type.Object(
  {
    x: Type.Number(),
    y: Type.Number(),
    z: Type.Number(),
  },
  {
    $id: 'Math_Vector3',
    default: {
      x: 0,
      y: 0,
      z: false, // error
    },
  },
)

export type Math_Matrix4 = Static<typeof Math_Matrix4>
export const Math_Matrix4 = Type.Array(Type.Array(Type.Number()), {
  $id: 'Math_Matrix4',
  default: [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, true], // error
  ],
})

export type Math_Box3D = Static<typeof Math_Box3D>
export const Math_Box3D = Type.Object(
  {
    scale: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    position: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    rotate: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    pivot: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
  },
  {
    $id: 'Math_Box3D',
    default: {
      scale: { x: 0, y: 0, z: 0 },
      position: { x: 0, y: 0, z: 0 },
      rotate: { x: 0, y: 0, z: 0 },
      pivot: { x: 0, y: 0, z: false }, // error
    },
  },
)

export type Math_Mesh = Static<typeof Math_Mesh>
export const Math_Mesh = Type.Object(
  {
    vertices: Type.Array(Type.Number()),
    normals: Type.Array(Type.Number()),
    texoords: Type.Array(Type.Number()),
    indices: Type.Array(Type.Integer()),
  },
  {
    $id: 'Math_Mesh',
    default: {
      vertices: Array.from({ length: 100 * 3 }, () => 0),
      normals: Array.from({ length: 100 * 3 }, () => 0),
      texoords: Array.from({ length: 100 * 3 }, () => 0),
      indices: Array.from({ length: 100 * 3 }, () => 0),
    },
  },
)
Math_Mesh.default.indices[299] = true

// ---------------------------------------------------------------
// Object
// ---------------------------------------------------------------

export type Object_Loose = Static<typeof Object_Loose>
export const Object_Loose = Type.Object(
  {
    A: Type.Number(),
    B: Type.Number(),
    C: Type.Number(),
    D: Type.String(),
    E: Type.String(),
    F: Type.Boolean(),
    G: Type.Object({
      H: Type.String(),
      I: Type.Number(),
      J: Type.Boolean(),
    }),
  },
  {
    $id: 'Object_Loose',
    default: {
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
    },
  },
)

export type Object_Strict = Static<typeof Object_Loose>
export const Object_Strict = Type.Object(
  {
    A: Type.Number(),
    B: Type.Number(),
    C: Type.Number(),
    D: Type.String(),
    E: Type.String(),
    F: Type.Boolean(),
    G: Type.Object(
      {
        H: Type.String(),
        I: Type.Number(),
        J: Type.Boolean(),
      },
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    $id: 'Object_Strict',
    default: {
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
    },
  },
)

export type Object_Required = Static<typeof Object_Required>
export const Object_Required = Type.Object(
  {
    position: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    rotation: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    scale: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
  },
  {
    $id: 'Object_Required',
    default: {
      position: { x: 1, y: 2, z: 3 },
      rotation: { x: 1, y: 2, z: 3 },
      scale: { x: 1, y: 2, z: true }, // error
    },
  },
)

export type Object_Partial = Static<typeof Object_Partial>
export const Object_Partial = Type.Partial(
  Type.Object(
    {
      position: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
      rotation: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
      scale: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    },
    {
      $id: 'Object_Partial',
      default: {
        position: { x: 1, y: 2, z: 3 },
        rotation: { x: 1, y: 2, z: true }, // error
      },
    },
  ),
)

// ---------------------------------------------------------------
// Tuple
// ---------------------------------------------------------------

export type Tuple_Number = Static<typeof Tuple_Number>
export const Tuple_Number = Type.Tuple([Type.Number(), Type.Number(), Type.Number()], {
  $id: 'Tuple_Number',
  default: [0, 0, true],
})

export type Tuple_Object = Static<typeof Tuple_Object>
export const Tuple_Object = Type.Tuple(
  [Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }), Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }), Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() })],
  {
    $id: 'Tuple_Object',
    default: [
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 0, z: true }, // error
    ],
  },
)

export type Tuple_Union_Literal = Static<typeof Tuple_Union_Literal>
export const Tuple_Union_Literal = Type.Tuple([Type.Union([Type.Literal('A'), Type.Literal('B')]), Type.Union([Type.Literal('C'), Type.Literal('D')]), Type.Union([Type.Literal('E'), Type.Literal('F')])], {
  $id: 'Tuple_Union_Literal',
  default: ['B', 'D', 'G'],
})

// ---------------------------------------------------------------
// Composite
// ---------------------------------------------------------------

export type Composite_Union_Literal = Static<typeof Composite_Union_Literal>
export const Composite_Union_Literal = Type.Union([Type.Literal('A'), Type.Literal('B'), Type.Literal('C'), Type.Literal('D'), Type.Literal('E'), Type.Literal('F'), Type.Literal('G'), Type.Literal('H')], {
  $id: 'Composite_Union_Literal',
  default: 'I',
})

export type Composite_Union_Discriminated = Static<typeof Composite_Union_Discriminated>
export const Composite_Union_Discriminated = Type.Union(
  [
    Type.Object({ type: Type.Literal('A'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('B'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('C'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('D'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('E'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('F'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('G'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('H'), value: Type.Number() }),
  ],
  {
    $id: 'Composite_Union_Discriminated',
    default: { type: 'H', value: true }, // error
  },
)

export type Composite_Union_Non_Discriminated = Static<typeof Composite_Union_Non_Discriminated>
export const Composite_Union_Non_Discriminated = Type.Union(
  [
    Type.Object({
      A: Type.String(),
      B: Type.String(),
    }),
    Type.Object({
      C: Type.String(),
      D: Type.String(),
    }),
  ],
  {
    $id: 'Composite_Union_Non_Discriminated',
    default: { A: 'A', C: 'C' }, // satisfy neither
  },
)

export type Composite_Intersect = Static<typeof Composite_Intersect>
export const Composite_Intersect = Type.Intersect(
  [
    Type.Object({ A: Type.Literal('A'), B: Type.Literal('B') }),
    Type.Object({ C: Type.Literal('C'), D: Type.Literal('D') }),
    Type.Object({ E: Type.Literal('E'), F: Type.Literal('F') }),
    Type.Object({ G: Type.Literal('G'), H: Type.Literal('H') }),
  ],
  {
    $id: 'Composite_Intersect',
    default: {
      A: 'A',
      B: 'B',
      C: 'C',
      D: 'D',
      E: 'E',
      F: 'F',
      G: 'G',
      H: 'A', // error
    },
  },
)

// ---------------------------------------------------------------
// Recursive
// ---------------------------------------------------------------

export type Recursive_Object = Static<typeof Recursive_Object>
export const Recursive_Object = Type.Recursive(
  (Recursive) =>
    Type.Object({
      id: Type.String(),
      nodes: Type.Array(Recursive),
    }),
  {
    $id: 'Recursive_Object',
    default: {
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
    },
  },
)

export type Recursive_Union = Static<typeof Recursive_Union>
export const Recursive_Union = Type.Recursive(
  (Node) =>
    Type.Union([
      Type.Object({
        type: Type.Literal('Node'),
        nodes: Type.Array(Node),
      }),
      Type.Object({
        type: Type.Literal('Leaf'),
        value: Type.String(),
      }),
    ]),
  {
    $id: 'Recursive_Union',
    default: {
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
    },
  },
)

// ---------------------------------------------------------------
// Array
// ---------------------------------------------------------------

export type Array_Primitive_Number = Static<typeof Array_Primitive_Number>
export const Array_Primitive_Number = Type.Array(Type.Number(), { $id: 'Array_Primitive_Number', minItems: 8 })
Array_Primitive_Number.default = Value.Create(Array_Primitive_Number)
Array_Primitive_Number.default[7] = Value.Create(Primitive_Number)

export type Array_Primitive_String = Static<typeof Array_Primitive_String>
export const Array_Primitive_String = Type.Array(Type.String(), { $id: 'Array_Primitive_String', minItems: 8 })
Array_Primitive_String.default = Value.Create(Array_Primitive_String)
Array_Primitive_String.default[7] = Value.Create(Primitive_String)

export type Array_Primitive_Boolean = Static<typeof Array_Primitive_Boolean>
export const Array_Primitive_Boolean = Type.Array(Type.Boolean(), { $id: 'Array_Primitive_Boolean', minItems: 8 })
Array_Primitive_Boolean.default = Value.Create(Array_Primitive_Boolean)
Array_Primitive_Boolean.default[7] = Value.Create(Primitive_Boolean)

export type Array_Object_Loose = Static<typeof Array_Object_Loose>
export const Array_Object_Loose = Type.Array(Correct.Object_Loose, { $id: 'Array_Object_Loose', minItems: 8 })
Array_Object_Loose.default = Value.Create(Array_Object_Loose)
Array_Object_Loose.default[7] = Value.Create(Object_Loose)

export type Array_Object_Strict = Static<typeof Array_Object_Strict>
export const Array_Object_Strict = Type.Array(Correct.Object_Strict, { $id: 'Array_Object_Strict', minItems: 8 })
Array_Object_Strict.default = Value.Create(Array_Object_Strict)
Array_Object_Strict.default[7] = Value.Create(Object_Strict)

export type Array_Object_Required = Static<typeof Array_Object_Required>
export const Array_Object_Required = Type.Array(Correct.Object_Required, { $id: 'Array_Object_Required', minItems: 8 })
Array_Object_Required.default = Value.Create(Array_Object_Required)
Array_Object_Required.default[7] = Value.Create(Object_Required)

export type Array_Object_Partial = Static<typeof Array_Object_Partial>
export const Array_Object_Partial = Type.Array(Correct.Object_Partial, { $id: 'Array_Object_Partial', minItems: 8 })
Array_Object_Partial.default = Value.Create(Array_Object_Partial)
Array_Object_Partial.default[7] = Value.Create(Object_Partial)

export type Array_Tuple_Number = Static<typeof Array_Tuple_Number>
export const Array_Tuple_Number = Type.Array(Correct.Tuple_Number, { $id: 'Array_Tuple_Number', minItems: 8 })
Array_Tuple_Number.default = Value.Create(Array_Tuple_Number)
Array_Tuple_Number.default[7] = Value.Create(Tuple_Number)

export type Array_Tuple_Object = Static<typeof Array_Tuple_Object>
export const Array_Tuple_Object = Type.Array(Correct.Tuple_Object, { $id: 'Array_Tuple_Object', minItems: 8 })
Array_Tuple_Object.default = Value.Create(Array_Tuple_Object)
Array_Tuple_Object.default[7] = Value.Create(Tuple_Object)

export type Array_Tuple_Union_Literal = Static<typeof Array_Tuple_Union_Literal>
export const Array_Tuple_Union_Literal = Type.Array(Correct.Tuple_Union_Literal, { $id: 'Array_Tuple_Union_Literal', minItems: 8 })
Array_Tuple_Union_Literal.default = Value.Create(Array_Tuple_Union_Literal)
Array_Tuple_Union_Literal.default[7] = Value.Create(Tuple_Union_Literal)

export type Array_Composite_Union_Literal = Static<typeof Array_Composite_Union_Literal>
export const Array_Composite_Union_Literal = Type.Array(Correct.Composite_Union_Literal, { $id: 'Array_Composite_Union_Literal', minItems: 8 })
Array_Composite_Union_Literal.default = Value.Create(Array_Composite_Union_Literal)
Array_Composite_Union_Literal.default[7] = Value.Create(Composite_Union_Discriminated)

export type Array_Composite_Union_Discriminated = Static<typeof Array_Composite_Union_Discriminated>
export const Array_Composite_Union_Discriminated = Type.Array(Correct.Composite_Union_Discriminated, { $id: 'Array_Composite_Union_Discriminated', minItems: 8 })
Array_Composite_Union_Discriminated.default = Value.Create(Array_Composite_Union_Discriminated)
Array_Composite_Union_Discriminated.default[7] = Value.Create(Composite_Union_Discriminated)

export type Array_Composite_Union_Non_Discriminated = Static<typeof Array_Composite_Union_Non_Discriminated>
export const Array_Composite_Union_Non_Discriminated = Type.Array(Correct.Composite_Union_Non_Discriminated, { $id: 'Array_Composite_Non_Union_Discriminated', minItems: 8 })
Array_Composite_Union_Non_Discriminated.default = Value.Create(Array_Composite_Union_Non_Discriminated)
Array_Composite_Union_Non_Discriminated.default[7] = Value.Create(Composite_Union_Non_Discriminated)

export type Array_Composite_Intersect = Static<typeof Array_Composite_Intersect>
export const Array_Composite_Intersect = Type.Array(Correct.Composite_Intersect, { $id: 'Array_Composite_Intersect', minItems: 8 })
Array_Composite_Intersect.default = Value.Create(Array_Composite_Intersect)
Array_Composite_Intersect.default[7] = Value.Create(Composite_Intersect)

export type Array_Recursive_Object = Static<typeof Array_Recursive_Object>
export const Array_Recursive_Object = Type.Array(Correct.Recursive_Object, { $id: 'Array_Recursive_Object', minItems: 8 })
Array_Recursive_Object.default = Value.Create(Array_Recursive_Object)
Array_Recursive_Object.default[7] = Value.Create(Recursive_Object)

export type Array_Recursive_Union = Static<typeof Array_Recursive_Union>
export const Array_Recursive_Union = Type.Array(Correct.Recursive_Union, { $id: 'Array_Recursive_Union', minItems: 8 })
Array_Recursive_Union.default = Value.Create(Array_Recursive_Union)
Array_Recursive_Union.default[7] = Value.Create(Recursive_Union)

export type Array_Math_Vector3 = Static<typeof Array_Math_Vector3>
export const Array_Math_Vector3 = Type.Array(Correct.Math_Vector3, { $id: 'Array_Math_Vector3', minItems: 8 })
Array_Math_Vector3.default = Value.Create(Array_Math_Vector3)
Array_Math_Vector3.default[7] = Value.Create(Math_Vector3)

export type Array_Math_Matrix4 = Static<typeof Array_Math_Matrix4>
export const Array_Math_Matrix4 = Type.Array(Correct.Math_Matrix4, { $id: 'Array_Math_Matrix4', minItems: 8 })
Array_Math_Matrix4.default = Value.Create(Array_Math_Matrix4)
Array_Math_Matrix4.default[7] = Value.Create(Math_Matrix4)

export type Array_Math_Box3D = Static<typeof Array_Math_Box3D>
export const Array_Math_Box3D = Type.Array(Correct.Math_Box3D, { $id: 'Array_Math_Box3D', minItems: 8 })
Array_Math_Box3D.default = Value.Create(Array_Math_Box3D)
Array_Math_Box3D.default[7] = Value.Create(Math_Box3D)

export type Array_Math_Mesh = Static<typeof Array_Math_Mesh>
export const Array_Math_Mesh = Type.Array(Correct.Math_Mesh, { $id: 'Array_Math_Mesh', minItems: 8 })
Array_Math_Mesh.default = Value.Create(Array_Math_Mesh)
Array_Math_Mesh.default[7] = Value.Create(Math_Mesh)
