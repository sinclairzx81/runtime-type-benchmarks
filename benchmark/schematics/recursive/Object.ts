import { Type, Static } from '@sinclair/typebox'

export type Recursive_Object = Static<typeof Recursive_Object>
export const Recursive_Object = Type.Recursive(
  (Recursive) =>
    Type.Object({
      id: Type.String(),
      nodes: Type.Array(Recursive),
    }),
  {
    $id: 'Recursive_Object',
  },
)
