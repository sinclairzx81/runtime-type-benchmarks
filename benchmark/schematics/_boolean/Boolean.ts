import { Type, Static } from '@sinclair/typebox'

export type Boolean_Boolean = Static<typeof Boolean_Boolean>
export const Boolean_Boolean = Type.Boolean({
  $id: 'Boolean_Boolean',
  description: 'Should validate a boolean value',
})
