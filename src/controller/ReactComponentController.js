var ctx;  // smelly!
function ReactComponentController(context) {
  ctx = context;
}
ReactComponentController.prototype = new Proxy(ReactComponentController, {
  get:function(target, property, receiver) {
    return (property in target) ? target[property] : ctx[property];
  }
});
module.exports = ReactComponentController;
