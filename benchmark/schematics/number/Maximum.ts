import { Type, Static } from '@sinclair/typebox'

export type Number_Maximum = Static<typeof Number_Maximum>
export const Number_Maximum = Type.Number({
  $id: 'Number_Maximum',
  maximum: 8,
})
