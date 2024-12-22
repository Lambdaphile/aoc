import { isSafe, isSafeRelaxed, parseInput, part1, part2 } from './index.js'

const input = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

describe('parseInput', () => {
  it('should convert the input into a two-dimensional array of numbers', () => {
    expect(parseInput(input)).toEqual([
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9]
    ])
  })
})

describe('isSafe', () => {
  it('should return true for reports with levels increasing or decreasing within the range of 1 to 3', () => {
    expect(isSafe([0, 1, 3, 6])).toBe(true)
    expect(isSafe([6, 5, 3, 0])).toBe(true)
  })

  it('should return false for reports with levels increasing or decreasing by more than 3', () => {
    expect(isSafe([0, 1, 3, 7])).toBe(false)
    expect(isSafe([7, 3, 1, 0])).toBe(false)
  })

  it('should return false for non-monotonic reports', () => {
    expect(isSafe([0, 1, 3, 2])).toBe(false)
    expect(isSafe([0, 1, 3, 3])).toBe(false)
  })
})

describe('isSafeRelaxed', () => {
  it('should return true for reports within the range of 1 to 3, allowing one bad level', () => {
    expect(isSafeRelaxed([0, 1, 3, 7])).toBe(true)
    expect(isSafeRelaxed([7, 3, 1, 0])).toBe(true)
  })

  it('should return false for reports with multiple levels outside the range of 3', () => {
    expect(isSafeRelaxed([0, 1, 3, 7, 8])).toBe(false)
    expect(isSafeRelaxed([8, 7, 3, 2, 1, 0])).toBe(false)
  })

  it('should return true for non-monotonic reports with one bad level', () => {
    expect(isSafeRelaxed([0, 1, 3, 2])).toBe(true)
    expect(isSafeRelaxed([2, 1, 3, 6])).toBe(true)
    expect(isSafeRelaxed([0, 1, 3, 3])).toBe(true)
    expect(isSafeRelaxed([0, 0, 3, 6])).toBe(true)
  })

  it('should return false for non-monotonic reports with more than one bad level', () => {
    expect(isSafeRelaxed([0, 1, 3, 2, 1])).toBe(false)
    expect(isSafeRelaxed([3, 2, 1, 3, 6])).toBe(false)
    expect(isSafeRelaxed([0, 1, 3, 3, 3])).toBe(false)
    expect(isSafeRelaxed([0, 0, 0, 3, 6])).toBe(false)
  })
})

describe('part1', () => {
  it('should return the count of safe reports', () => {
    expect(part1(input)).toBe(2)
  })
})

describe('part2', () => {
  it('should return the count safe reports using problem dampener (allowing one bad level)', () => {
    expect(part2(input)).toBe(4)
  })
})
