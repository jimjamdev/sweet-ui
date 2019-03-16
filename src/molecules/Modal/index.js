import React, { useState, useEffect } from 'react';

import { styled } from '../../utils';
import Overlay from '../../atoms/Overlay';
import { Icon } from '../../atoms';

const Modal = ({
  title, children, open, onClose,
}) => {
  const [isOpen, setModelOpen] = useState(open);

  const close = (e) => {
    e.stopPropagation();
    onClose();
    setModelOpen(false);
  };

  useEffect(() => {
    setModelOpen(open);
  }, [open]);

  return (
    <Overlay open={isOpen}>
      <ModalWrapper>
        <ModalHeader>
          <div>{title}</div>
          <Icon icon="close" scale={ 1 } onClick={close} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};

const ModalWrapper = styled.div`
  background: white;
  border-radius: 0.4rem;
  min-width: 70vw;
`;

const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const ModalContent = styled.header`
  display: block;
  padding: 1rem;
`;

export default Modal;
