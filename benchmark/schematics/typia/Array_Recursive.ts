import { Type, Static } from '@sinclair/typebox'

const Timestamp = Type.Object({
  time: Type.Number(),
  zone: Type.Number(),
})

export type Typia_Array_Recursive = Static<typeof Typia_Array_Recursive>
export const Typia_Array_Recursive = Type.Recursive(
  (Category) =>
    Type.Object({
      children: Type.Array(Category),
      id: Type.Number(),
      code: Type.String(),
      sequence: Type.Number(),
      created_at: Timestamp,
    }),
  {
    $id: 'Typia_Array_Recursive',
  },
)
