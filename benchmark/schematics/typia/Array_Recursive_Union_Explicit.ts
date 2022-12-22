import { TSchema, Type, Static } from '@sinclair/typebox'

const ImageFile = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  path: Type.String(),
  width: Type.Number(),
  height: Type.Number(),
  url: Type.String(),
  size: Type.Number(),
  type: Type.Literal('file'),
  extension: Type.Literal('jpg'),
})

const TextFile = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  path: Type.String(),
  size: Type.Number(),
  content: Type.String(),
  type: Type.Literal('file'),
  extension: Type.Literal('txt'),
})

const ZipFile = Type.Object({
  id: Type.Number(),
  name: Type.String(),
  path: Type.String(),
  size: Type.Number(),
  count: Type.Number(),
  type: Type.Literal('file'),
  extension: Type.Literal('zip'),
})

const Shortcut = <T extends TSchema>(bucket: T) =>
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
    path: Type.String(),
    target: bucket,
    type: Type.Literal('file'),
    extension: Type.Literal('lnk'),
  })

const Directory = (bucket: TSchema) =>
  Type.Object({
    id: Type.Number(),
    name: Type.String(),
    path: Type.String(),
    children: Type.Array(bucket),
    type: Type.Literal('directory'),
  })

const Bucket = Type.Recursive((Bucket) => Type.Union([ImageFile, TextFile, ZipFile, Shortcut(Bucket), Directory(Bucket)]))

export type Typia_Array_Recursive_Union_Explicit = Static<typeof Typia_Array_Recursive_Union_Explicit>
export const Typia_Array_Recursive_Union_Explicit = Type.Array(Bucket, {
  $id: 'Typia_Array_Recursive_Union_Explicit',
})
