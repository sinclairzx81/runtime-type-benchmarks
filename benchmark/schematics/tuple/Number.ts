import { Type, Static } from '@sinclair/typebox'

export type Tuple_Number = Static<typeof Tuple_Number>
export const Tuple_Number = Type.Tuple([Type.Number(), Type.Number(), Type.Number()], {
  $id: 'Tuple_Number',
})
