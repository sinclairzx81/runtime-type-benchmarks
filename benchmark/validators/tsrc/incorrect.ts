import * as Tsrc from 'ts-runtime-checks'
import { Command } from '../../command/index'
import * as Cases from '../../schematics/incorrect'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => (value) => Tsrc.is<Cases.Array_Number>(value))
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => (value) => Tsrc.is<Cases.Array_Object>(value))
  Cases.Benchmark(Cases.Boolean_Boolean, iterations, results, () => (value) => Tsrc.is<Cases.Boolean_Boolean>(value))
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => (value) => Tsrc.is<Cases.Composite_Intersect>(value))
  Cases.Benchmark(Cases.Composite_Union_String_Literal, iterations, results, () => (value) => Tsrc.is<Cases.Composite_Union_String_Literal>(value))
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => (value) => Tsrc.is<Cases.Literal_Number>(value))
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => (value) => Tsrc.is<Cases.Literal_String>(value))
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => (value) => Tsrc.is<Cases.Math_Matrix4>(value))
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => (value) => Tsrc.is<Cases.Math_Mesh>(value))
  Cases.Benchmark(Cases.Math_Transform3D, iterations, results, () => (value) => Tsrc.is<Cases.Math_Transform3D>(value))
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => (value) => Tsrc.is<Cases.Math_Vector3>(value))
  Cases.Benchmark(Cases.Null_Null, iterations, results, () => (value) => Tsrc.is<Cases.Null_Null>(value))
  Cases.Benchmark(Cases.Number_Number, iterations, results, () => (value) => Tsrc.is<Cases.Number_Number>(value))
  Cases.Benchmark(Cases.Object_Additional_Properties_True, iterations, results, () => (value) => Tsrc.is<Cases.Object_Additional_Properties_True>(value))
  Cases.Benchmark(Cases.Object_Object, iterations, results, () => (value) => Tsrc.is<Cases.Object_Object>(value))
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => (value) => Tsrc.is<Cases.Object_Partial>(value))
  Cases.Benchmark(Cases.String_String, iterations, results, () => (value) => Tsrc.is<Cases.String_String>(value))
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => (value) => Tsrc.is<Cases.Tuple_Number>(value))
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => (value) => Tsrc.is<Cases.Tuple_Object>(value))
  Cases.Benchmark(Cases.Typia_Array_Hierarchical, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Array_Hierarchical>(value))
  Cases.Benchmark(Cases.Typia_Object_Hierarchical, iterations, results, () => (value) => Tsrc.is<Cases.Typia_Object_Hierarchical>(value))
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
