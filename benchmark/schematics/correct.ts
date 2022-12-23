import { TypeGuard } from '@sinclair/typebox/guard'
import { TSchema } from '@sinclair/typebox'
export * from './Array/index'
export * from './Composite/index'
export * from './Literal/index'
export * from './Math/index'
export * from './Number/index'
export * from './Object/index'
export * from './primitive/index'
export * from './Recursive/index'
export * from './String/index'
export * from './Tuple/index'
export * from './Typia/index'

const dataset = new Map<string, unknown>()

// ---------------------------------------------------------------------------------
// Benchmark
// ---------------------------------------------------------------------------------
export type BenchmarkSetup = (schema: TSchema) => BenchmarkCheck
export type BenchmarkCheck = (value: unknown) => boolean
const types = new Set<string>()
export function Benchmark(schema: TSchema, iterations: number, results: Map<string, number>, setup: BenchmarkSetup) {
  if (!TypeGuard.TSchema(schema)) throw Error('Invalid Schema for benchmark')
  if (schema.$id === undefined) throw Error('Schema must have a specify a unique type $id')
  if (types.has(schema.$id)) throw Error(`Duplicate schema $id ${schema.$id}`)
  if (!dataset.has(schema.$id)) throw Error(`Unable to locate dataset for ${schema.$id}`)
  types.add(schema.$id)
  process.stdout.write(`\x1b[90m${schema.$id}\x1b[0m ... `)
  const check = setup(schema)
  const value = dataset.get(schema.$id)!
  const start = Date.now()
  for (let i = 0; i < iterations; i++) {
    if (!check(value)) {
      console.log('schema', schema)
      console.log('value', value)
      throw Error('Expected Ok')
    }
  }
  const elapsed = Date.now() - start
  process.stdout.write(`${elapsed} ms\n`)
  results.set(schema.$id, elapsed)
}

// ---------------------------------------------------------------------------------
// Array
// ---------------------------------------------------------------------------------
// prettier-ignore
dataset.set('Array_Number', Array.from({ length: 8 }, () => {
    return 1
}))

// prettier-ignore
dataset.set('Array_Object', Array.from({ length: 8 }, () => {
    return {
      x: 1,
      y: 2,
      z: 3,
    }
  }),
)
// prettier-ignore
dataset.set('Array_Recursive', Array.from({ length: 4 }, () => {
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
// prettier-ignore
dataset.set('Array_Union', Array.from({ length: 8 }, (_, i) => {
    const mod = i % 3
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

// ---------------------------------------------------------------------------------
// Composite
// ---------------------------------------------------------------------------------
dataset.set('Composite_Union_Literal', 'D')
dataset.set('Composite_Union_Discriminated', { type: 'D', value: 42 })
dataset.set('Composite_Union_Non_Discriminated', { C: 'C', D: 'D' })
dataset.set('Composite_Intersect', {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
  G: 'G',
  H: 'H',
})

// ---------------------------------------------------------------------------------
// Literal
// ---------------------------------------------------------------------------------
dataset.set('Literal_String', 'hello')
dataset.set('Literal_Number', 42)
dataset.set('Literal_Boolean', true)

// ---------------------------------------------------------------------------------
// Math
// ---------------------------------------------------------------------------------
dataset.set('Math_Vector3', {
  x: 0,
  y: 0,
  z: 0,
})
dataset.set('Math_Matrix4', [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
])
dataset.set('Math_Box3D', {
  scale: { x: 0, y: 0, z: 0 },
  position: { x: 0, y: 0, z: 0 },
  rotate: { x: 0, y: 0, z: 0 },
  pivot: { x: 0, y: 0, z: 0 },
})
dataset.set('Math_Mesh', {
  vertices: Array.from({ length: 128 }, () => 0),
  normals: Array.from({ length: 128 }, () => 0),
  texoords: Array.from({ length: 128 }, () => 0),
  indices: Array.from({ length: 128 }, () => 0),
})

// ---------------------------------------------------------------------------------
// Number
// ---------------------------------------------------------------------------------
dataset.set('Number_Exclusive_Maximum', 7)
dataset.set('Number_Exclusive_Minimum', 9)
dataset.set('Number_Maximum', 8)
dataset.set('Number_Minimum', 8)
dataset.set('Number_Multiple_Of', 16)
dataset.set('Number_NaN', 1)
dataset.set('Number_Number', 1)

// ---------------------------------------------------------------------------------
// Object
// ---------------------------------------------------------------------------------
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
    J: true,
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
    J: true,
  },
})
dataset.set('Object_Partial', {
  position: { x: 1, y: 2, z: 3 },
  rotation: { x: 1, y: 2, z: 3 },
})
dataset.set('Object_Simple', {
  position: { x: 1, y: 2, z: 3 },
  rotation: { x: 1, y: 2, z: 3 },
  scale: { x: 1, y: 2, z: 3 },
})

// ---------------------------------------------------------------------------------
// Primitive
// ---------------------------------------------------------------------------------
dataset.set('Primitive_Boolean', true)
dataset.set('Primitive_Integer', 1)
dataset.set('Primitive_Null', null)
dataset.set('Primitive_Number', 1)
dataset.set('Primitive_RegEx', 'hello')
dataset.set('Primitive_String', 'hello')
dataset.set('Primitive_Undefined', undefined)

// ---------------------------------------------------------------------------------
// Recursive
// ---------------------------------------------------------------------------------
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
        { id: 'M', nodes: [] },
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
        { type: 'Leaf', value: 'x' },
      ],
    },
  ],
})

// ---------------------------------------------------------------------------------
// String
// ---------------------------------------------------------------------------------
dataset.set('String_MaxLength', '00000000')
dataset.set('String_MinLength', '00000000')

// ---------------------------------------------------------------------------------
// Tuple
// ---------------------------------------------------------------------------------
dataset.set('Tuple_Union_Literal', ['B', 'D', 'F'])
dataset.set('Tuple_Number', [0, 0, 0])
dataset.set('Tuple_Object', [
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
])

// ---------------------------------------------------------------------------------
// Typia
// ---------------------------------------------------------------------------------
// prettier-ignore
dataset.set('Typia_Array_Hierarchical', [
  {
    id: 1,
    serial: 1,
    name: 'name-1',
    established_at: {
      time: 1,
      zone: 1,
    },
    departments: Array.from({ length: 4 }, () => {
      return {
        id: 1,
        code: 'code-1',
        sales: 1,
        created_at: {
          time: 1,
          zone: 1,
        },
        employees: Array.from({ length: 4 }, () => {
          return {
            id: 1,
            name: 'name-1',
            age: 1,
            grade: 1,
            employeed_at: {
              time: 1,
              zone: 1,
            },
          }
        }),
      }
    }),
  },
])
// prettier-ignore
dataset.set('Typia_Array_Recursive_Union_Explicit', [
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    width: 1,
    height: 1,
    url: 'url-1',
    size: 1,
    type: 'file',
    extension: 'jpg',
  },
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    size: 1,
    type: 'file',
    extension: 'txt',
    content: 'content-1',
  },
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    size: 1,
    count: 1,
    type: 'file',
    extension: 'zip',
  },
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    target: {
      id: 1,
      name: 'name-1',
      path: 'path-1',
      target: {
        id: 1,
        name: 'name-1',
        path: 'path-1',
        target: {
          id: 1,
          name: 'name-1',
          path: 'path-1',
          children: Array.from({ length: 2 }, () => {
            return {
              id: 1,
              name: 'name-1',
              path: 'path-1',
              size: 1,
              type: 'file',
              extension: 'txt',
              content: 'content-1',
            }
          }),
          type: 'directory',
        },
        type: 'file',
        extension: 'lnk',
      },
      type: 'file',
      extension: 'lnk',
    },
    type: 'file',
    extension: 'lnk',
  },
])
// prettier-ignore
dataset.set('Typia_Array_Recursive_Union_Implicit', [
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    width: 1,
    height: 1,
    url: 'url-1',
    size: 1,
  },
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    size: 1,
    content: 'content-1',
  },
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    target: {
      id: 1,
      name: 'name-1',
      path: 'path-1',
      size: 1,
      content: 'content-1',
    },
  },
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    children: Array.from({ length: 1 }, () => {
      return {
        id: 1,
        name: 'name-1',
        path: 'path-1',
        children: Array.from({ length: 2 }, () => {
          return {
            id: 1,
            name: 'name-1',
            path: 'path-1',
            size: 1,
            content: 'content-1',
          }
        }),
        access: 'read',
      }
    }),
  },
  {
    id: 1,
    name: 'name-1',
    path: 'path-1',
    children: Array.from({ length: 4 }, () => {
      return {
        id: 1,
        name: 'name-1',
        path: 'path-1',
        size: 1,
        content: 'content-1',
      }
    }),
    access: 'read',
  },
])
// prettier-ignore
dataset.set('Typia_Array_Recursive', {
  children: Array.from({ length: 4 }, () => {
    return {
      children: Array.from({ length: 4 }, () => {
        return {
          children: [],
          id: 1,
          code: 'code-1',
          sequence: 1,
          created_at: {
            time: 1,
            zone: 1,
          },
        }
      }),
      id: 1,
      code: 'code-1',
      sequence: 1,
      created_at: {
        time: 1,
        zone: 1,
      },
    }
  }),
  id: 1,
  code: 'code-1',
  sequence: 1,
  created_at: {
    time: 1,
    zone: 1,
  },
})
// prettier-ignore
dataset.set('Typia_Array_Simple', Array.from({ length: 8 }, (_, i) => {
    const mod = i % 3
    switch (mod) {
      case 0:
        return {
          name: 'name-1',
          email: 'email-1',
          hobbies: [
            {
              name: 'name-1',
              rank: 11,
            },
            {
              name: 'name-1',
              rank: 11,
            },
            {
              name: 'name-1',
              rank: 11,
            },
          ],
        }
      case 1:
        return {
          name: 'name-1',
          email: 'email-1',
          hobbies: [
            {
              body: 'body-1',
            },
            {
              body: 'body-1',
            },
            {
              body: 'body-1',
            },
          ],
        }
      case 2:
        return {
          name: 'name-1',
          email: 'email-1',
          hobbies: ['item', 'item', 'item'],
        }
      default:
        throw Error('Modulus Overflow')
    }
  }),
)
// prettier-ignore
dataset.set('Typia_Object_Hierarchical', {
  id: 1,
  channel: {
    id: 1,
    code: 'code-1',
    name: 'name-1',
    sequence: 1,
    exclusive: true,
    priority: 1,
    created_at: {
      time: 1,
      zone: 1,
    },
  },
  member: {
    id: 1,
    account: {
      id: 1,
      code: 'code-1',
      created_at: {
        time: 1,
        zone: 1,
      },
    },
    enterprise: {
      id: 1,
      account: {
        id: 1,
        code: 'code-1',
        created_at: {
          time: 1,
          zone: 1,
        },
      },
      name: 'name-1',
      grade: 1,
      created_at: {
        time: 1,
        zone: 1,
      },
    },
    emails: ['email-1', 'email-2', 'email-3'],
    created_at: {
      time: 1,
      zone: 1,
    },
    authorized: true,
  },
  account: {
    id: 1,
    code: 'code-1',
    created_at: {
      time: 1,
      zone: 1,
    },
  },
  href: 'href-1',
  referrer: 'referrer-1',
  ip: [0, 0, 0, 0],
  created_at: {
    time: 1,
    zone: 1,
  },
})
// prettier-ignore
dataset.set('Typia_Object_Recursive', {
  parent: {
    parent: {
      parent: {
        parent: {
          parent: null,
          id: 1,
          code: 'code-1',
          name: 'name-1',
          sequence: 1,
          created_at: {
            time: 1,
            zone: 1,
          },
        },
        id: 1,
        code: 'code-1',
        name: 'name-1',
        sequence: 1,
        created_at: {
          time: 1,
          zone: 1,
        },
      },
      id: 1,
      code: 'code-1',
      name: 'name-1',
      sequence: 1,
      created_at: {
        time: 1,
        zone: 1,
      },
    },
    id: 1,
    code: 'code-1',
    name: 'name-1',
    sequence: 1,
    created_at: {
      time: 1,
      zone: 1,
    },
  },
  id: 1,
  code: 'code-1',
  name: 'name-1',
  sequence: 1,
  created_at: {
    time: 1,
    zone: 1,
  },
})
// prettier-ignore
dataset.set('Typia_Object_Simple', {
  scale: { x: 1, y: 1, z: 1 },
  position: { x: 1, y: 1, z: 1 },
  rotate: { x: 1, y: 1, z: 1 },
  pivot: { x: 1, y: 1, z: 1 },
})
// prettier-ignore
dataset.set('Typia_Object_Union_Explicit', Array.from({ length: 8 }, (_, i) => {
    const mod = i % 7
    switch (mod) {
      case 0:
        return {
          type: 'point',
          x: 1,
          y: 1,
        }
      case 1:
        return {
          type: 'line',
          p1: {
            x: 1,
            y: 1,
          },
          p2: {
            x: 1,
            y: 1,
          },
        }
      case 2:
        return {
          type: 'triangle',
          p1: {
            x: 1,
            y: 1,
          },
          p2: {
            x: 1,
            y: 1,
          },
          p3: {
            x: 1,
            y: 1,
          },
        }
      case 3:
        return {
          type: 'rectangle',
          p1: {
            x: 1,
            y: 1,
          },
          p2: {
            x: 1,
            y: 1,
          },
          p3: {
            x: 1,
            y: 1,
          },
          p4: {
            x: 1,
            y: 1,
          },
        }
      case 4:
        return {
          type: 'polyline',
          points: Array.from({ length: 4 }, (_, i) => ({ x: 1, y: 1 })),
        }
      case 5:
        return {
          type: 'polygon',
          outer: {
            type: 'polyline',
            points: Array.from({ length: 4 }, (_, i) => ({ x: 1, y: 1 })),
          },
          inner: Array.from({ length: 4 }, () => {
            return {
              points: Array.from({ length: 4 }, (_, i) => ({ x: 1, y: 1 })),
            }
          }),
        }
      case 6:
        return {
          type: 'circle',
          centroid: { x: 1, y: 1 },
          radius: 1,
        }
      default:
        throw new Error('Modulus Overflow')
    }
  }),
)
// prettier-ignore
dataset.set('Typia_Object_Union_Implicit', Array.from({ length: 2 }, (_, i) => {
    const mod = i % 7
    switch (mod) {
      case 0:
        return {
          x: 1,
          y: 1,
          slope: 1,
        }
      case 1:
        return {
          p1: {
            x: 1,
            y: 1,
          },
          p2: {
            x: 1,
            y: 1,
          },
          distance: 1,
        }
      case 2:
        return {
          p1: {
            x: 1,
            y: 1,
          },
          p2: {
            x: 1,
            y: 1,
          },
          p3: {
            x: 1,
            y: 1,
          },
          width: 1,
          height: 1,
          area: 1,
        }
      case 3:
        return {
          p1: {
            x: 1,
            y: 1,
          },
          p2: {
            x: 1,
            y: 1,
          },
          p3: {
            x: 1,
            y: 1,
          },
          p4: {
            x: 1,
            y: 1,
          },
          width: 1,
          height: 1,
          area: 1,
        }
      case 4:
        return {
          points: Array.from({ length: 4 }, (_, i) => ({ x: 1, y: 1 })),
          length: 1,
        }
      case 5:
        return {
          outer: {
            type: 'polyline',
            points: Array.from({ length: 4 }, (_, i) => ({ x: 1, y: 1 })),
          },
          inner: Array.from({ length: 4 }, () => {
            return {
              points: Array.from({ length: 4 }, (_, i) => ({ x: 1, y: 1 })),
            }
          }),
          area: 1,
        }
      case 6:
        return {
          centroid: { x: 1, y: 1 },
          radius: 1,
          area: 1,
        }
      default:
        throw new Error('Modulus Overflow')
    }
  }),
)
// partial implementation - too complex
// prettier-ignore
dataset.set('Typia_Ultimate_Union', Array.from({ length: 2 }, (_, i) => {
    const attribute = () => ({
      description: 'description-1',
      'x-tson-metaTags': [{ kind: 'kind-1' }, { kind: 'kind-2' }],
      'x-tson-jsDocTags': [
        {
          name: 'name-1',
          text: [
            {
              text: 'text-1',
              kind: 'kind-1',
            },
          ],
        },
      ],
    })
    const atomic = (type: string, value: unknown) => {
      return { type, nullable: true, default: value, ...attribute() }
    }
    const application = () => {
      return {
        schemas: [atomic('boolean', true), atomic('integer', 1), atomic('number', 1), atomic('string', 'string')],
        components: {
          schemas: {},
        },
        purpose: 'swagger',
        prefix: 'prefix-1',
      }
    }
    return application()
  }),
)
