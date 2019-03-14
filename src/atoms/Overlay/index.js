import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../utils';
import Button from '../Button';

const Overlay = ({ children, open, onClose }) => {
  const [isOpen, setOverlayOpen] = useState(open);

  const close = (e) => {
    e.stopPropagation();
    onClose();
    setOverlayOpen(false);
  };

  useEffect(() => {
    setOverlayOpen(open);
  }, [open]);

  return (
    <OverlayContainer isOpen={isOpen}>
      <Button onClick={close}>Close</Button>
      {children}
    </OverlayContainer>
  );
};

const OverlayContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    background: rgba(0,0,0,0.8);
    z-index: 999;
    overflow: hidden;
`;

Overlay.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  open: false,
};

export default Overlay;
