import { Type, Static } from '@sinclair/typebox'

export type Math_Matrix4 = Static<typeof Math_Matrix4>
export const Math_Matrix4 = Type.Array(Type.Array(Type.Number()), {
  $id: 'Math_Matrix4',
})
