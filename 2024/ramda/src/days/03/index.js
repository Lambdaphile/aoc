import * as R from 'ramda'
import { run } from '../../utils/index.js'

export const evaluate = R.pipe(
  R.match(/\d+/g),
  R.map(Number),
  R.apply(R.multiply)
)

export const part1 = R.pipe(
  R.match(/mul\(\d+,\d+\)/g),
  R.reduce((sum, expr) => sum + evaluate(expr), 0)
)

export const part2 = R.pipe(
  R.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g),
  R.reduce(([isEnabled, sum], expr) =>
    R.cond([
      [R.equals('do()'), R.always([true, sum])],
      [R.equals('don\'t()'), R.always([false, sum])],
      [R.always(isEnabled), R.always([true, sum + evaluate(expr)])],
      [R.T, R.always([false, sum])]
    ])(expr),
    [true, 0]
  ),
  R.last
)

run(import.meta.url, part1, part2)
