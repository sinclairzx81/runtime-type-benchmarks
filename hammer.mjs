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
  await shell('prettier --no-semi --single-quote --print-width 240 --trailing-comma all --write benchmark reporting hammer.mjs')
}

// -----------------------------------------------------------------------------
// Benchmark
// -----------------------------------------------------------------------------
export async function measure(packageName = 'typebox', compiler = 'tsc', dataset = 'correct', iteration = 1) {
  console.log('-----------------------------------------------------------------------------')
  console.log(`package: '${packageName}' dataset: '${dataset}' iteration:`, iteration)
  console.log('-----------------------------------------------------------------------------')
  const result_file = `reporting/results/${packageName}/${dataset}.json`
  await shell(`npx ${compiler} benchmark/validators/${packageName}/${dataset}.ts --outDir target/benchmark/${packageName}/${dataset}`)
  await shell(`node target/benchmark/${packageName}/${dataset}/validators/${packageName}/${dataset}.js ${iteration} ${result_file}`)
}
export async function tsrc(iteration = 1) {
  await measure('tsrc', 'ttsc', 'correct', iteration)
  await measure('tsrc', 'ttsc', 'incorrect', iteration)
}
export async function typebox(iteration = 1) {
  await measure('typebox', 'tsc', 'correct', iteration)
  await measure('typebox', 'tsc', 'incorrect', iteration)
}
export async function typia(iteration = 1) {
  await measure('typia', 'ttsc', 'correct', iteration)
  await measure('typia', 'ttsc', 'incorrect', iteration)
}
export async function ajv(iteration = 1) {
  await measure('ajv', 'tsc', 'correct', iteration)
  await measure('ajv', 'tsc', 'incorrect', iteration)
}
export async function benchmark(iteration = 10_000_000) {
  await typebox(iteration)
  await typia(iteration)
  await tsrc(iteration)
  await ajv(iteration)
}

// -----------------------------------------------------------------------------
// Reporting
// -----------------------------------------------------------------------------
export async function reporting() {
  const serve = shell('hammer serve reporting/index.html --dist website --minify')
  const drift = shell('drift url http://localhost:5000 size 1920 5500 wait 1000 save screenshot.png')
  await Promise.all([serve, drift])
}
