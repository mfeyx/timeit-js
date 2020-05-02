# timeit-js
Simple Node Performance Measuring

## Installation

```sh
npm i timeit-js
```

## Import

```js
const timeit = require('timeit-js')
```

## API

```js
/**
 * Test the execution time of your function
 * @params {Function} fn
 * @params {*} args
 * @params {Number} e Executions
 * @params {Number} r Repetitions
 */
timeit.measure(fn, args, e=100000, r=1)
```