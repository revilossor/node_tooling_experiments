import BaseHelper from './BaseHelper';

export default class CalculatorService extends BaseHelper {
  constructor() {
    super();
  }
  send(equation) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        (xhr.status === 200) ?
          resolve(JSON.parse(xhr.responseText).result):
          reject(JSON.parse(xhr.responseText).error);
      });
      xhr.open("GET", 'http://localhost:8080/calc/add?data=[10,5]');
      xhr.send();
    });
  }


}
