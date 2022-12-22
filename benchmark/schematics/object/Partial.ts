import { Type, Static } from '@sinclair/typebox'

export type Object_Partial = Static<typeof Object_Partial>
export const Object_Partial = Type.Partial(
  Type.Object(
    {
      position: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
      rotation: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
      scale: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    },
    {
      $id: 'Object_Partial',
    },
  ),
)
