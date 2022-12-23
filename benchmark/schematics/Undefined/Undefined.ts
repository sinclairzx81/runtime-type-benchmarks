import { Type, Static } from '@sinclair/typebox'

export type Undefined_Undefined = Static<typeof Undefined_Undefined>
export const Undefined_Undefined = Type.Undefined({
  $id: 'Undefined_Undefined',
  description: 'Should validate a literal undefined value',
})
