var ctx;

function CalculatorController(context) {
  ctx = context;
  this.test = function() {
    //console.log('state : ' + JSON.stringify(this.state));
    this.setState({
      display:'hello view controller'
    });

  }
}

CalculatorController.prototype = new Proxy(CalculatorController, {
  get:function(target, property, receiver) {
    return (property in target) ? target[property] : ctx[property];
  }
});

module.exports = CalculatorController;
