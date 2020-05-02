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
 * Test your function's execution time.
 * @params {Function} fn
 * @params {*} args
 * @params {Number} e Exections
 * @params {Number} r Repetitions
 */
timeit.measure(fn, args, e, r=1)
```