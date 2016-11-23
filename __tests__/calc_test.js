jest.unmock('../app/calc.js');

describe('calc', () => {
  beforeAll(() => {
    sum = require('../app/calc.js');
  });
  describe('add', () => {
    it('adds 1 and 2 to equal 3', () => {
      expect(sum.add(1, 2)).toBe(3);
    });
    it('only accepts number arguments', () => {
      expect(()=>{sum.add('1',2)}).toThrowError("only accepts number arguments!");
    });
  });
  describe('sub', () => {
    it('subtracts 2 from 1 to equal -1', () => {
      expect(sum.sub(1, 2)).toBe(-1);
    });
    it('only accepts number arguments', () => {
      expect(()=>{sum.sub('1',2)}).toThrowError("only accepts number arguments!");
    });
  });
  describe('mul', () => {
    it('multiplies 2 and 2 to equal 4', () => {
      expect(sum.mul(2, 2)).toBe(4);
    });
    it('only accepts number arguments', () => {
      expect(()=>{sum.mul('1',2)}).toThrowError("only accepts number arguments!");
    });
  });
  describe('div', () => {
    it('divides 2 and 2 to equal 1', () => {
      expect(sum.div(2, 2)).toBe(1);
    });
    it('only accepts number arguments', () => {
      expect(()=>{sum.div('1',2)}).toThrowError("only accepts number arguments!");
    });
  });
});
