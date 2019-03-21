import React, { useState } from 'react';
import { styled } from '../../utils';

import TabItem from './TabItem';

const Tabs = ({ children, startIndex = 0 }) => {
  const [currentIndex, setIndex] = useState(startIndex);

  const setActiveTab = (index) => {
    setIndex(index);
  };

  return (
    <TabsContainer>
      <TabsRow>
        {children.map((child, index) => (
          <TabItem
            index={index}
            currentIndex={currentIndex}
            onClick={setActiveTab}
          >
            {child.props.name}
          </TabItem>
        ))}
      </TabsRow>
      {children.map((child, index) => (
        <TabContent
          index={index}
          currentIndex={currentIndex}
        >
          { child.props.children }
        </TabContent>
      ))}
    </TabsContainer>
  );
};

const TabsContainer = styled.div`
  border: solid 1px #efefef;
`;

const TabsRow = styled.div`
  display: flex;
`;

const TabContent = styled.div`
  min-height: 200px;
  display: ${({ index, currentIndex }) => (index === currentIndex ? 'block' : 'none')};
`;

/** @component */
export default Tabs;
