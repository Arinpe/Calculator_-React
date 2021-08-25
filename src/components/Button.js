import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name }) => (
  <div>
    <h1>{name}</h1>
  </div>
);
Button.defaultProps = {
  name: 'C',
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
