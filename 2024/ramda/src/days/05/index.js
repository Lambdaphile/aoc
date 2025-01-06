import * as R from 'ramda'
import { allIndexed, matrixMap, mid, run } from '../../utils/index.js'

export const parseRules = R.pipe(
  R.split(/\n/),
  R.map(R.split(/\|/)),
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
  R.split(/\n/),
  R.map(R.split(/,/)),
  matrixMap(Number)
)

export const parseInput = R.pipe(
  R.split(/\n\n/),
  ([rules, updates]) => [parseUpdates(updates), parseRules(rules)]
)

export const validateUpdate = (update, rules) =>
  allIndexed((pageNum, index) =>
    R.cond([
      [R.isEmpty, R.always(true)],
      [() => R.not(R.has(pageNum, rules)), R.always(false)],
      [R.T, sub => R.prop(pageNum, rules).isSupersetOf(new Set(sub))]
    ])(R.drop(index + 1, update)),
    update
  )

export const validateUpdates = (updates, rules) =>
  R.map(update => [validateUpdate(update, rules), update], updates)

export const part1 = R.pipe(
  parseInput,
  R.apply(validateUpdates),
  R.filter(update => R.head(update)),
  R.reduce((sum, update) => sum + mid(R.last(update)), 0)
)

run(import.meta.url, part1)
