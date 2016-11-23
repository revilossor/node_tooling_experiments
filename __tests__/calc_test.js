jest.unmock('../app/calc.js');

describe('calc', () => {
  beforeAll(() => {
    sum = require('../app/calc.js');
  });
  describe('add', () => {
    it('adds 1 and 2 to equal 3', () => {
      expect(sum.add(1, 2)).toBe(3);
    });
  });
  describe('sub', () => {
    it('subtracts 1 from 2 to equal 1', () => {
      expect(sum.sub(1, 2)).toBe(1);
    });
  });
  describe('mul', () => {
    it('multiplies 2 and 2 to equal 4', () => {
      expect(sum.mul(2, 2)).toBe(4);
    });
  });
  describe('div', () => {
    it('divides 2 and 2 to equal 1', () => {
      expect(sum.div(2, 2)).toBe(1);
    });
  });
});
