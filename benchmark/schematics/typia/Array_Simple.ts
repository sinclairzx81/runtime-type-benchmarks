import { Type, Static } from '@sinclair/typebox'

const Hobby = Type.Object({
  name: Type.String(),
  rank: Type.Number(),
})

const Content = Type.Object({
  body: Type.String(),
})

const Person = Type.Object({
  name: Type.String(),
  email: Type.String(),
  hobbies: Type.Union([Type.Array(Hobby), Type.Array(Content), Type.Array(Type.String())]),
})

export type Typia_Array_Simple = Static<typeof Typia_Array_Simple>
export const Typia_Array_Simple = Type.Array(Person, {
  $id: 'Typia_Array_Simple',
})
