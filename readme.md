# Runtime Type Validation Benchmarks

High Performance Validation Benchmarks for JavaScript

### Overview

This project measures a set of high performance JavaScript runtime type checking libraries to adequately compare their validation performance across a wide range of data structures. It also seeks to compare JIT to AOT performance by measuring static JavaScript validation routines against those dynamically evaluated at runtime.

[Latest Benchmark Results](https://sinclairzx81.github.io/runtime-type-benchmarks/)

### Benchmarks

These benchmarks measure validation throughput for a number of common JavaScript data structures. The project provides two datasets, one `correct` the other `incorrect` (where-in the `incorrect` dataset is used to trip error handling paths within each validator and test early return performance). Data for each test is hardcoded as not to introduce unnessasary variance in the results as well as to provide high visibility to the actual data being benchmarked. Additionally, each benchmark is run in within an isolated Node process to avoid previous benchmarks breaking optimizations for subsequent benchmarks. All benchmarks can be inspected under the benchmark/validators directory.

### Packages

The following JavaScript validation packages are benchmarked.

| Package                                                              | Identifier | Compilation    | Assertion        | Description                                                                                |
|---                                                                   |---         |---             |---               |---                                                                                         |
| [ts-runtime-checks](https://github.com/GoogleFeud/ts-runtime-checks) | tsrc       | AOT            | Structural       | A typescript transformer which automatically generates validation code from your types.    |
| [typescript-is](https://github.com/woutervh-/typescript-is)          | tsis       | AOT            | Structural       | TypeScript transformer that generates run-time type-checks.                                |
| [typia](https://github.com/samchon/typia)                            | typia      | AOT            | Structural       | Super-fast Runtime validator (type checker) with only one line.                            |
| [typebox](https://github.com/sinclairzx81/typebox)                   | typebox    | JIT + AOT      | Json Schema      | JSON Schema Type Builder with Static Type Resolution for TypeScript.                       |
| [ajv](https://github.com/ajv-validator/ajv)                          | ajv        | JIT + AOT      | Json Schema      | The fastest JSON Schema Validator.                                                         |
| [zod](https://github.com/colinhacks/zod)                             | zod        | Dynamic        | Structural       | TypeScript-first schema validation with static type inference                              |


### Commands

The following commands are available following an `npm install`

```bash
$ hammer task <lib-identifier> <iteration-count>  # runs a specific benchmark with the given iteration
                                                  # count. Can be used for testing benchmarks without
                                                  # running the complete suite.

$ npm run benchmark <iteration-count>             # Runs all benchmarks with an optional iteration 
                                                  # count. If not specified the default is 10 million
                                                  # iterations. Running the benchmark will write
                                                  # results to reporting/results/<lib>/<test>.json.


$ npm run reporting                               # Builds and minifies the reporting website and serves
                                                  # it on port 5000. This task will also capture the current 
                                                  # websites benchmark results (see image below) which is 
                                                  # written to the project root (see screenshot.png)

$ npm run format                                  # Runs a prettier pass over the project.

$ npm run clean                                   # Remove the target build directory.
```


### Results

The following shows the comparative performance results for the `correct` dataset. Results show as estimated operations per second. The image below was generated on the following hardware profile.


| Component        | Description                                  |
|---               |---                                           |
| Processor        | AMD Ryzen 7 3700X 8-Core Processor, 3600 Mhz | 
| Memory           | 16GB                                         |
| Operating System | Window 10                                    |
| Node             | v16.17.1                                     |

Full results can be located [here](https://sinclairzx81.github.io/runtime-type-benchmarks/)

![](screenshot.png)

### Contribute

This project is open to community contribution.