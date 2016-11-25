module.exports = {
  get:(result) => {
    var isSuccess = !(result instanceof Error);
    console.log('isSuccess with ' + result + ' is ' + isSuccess);
    return {
      success:isSuccess,
      result:(isSuccess) ? result : null,
      error:(isSuccess) ? null : result
    }
  }
}
