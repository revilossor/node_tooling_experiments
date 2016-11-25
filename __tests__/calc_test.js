jest.unmock('../app/calc.js');

describe('calc', () => {
  var calc;
  beforeAll(() => {
    calc = require('../app/calc.js');
  });

  it('throws for unrecognised operations', () => {
    expect(()=>{calc.doOperation('something', 1, 2)}).toThrowError("unrecognised operation! cannot calculate!");
  });

  describe('add', () => {
    it('adds 1 and 2 to equal 3', () => {
      expect(calc.doOperation('add', 1, 2)).toBe(3);
    });
    it('only accepts number arguments', () => {
      expect(()=>{calc.doOperation('add', '1' ,2)}).toThrowError("only accepts number arguments!");
    });
  });
  describe('sub', () => {
    it('subtracts 2 from 1 to equal -1', () => {
      expect(calc.doOperation('sub', 1, 2)).toBe(-1);
    });
    it('only accepts number arguments', () => {
      expect(()=>{calc.doOperation('sub', '1', 2)}).toThrowError("only accepts number arguments!");
    });
  });
  describe('mul', () => {
    it('multiplies 2 and 2 to equal 4', () => {
      expect(calc.doOperation('mul', 2, 2)).toBe(4);
    });
    it('only accepts number arguments', () => {
      expect(()=>{calc.doOperation('mul', '1', 2)}).toThrowError("only accepts number arguments!");
    });
  });
  describe('div', () => {
    it('divides 2 and 2 to equal 1', () => {
      expect(calc.doOperation('div', 2, 2)).toBe(1);
    });
    it('only accepts number arguments', () => {
      expect(()=>{calc.doOperation('div', '1',2)}).toThrowError("only accepts number arguments!");
    });
  });
});
