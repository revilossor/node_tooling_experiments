import React from 'react';
import Header from './Header';
import Calculator from './Calculator';
import Footer from './Footer';

export default class Stage extends React.Component {
  render() {
    return (
      <div>
        <Calculator/>
      </div>
    );
  }
}
