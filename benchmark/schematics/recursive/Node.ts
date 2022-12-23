import { Type, Static } from '@sinclair/typebox'

export type Recursive_Node = Static<typeof Recursive_Node>
// prettier-ignore
export const Recursive_Node = Type.Recursive((Recursive_Node) => Type.Object({
  id: Type.String(),
  nodes: Type.Array(Recursive_Node),
}), {
  $id: 'Recursive_Node',
  description: 'Should validate a recursive object'
})
