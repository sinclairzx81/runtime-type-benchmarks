import Typia from 'typia'
import { Command } from '../../command/index'
import * as Cases from '../../schematics/correct'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => (value) => Typia.is<Cases.Array_Number>(value))
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => (value) => Typia.is<Cases.Array_Object>(value))
  Cases.Benchmark(Cases.Array_Recursive, iterations, results, () => (value) => Typia.is<Cases.Array_Recursive>(value))
  Cases.Benchmark(Cases.Array_Union, iterations, results, () => (value) => Typia.is<Cases.Array_Union>(value))
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => (value) => Typia.is<Cases.Composite_Intersect>(value))
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, () => (value) => Typia.is<Cases.Composite_Union_Discriminated>(value))
  Cases.Benchmark(Cases.Composite_Union_Literal, iterations, results, () => (value) => Typia.is<Cases.Composite_Union_Literal>(value))
  Cases.Benchmark(Cases.Composite_Union_Non_Discriminated, iterations, results, () => (value) => Typia.is<Cases.Composite_Union_Non_Discriminated>(value))
  Cases.Benchmark(Cases.Literal_Boolean, iterations, results, () => (value) => Typia.is<Cases.Literal_Boolean>(value))
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => (value) => Typia.is<Cases.Literal_Number>(value))
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => (value) => Typia.is<Cases.Literal_String>(value))
  Cases.Benchmark(Cases.Math_Box3D, iterations, results, () => (value) => Typia.is<Cases.Math_Box3D>(value))
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => (value) => Typia.is<Cases.Math_Matrix4>(value))
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => (value) => Typia.is<Cases.Math_Mesh>(value))
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => (value) => Typia.is<Cases.Math_Vector3>(value))
  Cases.Benchmark(Cases.Object_Loose, iterations, results, () => (value) => Typia.is<Cases.Object_Loose>(value))
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => (value) => Typia.is<Cases.Object_Partial>(value))
  Cases.Benchmark(Cases.Object_Simple, iterations, results, () => (value) => Typia.is<Cases.Object_Simple>(value))
  Cases.Benchmark(Cases.Object_Strict, iterations, results, () => (value) => Typia.equals<Cases.Object_Strict>(value))
  Cases.Benchmark(Cases.Primitive_Boolean, iterations, results, () => (value) => Typia.is<Cases.Primitive_Boolean>(value))
  Cases.Benchmark(Cases.Primitive_Null, iterations, results, () => (value) => Typia.is<Cases.Primitive_Null>(value))
  Cases.Benchmark(Cases.Primitive_Number, iterations, results, () => (value) => Typia.is<Cases.Primitive_Number>(value))
  Cases.Benchmark(Cases.Primitive_String, iterations, results, () => (value) => Typia.is<Cases.Primitive_String>(value))
  Cases.Benchmark(Cases.Primitive_Undefined, iterations, results, () => (value) => Typia.is<Cases.Primitive_Undefined>(value))
  Cases.Benchmark(Cases.Recursive_Object, iterations, results, () => (value) => Typia.is<Cases.Recursive_Object>(value))
  Cases.Benchmark(Cases.Recursive_Union, iterations, results, () => (value) => Typia.is<Cases.Recursive_Union>(value))
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => (value) => Typia.is<Cases.Tuple_Number>(value))
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => (value) => Typia.is<Cases.Tuple_Object>(value))
  Cases.Benchmark(Cases.Tuple_Union_Literal, iterations, results, () => (value) => Typia.is<Cases.Tuple_Union_Literal>(value))
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
