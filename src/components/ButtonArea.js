import React from 'react';
import ButtonRow from './ButtonRow';

export default class ButtonArea extends React.Component {
  render() {
    return (
      <div className="buttons">{
        this.props.buttonRows.map((buttonRow) => <ButtonRow buttons={buttonRow} onClick={this.props.buttonPressHandler}/>)
      }</div>
    );
  }
}
