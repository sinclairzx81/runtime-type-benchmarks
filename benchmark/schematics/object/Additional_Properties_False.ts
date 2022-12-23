import { Type, Static } from '@sinclair/typebox'

export type Object_Additional_Properties_False = Static<typeof Object_Additional_Properties_False>
export const Object_Additional_Properties_False = Type.Object(
  {
    A: Type.String(),
    B: Type.String(),
    C: Type.String(),
    D: Type.String(),
  },
  {
    $id: 'Object_Additional_Properties_False',
    additionalProperties: false,
  },
)
