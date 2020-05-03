function wrapper (fn, args=[], options={}) {
  // args = [...arguments].slice(1, -1)
  console.log(fn(args))
}

const sum = args => [...args].reduce((p,c) => p+c, 0)

wrapper(sum, [1, 2, 3, 6], {})