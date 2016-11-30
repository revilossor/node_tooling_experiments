import BaseHelper from './BaseHelper';

export default class CalculatorService extends BaseHelper {
  constructor() {
    super();
  }
  send(equation) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      console.log('status : ' + xhr.status + ' response ' + xhr.responseText);
    });
    xhr.open("GET", 'http://localhost:8080/calc/add?data=[10,5]');
    xhr.send();
  }


}
