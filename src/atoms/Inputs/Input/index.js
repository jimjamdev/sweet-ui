import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../../utils';
import { InputBase } from '../../../styles/InputBase';

const Input = memo(({
  name, type, placeholder, disabled, ...rest
}) => (
  <InputStyle name={name} type={type} placeholder={placeholder} disabled={disabled} {...rest} />
));

const InputStyle = styled.input`
  ${InputBase};
`;

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Input;
