import { Type, Static } from '@sinclair/typebox'

const Point = Type.Object({
  x: Type.Number(),
  y: Type.Number(),
  slope: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
})
const Line = Type.Object({
  p1: Point,
  p2: Point,
  distance: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
})
const Triangle = Type.Object({
  p1: Point,
  p2: Point,
  p3: Point,
  width: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
  height: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
  area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
})
const Rectangle = Type.Object({
  p1: Point,
  p2: Point,
  p3: Point,
  p4: Point,
  width: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
  height: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
  area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
})
const Polyline = Type.Object({
  points: Type.Array(Point),
  length: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
})
const Polygon = Type.Object({
  outer: Polyline,
  inner: Type.Optional(Type.Array(Polyline)),
  area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
})
const Circle = Type.Object({
  centroid: Type.Optional(Point),
  radius: Type.Number(),
  area: Type.Optional(Type.Union([Type.Null(), Type.Number()])),
})

const Union = Type.Union([Point, Line, Triangle, Rectangle, Polyline, Polygon, Circle])

export type Typia_Object_Union_Implicit = Static<typeof Typia_Object_Union_Implicit>
export const Typia_Object_Union_Implicit = Type.Array(Union, {
  $id: 'Typia_Object_Union_Implicit',
})
