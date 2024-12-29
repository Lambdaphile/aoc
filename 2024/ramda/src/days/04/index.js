import * as R from 'ramda'
import {
  allIndexed,
  reduceMatrix,
  run,
  strictPath,
} from "../../utils/index.js";

const XMAS = R.split('', 'XMAS')
const MAS = R.tail(XMAS)

export const parseInput = R.pipe(
  R.split('\n'),
  R.map(R.split(''))
)

const matchHorizontal = (chars, rowIndex, colIndex, matrix) =>
  R.pipe(
    R.juxt([
      allIndexed(
        (char, index) =>
          strictPath([rowIndex, colIndex + index], matrix) === char),
      allIndexed(
        (char, index) =>
          strictPath([rowIndex, colIndex - index], matrix) === char)
    ]),
    R.sum
  )(chars)

const matchVertical = (chars, rowIndex, colIndex, matrix) =>
  R.pipe(
    R.juxt([
      allIndexed(
        (char, index) =>
          strictPath([rowIndex + index, colIndex], matrix) === char),
      allIndexed(
        (char, index) =>
          strictPath([rowIndex - index, colIndex], matrix) === char)
    ]),
    R.sum
  )(chars)

const matchFromTopLeftToBottomRight = (chars, rowIndex, colIndex, matrix) =>
  R.pipe(
    allIndexed(
      (char, index) =>
        strictPath([rowIndex + index, colIndex + index], matrix) === char),
    Number
  )(chars)

const matchFromBottomRightToTopLeft = (chars, rowIndex, colIndex, matrix) =>
  R.pipe(
    allIndexed(
      (char, index) =>
        strictPath([rowIndex - index, colIndex - index], matrix) === char),
    Number
  )(chars)

const matchMainDiagonal = R.pipe(
  R.juxt([matchFromTopLeftToBottomRight, matchFromBottomRightToTopLeft]),
  R.sum
)

const matchFromTopRightToBottomLeft = (chars, rowIndex, colIndex, matrix) =>
  R.pipe(
    allIndexed(
      (char, index) =>
        strictPath([rowIndex + index, colIndex - index], matrix) === char
    ),
    Number
  )(chars)

const matchFromBottomLeftToTopRight = (chars, rowIndex, colIndex, matrix) =>
  R.pipe(
    allIndexed(
      (char, index) =>
        strictPath([rowIndex - index, colIndex + index], matrix) === char
    ),
    Number
  )(chars)

const matchSecondDiagonal = R.pipe(
  R.juxt([matchFromTopRightToBottomLeft, matchFromBottomLeftToTopRight]),
  R.sum
)

const matchDiagonals = R.converge(
  R.add,
  [matchMainDiagonal, matchSecondDiagonal]
)

const matchAllDirections = R.converge(
  (...result) => R.sum(result),
  [matchHorizontal, matchVertical, matchDiagonals]
)

const matchXPattern = (chars, rowIndex, colIndex, matrix) =>
  R.and(
    R.add(
      matchFromTopLeftToBottomRight(chars, rowIndex - 1, colIndex - 1, matrix),
      matchFromBottomRightToTopLeft(chars, rowIndex + 1, colIndex + 1, matrix)
    ),
    R.add(
      matchFromTopRightToBottomLeft(chars, rowIndex - 1, colIndex + 1, matrix),
      matchFromBottomLeftToTopRight(chars, rowIndex + 1, colIndex - 1, matrix)
    )
  )

export const part1 = R.pipe(
  parseInput,
  reduceMatrix(
    (count, char, rowIndex, colIndex, matrix) =>
      char === R.head(XMAS)
        ? count + matchAllDirections(XMAS, rowIndex, colIndex, matrix)
        : count,
    0
  )
)

export const part2 = R.pipe(
  parseInput,
  reduceMatrix(
    (count, char, rowIndex, colIndex, matrix) =>
      char === R.nth(1, MAS)
        ? count + matchXPattern(MAS, rowIndex, colIndex, matrix)
        : count,
    0
  )
)

run(import.meta.url, part1, part2)
