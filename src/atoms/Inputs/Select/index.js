import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { styled } from '../../../utils';
import { InputBase } from '../../../styles/InputBase';

const Select = memo(({
  options, name, placeholder, value, disabled, onChange,
}) => {
  !isEmpty(options) && options.unshift({ name: placeholder, value: null });
  return (
    <SelectStyle
      name={name}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
    >
      {!isEmpty(options) && options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </SelectStyle>
  );
});

const SelectStyle = styled.select`
  ${InputBase};
`;

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

export default Select;
