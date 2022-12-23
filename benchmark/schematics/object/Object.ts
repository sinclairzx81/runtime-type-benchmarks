import { Type, Static } from '@sinclair/typebox'

export type Object_Object = Static<typeof Object_Object>
export const Object_Object = Type.Object(
  {
    A: Type.Object({
      A: Type.String(),
      B: Type.String(),
      C: Type.String(),
    }),
    B: Type.Object({
      A: Type.String(),
      B: Type.String(),
      C: Type.String(),
    }),
    C: Type.Object({
      A: Type.String(),
      B: Type.String(),
      C: Type.String(),
    }),
  },
  {
    $id: 'Object_Object',
    description: 'Should validate a two level nested object',
  },
)
