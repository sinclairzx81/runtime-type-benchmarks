import { Type, Static } from '@sinclair/typebox'

export type Object_RTTB_Loose = Static<typeof Object_RTTB_Loose>
export const Object_RTTB_Loose = Type.Object(
  {
    number: Type.Number(),
    negNumber: Type.Number(),
    maxNumber: Type.Number(),
    string: Type.String(),
    longString: Type.String(),
    boolean: Type.Boolean(),
    deeplyNested: Type.Object({
      foo: Type.String(),
      num: Type.Number(),
      bool: Type.Boolean(),
    }),
  },
  {
    description: 'Moltar Runtime Type Benchmark Loose Variant',
    $id: 'Object_RTTB_Loose',
  },
)
