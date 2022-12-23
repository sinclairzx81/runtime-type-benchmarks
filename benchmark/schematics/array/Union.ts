import { Type, Static } from '@sinclair/typebox'

const T = Type.Union([
  Type.Object({
    type: Type.Literal('BitVector2'),
    x: Type.Boolean(),
    y: Type.Boolean(),
  }),
  Type.Object({
    type: Type.Literal('BitVector3'),
    x: Type.Boolean(),
    y: Type.Boolean(),
    z: Type.Boolean(),
  }),
  Type.Object({
    type: Type.Literal('BitVector4'),
    x: Type.Boolean(),
    y: Type.Boolean(),
    z: Type.Boolean(),
    w: Type.Boolean(),
  }),
])

export type Array_Union = Static<typeof Array_Union>
export const Array_Union = Type.Array(T, {
  $id: 'Array_Union',
  description: 'Should validate an array of union objects',
})
