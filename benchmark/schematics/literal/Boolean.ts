import { Type, Static } from '@sinclair/typebox'

export type Literal_Boolean = Static<typeof Literal_Boolean>
export const Literal_Boolean = Type.Literal(true, { $id: 'Literal_Boolean' })
