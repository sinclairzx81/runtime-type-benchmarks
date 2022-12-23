import { Type, Static } from '@sinclair/typebox'

const Vector = Type.Object({ x: Type.Number(), y: Type.Number(), z: Type.Number() })

export type Tuple_Object = Static<typeof Tuple_Object>
// prettier-ignore
export const Tuple_Object = Type.Tuple([
  Vector, 
  Vector, 
  Vector
], {
    $id: 'Tuple_Object',
    description: 'Should validate a 3 tuple of vector objects'
})
