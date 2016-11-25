jest.unmock('../app/response');

describe('response', () => {
  const res = require('../app/response');
  var obj;
  describe('standardised structure', () => {
    beforeAll(() => {
      obj = res.get(1);
    });
    it('has a success field', () => {
      expect(obj.success).toBeDefined();
    });
    it('has a result field', () => {
      expect(obj.result).toBeDefined();
    });
    it('has an error field', () => {
      expect(obj.error).toBeDefined();
    });
  });
  describe('number response', () => {
    beforeAll(() => {
      obj = res.get(1);
    })
    it('success is true', () => {
      expect(obj.success).toBe(true);
    });
    it('result is the number', () => {
      expect(obj.result).toBe(1);
    });
    it('error is null', () => {
      expect(obj.error).toBe(null);
    });
  });
  describe('error response', () => {
    const err = new Error('mock error');
    beforeAll(() => {
      obj = res.get(err);
    });
    it('success is false', () => {
      expect(obj.success).toBe(false);
    });
    it('result is null', () => {
      expect(obj.result).toBe(null);
    });
    it('error is the error', () => {
      expect(obj.error).toBe(err);
    });
  });
});
