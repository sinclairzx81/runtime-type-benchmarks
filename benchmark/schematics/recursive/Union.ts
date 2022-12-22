import { Type, Static } from '@sinclair/typebox'

export type Recursive_Union = Static<typeof Recursive_Union>
export const Recursive_Union = Type.Recursive(
  (Node) =>
    Type.Union([
      Type.Object({
        type: Type.Literal('Node'),
        nodes: Type.Array(Node),
      }),
      Type.Object({
        type: Type.Literal('Leaf'),
        value: Type.String(),
      }),
    ]),
  {
    $id: 'Recursive_Union',
  },
)
