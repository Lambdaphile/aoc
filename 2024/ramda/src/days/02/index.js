import * as R from 'ramda'
import { anyIndexed, isInRange, isMonotonic, run } from '../../utils/index.js'

const MAX_DIFF = 3

export const parseInput = R.pipe(
  R.split('\n'),
  R.map(R.split(' ')),
  R.map(R.map(Number))
)

export const isSafe = R.both(
  R.partial(isInRange, [MAX_DIFF]),
  isMonotonic
)

export const isSafeRelaxed = R.either(
  isSafe,
  anyIndexed((_, idx, report) => isSafe(R.remove(idx, 1, report)))
)

export const part1 = R.pipe(
  parseInput,
  R.reduce((count, report) => isSafe(report) ? R.inc(count) : count, 0)
)

export const part2 = R.pipe(
  parseInput,
  R.reduce((count, report) => isSafeRelaxed(report) ? R.inc(count) : count, 0)
)

run(import.meta.url, part1, part2)
