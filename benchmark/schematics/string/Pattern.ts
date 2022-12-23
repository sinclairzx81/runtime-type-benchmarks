import { Type, Static } from '@sinclair/typebox'

export type String_Pattern = Static<typeof String_Pattern>
export const String_Pattern = Type.String({
  $id: 'String_Pattern',
  pattern: '12343567890'
})
