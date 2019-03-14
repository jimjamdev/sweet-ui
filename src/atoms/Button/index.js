import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../utils';

const Button = memo(({ children, type, onClick }) => (
  <ButtonStyle type={type} onClick={onClick}>{ children }</ButtonStyle>
));

const ButtonStyle = styled.button`
  outline: none;
  border: 0 none;
  color: white;
  font: inherit;
  padding: 0.5rem 2rem;
  border-radius: 3rem;
  background: tomato;
`;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.any,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

/** @component */
export default Button;
