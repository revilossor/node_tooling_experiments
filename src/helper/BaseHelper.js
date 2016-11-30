export default class BaseHelper {
  constructor() {
    this.logEnabled = true;
  }
  log(message) {
    if(this.logEnabled) {
      console.log('[' + this.constructor.name + '] ' + message);  // this.constructor.name is uglified out!
    }
  }
}
