import { Type, Static } from '@sinclair/typebox'

export type Number_Exclusive_Minimum = Static<typeof Number_Exclusive_Minimum>
export const Number_Exclusive_Minimum = Type.Number({
  $id: 'Number_Exclusive_Minimum',
  exclusiveMinimum: 8,
  description: 'Should validate a numeric value with a exclusive minimum constraint',
})
