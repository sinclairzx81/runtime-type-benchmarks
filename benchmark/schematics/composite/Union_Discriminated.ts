import { Type, Static } from '@sinclair/typebox'

export type Composite_Union_Discriminated = Static<typeof Composite_Union_Discriminated>
export const Composite_Union_Discriminated = Type.Union(
  [
    Type.Object({ type: Type.Literal('A'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('B'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('C'), value: Type.Number() }),
    Type.Object({ type: Type.Literal('D'), value: Type.Number() }),
  ],
  {
    $id: 'Composite_Union_Discriminated',
    description: 'Should validate a discriminated union type',
  },
)
