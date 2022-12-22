import { Type, Static } from '@sinclair/typebox'

export type Object_Strict = Static<typeof Object_Strict>
export const Object_Strict = Type.Object(
  {
    A: Type.Number(),
    B: Type.Number(),
    C: Type.Number(),
    D: Type.String(),
    E: Type.String(),
    F: Type.Boolean(),
    G: Type.Object(
      {
        H: Type.String(),
        I: Type.Number(),
        J: Type.Boolean(),
      },
      { additionalProperties: false },
    ),
  },
  {
    additionalProperties: false,
    $id: 'Object_Strict',
  },
)
