jest.unmock('../app/response');

describe('response', () => {
  var res;
  beforeAll(() => {
    res = require('../app/response').get(true, 1);
  });
  it('has a success field', () => {
    expect(res.success).toBeDefined();
  });
  it('has a result field', () => {
    expect(res.result).toBeDefined();
  });
});
