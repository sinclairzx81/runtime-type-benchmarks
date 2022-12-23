import { Type, Static } from '@sinclair/typebox'

export type Literal_String = Static<typeof Literal_String>
export const Literal_String = Type.Literal('hello', {
  $id: 'Literal_String',
  description: 'Should validate a literal string value',
})
