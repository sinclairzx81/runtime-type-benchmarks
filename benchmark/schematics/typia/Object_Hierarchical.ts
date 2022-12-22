import { Type, Static } from '@sinclair/typebox'

const Timestamp = Type.Object({
  time: Type.Number(),
  zone: Type.Number(),
})

const Channel = Type.Object({
  id: Type.Number(),
  code: Type.String(),
  name: Type.String(),
  sequence: Type.Number(),
  exclusive: Type.Boolean(),
  priority: Type.Number(),
  created_at: Timestamp,
})

const Account = Type.Object({
  id: Type.Number(),
  code: Type.String(),
  created_at: Timestamp,
})

const Enterprise = Type.Object({
  id: Type.Number(),
  account: Account,
  name: Type.String(),
  grade: Type.Number(),
  created_at: Timestamp,
})

const Member = Type.Object({
  id: Type.Number(),
  account: Account,
  enterprise: Type.Union([Type.Null(), Enterprise]),
  emails: Type.Array(Type.String()),
  created_at: Timestamp,
  authorized: Type.Boolean(),
})

export type Typia_Object_Hierarchical = Static<typeof Typia_Object_Hierarchical>
export const Typia_Object_Hierarchical = Type.Object(
  {
    id: Type.Number(),
    channel: Channel,
    member: Type.Union([Type.Null(), Member]),
    account: Type.Union([Type.Null(), Account]),
    href: Type.String(),
    referrer: Type.String(),
    ip: Type.Tuple([Type.Number(), Type.Number(), Type.Number(), Type.Number()]),
    created_at: Timestamp,
  },
  {
    $id: 'Typia_Object_Hierarchical',
  },
)
