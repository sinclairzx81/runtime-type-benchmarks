import { Type, Static } from '@sinclair/typebox'

export type Primitive_Number = Static<typeof Primitive_Number>
export const Primitive_Number = Type.Number({ $id: 'Primitive_Number' })
