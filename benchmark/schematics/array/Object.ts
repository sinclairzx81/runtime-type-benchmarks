import { Type, Static } from '@sinclair/typebox'

const T = Type.Object({
  x: Type.Number(),
  y: Type.Number(),
  z: Type.Number(),
})

export type Array_Object = Static<typeof Array_Object>
export const Array_Object = Type.Array(T, {
  $id: 'Array_Object',
})
