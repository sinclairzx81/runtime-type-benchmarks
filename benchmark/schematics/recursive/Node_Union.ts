import { Type, Static } from '@sinclair/typebox'

export type Recursive_Union_Node = Static<typeof Recursive_Union_Node>
// prettier-ignore
export const Recursive_Union_Node = Type.Recursive((Recursive_Union_Node) => Type.Union([
  Type.Object({
    type: Type.Literal('Node'),
    nodes: Type.Array(Recursive_Union_Node),
  }),
  Type.Object({
    type: Type.Literal('Leaf'),
    value: Type.String(),
  }),
]), {
  $id: 'Recursive_Union_Node',
})
