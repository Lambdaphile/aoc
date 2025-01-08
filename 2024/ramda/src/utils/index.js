import { readFileSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import * as R from 'ramda'

export const getInput = R.pipe(
  fileURLToPath,
  dirname,
  dir => readFileSync(resolve(dir, './input.txt'), { encoding: 'utf-8' })
)

export const run = (path, ...fns) => {
  if (process.env.NODE_ENV !== 'test') {
    const input = getInput(path)

    console.log(...fns.map(fn => fn(input)))
  }
}

export const asc = (a, b) => a - b

export const frequency = (x, xs) => R.pipe(
  R.countBy(R.identity),
  R.propOr(0, x)
)(xs)

export const allIndexed = R.addIndex(R.all)

export const isIncreasing = ns =>
  allIndexed((n, idx) => idx === 0 || n > ns[idx - 1], ns)

export const isDecreasing = ns =>
  allIndexed((n, idx) => idx === 0 || n < ns[idx - 1], ns)

export const isMonotonic = ns => R.or(isIncreasing(ns), isDecreasing(ns))

export const isInRange = R.curryN(2, (x, ns) =>
  allIndexed((n, idx) => idx === 0 || Math.abs(n - ns[idx - 1]) <= x, ns))

export const anyIndexed = R.addIndex(R.any)

export const reduceIndexed = R.addIndex(R.reduce)

export const mapIndexed = R.addIndex(R.map)

export const matrixReduce = R.curryN(3, (callback, initialValue, matrix) => {
  let accumulator = initialValue

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      accumulator = callback(accumulator, matrix[i][j], [i, j], matrix)
    }
  }

  return accumulator
})

export const strictPath = (path, coll) =>
  R.pipe(
    R.map(n => n < 0 ? undefined : n),
    R.path(R.__, coll)
  )(path)

export const matrixMap = R.curryN(2, (callback, matrix) => {
  let result = []

  for (let i = 0; i < matrix.length; i++) {
    result[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = callback(matrix[i][j], [i, j], matrix)
    }
  }

  return result
})

export const isEven = n => n % 2 === 0

export const isOdd = R.complement(isEven)

export const mid = xs =>
  R.pipe(
    xs => Math.floor(xs.length / 2),
    midIndex =>
      R.cond([
        [R.isEmpty, R.always(undefined)],
        [R.pipe(R.length, isEven), R.slice(midIndex - 1, midIndex + 1)],
        [R.T, R.nth(midIndex)]
      ])(xs)
  )(xs)

export const bubble = R.curryN(2, (pred, list) => {
  const result = [...list]

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      const x = result[j], y = result[j + 1]

      if (pred(x, y, result)) {
        result[j] = y
        result[j + 1] = x
      }
    }
  }

  return result
})
