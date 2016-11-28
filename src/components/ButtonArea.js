import React from 'react';
import Button from './Button';

export default class ButtonArea extends React.Component {
  // onClick() {
  //   console.log('clicky on ' + this.props.operation + ' button');
  // }
  render() {
    return (
      <div className="buttons">
        <Button operation="AC" onClick={this.onClick}/>
        <Button operation="+/-" onClick={this.onClick}/>
        <Button operation="%" onClick={this.onClick}/>
        <Button operation="/" onClick={this.onClick}/>
        <Button operation="7" onClick={this.onClick}/>
        <Button operation="8" onClick={this.onClick}/>
        <Button operation="9" onClick={this.onClick}/>
        <Button operation="*" onClick={this.onClick}/>
        <Button operation="4" onClick={this.onClick}/>
        <Button operation="5" onClick={this.onClick}/>
        <Button operation="6" onClick={this.onClick}/>
        <Button operation="-" onClick={this.onClick}/>
        <Button operation="1" onClick={this.onClick}/>
        <Button operation="2" onClick={this.onClick}/>
        <Button operation="3" onClick={this.onClick}/>
        <Button operation="+" onClick={this.onClick}/>
        <Button operation="0" onClick={this.onClick}/>
        <Button operation="." onClick={this.onClick}/>
        <Button operation="???"/>
        <Button operation="="/>
      </div>
    );
  }
}
