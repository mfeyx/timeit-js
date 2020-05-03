# timeit-js
Simple Node Performance Measurement

Measure the average execution time of a function. If you find any bugs or have suggestions feel free to help and fork the package.

## Installation

```sh
npm i timeit-js
```

## Import

```js
const timeit = require('timeit-js')
```

## Timeit Function

```js
/**
 * Measure the average execution time of a function
 * @param {Function} fn A function for performance measurement
 * @param {Array} args Function arguments
 * @param {Object} options
 * @returns {Number} Result in milliseconds
 */
timeit(fn, args=[], options={})
```


## Options

| Parameter | Option | Default
|-----------|---------|--------:
`e` | Function Executions | 1000
`r` | Test repetitions | 1
`l` | Show result in logs | true
`d` | Number of decimals in Logging text | 6


## Example

```js
const timeit = require('timeit-js')

function sum () {
  return [...arguments].reduce((p, c) => p+c, 0)
}

timeit(sum, args=[1, 2, 3, 4], options={e: 100000, r: 100, d: 6})
```
