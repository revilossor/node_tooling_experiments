module.exports = {
  get:(result) => {
    var isSuccess = !(result instanceof Error);
    return {
      success:isSuccess,
      result:(isSuccess) ? result : null,
      error:(isSuccess) ? null : result
    }
  },
  stringify:(obj) => {
    obj.error = obj.error.toString();
    return obj;
  }
}
