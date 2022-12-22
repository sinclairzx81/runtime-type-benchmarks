import { Type, Static } from '@sinclair/typebox'

const Timestamp = Type.Object({
  time: Type.Number(),
  zone: Type.Number(),
})

const Employee = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  age: Type.Number(),
  grade: Type.Number(),
  employeed_at: Timestamp,
})

const Department = Type.Object({
  id: Type.Number(),
  code: Type.String(),
  sales: Type.Number(),
  created_at: Timestamp,
  employees: Type.Array(Employee),
})

const Company = Type.Object({
  id: Type.Number(),
  serial: Type.Number(),
  name: Type.String(),
  established_at: Timestamp,
  departments: Type.Array(Department),
})

export type Typia_Array_Hierarchical = Static<typeof Typia_Array_Hierarchical>
export const Typia_Array_Hierarchical = Type.Array(Company, {
  $id: 'Typia_Array_Hierarchical',
})
