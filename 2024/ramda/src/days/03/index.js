import * as R from 'ramda'
import { run } from '../../utils/index.js'

export const parseInput = R.pipe(
  R.match(/mul\(\d+,\d+\)/g),
  R.map(R.match(/\d+/g)),
  R.map(R.map(Number)),
)

const sumProduct = R.reduce((sum, [a, b]) => sum + a * b, 0)

export const part1 = R.pipe(
  parseInput,
  sumProduct
)

run(import.meta.url, part1)
