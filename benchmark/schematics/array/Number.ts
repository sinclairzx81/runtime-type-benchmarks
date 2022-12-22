import { Type, Static } from '@sinclair/typebox'

const T = Type.Number()

export type Array_Number = Static<typeof Array_Number>
export const Array_Number = Type.Array(T, {
  $id: 'Array_Number',
})
