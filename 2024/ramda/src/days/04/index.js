import * as R from 'ramda'
import {
  allIndexed,
  matrixReduce,
  run,
  strictPath
} from "../../utils/index.js"

export const XMAS = 'XMAS'
export const MAS = 'MAS'
export const DIRS = {
  n: ([y, x], scale) => [y - scale, x],
  ne: ([y, x], scale) => [y - scale, x + scale],
  e: ([y, x], scale) => [y, x + scale],
  se: ([y, x], scale) => [y + scale, x + scale],
  s: ([y, x], scale) => [y + scale, x],
  sw: ([y, x], scale) => [y + scale, x - scale],
  w: ([y, x], scale) => [y, x - scale],
  nw: ([y, x], scale) => [y - scale, x - scale]
}

export const parseInput = R.pipe(
  R.split('\n'),
  R.map(R.split(''))
)

export const matchWord = (word, dir, startPoint, grid) =>
  allIndexed(
    (char, index) => char === strictPath(dir(startPoint, index), grid),
    word
  )

export const matchAllDirs = (word, startPoint, grid) =>
  R.pipe(
    R.values,
    R.map(dir => matchWord(word, dir, startPoint, grid))
  )(DIRS)

export const matchCrossDirs = (word, [y, x], grid) =>
  R.and(
    R.or(
      matchWord(word, DIRS.se, [R.dec(y), R.dec(x)], grid),
      matchWord(word, DIRS.nw, [R.inc(y), R.inc(x)], grid)
    ),
    R.or(
      matchWord(word, DIRS.sw, [R.dec(y), R.inc(x)], grid),
      matchWord(word, DIRS.ne, [R.inc(y), R.dec(x)], grid)
    )
  )

export const part1 = R.pipe(
  parseInput,
  matrixReduce((count, char, coord, original) =>
    char === R.head(XMAS)
      ? count + R.sum(matchAllDirs(XMAS, coord, original))
      : count,
    0
  )
)

export const part2 = R.pipe(
  parseInput,
  matrixReduce((count, char, coord, original) =>
    char === R.nth(1, MAS)
      ? count + matchCrossDirs(MAS, coord, original)
      : count,
    0
  )
)

run(import.meta.url, part1, part2)
