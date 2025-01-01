import {
  DIRS,
  MAS,
  matchAllDirs,
  matchCrossDirs,
  matchWord,
  parseInput,
  part1,
  part2,
  XMAS
} from './index.js'

const input = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`
const parsedInput = [
  ['M', 'M', 'M', 'S', 'X', 'X', 'M', 'A', 'S', 'M'],
  ['M', 'S', 'A', 'M', 'X', 'M', 'S', 'M', 'S', 'A'],
  ['A', 'M', 'X', 'S', 'X', 'M', 'A', 'A', 'M', 'M'],
  ['M', 'S', 'A', 'M', 'A', 'S', 'M', 'S', 'M', 'X'],
  ['X', 'M', 'A', 'S', 'A', 'M', 'X', 'A', 'M', 'M'],
  ['X', 'X', 'A', 'M', 'M', 'X', 'X', 'A', 'M', 'A'],
  ['S', 'M', 'S', 'M', 'S', 'A', 'S', 'X', 'S', 'S'],
  ['S', 'A', 'X', 'A', 'M', 'A', 'S', 'A', 'A', 'A'],
  ['M', 'A', 'M', 'M', 'M', 'X', 'M', 'M', 'M', 'M'],
  ['M', 'X', 'M', 'X', 'A', 'X', 'M', 'A', 'S', 'X']
]

describe('parseInput', () => {
  it('should convert the input string into a 2D array of chars', () => {
    expect(parseInput(input)).toEqual(parsedInput)
  })
})

describe('matchWord', () => {
  it('should return true when the word matches in the specified direction (n, ne, e, etc.)', () => {
    expect(matchWord(XMAS, DIRS.n, [4, 6], parsedInput)).toBe(true)
    expect(matchWord(XMAS, DIRS.ne, [9, 5], parsedInput)).toBe(true)
    expect(matchWord(XMAS, DIRS.e, [0, 5], parsedInput)).toBe(true)
    expect(matchWord(XMAS, DIRS.se, [0, 4], parsedInput)).toBe(true)
    expect(matchWord(XMAS, DIRS.s, [3, 9], parsedInput)).toBe(true)
    expect(matchWord(XMAS, DIRS.sw, [3, 9], parsedInput)).toBe(true)
    expect(matchWord(XMAS, DIRS.w, [1, 4], parsedInput)).toBe(true)
    expect(matchWord(XMAS, DIRS.nw, [9, 9], parsedInput)).toBe(true)
  })
})

describe('matchAllDirs', () => {
  it('should return true for all 8 directions if a word is found', () => {
    expect(
      matchAllDirs(
        XMAS,
        [3, 3],
        [
          ['S', '.', '.', 'S', '.', '.', 'S'],
          ['.', 'A', '.', 'A', '.', 'A', '.'],
          ['.', '.', 'M', 'M', 'M', '.', '.'],
          ['S', 'A', 'M', 'X', 'M', 'A', 'S'],
          ['.', '.', 'M', 'M', 'M', '.', '.'],
          ['.', 'A', '.', 'A', '.', 'A', '.'],
          ['S', '.', '.', 'S', '.', '.', 'S']
        ]
      )
    ).toEqual([true, true, true, true, true, true, true, true])
  })
})

describe('matchCrossDirs', () => {
  it('should return true if a word is found in cross directions (vertical and horizontal)', () => {
    expect(
      matchCrossDirs(
        MAS,
        [1, 1],
        [
          ['M', '.', 'M'],
          ['.', 'A', '.'],
          ['S', '.', 'S']
        ]
      )
    ).toBe(true)
    expect(
      matchCrossDirs(
        MAS,
        [1, 1],
        [
          ['S', '.', 'M'],
          ['.', 'A', '.'],
          ['S', '.', 'M']
        ]
      )
    ).toBe(true)
    expect(
      matchCrossDirs(
        MAS,
        [1, 1],
        [
          ['S', '.', 'S'],
          ['.', 'A', '.'],
          ['M', '.', 'M']
        ]
      )
    ).toBe(true)
    expect(
      matchCrossDirs(
        MAS,
        [1, 1],
        [
          ['M', '.', 'S'],
          ['.', 'A', '.'],
          ['M', '.', 'S']
        ]
      )
    ).toBe(true)
  })
})

describe('part1', () => {
  it('should return the number of times the word "XMAS" appears in the input', () => {
    expect(part1(input)).toBe(18)
  })
})

describe('part2', () => {
  it('should return the number of times the word "X-MAS" appears in the input', () => {
    expect(part2(input)).toBe(9)
  })
})
