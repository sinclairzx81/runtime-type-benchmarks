import { Type, Static } from '@sinclair/typebox'

export type Literal_Number = Static<typeof Literal_Number>
export const Literal_Number = Type.Literal(42, {
  $id: 'Literal_Number',
  description: 'Should validate a literal number value',
})
