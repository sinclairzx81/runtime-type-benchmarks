import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ReactDOM from 'react-dom/client'
import React from 'react'
import * as Cases from '../benchmark/schematics/correct'
import { Reports } from './utility/reports'
import { Formats } from './utility/formats'
import { Render } from './utility/render'

// ---------------------------------------------------------------------------
// Benchmarks (Add as nessasary)
// ---------------------------------------------------------------------------
export type Benchmarks = typeof Benchmarks
export const Benchmarks = {
  ajv_aot: '#C70',
  ajv_jit: '#B60',
  typebox_aot: '#6A2',
  typebox_jit: '#5B4',
  typia: '#47A',
  tsrc: '#C33',
} as const

// ---------------------------------------------------------------------------
// TypeToolTip
// ---------------------------------------------------------------------------
export interface TypeResultToolTipProperties {
  result: Reports.ReportingResult
}
export function TypeResultToolTip(props: TypeResultToolTipProperties) {
  const type = Render.Type((Cases as any)[props.result.typename] as any)
  const results = Object.entries(props.result)
    .filter((entry) => {
      return !(entry[0] === 'typename' || entry[0] === 'persecond')
    })
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .map((entry) => {
      const [lib, value] = entry as [keyof Benchmarks, number]
      const color = Benchmarks[lib]
      const ops = `${Formats.formatLargeNumber(Math.floor(value as number))}`
      return { lib, color, ops }
    })
  return (
    <div className="type-tooltip">
      <div className="header">
        <h3>{props.result.typename}</h3>
      </div>
      <div className="body">
        <div className="type">
          <pre dangerouslySetInnerHTML={{ __html: type }}></pre>
        </div>
        <div className="result">
          <table>
            <tr>
              <th>rank</th>
              <th>validator</th>
              <th>ops</th>
            </tr>
            {results.map((entry, index) => {
              return (
                <tr>
                  <td>{Formats.ranking(index)}</td>
                  <td style={{ color: entry.color }}>{entry.lib}</td>
                  <td>{entry.ops}</td>
                </tr>
              )
            })}
          </table>
        </div>
      </div>
    </div>
  )
}
// ---------------------------------------------------------------------------
// TypeResult
// ---------------------------------------------------------------------------
export interface TypeResultProperties {
  result: Reports.ReportingResult
}
export function TypeResult(props: TypeResultProperties) {
  const fontColor = '#BBB'
  // prettier-ignore
  return (
    <div className="type-result">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={[props.result]} barGap={20} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="typename" tick={{ fill: fontColor }} />
          <YAxis
            dataKey="persecond"
            tick={{ fill: fontColor }}
            tickFormatter={Formats.formatLargeNumber}
          />
          <Legend verticalAlign="bottom" align="right" formatter={(value) => { return <span style={{ color: fontColor }}>{value}</span> }} />
          <Tooltip
            wrapperStyle={{ background: "#000", zIndex: 1000000 }}
            contentStyle={{ background: '#000', padding: 32 }}
            cursor={{ fill: '#000' }}
            content={<TypeResultToolTip result={props.result} />}
          />
          <CartesianGrid strokeDasharray="2 2" />
          {Object.entries(Benchmarks).map((entry) => {
            const [key, color] = entry
            return <Bar key={key} dataKey={key} fill={color} />
          })}
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
  results: Reports.ReportingResult[]
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
  descriptions.set('Array', 'This benchmark measures a variety of array types')
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
  const [groups, setGroups] = React.useState<Map<string, Reports.ReportingResult[]>>(new Map())
  const [dataset, setDataset] = React.useState('correct')
  React.useEffect(() => {
    load()
  }, [])
  async function load() {
    const results = await Reports.LoadReportingResults(dataset)
    const groups = Reports.GroupReportingResults(results)
    setGroups(groups)
  }
  async function onChange(dataset: string) {
    const results = await Reports.LoadReportingResults(dataset)
    const groups = Reports.GroupReportingResults(results)
    setDataset(dataset)
    setGroups(groups)
  }
  const correctClassName = dataset === 'correct' ? 'button selected' : 'button'
  const incorrectClassName = dataset === 'incorrect' ? 'button selected' : 'button'
  // prettier-ignore
  return (
    <div className="app">
      <div className="header">
        <div className='title'>
          <h2>Runtime Type Benchmarks</h2>
          <p>High Performance Validation Benchmarks for JavaScript</p>
        </div>
        <div className='controls'>
          <div className={correctClassName} onClick={() => onChange('correct')}>Correct Data</div>
          <div className={incorrectClassName} onClick={() => onChange('incorrect')}>Incorrect Data</div>
        </div>
      </div>
      <div className="results">
        {[...groups.entries()].map((entry) => {
          const [group, results] = entry
          return <TypeGroup key={group} group={group} results={results} />
        })}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
