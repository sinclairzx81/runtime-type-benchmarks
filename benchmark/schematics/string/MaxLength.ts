import { Type, Static } from '@sinclair/typebox'

export type String_MaxLength = Static<typeof String_MaxLength>
export const String_MaxLength = Type.String({
  $id: 'String_MaxLength',
  maxLength: 8,
})
