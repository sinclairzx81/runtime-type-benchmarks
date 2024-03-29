import Typia from 'typia'
import { Command } from '../../command/index'
import * as Cases from '../../schematics/incorrect'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => (value) => Typia.is<Cases.Array_Number>(value))
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => (value) => Typia.is<Cases.Array_Object>(value))
  Cases.Benchmark(Cases.Array_Recursive, iterations, results, () => (value) => Typia.is<Cases.Array_Recursive>(value))
  Cases.Benchmark(Cases.Array_Union, iterations, results, () => (value) => Typia.is<Cases.Array_Union>(value))
  Cases.Benchmark(Cases.Boolean_Boolean, iterations, results, () => (value) => Typia.is<Cases.Boolean_Boolean>(value))
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => (value) => Typia.is<Cases.Composite_Intersect>(value))
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, () => (value) => Typia.is<Cases.Composite_Union_Discriminated>(value))
  Cases.Benchmark(Cases.Composite_Union_Non_Discriminated, iterations, results, () => (value) => Typia.is<Cases.Composite_Union_Non_Discriminated>(value))
  Cases.Benchmark(Cases.Composite_Union_String_Literal, iterations, results, () => (value) => Typia.is<Cases.Composite_Union_String_Literal>(value))
  Cases.Benchmark(Cases.Literal_Boolean, iterations, results, () => (value) => Typia.is<Cases.Literal_Boolean>(value))
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => (value) => Typia.is<Cases.Literal_Number>(value))
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => (value) => Typia.is<Cases.Literal_String>(value))
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => (value) => Typia.is<Cases.Math_Matrix4>(value))
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => (value) => Typia.is<Cases.Math_Mesh>(value))
  Cases.Benchmark(Cases.Math_Transform3D, iterations, results, () => (value) => Typia.is<Cases.Math_Transform3D>(value))
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => (value) => Typia.is<Cases.Math_Vector3>(value))
  Cases.Benchmark(Cases.Null_Null, iterations, results, () => (value) => Typia.is<Cases.Null_Null>(value))
  Cases.Benchmark(Cases.Number_Number, iterations, results, () => (value) => Typia.is<Cases.Number_Number>(value))
  Cases.Benchmark(Cases.Object_Additional_Properties_False, iterations, results, () => (value) => Typia.equals<Cases.Object_Additional_Properties_False>(value))
  Cases.Benchmark(Cases.Object_Additional_Properties_True, iterations, results, () => (value) => Typia.is<Cases.Object_Additional_Properties_True>(value))
  Cases.Benchmark(Cases.Object_Object, iterations, results, () => (value) => Typia.is<Cases.Object_Object>(value))
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => (value) => Typia.is<Cases.Object_Partial>(value))
  Cases.Benchmark(Cases.Object_RTTB_Loose, iterations, results, () => (value) => Typia.is<Cases.Object_RTTB_Loose>(value))
  Cases.Benchmark(Cases.Object_RTTB_Strict, iterations, results, () => (value) => Typia.equals<Cases.Object_RTTB_Strict>(value))
  Cases.Benchmark(Cases.Recursive_Node, iterations, results, () => (value) => Typia.is<Cases.Recursive_Node>(value))
  Cases.Benchmark(Cases.Recursive_Union_Node, iterations, results, () => (value) => Typia.is<Cases.Recursive_Union_Node>(value))
  Cases.Benchmark(Cases.String_String, iterations, results, () => (value) => Typia.is<Cases.String_String>(value))
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => (value) => Typia.is<Cases.Tuple_Number>(value))
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => (value) => Typia.is<Cases.Tuple_Object>(value))
  Cases.Benchmark(Cases.Tuple_Union_String_Literal, iterations, results, () => (value) => Typia.is<Cases.Tuple_Union_String_Literal>(value))
  Cases.Benchmark(Cases.Typia_Array_Hierarchical, iterations, results, () => (value) => Typia.is<Cases.Typia_Array_Hierarchical>(value))
  Cases.Benchmark(Cases.Typia_Array_Recursive, iterations, results, () => (value) => Typia.is<Cases.Typia_Array_Recursive>(value))
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Explicit, iterations, results, () => (value) => Typia.is<Cases.Typia_Array_Recursive_Union_Explicit>(value))
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Implicit, iterations, results, () => (value) => Typia.is<Cases.Typia_Array_Recursive_Union_Implicit>(value))
  Cases.Benchmark(Cases.Typia_Array_Simple, iterations, results, () => (value) => Typia.is<Cases.Typia_Array_Simple>(value))
  Cases.Benchmark(Cases.Typia_Object_Hierarchical, iterations, results, () => (value) => Typia.is<Cases.Typia_Object_Hierarchical>(value))
  Cases.Benchmark(Cases.Typia_Object_Recursive, iterations, results, () => (value) => Typia.is<Cases.Typia_Object_Recursive>(value))
  Cases.Benchmark(Cases.Typia_Object_Simple, iterations, results, () => (value) => Typia.is<Cases.Typia_Object_Simple>(value))
  Cases.Benchmark(Cases.Typia_Object_Union_Explicit, iterations, results, () => (value) => Typia.is<Cases.Typia_Object_Union_Explicit>(value))
  Cases.Benchmark(Cases.Typia_Object_Union_Implicit, iterations, results, () => (value) => Typia.is<Cases.Typia_Object_Union_Implicit>(value))
  Cases.Benchmark(Cases.Undefined_Undefined, iterations, results, () => (value) => Typia.is<Cases.Undefined_Undefined>(value))
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)