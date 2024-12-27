import { parseInput, part1, part2 } from './index.js'

const input = `3   4
4   3
2   5
1   3
3   9
3   3`

describe('parseInput', () => {
  it('should return input as transposed matrix of numbers', () => {
    expect(parseInput(input)).toEqual([
      [3, 4, 2, 1, 3, 3],
      [4, 3, 5, 3, 9, 3]
    ])
  })
})

describe('part1', () => {
  it('should return the total distance between the lists', () => {
    expect(part1(input)).toBe(11)
  })
})

describe('part2', () => {
  it('should return the similarity score of the lists', () => {
    expect(part2(input)).toBe(31)
  })
})
