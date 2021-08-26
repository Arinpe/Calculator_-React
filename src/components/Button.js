import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({
  name, clickHandle, color, wide,
}) => {
  const classname = `btn ${color} ${wide}`;
  return (
    <button
      className={classname}
      type="button"
      onClick={() => {
				clickHandle(name); // eslint-disable-line
      }}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: 'C',
  color: 'orangered',
  wide: '125px',
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.string,
  color: PropTypes.string,
  clickHandle: PropTypes.func.isRequired,
};

export default Button;
