import { Type, Static } from '@sinclair/typebox'

export type Composite_Union_Non_Discriminated = Static<typeof Composite_Union_Non_Discriminated>
export const Composite_Union_Non_Discriminated = Type.Union(
  [
    Type.Object({
      A: Type.String(),
      B: Type.String(),
    }),
    Type.Object({
      C: Type.String(),
      D: Type.String(),
    }),
  ],
  {
    $id: 'Composite_Union_Non_Discriminated',
    description: 'Should validate a non discriminated union type',
  },
)
