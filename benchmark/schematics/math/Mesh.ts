import { Type, Static } from '@sinclair/typebox'

export type Math_Mesh = Static<typeof Math_Mesh>
export const Math_Mesh = Type.Object(
  {
    vertices: Type.Array(Type.Number()),
    normals: Type.Array(Type.Number()),
    texoords: Type.Array(Type.Number()),
    indices: Type.Array(Type.Integer()),
  },
  {
    $id: 'Math_Mesh',
  },
)
