import { Type, Static } from '@sinclair/typebox'

export type Math_Box3D = Static<typeof Math_Box3D>
export const Math_Box3D = Type.Object(
  {
    scale: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    position: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    rotate: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    pivot: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
  },
  {
    $id: 'Math_Box3D',
  },
)
