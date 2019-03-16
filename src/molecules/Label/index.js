import React from 'react';
import { styled } from '../../utils';

import { Icon } from '../../atoms';

const Label = ({
  children, icon, reverse, scale, column,
}) => (
  <LabelStyle>
    <LabelContent column={column} reverse={reverse} scale={scale}>
      { icon && <Icon icon={icon} scale={scale} /> }
      { children && <div>{children}</div> }
    </LabelContent>
  </LabelStyle>
);

const LabelStyle = styled.div`
  display: inline-block;
  font: inherit;
  color: inherit;
`;

const LabelContent = styled.div`
  display: flex;
  flex-direction: ${(props) => {
    const { column, reverse } = props;
    if (column) {
      return reverse ? 'column-reverse' : 'column';
    }
    return reverse ? 'row-reverse' : 'row';
  }};
  font-size: ${({ scale }) => (scale || '1')}rem;
  padding: 1rem;
`;

/** @component */
export default Label;
