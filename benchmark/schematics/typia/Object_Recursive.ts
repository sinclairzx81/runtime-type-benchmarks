import { Type, Static } from '@sinclair/typebox'

const Timestamp = Type.Object({
  time: Type.Number(),
  zone: Type.Number(),
})

export type Typia_Object_Recursive = Static<typeof Typia_Object_Recursive>
export const Typia_Object_Recursive = Type.Recursive(
  (Department) =>
    Type.Object({
      parent: Type.Union([Department, Type.Null()]),
      id: Type.Number(),
      code: Type.String(),
      name: Type.String(),
      sequence: Type.Number(),
      created_at: Timestamp,
    }),
  {
    $id: 'Typia_Object_Recursive',
  },
)
