import { Type, Static } from '@sinclair/typebox'

const Vector = Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() })

export type Math_Transform3D = Static<typeof Math_Transform3D>
export const Math_Transform3D = Type.Object(
  {
    scale: Vector,
    position: Vector,
    rotate: Vector,
    pivot: Vector,
  },
  {
    $id: 'Math_Transform3D',
    description: 'Should validate a transform 3D object type',
  },
)
