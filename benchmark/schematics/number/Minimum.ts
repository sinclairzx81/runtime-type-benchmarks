import { Type, Static } from '@sinclair/typebox'

export type Number_Minimum = Static<typeof Number_Minimum>
export const Number_Minimum = Type.Number({
  $id: 'Number_Minimum',
  minimum: 8,
})
