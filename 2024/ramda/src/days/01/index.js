import * as R from 'ramda'
import { asc, frequency, run } from '../../utils/index.js'

export const parseRow = R.pipe(
  R.split('  '),
  R.map(Number)
)

export const parseInput = R.pipe(
  R.split('\n'),
  R.map(parseRow),
  R.transpose
)

export const part1 = R.pipe(
  parseInput,
  R.map(R.sort(asc)),
  R.transpose,
  R.reduce((sum, [a, b]) => sum + Math.abs(a - b), 0)
)

export const part2 = R.pipe(
  parseInput,
  ([a, b]) => R.map(n => n * frequency(n, b), a),
  R.sum
)

run(import.meta.url, part1, part2)
