import { evaluate, part1, part2 } from './index.js'

const input1 = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
const input2 = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`

describe('evaluate', () => {
  it('should evaluate and return the result of a mul expression', () => {
    expect(evaluate('mul(2,2)')).toBe(4)
  })
})

describe('part1', () => {
  it('should return the sum of uncorrupted mul instructions', () => {
    expect(part1(input1)).toBe(161)
  })
})

describe('part2', () => {
  it('should return the sum of uncorrupted mul instructions inside do() and don\'t() instructions', () => {
    expect(part2(input2)).toBe(48)
  })
})
