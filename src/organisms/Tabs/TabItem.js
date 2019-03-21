import React from 'react';
import { styled } from '../../utils';

const TabItem = ({
  children, index, currentIndex, onClick,
}) => (
  <TabItemStyle
    index={index}
    currentIndex={currentIndex}
    onClick={() => onClick(index)}
  >
    {children}
  </TabItemStyle>
);

const TabItemStyle = styled.div`
  display: flex;
  padding: 0.7rem;
  font-weight: ${({ index, currentIndex }) => (index === currentIndex ? 'bold' : 'normal')};
`;

export default TabItem;
