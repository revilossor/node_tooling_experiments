jest.unmock('../app/calc.js');

describe('calc', () => {
  var calc;

  const invalidArgumentError = new Error("only accepts number arguments!");
  const unknownOperationError = new Error("unrecognised operation! cannot calculate!");

  beforeAll(() => {
    calc = require('../app/calc.js');
  });

  it('returns correct error for unrecognised operations', () => {
      expect(calc.doOperation('unrecognised', 1, 2)).toEqual(unknownOperationError);
  });

  describe('add', () => {
    it('adds 1 and 2 to equal 3', () => {
      expect(calc.doOperation('add', 1, 2)).toBe(3);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toEqual(invalidArgumentError);
    });
  });
  describe('sub', () => {
    it('subtracts 2 from 1 to equal -1', () => {
      expect(calc.doOperation('sub', 1, 2)).toBe(-1);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toEqual(invalidArgumentError);
    });
  });
  describe('mul', () => {
    it('multiplies 2 and 2 to equal 4', () => {
      expect(calc.doOperation('mul', 2, 2)).toBe(4);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toEqual(invalidArgumentError);
    });
  });
  describe('div', () => {
    it('divides 2 and 2 to equal 1', () => {
      expect(calc.doOperation('div', 2, 2)).toBe(1);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toEqual(invalidArgumentError);
    });
  });
});
