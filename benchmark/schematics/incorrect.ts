import { TypeGuard } from '@sinclair/typebox/guard'
import { TSchema } from '@sinclair/typebox'
export * from './array/index'
export * from './composite/index'
export * from './literal/index'
export * from './math/index'
export * from './object/index'
export * from './primitive/index'
export * from './recursive/index'
export * from './tuple/index'

const dataset = new Map<string, unknown>()
// ---------------------------------------------------------------
// Array
// ---------------------------------------------------------------
dataset.set(
  'Array_Number',
  Array.from({ length: 8 }, (_, i) => {
    if (i === 7) return 'not-a-number'
    return 1
  }),
)
dataset.set(
  'Array_Object',
  Array.from({ length: 8 }, (_, i) => {
    if (i === 7)
      return {
        x: 1,
        y: 2,
        z: 'not-a-number',
      }
    return {
      x: 1,
      y: 2,
      z: 3,
    }
  }),
)
dataset.set(
  'Array_Recursive',
  Array.from({ length: 8 }, (_, i) => {
    if (i === 7)
      return {
        id: 'A',
        nodes: ['not-a-node'],
      }
    return {
      id: 'A',
      nodes: [
        {
          id: 'B',
          nodes: [
            { id: 'C', nodes: [] },
            { id: 'D', nodes: [] },
            { id: 'E', nodes: [] },
          ],
        },
        {
          id: 'F',
          nodes: [
            { id: 'G', nodes: [] },
            { id: 'H', nodes: [] },
            { id: 'I', nodes: [] },
          ],
        },
        {
          id: 'J',
          nodes: [
            { id: 'K', nodes: [] },
            { id: 'L', nodes: [] },
            { id: 'M', nodes: [] },
          ],
        },
      ],
    }
  }),
)
dataset.set(
  'Array_Union',
  Array.from({ length: 8 }, (_, i) => {
    if (i === 7)
      return {
        id: 'Vector4',
        x: 1,
        y: 1,
        z: 1,
        w: 'not-a-number',
      }
    const mod = i & 2
    switch (mod) {
      case 0:
        return {
          type: 'Vector2',
          x: 1,
          y: 1,
        }
      case 1:
        return {
          type: 'Vector3',
          x: 1,
          y: 1,
          z: 1,
        }
      case 2:
        return {
          type: 'Vector4',
          x: 1,
          y: 1,
          z: 1,
          w: 1,
        }
      default:
        throw Error('Modulus Overflow')
    }
  }),
)
// ---------------------------------------------------------------
// Primitive
// ---------------------------------------------------------------
dataset.set('Primitive_Boolean', 1)
dataset.set('Primitive_Integer', 3.14)
dataset.set('Primitive_Null', 1)
dataset.set('Primitive_Number', true)
dataset.set('Primitive_RegEx', 'invalid-pattern')
dataset.set('Primitive_String', 1)
dataset.set('Primitive_Undefined', 1)

// ---------------------------------------------------------------
// Composite
// ---------------------------------------------------------------
dataset.set('Composite_Union_Literal', 'E')
dataset.set('Composite_Union_Discriminated', { type: 'E', value: true })
dataset.set('Composite_Union_Non_Discriminated', { A: 'A', C: 'C' })
dataset.set('Composite_Intersect', {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'A', // error
})

// ---------------------------------------------------------------
// Literal
// ---------------------------------------------------------------

dataset.set('Literal_String', 'bar')
dataset.set('Literal_Number', 1)
dataset.set('Literal_Boolean', false)

// ---------------------------------------------------------------
// Math
// ---------------------------------------------------------------
dataset.set('Math_Vector3', {
  x: 0,
  y: 0,
  z: false, // error
})
dataset.set('Math_Matrix4', [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, true], // error
])
dataset.set('Math_Box3D', {
  scale: { x: 0, y: 0, z: 0 },
  position: { x: 0, y: 0, z: 0 },
  rotate: { x: 0, y: 0, z: 0 },
  pivot: { x: 0, y: 0, z: false }, // error
})
dataset.set('Math_Mesh', {
  vertices: Array.from({ length: 100 * 3 }, () => 0),
  normals: Array.from({ length: 100 * 3 }, () => 0),
  texoords: Array.from({ length: 100 * 3 }, () => 0),
  indices: Array.from({ length: 100 * 3 }, (a, i) => (i < 299 ? 0 : 'not-a-number')),
})

// ---------------------------------------------------------------
// Object
// ---------------------------------------------------------------

dataset.set('Object_Loose', {
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
})
dataset.set('Object_Strict', {
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
})
dataset.set('Object_Simple', {
  position: { x: 1, y: 2, z: 3 },
  rotation: { x: 1, y: 2, z: 3 },
  scale: { x: 1, y: 2, z: true }, // error
})
dataset.set('Object_Partial', {
  position: { x: 1, y: 2, z: 3 },
  rotation: { x: 1, y: 2, z: true }, // error
})

// ---------------------------------------------------------------
// Tuple
// ---------------------------------------------------------------
dataset.set('Tuple_Number', [0, 0, true])
dataset.set('Tuple_Object', [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: true }, // error
])
dataset.set('Tuple_Union_Literal', ['B', 'D', 'G'])

// ---------------------------------------------------------------
// Recursive
// ---------------------------------------------------------------
dataset.set('Recursive_Object', {
  id: 'A',
  nodes: [
    {
      id: 'B',
      nodes: [
        { id: 'C', nodes: [] },
        { id: 'D', nodes: [] },
        { id: 'E', nodes: [] },
      ],
    },
    {
      id: 'F',
      nodes: [
        { id: 'G', nodes: [] },
        { id: 'H', nodes: [] },
        { id: 'I', nodes: [] },
      ],
    },
    {
      id: 'J',
      nodes: [
        { id: 'K', nodes: [] },
        { id: 'L', nodes: [] },
        { id: 'M', nodes: [1] }, // error
      ],
    },
  ],
})

dataset.set('Recursive_Union', {
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
})

// ---------------------------------------------------------------
// Benchmark
// ---------------------------------------------------------------
export type BenchmarkSetup = (schema: TSchema) => BenchmarkCheck
export type BenchmarkCheck = (value: unknown) => boolean
const types = new Set<string>()
export function Benchmark(schema: TSchema, iterations: number, results: Map<string, number>, setup: BenchmarkSetup) {
  if (!TypeGuard.TSchema(schema)) throw Error('Invalid Schema for benchmark')
  if (schema.$id === undefined) throw Error('Schema must have a specify a unique type $id')
  if (types.has(schema.$id)) throw Error(`Duplicate schema $id ${schema.$id}`)
  if (!dataset.has(schema.$id)) throw Error(`Unable to locate dataset for ${schema.$id}`)
  types.add(schema.$id)
  process.stdout.write(`\x1b[36m${schema.$id}\x1b[0m ... `)
  const check = setup(schema)
  const value = dataset.get(schema.$id)!
  const start = Date.now()
  for (let i = 0; i < iterations; i++) {
    if (check(value)) {
      console.log('schema', schema)
      console.log('value', value)
      throw Error('Expected Fail')
    }
  }
  const elapsed = Date.now() - start
  process.stdout.write(`${elapsed} ms\n`)
  results.set(schema.$id, elapsed)
}
