import { Type, Static } from '@sinclair/typebox'

export type Primitive_RegEx = Static<typeof Primitive_RegEx>
export const Primitive_RegEx = Type.RegEx(/hello/, { $id: 'Primitive_RegEx' })
