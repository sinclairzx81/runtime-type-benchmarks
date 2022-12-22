import { Type, Static } from '@sinclair/typebox'

export type Number_Multiple_Of = Static<typeof Number_Multiple_Of>
export const Number_Multiple_Of = Type.Number({
  $id: 'Number_Multiple_Of',
  multipleOf: 8,
})
