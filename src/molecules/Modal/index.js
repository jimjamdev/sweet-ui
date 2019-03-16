import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
          <Icon icon="close" scale={1} onClick={close} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </Overlay>
  );
};

const ModalWrapper = styled.div`
  color: #333333;
  background: white;
  border-radius: 0.4rem;
  min-height: 50vh;
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

Modal.propTypes = {
  /** The Modal header title */
  title: PropTypes.string,
  /** Your inner content for the component will be shown here */
  children: PropTypes.any,
  /** Pass true or false to open/close the Modal */
  open: PropTypes.bool,
  /** A function passed from Modal onClose */
  onClose: PropTypes.func,
};

/** @component */
export default Modal;
