import testFun from '../src/index'

describe('testFun', () => {
  test('testFun', () => {
    expect(testFun('abc')).toBe('abc123')
  })
})
