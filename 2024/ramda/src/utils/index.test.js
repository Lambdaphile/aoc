import {
  frequency,
  isDecreasing,
  isIncreasing,
  isInRange,
  isMonotonic
} from './index.js'

describe('frequency', () => {
  it('should return the count of occurrences of an element in the array', () => {
    expect(frequency(2, [1, 2, 2, 3, 4, 2])).toBe(3)
    expect(frequency('a', ['a', 'b', 'a', 'c', 'a'])).toBe(3)
  })

  it('should return 0 if the element is not in the array', () => {
    expect(frequency(5, [1, 2, 3, 4])).toBe(0)
    expect(frequency('z', ['a', 'b', 'c'])).toBe(0)
  })

  it('should return 0 for an empty array', () => {
    expect(frequency(2, [])).toBe(0)
    expect(frequency('a', [])).toBe(0)
  })
})

describe('isIncreasing', () => {
  it('should return true for strictly increasing numbers', () => {
    expect(isIncreasing([1, 2, 3, 4, 5, 6])).toBe(true)
    expect(isIncreasing([-10, -5, 0, 5, 10])).toBe(true)
    expect(isIncreasing([0.1, 0.2, 0.3, 0.4])).toBe(true)
  })

  it('should return false for numbers that are not strictly increasing', () => {
    expect(isIncreasing([1, 2, 3, 3])).toBe(false)
    expect(isIncreasing([10, 9, 8, 7])).toBe(false)
    expect(isIncreasing([1, 1, 2, 3])).toBe(false)
  })

  it('should return true for a single-element array', () => {
    expect(isIncreasing([42])).toBe(true);
  })

  it('should return true for an empty array', () => {
    expect(isIncreasing([])).toBe(true)
  })
})

describe('isDecreasing', () => {
  it('should return true for strictly decreasing numbers', () => {
    expect(isDecreasing([6, 5, 4, 3, 2, 1])).toBe(true)
    expect(isDecreasing([10, 5, 0, -5, -10])).toBe(true)
    expect(isDecreasing([0.4, 0.3, 0.2, 0.1])).toBe(true)
  })

  it('should return false for numbers that are not strictly decreasing', () => {
    expect(isDecreasing([4, 4, 2, 1])).toBe(false)
    expect(isDecreasing([1, 2, 3, 4])).toBe(false)
    expect(isDecreasing([4, 3, 2, 2])).toBe(false)
  })

  it('should return true for a single-element array', () => {
    expect(isDecreasing([42])).toBe(true)
  })

  it('should return true for an empty array', () => {
    expect(isDecreasing([])).toBe(true)
  })
})

describe('isMonotonic', () => {
  it('should return true for strictly increasing or decreasing numbers', () => {
    expect(isMonotonic([1, 2, 3, 4])).toBe(true)
    expect(isMonotonic([-10, -5, 0, 5, 10])).toBe(true)
    expect(isMonotonic([0.1, 0.2, 0.3, 0.4])).toBe(true)
    expect(isMonotonic([4, 3, 2, 1])).toBe(true)
    expect(isMonotonic([10, 5, 0, -5, -10])).toBe(true)
    expect(isMonotonic([0.4, 0.3, 0.2, 0.1])).toBe(true)
  })

  it('should return false for numbers that are not strictly increasing or decreasing', () => {
    expect(isMonotonic([1, 2, 3, 3])).toBe(false)
    expect(isMonotonic([1, 1, 2, 3])).toBe(false)
    expect(isMonotonic([4, 4, 2, 1])).toBe(false)
    expect(isMonotonic([4, 3, 2, 2])).toBe(false)
  })

  it('should return true for a single-element array', () => {
    expect(isMonotonic([42])).toBe(true)
  })

  it('should return true for an empty array', () => {
    expect(isMonotonic([])).toBe(true)
  })
})

describe('isInRange', () => {
  it('should return true for numbers within the range', () => {
    expect(isInRange(3, [1, 2, 3, 4])).toBe(true)
  })

  it('should return true for numbers outside of the range', () => {
    expect(isInRange(3, [1, 2, 3, 7])).toBe(false)
  })

  it('should return true for single-element array', () => {
    expect(isInRange(3, [1])).toBe(true)
  })

  it('should return true for an empty array', () => {
    expect(isInRange(3, [])).toBe(true)
  })
})
