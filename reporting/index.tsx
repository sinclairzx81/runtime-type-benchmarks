import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import ReactDOM from 'react-dom/client'
import React from 'react'
import * as Cases from '../benchmark/schematics/correct'
import { TypeScriptCodegen } from '../codegen/index'
import { Reports } from './utility/reports'
import { Formats } from './utility/formats'

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
  type Result = { ops: number; iterations: number; elapsed: number }
  type TupleResult = [string, Result]
  const schema = (Cases as any)[props.result.typename] as any
  const html = TypeScriptCodegen.GenerateHTML(schema)
  const entries = Object.entries(props.result).filter((entry) => {
    return !(entry[0] === 'typename' || entry[0] === 'best_ops')
  }) as any as TupleResult[]
  const sorted = entries
    .sort((a: TupleResult, b: TupleResult) => b[1].ops - a[1].ops)
    .map((result) => {
      const [lib, value] = result
      const color = Benchmarks[lib as any as keyof Benchmarks]
      const ops = Formats.LargeNumber(value.ops)
      const elapsed = Formats.Millisecond(value.elapsed)
      const iterations = Formats.LargeNumber(value.iterations)
      return { lib, color, ops, elapsed, iterations }
    })
  return (
    <div className="type-tooltip">
      <div className="header">
        <h2>{props.result.typename}</h2>
        <p>{schema.description}</p>
      </div>
      <div className="body">
        <div className="type">
          <pre dangerouslySetInnerHTML={{ __html: html }}></pre>
        </div>
        <div className="result">
          <table>
            <tr>
              <th></th>
              <th></th>
              <th>iterations</th>
              <th>elapsed</th>
              <th>ops</th>
            </tr>
            {sorted
              .filter((entry) => entry.elapsed.length > 0)
              .map((entry, index) => {
                return (
                  <tr>
                    <td>{Formats.Rank(index)}</td>
                    <td style={{ color: entry.color }}>{entry.lib}</td>
                    <td>{entry.iterations}</td>
                    <td>{entry.elapsed}</td>
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
  const result: any = Object.keys(props.result).reduce((acc, key) => {
    const facade: any = props.result
    return { ...acc, [key]: facade[key].ops }
  }, {})
  result.typename = props.result.typename
  result.best_ops = props.result.best_ops
  // prettier-ignore
  return (
    <div className="type-result">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={[result]} barGap={20} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <XAxis dataKey="typename" tick={{ fill: fontColor }} />
          <YAxis
            dataKey="best_ops"
            tick={{ fill: fontColor }}
            tickFormatter={Formats.LargeNumber}
          />
          <Legend verticalAlign="bottom" align="right" formatter={(value) => { return <span style={{ color: fontColor }}>{value}</span> }} />
          <Tooltip
            wrapperStyle={{ zIndex: 1000000 }}
            contentStyle={{ border: 'none' }}
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
  descriptions.set('Boolean', 'Operations per second for boolean checks')
  descriptions.set('Null', 'Operations per second for null checks')
  descriptions.set('Undefined', 'Operations per second for undefined checks')
  descriptions.set('Composite', 'Operations per second for variations of union and intersection types')
  descriptions.set('Literal', 'Operations per second comparing two JavaScript values')
  descriptions.set('Math', 'Operations per second for types commonly used for linear algebra and graphics')
  descriptions.set('Number', 'Operations per second for constrained number values')
  descriptions.set('Object', 'Operations per second for constrained objects values. The term strict means additional properties are disallowed')
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
          //if(!results.some(result => result.typename.toLowerCase().includes('composite'))) return
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
