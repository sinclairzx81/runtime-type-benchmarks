import { Type, Static } from '@sinclair/typebox'

export type Object_Additional_Properties_True = Static<typeof Object_Additional_Properties_True>
export const Object_Additional_Properties_True = Type.Object(
  {
    A: Type.String(),
    B: Type.String(),
    C: Type.String(),
    D: Type.String(),
  },
  {
    $id: 'Object_Additional_Properties_True',
  },
)
