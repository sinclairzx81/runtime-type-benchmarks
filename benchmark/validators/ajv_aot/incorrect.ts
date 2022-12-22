// @ts-nocheck
import { Command } from '../../command/index'
import * as Cases from '../../schematics/incorrect'
import * as Validators from './compiled/index'

export function Execute(iterations: number) {
  const results = new Map<string, number>()
  Cases.Benchmark(Cases.Array_Number, iterations, results, () => Validators.Array_Number)
  Cases.Benchmark(Cases.Array_Object, iterations, results, () => Validators.Array_Object)
  Cases.Benchmark(Cases.Array_Recursive, iterations, results, () => Validators.Array_Recursive)
  Cases.Benchmark(Cases.Array_Union, iterations, results, () => Validators.Array_Union)
  Cases.Benchmark(Cases.Composite_Intersect, iterations, results, () => Validators.Composite_Intersect)
  Cases.Benchmark(Cases.Composite_Union_Discriminated, iterations, results, () => Validators.Composite_Union_Discriminated)
  Cases.Benchmark(Cases.Composite_Union_Literal, iterations, results, () => Validators.Composite_Union_Literal)
  Cases.Benchmark(Cases.Composite_Union_Non_Discriminated, iterations, results, () => Validators.Composite_Union_Non_Discriminated)
  Cases.Benchmark(Cases.Literal_Boolean, iterations, results, () => Validators.Literal_Boolean)
  Cases.Benchmark(Cases.Literal_Number, iterations, results, () => Validators.Literal_Number)
  Cases.Benchmark(Cases.Literal_String, iterations, results, () => Validators.Literal_String)
  Cases.Benchmark(Cases.Math_Box3D, iterations, results, () => Validators.Math_Box3D)
  Cases.Benchmark(Cases.Math_Matrix4, iterations, results, () => Validators.Math_Matrix4)
  Cases.Benchmark(Cases.Math_Mesh, iterations, results, () => Validators.Math_Mesh)
  Cases.Benchmark(Cases.Math_Vector3, iterations, results, () => Validators.Math_Vector3)
  Cases.Benchmark(Cases.Object_Loose, iterations, results, () => Validators.Object_Loose)
  Cases.Benchmark(Cases.Object_Partial, iterations, results, () => Validators.Object_Partial)
  Cases.Benchmark(Cases.Object_Simple, iterations, results, () => Validators.Object_Simple)
  Cases.Benchmark(Cases.Object_Strict, iterations, results, () => Validators.Object_Strict)
  Cases.Benchmark(Cases.Primitive_Boolean, iterations, results, () => Validators.Primitive_Boolean)
  Cases.Benchmark(Cases.Primitive_Integer, iterations, results, () => Validators.Primitive_Integer)
  Cases.Benchmark(Cases.Primitive_Null, iterations, results, () => Validators.Primitive_Null)
  Cases.Benchmark(Cases.Primitive_Number, iterations, results, () => Validators.Primitive_Number)
  Cases.Benchmark(Cases.Primitive_RegEx, iterations, results, () => Validators.Primitive_RegEx)
  Cases.Benchmark(Cases.Primitive_String, iterations, results, () => Validators.Primitive_String)
  Cases.Benchmark(Cases.Recursive_Object, iterations, results, () => Validators.Recursive_Object)
  Cases.Benchmark(Cases.Recursive_Union, iterations, results, () => Validators.Recursive_Union)
  Cases.Benchmark(Cases.Tuple_Number, iterations, results, () => Validators.Tuple_Number)
  Cases.Benchmark(Cases.Tuple_Object, iterations, results, () => Validators.Tuple_Object)
  Cases.Benchmark(Cases.Tuple_Union_Literal, iterations, results, () => Validators.Tuple_Union_Literal)
  return results
}

const parameter = Command.Parameter()
const results = Execute(parameter.iterations)
Command.WriteResults(results)
