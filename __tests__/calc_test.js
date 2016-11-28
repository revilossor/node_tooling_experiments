jest.unmock('../app/calc').unmock('../app/error');

describe('calc', () => {
  var calc;
  var error;

  beforeAll(() => {
    calc = require('../app/calc');
    error = require('../app/error');
  });

  it('returns correct error for unrecognised operations', () => {
      expect(calc.doOperation('unrecognised', 1, 2)).toBe(error.unknownOperationError);
  });

  describe('add', () => {
    it('adds 1 and 2 to equal 3', () => {
      expect(calc.doOperation('add', 1, 2)).toBe(3);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toBe(error.invalidArgumentError);
    });
  });
  describe('sub', () => {
    it('subtracts 2 from 1 to equal -1', () => {
      expect(calc.doOperation('sub', 1, 2)).toBe(-1);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toBe(error.invalidArgumentError);
    });
  });
  describe('mul', () => {
    it('multiplies 2 and 2 to equal 4', () => {
      expect(calc.doOperation('mul', 2, 2)).toBe(4);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toBe(error.invalidArgumentError);
    });
  });
  describe('div', () => {
    it('divides 2 and 2 to equal 1', () => {
      expect(calc.doOperation('div', 2, 2)).toBe(1);
    });
    it('only accepts number arguments', () => {
      expect(calc.doOperation('add', '1' ,2)).toBe(error.invalidArgumentError);
    });
  });
});
