import * as R from 'ramda'
import { allIndexed, bubble, matrixMap, mid, run } from '../../utils/index.js'

export const parseRules = R.pipe(
  R.split('\n'),
  R.map(R.split('|')),
  matrixMap(Number),
  R.reduce((rules, [x, y]) =>
    R.assoc(
      x,
      R.prop(x, rules) ? R.prop(x, rules).add(y) : new Set([y]),
      rules
    ),
    {}
  )
)

export const parseUpdates = R.pipe(
  R.split('\n'),
  R.map(R.split(',')),
  matrixMap(Number)
)

export const parseInput = R.pipe(
  R.split('\n\n'),
  ([rules, updates]) => [parseUpdates(updates), parseRules(rules)]
)

const isValidUpdate = (sub, update = new Set) =>
  new Set(sub).isSubsetOf(update)

export const validateUpdate = (update, rules) =>
  allIndexed((pageNum, index) =>
    isValidUpdate(R.drop(index + 1, update), R.prop(pageNum, rules)),
    update
  )

export const validateUpdates = (updates, rules) =>
  R.pipe(
    R.map(update => [validateUpdate(update, rules), update]),
    validatedUpdates => [validatedUpdates, rules]
  )(updates)

export const sumMiddles = R.reduce((sum, ns) => sum + mid(ns), 0)

export const reorderUpdates = (updates, rules) =>
  R.map(
    bubble((x, _, r) =>
      !isValidUpdate(R.drop(R.indexOf(x, r) + 1, r), R.prop(x, rules))
    ),
    updates
  )

export const part1 = R.pipe(
  parseInput,
  R.apply(validateUpdates),
  R.head,
  R.filter(R.head),
  R.map(R.last),
  sumMiddles
)

export const part2 = R.pipe(
  parseInput,
  R.apply(validateUpdates),
  R.juxt([R.compose(R.map(R.last), R.reject(R.head), R.head), R.last]),
  R.apply(reorderUpdates),
  sumMiddles
)

run(import.meta.url, part1, part2)
