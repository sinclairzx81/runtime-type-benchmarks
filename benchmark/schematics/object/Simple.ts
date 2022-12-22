import { Type, Static } from '@sinclair/typebox'

export type Object_Simple = Static<typeof Object_Simple>
export const Object_Simple = Type.Object(
  {
    position: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    rotation: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
    scale: Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }),
  },
  {
    $id: 'Object_Simple',
  },
)
