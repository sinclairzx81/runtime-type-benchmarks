import { Type, Static } from '@sinclair/typebox'

export type Object_Additional_Properties_Boolean = Static<typeof Object_Additional_Properties_Boolean>
export const Object_Additional_Properties_Boolean = Type.Object(
  {
    A: Type.String(),
    B: Type.String(),
    C: Type.String(),
    D: Type.String(),
  },
  {
    $id: 'Object_Additional_Properties_Boolean',
    additionalProperties: Type.Boolean(),
    description: 'Should allow additional properties, but only with values of type boolean',
  },
)
