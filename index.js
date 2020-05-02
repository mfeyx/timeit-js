function roundTo(decimalPlaces, numberToRound) {
  return +(Math.round(numberToRound + `e+${decimalPlaces}`)  + `e-${decimalPlaces}`)
}

function startTimer () {
  const time = process.hrtime()
  return time
}

function endTimer (time) {
  const diff = process.hrtime(time)
  const NS_PER_SEC = 1e9
  const result = (diff[0] * NS_PER_SEC + diff[1])
  const elapsed = result * 0.0000010
  return roundTo(6, elapsed)
}

function timer (fn, args, e) {
  const start = startTimer()
  for (var i = 1; i < executions; i++) {
    fn(...args)
  }
  return endTimer(start)
}

function measure (fn, args, e=100000, r=1) {
  let results = []
  for (let i = 0; i < r; i++) {
    results.push(timer(fn, args, e))
  }
  const result = results.reduce((pv, cv) => pv + cv, 0)
  return result / results.length
}

module.exports = measure
