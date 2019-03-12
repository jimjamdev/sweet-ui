import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => (
  <button type="button">{ children }</button>
);

Button.propTypes = {
  children: PropTypes.any,
};

export { Button };
