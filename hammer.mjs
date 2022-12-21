import { TypeBoxCompiler } from './benchmark/validators/typebox_aot/build'
import { AjvCompiler } from './benchmark/validators/ajv_aot/build'

// -----------------------------------------------------------------------------
// Clean
// -----------------------------------------------------------------------------
export async function clean() {
  await folder('target').delete()
}

// -----------------------------------------------------------------------------
// Format
// -----------------------------------------------------------------------------
export async function format() {
  await shell('prettier --no-semi --single-quote --print-width 240 --trailing-comma all --write build benchmark reporting hammer.mjs')
}

// -----------------------------------------------------------------------------
// Benchmark
// -----------------------------------------------------------------------------
export async function measure(packageName = 'typebox', compiler = 'tsc', dataset = 'correct', iteration = 1) {
  console.log(`${'\x1b[32m'}package: '${packageName}' dataset: '${dataset}' iteration: ${iteration}${`\x1b[0m`}`)
  const result_file = `reporting/results/${packageName}/${dataset}.json`
  await shell(`npx ${compiler} benchmark/validators/${packageName}/${dataset}.ts --outDir target/benchmark/${packageName}/${dataset}`)
  await shell(`node target/benchmark/${packageName}/${dataset}/validators/${packageName}/${dataset}.js ${iteration} ${result_file}`)
}
export async function typebox_aot(iteration = 1) {
  TypeBoxCompiler.Build('incorrect', `benchmark/validators/typebox_aot/incorrect.ts`)
  TypeBoxCompiler.Build('correct', `benchmark/validators/typebox_aot/correct.ts`)
  await measure('typebox_aot', 'tsc', 'correct', iteration)
  await measure('typebox_aot', 'tsc', 'incorrect', iteration)
}
export async function typebox_jit(iteration = 1) {
  await measure('typebox_jit', 'tsc', 'correct', iteration)
  await measure('typebox_jit', 'tsc', 'incorrect', iteration)
}
export async function ajv_aot(iteration = 1) {
  AjvCompiler.Build('incorrect', `benchmark/validators/ajv_aot/incorrect.ts`)
  AjvCompiler.Build('correct', `benchmark/validators/ajv_aot/correct.ts`)
  await measure('ajv_aot', 'tsc', 'correct', iteration)
  await measure('ajv_aot', 'tsc', 'incorrect', iteration)
}
export async function ajv_jit(iteration = 1) {
  await measure('ajv_jit', 'tsc', 'correct', iteration)
  await measure('ajv_jit', 'tsc', 'incorrect', iteration)
}
export async function tsrc(iteration = 1) {
  await measure('tsrc', 'ttsc', 'correct', iteration)
  await measure('tsrc', 'ttsc', 'incorrect', iteration)
}
export async function typia(iteration = 1) {
  await measure('typia', 'ttsc', 'correct', iteration)
  await measure('typia', 'ttsc', 'incorrect', iteration)
}
export async function benchmark(iteration = 10_000_000) {
  await typebox_aot(iteration)
  await typebox_jit(iteration)
  await ajv_aot(iteration)
  await ajv_jit(iteration)
  await typia(iteration)
  await tsrc(iteration)
}

// -----------------------------------------------------------------------------
// Reporting
// -----------------------------------------------------------------------------
export async function reporting() {
  const serve = shell('hammer serve reporting/index.html --dist docs --minify')
  const drift = shell('drift url http://localhost:5000 size 1920 7200 wait 1000 save screenshot.png')
  await Promise.all([serve, drift])
}
