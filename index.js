/**
 * Measure the average execution time of a function
 * @param {Function} fn A function for performance measurement
 * @param {Array} args Function arguments
 * @param {Object} options
 * @returns {Number} Result in milliseconds
 */
function timeit (fn, args=[], options={}) {
  const valid = fn && typeof fn === 'function'
  if(!valid) { throw new Error('No function provided.') }

  const NS_PER_SEC = 1e9
  const { e, r, l, d } = { e:1000, r:1, l:true, d:6, ...options }

  let results = []
  for (let i = 0; i < r; i++) {

    const start = process.hrtime()
    for (let i = 1; i < e; i++) { fn(args) }
    const diff = process.hrtime(start)
    const elapsed = (diff[0] * NS_PER_SEC + diff[1]) * 0.0000010

    const result = elapsed / e

    results.push(+(Math.round(result + `e+${6}`)  + `e-${6}`))
  }

  const ms = (results.reduce((p, c) => p + c, 0)) / results.length

  if (l) {
    console.log(`Function   : ${fn.name}()`)
    console.log(`Average    : ${ms.toFixed(d)}ms`)
    console.log(`Repetitions: ${r}`)
    console.log(`Executions : ${e}`)
  }

  return ms
}

function sum () {
  return [...arguments].reduce((p, c) => p+c, 0)
}

timeit(sum, args=[1, 2, 3, 4], options={e: 100000, r: 1, d: 6})

module.exports = timeit
