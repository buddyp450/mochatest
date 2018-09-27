var expect = require('expect');

describe('a test suite', () => {
  before(() => {
    console.log('test suite before');
  });

  beforeEach(() => {
    console.log('test suite beforeEach');
  });

  it('passes a basic test case', () => {
    expect(true).toBe(true);
  });
});