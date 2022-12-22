import { Type, Static } from '@sinclair/typebox'

export type Math_Vector3 = Static<typeof Math_Vector3>
export const Math_Vector3 = Type.Object(
  {
    x: Type.Number(),
    y: Type.Number(),
    z: Type.Number(),
  },
  {
    $id: 'Math_Vector3',
  },
)
