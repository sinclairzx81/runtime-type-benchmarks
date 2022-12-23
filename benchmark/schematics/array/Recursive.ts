import { Type, Static } from '@sinclair/typebox'

// prettier-ignore
const T = Type.Recursive((Node) => Type.Object({
  id: Type.String(),
  nodes: Type.Array(Node),
}))

export type Array_Recursive = Static<typeof Array_Recursive>
export const Array_Recursive = Type.Array(T, {
  $id: 'Array_Recursive',
  description: 'Should validate an array of recursive objects',
})
