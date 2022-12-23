import { Type, Static } from '@sinclair/typebox'

export type Number_Integer = Static<typeof Number_Integer>
export const Number_Integer = Type.Integer({ $id: 'Number_Integer' })
