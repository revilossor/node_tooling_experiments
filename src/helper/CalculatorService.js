export default class CalculatorService {
  send(equation) {
    console.log('send equation : ' + JSON.stringify(equation));
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        (xhr.status === 200) ?
          resolve(JSON.parse(xhr.responseText).result):
          reject(JSON.parse(xhr.responseText).error);
      });
      xhr.open("GET", 'http://localhost:8080/calc/' + equation.operation + '?data=' + JSON.stringify(equation.operands));
      xhr.send();
    });
  }
}
