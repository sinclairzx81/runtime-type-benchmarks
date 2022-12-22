import { Type, Static } from '@sinclair/typebox'

export type Primitive_String = Static<typeof Primitive_String>
export const Primitive_String = Type.String({ $id: 'Primitive_String' })
