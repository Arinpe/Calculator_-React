import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ total }) => (
  <div className="display">
    <h1 className="result">{total}</h1>
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
};
Display.defaultProps = {
  total: '0',
};
export default Display;
