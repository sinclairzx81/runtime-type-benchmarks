import { Type, Static } from '@sinclair/typebox'

const T = Type.Recursive(
  (Recursive) =>
    Type.Object({
      id: Type.String(),
      nodes: Type.Array(Recursive),
    }),
  {
    $id: 'Recursive_Object',
  },
)

export type Array_Recursive = Static<typeof Array_Recursive>
export const Array_Recursive = Type.Array(T, {
  $id: 'Array_Recursive',
})
