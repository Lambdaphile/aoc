import { parseInput, part1 } from './index.js'

const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
const parsedInput = [
  [2, 4],
  [5, 5],
  [11, 8],
  [8, 5]
]

describe('parseInput', () => {
  it('should convert the input into a two-dimensional array of numbers', () => {
    expect(parseInput(input)).toEqual(parsedInput)
  })
})

describe('part1', () => {
  it('should return the sum of uncorrupted mul instructions', () => {
    expect(part1(input)).toBe(161)
  })
})
