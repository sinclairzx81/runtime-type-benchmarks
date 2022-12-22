import { Type, Static } from '@sinclair/typebox'

export type Object_Loose = Static<typeof Object_Loose>
export const Object_Loose = Type.Object(
  {
    A: Type.Number(),
    B: Type.Number(),
    C: Type.Number(),
    D: Type.String(),
    E: Type.String(),
    F: Type.Boolean(),
    G: Type.Object({
      H: Type.String(),
      I: Type.Number(),
      J: Type.Boolean(),
    }),
  },
  {
    $id: 'Object_Loose',
  },
)
