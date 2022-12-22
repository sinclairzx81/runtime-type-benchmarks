import { Type, Static } from '@sinclair/typebox'

export type String_MinLength = Static<typeof String_MinLength>
export const String_MinLength = Type.String({
  $id: 'String_MinLength',
  minLength: 8,
})
