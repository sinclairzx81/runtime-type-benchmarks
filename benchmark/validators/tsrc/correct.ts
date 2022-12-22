import * as Tsrc from 'ts-runtime-checks'
import { Command } from '../../command/index'
import * as Cases from '../../schematics/correct'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => (value) => Tsrc.is<Cases.Array_Number>(value))
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => (value) => Tsrc.is<Cases.Array_Object>(value))
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => (value) => Tsrc.is<Cases.Composite_Intersect>(value))
  Cases.Benchmark(Cases.Composite_Union_Literal, iterations, results, () => (value) => Tsrc.is<Cases.Composite_Union_Literal>(value))
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => (value) => Tsrc.is<Cases.Literal_Number>(value))
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => (value) => Tsrc.is<Cases.Literal_String>(value))
  Cases.Benchmark(Cases.Math_Box3D, iterations, results, () => (value) => Tsrc.is<Cases.Math_Box3D>(value))
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => (value) => Tsrc.is<Cases.Math_Matrix4>(value))
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => (value) => Tsrc.is<Cases.Math_Mesh>(value))
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => (value) => Tsrc.is<Cases.Math_Vector3>(value))
  Cases.Benchmark(Cases.Object_Loose, iterations, results, () => (value) => Tsrc.is<Cases.Object_Loose>(value))
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => (value) => Tsrc.is<Cases.Object_Partial>(value))
  Cases.Benchmark(Cases.Object_Simple, iterations, results, () => (value) => Tsrc.is<Cases.Object_Simple>(value))
  Cases.Benchmark(Cases.Object_Strict, iterations, results, () => (value) => Tsrc.is<Cases.Object_Strict>(value))
  Cases.Benchmark(Cases.Primitive_Boolean, iterations, results, () => (value) => Tsrc.is<Cases.Primitive_Boolean>(value))
  Cases.Benchmark(Cases.Primitive_Null, iterations, results, () => (value) => Tsrc.is<Cases.Primitive_Null>(value))
  Cases.Benchmark(Cases.Primitive_Number, iterations, results, () => (value) => Tsrc.is<Cases.Primitive_Number>(value))
  Cases.Benchmark(Cases.Primitive_String, iterations, results, () => (value) => Tsrc.is<Cases.Primitive_String>(value))
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => (value) => Tsrc.is<Cases.Tuple_Number>(value))
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => (value) => Tsrc.is<Cases.Tuple_Object>(value))
  Cases.Benchmark(Cases.Typia_Array_Hierarchical, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Array_Hierarchical>(value))
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Explicit, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Array_Recursive_Union_Explicit>(value))
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Implicit, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Array_Recursive_Union_Implicit>(value))
  Cases.Benchmark(Cases.Typia_Array_Simple, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Array_Simple>(value))
  Cases.Benchmark(Cases.Typia_Object_Hierarchical, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Object_Hierarchical>(value))
  Cases.Benchmark(Cases.Typia_Object_Union_Explicit, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Object_Union_Explicit>(value))
  Cases.Benchmark(Cases.Typia_Object_Union_Implicit, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Object_Union_Implicit>(value))
  Cases.Benchmark(Cases.Typia_Ultimate_Union, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Ultimate_Union>(value))
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
