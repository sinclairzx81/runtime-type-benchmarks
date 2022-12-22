import { Type, Static } from '@sinclair/typebox'

export type Tuple_Object = Static<typeof Tuple_Object>
export const Tuple_Object = Type.Tuple(
  [Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }), Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() }), Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() })],
  {
    $id: 'Tuple_Object',
  },
)
