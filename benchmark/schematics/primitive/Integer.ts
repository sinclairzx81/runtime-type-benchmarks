import { Type, Static } from '@sinclair/typebox'

export type Primitive_Integer = Static<typeof Primitive_Integer>
export const Primitive_Integer = Type.Integer({ $id: 'Primitive_Integer' })
