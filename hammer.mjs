// -----------------------------------------------------------------------------
// Generators
// -----------------------------------------------------------------------------
import { TypeBoxAotGenerator } from './benchmark/validators/typebox_aot/build'
import { TypeBoxJitGenerator } from './benchmark/validators/typebox_jit/build'
import { AjvAotGenerator } from './benchmark/validators/ajv_aot/build'
import { AjvJitGenerator } from './benchmark/validators/ajv_jit/build'
import { TypiaGenerator } from './benchmark/validators/typia/build'
import { TsrcGenerator } from './benchmark/validators/tsrc/build'
import { TsisGenerator } from './benchmark/validators/tsis/build'
import { ZodGenerator } from './benchmark/validators/zod/build'

// -----------------------------------------------------------------------------
// Clean
// -----------------------------------------------------------------------------
export async function clean_validator(lib) {
  await folder(`benchmark/validators/${lib}/compiled`).delete()
  await file(`benchmark/validators/${lib}/incorrect.ts`).delete()
  await file(`benchmark/validators/${lib}/correct.ts`).delete()
}
export async function clean() {
  await folder('reporting/results').delete()
  await clean_validator('ajv_aot')
  await clean_validator('ajv_jit')
  await clean_validator('typebox_aot')
  await clean_validator('typebox_jit')
  await clean_validator('typia')
  await clean_validator('tsrc')
  await clean_validator('tsis')
  await folder('target').delete()
}

// -----------------------------------------------------------------------------
// Format
// -----------------------------------------------------------------------------
export async function format() {
  await shell('prettier --no-semi --single-quote --print-width 240 --trailing-comma all --write benchmark reporting hammer.mjs')
}

// -----------------------------------------------------------------------------
// Benchmark
// -----------------------------------------------------------------------------
const measurement_iteration = 10_000_000
export async function installTypescript(version) {
  console.log(`installing typescript@${version}`)
  await shell(`npm install typescript@${version}`)
}
export async function measure(packageName = 'typebox_aot', compiler = 'tsc', dataset = 'correct', iterations = measurement_iteration) {
  console.log(`\x1b[32mpackage: ${packageName} dataset: ${dataset} iterations: ${iterations}\x1b[0m`)
  const report_file = `reporting/results/${packageName}/${dataset}.json`
  await shell(`npx ${compiler} benchmark/validators/${packageName}/${dataset}.ts --outDir target/benchmark/${packageName}/${dataset} --downlevelIteration`)
  await shell(`node target/benchmark/${packageName}/${dataset}/validators/${packageName}/${dataset}.js ${iterations} ${report_file}`)
}
export async function typebox_aot(iterations = measurement_iteration, allowArrayObjects = true, allowNaN = true) {
  TypeBoxAotGenerator.Build('benchmark/validators/typebox_aot', { allowArrayObjects, allowNaN })
  await measure('typebox_aot', 'tsc', 'correct', iterations)
  await measure('typebox_aot', 'tsc', 'incorrect', iterations)
}
export async function typebox_jit(iterations = measurement_iteration, allowArrayObjects = true, allowNaN = true) {
  TypeBoxJitGenerator.Build('benchmark/validators/typebox_jit', { allowArrayObjects, allowNaN })
  await measure('typebox_jit', 'tsc', 'correct', iterations)
  await measure('typebox_jit', 'tsc', 'incorrect', iterations)
}
export async function ajv_aot(iterations = measurement_iteration) {
  AjvAotGenerator.Build('benchmark/validators/ajv_aot')
  await measure('ajv_aot', 'tsc', 'correct', iterations)
  await measure('ajv_aot', 'tsc', 'incorrect', iterations)
}
export async function ajv_jit(iterations = measurement_iteration) {
  AjvJitGenerator.Build('benchmark/validators/ajv_jit')
  await measure('ajv_jit', 'tsc', 'correct', iterations)
  await measure('ajv_jit', 'tsc', 'incorrect', iterations)
}
export async function typia(iterations = measurement_iteration) {
  TypiaGenerator.Build('benchmark/validators/typia')
  await measure('typia', 'ttsc', 'correct', iterations)
  await measure('typia', 'ttsc', 'incorrect', iterations)
}
export async function tsrc(iterations = measurement_iteration) {
  TsrcGenerator.Build('benchmark/validators/tsrc')
  await measure('tsrc', 'ttsc', 'correct', iterations)
  await measure('tsrc', 'ttsc', 'incorrect', iterations)
}
export async function tsis(iterations = measurement_iteration) {
  TsisGenerator.Build('benchmark/validators/tsis')
  await installTypescript('4.6.4')
  await measure('tsis', 'ttsc', 'correct', iterations)
  await measure('tsis', 'ttsc', 'incorrect', iterations)
  await installTypescript('latest')
}
export async function zod(iterations = measurement_iteration) {
  ZodGenerator.Build('benchmark/validators/zod')
  await measure('zod', 'tsc', 'correct', iterations)
  await measure('zod', 'tsc', 'incorrect', iterations)
}
export async function benchmark(iterations = measurement_iteration) {
  await typebox_aot(iterations)
  await typebox_jit(iterations)
  await ajv_aot(iterations)
  await ajv_jit(iterations)
  await typia(iterations)
  await tsrc(iterations)
  await tsis(iterations)
  await zod(iterations / 100)
}

// -----------------------------------------------------------------------------
// Reporting
// -----------------------------------------------------------------------------
export async function reporting() {
  const serve = shell('hammer serve reporting/index.html --dist docs --minify --sourcemap')
  const drift = shell('drift url http://localhost:5000 size 1920 8800 wait 2000 save screenshot.png')
  await Promise.all([serve, drift])
}
