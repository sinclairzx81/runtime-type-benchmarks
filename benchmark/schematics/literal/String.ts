import { Type, Static } from '@sinclair/typebox'

export type Literal_String = Static<typeof Literal_String>
export const Literal_String = Type.Literal('hello', { $id: 'Literal_String' })
