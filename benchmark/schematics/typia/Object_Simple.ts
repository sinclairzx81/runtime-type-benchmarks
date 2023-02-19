import { Type, Static } from '@sinclair/typebox'

const Point3D = Type.Object({
  x: Type.Number(),
  y: Type.Number(),
  z: Type.Number(),
})

export type Typia_Object_Simple = Static<typeof Typia_Object_Simple>
export const Typia_Object_Simple = Type.Object(
  {
    scale: Point3D,
    position: Point3D,
    rotate: Point3D,
    pivot: Point3D,
  },
  {
    $id: 'Typia_Object_Simple',
    description: 'Should validate the Typia_Object_Simple structure',
  },
)
