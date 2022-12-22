import { Type, Static } from '@sinclair/typebox'

export type Composite_Union_Literal = Static<typeof Composite_Union_Literal>
// prettier-ignore
export const Composite_Union_Literal = Type.Union([
  Type.Literal('A'), 
  Type.Literal('B'), 
  Type.Literal('C'), 
  Type.Literal('D')
], {
  $id: 'Composite_Union_Literal'
})
