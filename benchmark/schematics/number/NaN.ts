import { Type, Static } from '@sinclair/typebox'

export type Number_NaN = Static<typeof Number_NaN>
export const Number_NaN = Type.Number({
  $id: 'Number_NaN',
  description: 'Should validate that numeric values of NaN are not numbers',
})
