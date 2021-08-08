import { add } from './dice'

describe('my test', () => {
  it('foo is bar', () => {
    const sum = add(1, 1)
    expect(sum).toEqual(2)
  })
})
