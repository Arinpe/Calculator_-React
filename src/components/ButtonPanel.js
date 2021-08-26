import React from 'react';

import './ButtonPanel.css';

import PropTypes from 'prop-types';

import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className="line1">
      <Button name="AC" clickHandle={clickHandler} color="red" />
      <Button name="+/-" clickHandle={clickHandler} color="red" />
      <Button name="%" clickHandle={clickHandler} color="red" />
      <Button name="÷" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="7" clickHandle={clickHandler} color="red" />
      <Button name="8" clickHandle={clickHandler} color="red" />
      <Button name="9" clickHandle={clickHandler} color="red" />
      <Button name="X" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="4" clickHandle={clickHandler} color="red" />
      <Button name="5" clickHandle={clickHandler} color="red" />
      <Button name="6" clickHandle={clickHandler} color="red" />
      <Button name="-" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="1" clickHandle={clickHandler} color="red" />
      <Button name="2" clickHandle={clickHandler} color="red" />
      <Button name="3" clickHandle={clickHandler} color="red" />
      <Button name="+" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="0" clickHandle={clickHandler} color="red" wide="wide" />
      <Button name="." clickHandle={clickHandler} color="red" />
      <Button name="=" clickHandle={clickHandler} />
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
