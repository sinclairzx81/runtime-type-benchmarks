import { Type, Static } from '@sinclair/typebox'

export type Tuple_Union_Literal = Static<typeof Tuple_Union_Literal>
export const Tuple_Union_Literal = Type.Tuple([Type.Union([Type.Literal('A'), Type.Literal('B')]), Type.Union([Type.Literal('C'), Type.Literal('D')]), Type.Union([Type.Literal('E'), Type.Literal('F')])], {
  $id: 'Tuple_Union_Literal',
})
