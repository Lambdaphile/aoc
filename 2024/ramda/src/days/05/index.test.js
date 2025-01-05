import * as R from 'ramda'
import {
  parseInput,
  parseRules,
  parseUpdates,
  part1,
  validateUpdate,
  validateUpdates
} from './index.js'

const input = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`
const parsedRules = {
  47: new Set([53, 13, 61, 29]),
  97: new Set([13, 61, 47, 29, 53, 75]),
  75: new Set([29, 53, 47, 61, 13]),
  61: new Set([13, 53, 29]),
  29: new Set([13]),
  53: new Set([29, 13])
}
const parsedUpdates = [
  [75, 47, 61, 53, 29],
  [97, 61, 53, 29, 13],
  [75, 29, 13],
  [75, 97, 47, 61, 53],
  [61, 13, 29],
  [97, 13, 75, 29, 47]
]

describe('parseRules', () => {
  it('should return the rules as an object of sets', () => {
    expect(parseRules(R.head(R.split(/\n\n/, input)))).toEqual(parsedRules)
  })
})

describe('parseUpdates', () => {
  it('should return the updates as a two-dimensional array of numbers', () => {
    expect(parseUpdates(R.last(R.split(/\n\n/, input)))).toEqual(parsedUpdates)
  })
})

describe('parseInput', () => {
  it('should return the input string as an array of parsedRules and parsedUpdates', () => {
    expect(parseInput(input)).toEqual([parsedUpdates, parsedRules])
  })
})

describe('validateUpdate', () => {
  it('should return true valid updates', () => {
    expect(validateUpdate(R.nth(0, parsedUpdates), parsedRules)).toBe(true)
    expect(validateUpdate(R.nth(1, parsedUpdates), parsedRules)).toBe(true)
    expect(validateUpdate(R.nth(2, parsedUpdates), parsedRules)).toBe(true)
  })

  it('should return false for invalid updates', () => {
    expect(validateUpdate(R.nth(3, parsedUpdates), parsedRules)).toBe(false)
    expect(validateUpdate(R.nth(4, parsedUpdates), parsedRules)).toBe(false)
    expect(validateUpdate(R.nth(5, parsedUpdates), parsedRules)).toBe(false)
  })
})

describe('validateUpdates', () => {
  it('should return validated updates as a tuple of [boolean, update]', () => {
    expect(validateUpdates(parsedUpdates, parsedRules)).toEqual([
      [true, R.nth(0, parsedUpdates)],
      [true, R.nth(1, parsedUpdates)],
      [true, R.nth(2, parsedUpdates)],
      [false, R.nth(3, parsedUpdates)],
      [false, R.nth(4, parsedUpdates)],
      [false, R.nth(5, parsedUpdates)]
    ])
  })
})

describe('part1', () => {
  it('should return the sum of middle page numbers from correctly-ordered updates', () => {
    expect(part1(input)).toBe(143)
  })
})
