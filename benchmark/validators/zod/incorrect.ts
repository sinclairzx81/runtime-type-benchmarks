import { Command } from '../../command/index'
import * as Cases from '../../schematics/incorrect'
import * as z from 'zod'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => {
    const Array_Number = z.array(z.number())
    return (value) => {
      const { success } = Array_Number.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => {
    const Array_Object = z.array(
      z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
    )
    return (value) => {
      const { success } = Array_Object.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Array_Union, iterations, results, () => {
    const Array_Union = z.array(
      z.union([
        z.object({
          type: z.literal('Vector2'),
          x: z.number(),
          y: z.number(),
        }),
        z.object({
          type: z.literal('Vector3'),
          x: z.number(),
          y: z.number(),
          z: z.number(),
        }),
        z.object({
          type: z.literal('Vector4'),
          x: z.number(),
          y: z.number(),
          z: z.number(),
          w: z.number(),
        }),
      ]),
    )
    return (value) => {
      const { success } = Array_Union.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => {
    const Composite_Intersect = z.object({
      A: z.literal('A'),
      B: z.literal('B'),
      C: z.literal('C'),
      D: z.literal('D'),
      E: z.literal('E'),
      F: z.literal('F'),
      G: z.literal('G'),
      H: z.literal('H'),
    })
    return (value) => {
      const { success } = Composite_Intersect.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, () => {
    const Composite_Union_Discriminated = z.union([
      z.object({
        type: z.literal('A'),
        value: z.number(),
      }),
      z.object({
        type: z.literal('B'),
        value: z.number(),
      }),
      z.object({
        type: z.literal('C'),
        value: z.number(),
      }),
      z.object({
        type: z.literal('D'),
        value: z.number(),
      }),
    ])
    return (value) => {
      const { success } = Composite_Union_Discriminated.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Literal, iterations, results, () => {
    const Composite_Union_Literal = z.union([z.literal('A'), z.literal('B'), z.literal('C'), z.literal('D')])
    return (value) => {
      const { success } = Composite_Union_Literal.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Composite_Union_Non_Discriminated, iterations, results, () => {
    const Composite_Union_Non_Discriminated = z.union([
      z.object({
        A: z.string(),
        B: z.string(),
      }),
      z.object({
        C: z.string(),
        D: z.string(),
      }),
    ])
    return (value) => {
      const { success } = Composite_Union_Non_Discriminated.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Literal_Boolean, iterations, results, () => {
    const Literal_Boolean = z.literal(true)
    return (value) => {
      const { success } = Literal_Boolean.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => {
    const Literal_Number = z.literal(42)
    return (value) => {
      const { success } = Literal_Number.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => {
    const Literal_String = z.literal('hello')
    return (value) => {
      const { success } = Literal_String.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Math_Box3D, iterations, results, () => {
    const Math_Box3D = z.object({
      scale: z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
      position: z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
      rotate: z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
      pivot: z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
    })
    return (value) => {
      const { success } = Math_Box3D.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => {
    const Math_Matrix4 = z.array(z.array(z.number()))
    return (value) => {
      const { success } = Math_Matrix4.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => {
    const Math_Mesh = z.object({
      vertices: z.array(z.number()),
      normals: z.array(z.number()),
      texoords: z.array(z.number()),
      indices: z.array(z.number().int()),
    })
    return (value) => {
      const { success } = Math_Mesh.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => {
    const Math_Vector3 = z.object({
      x: z.number(),
      y: z.number(),
      z: z.number(),
    })
    return (value) => {
      const { success } = Math_Vector3.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Number_Exclusive_Maximum, iterations, results, () => {
    const Number_Exclusive_Maximum = z.number().max(7)
    return (value) => {
      const { success } = Number_Exclusive_Maximum.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Number_Exclusive_Minimum, iterations, results, () => {
    const Number_Exclusive_Minimum = z.number().min(9)
    return (value) => {
      const { success } = Number_Exclusive_Minimum.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Number_Maximum, iterations, results, () => {
    const Number_Maximum = z.number().max(8)
    return (value) => {
      const { success } = Number_Maximum.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Number_Minimum, iterations, results, () => {
    const Number_Minimum = z.number().min(8)
    return (value) => {
      const { success } = Number_Minimum.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Number_Multiple_Of, iterations, results, () => {
    const Number_Multiple_Of = z.number().multipleOf(8)
    return (value) => {
      const { success } = Number_Multiple_Of.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Object_Loose, iterations, results, () => {
    const Object_Loose = z.object({
      A: z.number(),
      B: z.number(),
      C: z.number(),
      D: z.string(),
      E: z.string(),
      F: z.boolean(),
      G: z.object({
        H: z.string(),
        I: z.number(),
        J: z.boolean(),
      }),
    })
    return (value) => {
      const { success } = Object_Loose.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => {
    const Object_Partial = z.object({
      position: z
        .object({
          x: z.number(),
          y: z.number(),
          z: z.number(),
        })
        .optional(),
      rotation: z
        .object({
          x: z.number(),
          y: z.number(),
          z: z.number(),
        })
        .optional(),
      scale: z
        .object({
          x: z.number(),
          y: z.number(),
          z: z.number(),
        })
        .optional(),
    })
    return (value) => {
      const { success } = Object_Partial.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Object_Simple, iterations, results, () => {
    const Object_Simple = z.object({
      position: z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
      rotation: z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
      scale: z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
    })
    return (value) => {
      const { success } = Object_Simple.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Object_Strict, iterations, results, () => {
    const Object_Strict = z
      .object({
        A: z.number(),
        B: z.number(),
        C: z.number(),
        D: z.string(),
        E: z.string(),
        F: z.boolean(),
        G: z
          .object({
            H: z.string(),
            I: z.number(),
            J: z.boolean(),
          })
          .strict(),
      })
      .strict()
    return (value) => {
      const { success } = Object_Strict.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Primitive_Boolean, iterations, results, () => {
    const Primitive_Boolean = z.boolean()
    return (value) => {
      const { success } = Primitive_Boolean.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Primitive_Integer, iterations, results, () => {
    const Primitive_Integer = z.number().int()
    return (value) => {
      const { success } = Primitive_Integer.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Primitive_Null, iterations, results, () => {
    const Primitive_Null = z.null()
    return (value) => {
      const { success } = Primitive_Null.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Primitive_Number, iterations, results, () => {
    const Primitive_Number = z.number()
    return (value) => {
      const { success } = Primitive_Number.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Primitive_String, iterations, results, () => {
    const Primitive_String = z.string()
    return (value) => {
      const { success } = Primitive_String.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Primitive_Undefined, iterations, results, () => {
    const Primitive_Undefined = z.undefined()
    return (value) => {
      const { success } = Primitive_Undefined.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Recursive_Object, iterations, results, () => {
    const Recursive_Object: any = z.lazy(() =>
      z.object({
        id: z.string(),
        nodes: z.array(Recursive_Object),
      }),
    )
    return (value) => {
      const { success } = Recursive_Object.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Recursive_Union, iterations, results, () => {
    const Recursive_Union: any = z.lazy(() =>
      z.union([
        z.object({
          type: z.literal('Node'),
          nodes: z.array(Recursive_Union),
        }),
        z.object({
          type: z.literal('Leaf'),
          value: z.string(),
        }),
      ]),
    )
    return (value) => {
      const { success } = Recursive_Union.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.String_MaxLength, iterations, results, () => {
    const String_MaxLength = z.string().max(8)
    return (value) => {
      const { success } = String_MaxLength.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.String_MinLength, iterations, results, () => {
    const String_MinLength = z.string().min(8)
    return (value) => {
      const { success } = String_MinLength.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => {
    const Tuple_Number = z.tuple([z.number(), z.number(), z.number()])
    return (value) => {
      const { success } = Tuple_Number.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => {
    const Tuple_Object = z.tuple([
      z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
      z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
      z.object({
        x: z.number(),
        y: z.number(),
        z: z.number(),
      }),
    ])
    return (value) => {
      const { success } = Tuple_Object.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Tuple_Union_Literal, iterations, results, () => {
    const Tuple_Union_Literal = z.tuple([z.union([z.literal('A'), z.literal('B')]), z.union([z.literal('C'), z.literal('D')]), z.union([z.literal('E'), z.literal('F')])])
    return (value) => {
      const { success } = Tuple_Union_Literal.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Hierarchical, iterations, results, () => {
    const Typia_Array_Hierarchical = z.array(
      z.object({
        id: z.number(),
        serial: z.number(),
        name: z.string(),
        established_at: z.object({
          time: z.number(),
          zone: z.number(),
        }),
        departments: z.array(
          z.object({
            id: z.number(),
            code: z.string(),
            sales: z.number(),
            created_at: z.object({
              time: z.number(),
              zone: z.number(),
            }),
            employees: z.array(
              z.object({
                id: z.number(),
                name: z.string(),
                age: z.number(),
                grade: z.number(),
                employeed_at: z.object({
                  time: z.number(),
                  zone: z.number(),
                }),
              }),
            ),
          }),
        ),
      }),
    )
    return (value) => {
      const { success } = Typia_Array_Hierarchical.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Recursive, iterations, results, () => {
    const Typia_Array_Recursive: any = z.lazy(() =>
      z.object({
        children: z.array(Typia_Array_Recursive),
        id: z.number(),
        code: z.string(),
        sequence: z.number(),
        created_at: z.object({
          time: z.number(),
          zone: z.number(),
        }),
      }),
    )
    return (value) => {
      const { success } = Typia_Array_Recursive.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Typia_Array_Simple, iterations, results, () => {
    const Typia_Array_Simple = z.array(
      z.object({
        name: z.string(),
        email: z.string(),
        hobbies: z.union([
          z.array(
            z.object({
              name: z.string(),
              rank: z.number(),
            }),
          ),
          z.array(
            z.object({
              body: z.string(),
            }),
          ),
          z.array(z.string()),
        ]),
      }),
    )
    return (value) => {
      const { success } = Typia_Array_Simple.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Hierarchical, iterations, results, () => {
    const Typia_Object_Hierarchical = z.object({
      id: z.number(),
      channel: z.object({
        id: z.number(),
        code: z.string(),
        name: z.string(),
        sequence: z.number(),
        exclusive: z.boolean(),
        priority: z.number(),
        created_at: z.object({
          time: z.number(),
          zone: z.number(),
        }),
      }),
      member: z.union([
        z.null(),
        z.object({
          id: z.number(),
          account: z.object({
            id: z.number(),
            code: z.string(),
            created_at: z.object({
              time: z.number(),
              zone: z.number(),
            }),
          }),
          enterprise: z.union([
            z.null(),
            z.object({
              id: z.number(),
              account: z.object({
                id: z.number(),
                code: z.string(),
                created_at: z.object({
                  time: z.number(),
                  zone: z.number(),
                }),
              }),
              name: z.string(),
              grade: z.number(),
              created_at: z.object({
                time: z.number(),
                zone: z.number(),
              }),
            }),
          ]),
          emails: z.array(z.string()),
          created_at: z.object({
            time: z.number(),
            zone: z.number(),
          }),
          authorized: z.boolean(),
        }),
      ]),
      account: z.union([
        z.null(),
        z.object({
          id: z.number(),
          code: z.string(),
          created_at: z.object({
            time: z.number(),
            zone: z.number(),
          }),
        }),
      ]),
      href: z.string(),
      referrer: z.string(),
      ip: z.tuple([z.number(), z.number(), z.number(), z.number()]),
      created_at: z.object({
        time: z.number(),
        zone: z.number(),
      }),
    })
    return (value) => {
      const { success } = Typia_Object_Hierarchical.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Recursive, iterations, results, () => {
    const Typia_Object_Recursive: any = z.lazy(() =>
      z.object({
        parent: z.union([Typia_Object_Recursive, z.null()]),
        id: z.number(),
        code: z.string(),
        name: z.string(),
        sequence: z.number(),
        created_at: z.object({
          time: z.number(),
          zone: z.number(),
        }),
      }),
    )
    return (value) => {
      const { success } = Typia_Object_Recursive.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Union_Explicit, iterations, results, () => {
    const Typia_Object_Union_Explicit = z.array(
      z.union([
        z.object({
          x: z.number(),
          y: z.number(),
          type: z.literal('point'),
        }),
        z.object({
          p1: z.object({
            x: z.number(),
            y: z.number(),
          }),
          p2: z.object({
            x: z.number(),
            y: z.number(),
          }),
          type: z.literal('line'),
        }),
        z.object({
          p1: z.object({
            x: z.number(),
            y: z.number(),
          }),
          p2: z.object({
            x: z.number(),
            y: z.number(),
          }),
          p3: z.object({
            x: z.number(),
            y: z.number(),
          }),
          type: z.literal('triangle'),
        }),
        z.object({
          p1: z.object({
            x: z.number(),
            y: z.number(),
          }),
          p2: z.object({
            x: z.number(),
            y: z.number(),
          }),
          p3: z.object({
            x: z.number(),
            y: z.number(),
          }),
          p4: z.object({
            x: z.number(),
            y: z.number(),
          }),
          type: z.literal('rectangle'),
        }),
        z.object({
          points: z.array(
            z.object({
              x: z.number(),
              y: z.number(),
            }),
          ),
          type: z.literal('polyline'),
        }),
        z.object({
          outer: z.object({
            points: z.array(
              z.object({
                x: z.number(),
                y: z.number(),
              }),
            ),
          }),
          inner: z.array(
            z.object({
              points: z.array(
                z.object({
                  x: z.number(),
                  y: z.number(),
                }),
              ),
            }),
          ),
          type: z.literal('polygon'),
        }),
        z.object({
          centroid: z.object({
            x: z.number(),
            y: z.number(),
          }),
          radius: z.number(),
          type: z.literal('circle'),
        }),
      ]),
    )
    return (value) => {
      const { success } = Typia_Object_Union_Explicit.safeParse(value)
      return success
    }
  })
  Cases.Benchmark(Cases.Typia_Object_Union_Implicit, iterations, results, () => {
    const Typia_Object_Union_Implicit = z.array(
      z.union([
        z.object({
          x: z.number(),
          y: z.number(),
          slope: z.union([z.null(), z.number()]).optional(),
        }),
        z.object({
          p1: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          p2: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          distance: z.union([z.null(), z.number()]).optional(),
        }),
        z.object({
          p1: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          p2: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          p3: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          width: z.union([z.null(), z.number()]).optional(),
          height: z.union([z.null(), z.number()]).optional(),
          area: z.union([z.null(), z.number()]).optional(),
        }),
        z.object({
          p1: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          p2: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          p3: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          p4: z.object({
            x: z.number(),
            y: z.number(),
            slope: z.union([z.null(), z.number()]).optional(),
          }),
          width: z.union([z.null(), z.number()]).optional(),
          height: z.union([z.null(), z.number()]).optional(),
          area: z.union([z.null(), z.number()]).optional(),
        }),
        z.object({
          points: z.array(
            z.object({
              x: z.number(),
              y: z.number(),
              slope: z.union([z.null(), z.number()]).optional(),
            }),
          ),
          length: z.union([z.null(), z.number()]).optional(),
        }),
        z.object({
          outer: z.object({
            points: z.array(
              z.object({
                x: z.number(),
                y: z.number(),
                slope: z.union([z.null(), z.number()]).optional(),
              }),
            ),
            length: z.union([z.null(), z.number()]).optional(),
          }),
          inner: z
            .array(
              z.object({
                points: z.array(
                  z.object({
                    x: z.number(),
                    y: z.number(),
                    slope: z.union([z.null(), z.number()]).optional(),
                  }),
                ),
                length: z.union([z.null(), z.number()]).optional(),
              }),
            )
            .optional(),
          area: z.union([z.null(), z.number()]).optional(),
        }),
        z.object({
          centroid: z
            .object({
              x: z.number(),
              y: z.number(),
              slope: z.union([z.null(), z.number()]).optional(),
            })
            .optional(),
          radius: z.number(),
          area: z.union([z.null(), z.number()]).optional(),
        }),
      ]),
    )
    return (value) => {
      const { success } = Typia_Object_Union_Implicit.safeParse(value)
      return success
    }
  })
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
