import ReactDOM from 'react-dom/client'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------
namespace Loader {
  export interface DatasetResult {
    iterations: number
    results: Record<string, number>
  }
  export interface ReportingResult {
    typename: string
    persecond: number
    typebox: number
    typia: number
    tsrc: number
    ajv: number
  }
  export function OperationsPerSecond(iterations: number, elapsed: number | undefined) {
    if (elapsed === undefined) return 0
    if (elapsed === 0) return iterations
    return Math.floor((iterations / elapsed) * 1000)
  }
  export async function LoadDatasetResult(packageName: string, dataset: string): Promise<DatasetResult> {
    return await fetch(`results/${packageName}/${dataset}.json`).then((res) => res.json())
  }
  export async function LoadReportingResults(dataset: string): Promise<ReportingResult[]> {
    const [ajv, typebox, typia, tsrc] = await Promise.all([LoadDatasetResult('ajv', dataset), LoadDatasetResult('typebox', dataset), LoadDatasetResult('typia', dataset), LoadDatasetResult('tsrc', dataset)])
    const results: ReportingResult[] = []
    for (const typename of Object.keys(typebox.results)) {
      const ajvResult = OperationsPerSecond(ajv.iterations, ajv.results[typename])
      const typeboxResult = OperationsPerSecond(typebox.iterations, typebox.results[typename])
      const typiaResult = OperationsPerSecond(typia.iterations, typia.results[typename])
      const tsrcResult = OperationsPerSecond(tsrc.iterations, tsrc.results[typename])
      const persecond = [ajvResult, typeboxResult, typiaResult, tsrcResult].sort((a, b) => b - a)[0]
      results.push({
        typename,
        persecond,
        ajv: ajvResult,
        typebox: typeboxResult,
        typia: typiaResult,
        tsrc: tsrcResult,
      })
    }
    return results
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
// ---------------------------------------------------------------------------
// TypeResult
// ---------------------------------------------------------------------------
export interface TypeResultProperties {
  result: Loader.ReportingResult
}
export function TypeResult(props: TypeResultProperties) {
  const fontColor = '#BBB'
  return (
    <div className="type-result">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={[props.result]}
          barGap={20}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="typename" tick={{ fill: fontColor }} />
          <YAxis
            dataKey="persecond"
            tick={{ fill: fontColor }}
            tickFormatter={(value) => {
              if (value > 1000000000) {
                return (value / 1000000000).toString() + 'B'
              } else if (value > 1000000) {
                return (value / 1000000).toString() + 'M'
              } else if (value > 1000) {
                return (value / 1000).toString() + 'K'
              } else {
                return value.toString()
              }
            }}
          />
          <Legend
            verticalAlign="bottom"
            align="right"
            formatter={(value) => {
              return <span style={{ color: fontColor }}>{value}</span>
            }}
          />
          <Tooltip
            contentStyle={{ background: '#111', padding: 32 }}
            cursor={{ fill: '#111' }}
            labelFormatter={(value) => {
              return (
                <div style={{ marginTop: -13 }}>
                  <h3>{value}</h3>
                  <p>Operations Per Second</p>
                </div>
              )
            }}
          />
          <CartesianGrid strokeDasharray="2 2" />
          <Bar dataKey="ajv" fill="#aaa" />
          <Bar dataKey="typebox" fill="#385" />
          <Bar dataKey="typia" fill="#669" />
          <Bar dataKey="tsrc" fill="#933" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
// ---------------------------------------------------------------------------
// TypeGroup
// ---------------------------------------------------------------------------
export interface TypeGroupProperties {
  group: string
  results: Loader.ReportingResult[]
}
export function TypeGroup(props: TypeGroupProperties) {
  const descriptions = new Map<string, string>()
  descriptions.set('Primitive', 'This benchmark measures validation performance for JavaScript primitive types')
  descriptions.set('Literal', 'This benchmark measures validation performance for JavaScript primitive values')
  descriptions.set('Math', 'This benchmark measures types commonly used for linear algebra and computer graphics')
  descriptions.set('Object', 'This benchmark measures various constraints applied object schematics')
  descriptions.set('Tuple', 'This benchmark measures arrays of a fixed length where bounds checking on the array is required')
  descriptions.set('Composite', 'This benchmark measures composite types for union and intersection')
  descriptions.set('Recursive', 'This benchmark measures recursive data structures')
  descriptions.set('Array', 'This benchmark measures prior benchmarks types expressed as arrays of length 8')
  return (
    <div className="type-group">
      <div className="header">
        <h2>{props.group}</h2>
        <p>{descriptions.get(props.group)}</p>
      </div>
      <div className="body">
        {props.results.map((record, index) => (
          <TypeResult key={index} result={record} />
        ))}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

export function App() {
  const [groups, setGroups] = React.useState<Map<string, Loader.ReportingResult[]>>(new Map())
  const [dataset, setDataset] = React.useState('correct')
  React.useEffect(() => {
    load()
  }, [])
  async function load() {
    const results = await Loader.LoadReportingResults(dataset)
    const groups = Loader.GroupReportingResults(results)
    setGroups(groups)
  }
  async function onChange(dataset: string) {
    const results = await Loader.LoadReportingResults(dataset)
    const groups = Loader.GroupReportingResults(results)
    setDataset(dataset)
    setGroups(groups)
  }
  const correctClassName = dataset === 'correct' ? 'button selected' : 'button'
  const incorrectClassName = dataset === 'incorrect' ? 'button selected' : 'button'
  return (
    <div className="app">
      <div className="benchmarks">
        <div className="header">
          <h2>Runtime Validation Benchmarks</h2>
        </div>
        <div className="body">
          <div className={correctClassName} onClick={() => onChange('correct')}>
            Correct Data
          </div>
          <div className={incorrectClassName} onClick={() => onChange('incorrect')}>
            Incorrect Data
          </div>
        </div>
      </div>
      <div className="results">
        <div className="scroll">
          {[...groups.entries()].map((entry) => {
            const [group, results] = entry
            return <TypeGroup key={group} group={group} results={results} />
          })}
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
