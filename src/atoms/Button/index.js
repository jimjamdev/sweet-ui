import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../utils';

const Button = ({ children }) => (
  <ButtonStyle type="button">{ children }</ButtonStyle>
);

const ButtonStyle = styled.button`
  outline: 0 none;
  background: deepskyblue;
`;

Button.propTypes = {
  children: PropTypes.any,
};

export { Button };
