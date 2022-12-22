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
  typebox_aot: '#6A2',
  typebox_jit: '#580',
  typia: '#47A',
  tsrc: '#C33',
  ajv_aot: '#ec9f0f',
  ajv_jit: '#B50',
  tsis: '#33C',
  zod: '#995',
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
            wrapperStyle={{ zIndex: 1000000 }}
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
  filter: string
  results: Reports.ReportingResult[]
}
export function TypeGroup(props: TypeGroupProperties) {
  const descriptions = new Map<string, string>()
  descriptions.set('Array', 'Operations per second for various array types')
  descriptions.set('Composite', 'Operations per second for variations of union and intersection types')
  descriptions.set('Literal', 'Operations per second comparing two JavaScript values')
  descriptions.set('Math', 'Operations per second for types commonly used for linear algebra and graphics')
  descriptions.set('Number', 'Operations per second for constrained number values')
  descriptions.set('Object', 'Operations per second for constrained objects values. The term strict means additional properties are disallowed')
  descriptions.set('Primitive', 'Operations per second measuring the typeof operator, integers and regular expressions')
  descriptions.set('Recursive', 'Operations per second for recursive data structures')
  descriptions.set('String', 'Operations per second for constrained string values')
  descriptions.set('Tuple', 'Operations per second for tuple types. Similar to arrays, these types require array bounds checking')
  descriptions.set('Typia', 'Operations per second measured against the typia benchmark suite')
  return (
    <div className="type-group">
      <div className="header">
        <h2>{props.group}</h2>
        <p>{descriptions.get(props.group)}</p>
      </div>
      <div className="body">
        {props.results
          .filter((result) => {
            return result.typename.toLowerCase().includes(props.filter.toLocaleLowerCase())
          })
          .map((result, index) => (
            <TypeResult key={index} result={result} />
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
  const [filter, setFilter] = React.useState('')
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
  function onFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(() => e.target.value)
  }
  const correctClassName = dataset === 'correct' ? 'button selected' : 'button'
  const incorrectClassName = dataset === 'incorrect' ? 'button selected' : 'button'
  // prettier-ignore
  return (
    <div className="app">
      <div className="header">
        <div className='title'>
          <h2><a target='_blank' href='https://github.com/sinclairzx81/runtime-type-benchmarks'>Runtime Type Benchmarks</a></h2>
          <p>High Performance Validation Benchmarks for JavaScript</p>
        </div>
        <div className='controls'>
          <input className='filter' type='text' value={filter} onChange={onFilterChange} placeholder='Type Filter' />
          <div className={correctClassName} onClick={() => onChange('correct')}>Correct Data</div>
          <div className={incorrectClassName} onClick={() => onChange('incorrect')}>Incorrect Data</div>
        </div>
      </div>
      <div className="results">
        {[...groups.entries()].filter(entry => {
          const [_, results] = entry
          return results.some(result => result.typename.toLowerCase().includes(filter.toLocaleLowerCase()))
        }).map((entry) => {
          const [group, results] = entry
          return <TypeGroup filter={filter} key={group} group={group} results={results} />
        })}
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
