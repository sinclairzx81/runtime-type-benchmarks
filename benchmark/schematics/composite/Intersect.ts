import { Type, Static } from '@sinclair/typebox'

export type Composite_Intersect = Static<typeof Composite_Intersect>
export const Composite_Intersect = Type.Intersect(
  [
    Type.Object({ A: Type.Literal('A'), B: Type.Literal('B') }),
    Type.Object({ C: Type.Literal('C'), D: Type.Literal('D') }),
    Type.Object({ E: Type.Literal('E'), F: Type.Literal('F') }),
    Type.Object({ G: Type.Literal('G'), H: Type.Literal('H') }),
  ],
  {
    $id: 'Composite_Intersect',
    description: 'Should validate an intersected object',
  },
)
