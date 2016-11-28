import React from 'react';
import Display from './Display';
import ButtonArea from './ButtonArea';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <Display/>
        <ButtonArea/>
      </div>
    );
  }
}
