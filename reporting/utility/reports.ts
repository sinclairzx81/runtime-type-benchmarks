import { Benchmarks } from '../index'

export namespace Reports {
  export interface BenchmarkResult {
    iterations: number
    results: Record<string, number>
  }
  export type ReportingResult = {
    typename: string
    best_ops: number
  } & {
    -readonly [K in keyof Benchmarks]: {
      ops: number
      iterations: number
      elapsed: number
    }
  }
  export function operationsPerSecond(iterations: number, elapsed: number | undefined) {
    if (elapsed === undefined) return 0
    if (elapsed === 0) return iterations
    return Math.floor((iterations / elapsed) * 1000)
  }
  export async function loadBenchmarkResult(packageName: string, dataset: string): Promise<BenchmarkResult> {
    return await fetch(`results/${packageName}/${dataset}.json`).then((res) => res.json())
  }
  export async function LoadReportingResults(dataset: string): Promise<ReportingResult[]> {
    // Read all benchmarks for the given dataset
    const benchmark_results = (await Promise.all(
      Object.keys(Benchmarks).map(async (benchmark) => {
        return [benchmark, await loadBenchmarkResult(benchmark, dataset)]
      }),
    )) as [string, BenchmarkResult][]
    const typebox_index = benchmark_results.findIndex((tuple) => tuple[0] === 'typebox_jit')
    // Remap to reporting reports
    const reporting_results: ReportingResult[] = []
    for (const typename of Object.keys(benchmark_results[typebox_index][1].results)) {
      const reporting_result: Omit<ReportingResult, 'best_ops' | 'typename'> = {} as any
      for (const [lib, result] of benchmark_results) {
        reporting_result[lib as keyof Benchmarks] = {
          ops: operationsPerSecond(result.iterations, result.results[typename]),
          iterations: result.iterations,
          elapsed: result.results[typename],
        }
      }
      const type_results = Object.values(reporting_result) as {
        ops: number
        iterations: number
        elapsed: number
      }[]
      const best_ops = type_results.sort((a, b) => b.ops - a.ops)[0].ops
      reporting_results.push({ typename, best_ops, ...reporting_result })
    }
    return reporting_results
  }
  export function GroupReportingResults(results: ReportingResult[]): Map<string, ReportingResult[]> {
    const map = new Map<string, ReportingResult[]>()
    // Can order result sets by ensuring groups are defined in order
    map.set('Literal', [])
    map.set('Primitive', [])
    map.set('Number', [])
    map.set('String', [])
    map.set('Boolean', [])
    map.set('Object', [])
    map.set('Array', [])
    map.set('Tuple', [])
    map.set('Composite', [])
    map.set('Recursive', [])
    map.set('Null', [])
    map.set('Undefined', [])
    map.set('Math', [])
    map.set('Typia', [])
    for (const result of results) {
      const group = result.typename.split('_')[0]
      if (!map.has(group)) map.set(group, [])
      const array = map.get(group)!
      array.push(result)
    }
    return map
  }
}
