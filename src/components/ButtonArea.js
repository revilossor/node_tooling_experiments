import React from 'react';
import Button from './Button';

export default class ButtonArea extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Button operation="AC"/>
        <Button operation="+/-"/>
        <Button operation="%"/>
        <Button operation="/"/>
        <Button operation="7"/>
        <Button operation="8"/>
        <Button operation="9"/>
        <Button operation="*"/>
        <Button operation="4"/>
        <Button operation="5"/>
        <Button operation="6"/>
        <Button operation="-"/>
        <Button operation="1"/>
        <Button operation="2"/>
        <Button operation="3"/>
        <Button operation="+"/>
        <Button operation="0"/>
        <Button operation="."/>
        <Button operation="???"/>
        <Button operation="="/>
      </div>
    );
  }
}
