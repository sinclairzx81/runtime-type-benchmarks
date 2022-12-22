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
export async function measure(packageName = 'typebox_aot', compiler = 'tsc', dataset = 'correct', iteration = measurement_iteration) {
  console.log(`\x1b[32mpackage: ${packageName} dataset: ${dataset} iteration: ${iteration}\x1b[0m`)
  const report_file = `reporting/results/${packageName}/${dataset}.json`
  await shell(`npx ${compiler} benchmark/validators/${packageName}/${dataset}.ts --outDir target/benchmark/${packageName}/${dataset} --downlevelIteration`)
  await shell(`node target/benchmark/${packageName}/${dataset}/validators/${packageName}/${dataset}.js ${iteration} ${report_file}`)
}
export async function typebox_aot(iteration = measurement_iteration) {
  TypeBoxAotGenerator.Build('benchmark/validators/typebox_aot', {
    allowArrayObjects: true,
    allowNaN: true,
  })
  await measure('typebox_aot', 'tsc', 'correct', iteration)
  await measure('typebox_aot', 'tsc', 'incorrect', iteration)
}
export async function typebox_jit(iteration = measurement_iteration) {
  TypeBoxJitGenerator.Build('benchmark/validators/typebox_jit', {
    allowArrayObjects: true,
    allowNaN: true,
  })
  await measure('typebox_jit', 'tsc', 'correct', iteration)
  await measure('typebox_jit', 'tsc', 'incorrect', iteration)
}
export async function ajv_aot(iteration = measurement_iteration) {
  AjvAotGenerator.Build('benchmark/validators/ajv_aot')
  await measure('ajv_aot', 'tsc', 'correct', iteration)
  await measure('ajv_aot', 'tsc', 'incorrect', iteration)
}
export async function ajv_jit(iteration = measurement_iteration) {
  AjvJitGenerator.Build('benchmark/validators/ajv_jit')
  await measure('ajv_jit', 'tsc', 'correct', iteration)
  await measure('ajv_jit', 'tsc', 'incorrect', iteration)
}
export async function typia(iteration = measurement_iteration) {
  await shell('npm install typescript@latest')
  TypiaGenerator.Build('benchmark/validators/typia')
  await measure('typia', 'ttsc', 'correct', iteration)
  await measure('typia', 'ttsc', 'incorrect', iteration)
}
export async function tsrc(iteration = measurement_iteration) {
  await shell('npm install typescript@latest')
  TsrcGenerator.Build('benchmark/validators/tsrc')
  await measure('tsrc', 'ttsc', 'correct', iteration)
  await measure('tsrc', 'ttsc', 'incorrect', iteration)
}
export async function tsis(iteration = measurement_iteration) {
  await shell('npm install typescript@4.6.4')
  TsisGenerator.Build('benchmark/validators/tsis')
  await measure('tsis', 'ttsc', 'correct', iteration)
  await measure('tsis', 'ttsc', 'incorrect', iteration)
}

export async function benchmark(iteration = measurement_iteration) {
  await clean()
  await typebox_aot(iteration)
  await typebox_jit(iteration)
  await ajv_aot(iteration)
  await ajv_jit(iteration)
  await typia(iteration)
  await tsrc(iteration)
  await tsis(iteration)
}

// -----------------------------------------------------------------------------
// Reporting
// -----------------------------------------------------------------------------
export async function reporting() {
  const serve = shell('hammer serve reporting/index.html --dist docs --minify --sourcemap')
  const drift = shell('drift url http://localhost:5000 size 1920 8000 wait 2000 save screenshot.png')
  await Promise.all([serve, drift])
}
