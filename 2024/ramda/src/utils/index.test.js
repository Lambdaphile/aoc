import { frequency } from './index.js'

describe('frequency', () => {
  it('should return the frequency of the element in the array', () => {
    expect(frequency(2, [1, 2, 2, 3, 4, 2])).toBe(3)
    expect(frequency('a', ['a', 'b', 'a', 'c', 'a'])).toBe(3)
  })

  it('should return 0 if the element is not in the array', () => {
    expect(frequency(5, [1, 2, 3, 4])).toBe(0)
    expect(frequency('z', ['a', 'b', 'c'])).toBe(0)
  });

  it('should return 0 for an empty array', () => {
    expect(frequency(2, [])).toBe(0)
    expect(frequency('a', [])).toBe(0)
  });
})



