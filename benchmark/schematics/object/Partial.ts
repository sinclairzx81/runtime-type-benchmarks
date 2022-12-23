import { Type, Static } from '@sinclair/typebox'

export type Object_Partial = Static<typeof Object_Partial>
export const Object_Partial = Type.Partial(
  Type.Object({
    A: Type.Partial(
      Type.Object({
        A: Type.String(),
        B: Type.String(),
        C: Type.String(),
      }),
    ),
    B: Type.Partial(
      Type.Object({
        A: Type.String(),
        B: Type.String(),
        C: Type.String(),
      }),
    ),
    C: Type.Partial(
      Type.Object({
        A: Type.String(),
        B: Type.String(),
        C: Type.String(),
      }),
    ),
  }),
  {
    $id: 'Object_Partial',
    description: 'Should allow partially applied objects',
  },
)
