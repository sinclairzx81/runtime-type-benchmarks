import { Benchmarks } from '../index'

export namespace Reports {
  export interface BenchmarkResult {
    iterations: number
    results: Record<string, number>
  }
  export type ReportingResult = {
    typename: string
    persecond: number
  } & {
    -readonly [K in keyof Benchmarks]: number
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
    // Remap to reporting reports
    const reporting_results: ReportingResult[] = []
    for (const typename of Object.keys(benchmark_results[0][1].results)) {
      const reporting_result: Omit<ReportingResult, 'persecond' | 'typename'> = {} as any
      for (const [lib, result] of benchmark_results) {
        reporting_result[lib as keyof Benchmarks] = operationsPerSecond(result.iterations, result.results[typename])
      }
      const persecond = Object.values(reporting_result).sort((a, b) => b - a)[0]
      reporting_results.push({ typename, persecond, ...reporting_result })
    }
    return reporting_results
  }
  export function GroupReportingResults(results: ReportingResult[]): Map<string, ReportingResult[]> {
    const map = new Map<string, ReportingResult[]>()
    for (const result of results) {
      const group = result.typename.split('_')[0]
      if (!map.has(group)) map.set(group, [])
      const array = map.get(group)!
      array.push(result)
    }
    return map
  }
}
