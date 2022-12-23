import { Type, Static } from '@sinclair/typebox'

export type Tuple_Union_String_Literal = Static<typeof Tuple_Union_String_Literal>
// prettier-ignore
export const Tuple_Union_String_Literal = Type.Tuple([
  Type.Union([
    Type.Literal('A'),
    Type.Literal('B')
  ]),
  Type.Union([
    Type.Literal('C'),
    Type.Literal('D')
  ]),
  Type.Union(
    [Type.Literal('E'),
    Type.Literal('F')
    ])
], {
  $id: 'Tuple_Union_String_Literal',
  description: 'Should validate a 3 tuple of union string literals'
})
