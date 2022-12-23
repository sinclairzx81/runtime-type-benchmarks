import { Type, Static } from '@sinclair/typebox'

const T = Type.Object({
  x: Type.Boolean(),
  y: Type.Boolean(),
  z: Type.Boolean(),
})

export type Array_Object = Static<typeof Array_Object>
export const Array_Object = Type.Array(T, {
  $id: 'Array_Object',
  description: 'Should validate an array of objects',
})
