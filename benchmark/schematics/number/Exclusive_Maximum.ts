import { Type, Static } from '@sinclair/typebox'

export type Number_Exclusive_Maximum = Static<typeof Number_Exclusive_Maximum>
export const Number_Exclusive_Maximum = Type.Number({
  $id: 'Number_Exclusive_Maximum',
  exclusiveMaximum: 8,
})
