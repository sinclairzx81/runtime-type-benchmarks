import { Type, Static } from '@sinclair/typebox'

export type Number_Number = Static<typeof Number_Number>
export const Number_Number = Type.Number({
  $id: 'Number_Number',
  description: 'Should validate a number',
})
