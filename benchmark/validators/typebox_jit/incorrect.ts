import { TypeCompiler } from '@sinclair/typebox/compiler'
import { TypeSystem } from '@sinclair/typebox/system'
import { Command } from '../../command/index'
import * as Cases from '../../schematics/incorrect'
TypeSystem.AllowArrayObjects = true
TypeSystem.AllowNaN = true

export function Compile(schema: any) {
  const check = TypeCompiler.Compile(schema)
  return (value: unknown) => check.Check(value)
}

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, Compile)
  Cases.Benchmark(Cases.Array_Object, iterations, results, Compile)
  Cases.Benchmark(Cases.Array_Recursive, iterations, results, Compile)
  Cases.Benchmark(Cases.Array_Union, iterations, results, Compile)
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, Compile)
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, Compile)
  Cases.Benchmark(Cases.Composite_Union_Literal, iterations, results, Compile)
  Cases.Benchmark(Cases.Composite_Union_Non_Discriminated, iterations, results, Compile)
  Cases.Benchmark(Cases.Literal_Boolean, iterations, results, Compile)
  Cases.Benchmark(Cases.Literal_Number, iterations, results, Compile)
  Cases.Benchmark(Cases.Literal_String, iterations, results, Compile)
  Cases.Benchmark(Cases.Math_Box3D, iterations, results, Compile)
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, Compile)
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, Compile)
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, Compile)
  Cases.Benchmark(Cases.Number_Exclusive_Maximum, iterations, results, Compile)
  Cases.Benchmark(Cases.Number_Exclusive_Minimum, iterations, results, Compile)
  Cases.Benchmark(Cases.Number_Maximum, iterations, results, Compile)
  Cases.Benchmark(Cases.Number_Minimum, iterations, results, Compile)
  Cases.Benchmark(Cases.Number_Multiple_Of, iterations, results, Compile)
  Cases.Benchmark(Cases.Object_Loose, iterations, results, Compile)
  Cases.Benchmark(Cases.Object_Partial, iterations, results, Compile)
  Cases.Benchmark(Cases.Object_Simple, iterations, results, Compile)
  Cases.Benchmark(Cases.Object_Strict, iterations, results, Compile)
  Cases.Benchmark(Cases.Primitive_Boolean, iterations, results, Compile)
  Cases.Benchmark(Cases.Primitive_Integer, iterations, results, Compile)
  Cases.Benchmark(Cases.Primitive_Null, iterations, results, Compile)
  Cases.Benchmark(Cases.Primitive_Number, iterations, results, Compile)
  Cases.Benchmark(Cases.Primitive_RegEx, iterations, results, Compile)
  Cases.Benchmark(Cases.Primitive_String, iterations, results, Compile)
  Cases.Benchmark(Cases.Primitive_Undefined, iterations, results, Compile)
  Cases.Benchmark(Cases.Recursive_Object, iterations, results, Compile)
  Cases.Benchmark(Cases.Recursive_Union, iterations, results, Compile)
  Cases.Benchmark(Cases.String_MaxLength, iterations, results, Compile)
  Cases.Benchmark(Cases.String_MinLength, iterations, results, Compile)
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, Compile)
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, Compile)
  Cases.Benchmark(Cases.Tuple_Union_Literal, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Array_Hierarchical, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Array_Recursive, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Explicit, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Array_Recursive_Union_Implicit, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Array_Simple, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Object_Hierarchical, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Object_Recursive, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Object_Union_Explicit, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Object_Union_Implicit, iterations, results, Compile)
  Cases.Benchmark(Cases.Typia_Ultimate_Union, iterations, results, Compile)
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)