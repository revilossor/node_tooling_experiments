import React from 'react';
import Display from './Display';
import ButtonArea from './ButtonArea';

var buttonFunctionMap = {
  '7':()=>{console.log('7 press handler' + c1)},
  '8':()=>{console.log('8 press handler')},
  '9':()=>{console.log('9 press handler')},
  '/':()=>{console.log('/ press handler')},
  '4':()=>{console.log('4 press handler')},
  '5':()=>{console.log('5 press handler')},
  '6':()=>{console.log('6 press handler')},
  '*':()=>{console.log('* press handler')},
  '1':()=>{console.log('1 press handler')},
  '2':()=>{console.log('2 press handler')},
  '3':()=>{console.log('3 press handler')},
  '-':()=>{console.log('- press handler')},
  '0':()=>{console.log('0 press handler')},
  '.':()=>{console.log('. press handler')},
  '+':()=>{console.log('+ press handler')},
  '=':()=>{console.log('= press handler')}
};

export default class Calculator extends React.Component {
  getInitialState() {
    return {
      displayString:'helloDisplay'
    };
  }
  render() {
    return (
      <div className="container">
        <Display/>
        <ButtonArea buttons={buttonFunctionMap}/>
      </div>
    );
  }
}
