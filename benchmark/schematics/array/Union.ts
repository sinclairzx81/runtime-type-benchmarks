import { Type, Static } from '@sinclair/typebox'

const T = Type.Union([
  Type.Object({
    type: Type.Literal('Vector2'),
    x: Type.Number(),
    y: Type.Number(),
  }),
  Type.Object({
    type: Type.Literal('Vector3'),
    x: Type.Number(),
    y: Type.Number(),
    z: Type.Number(),
  }),
  Type.Object({
    type: Type.Literal('Vector4'),
    x: Type.Number(),
    y: Type.Number(),
    z: Type.Number(),
    w: Type.Number(),
  }),
])

export type Array_Union = Static<typeof Array_Union>
export const Array_Union = Type.Array(T, {
  $id: 'Array_Union',
})
