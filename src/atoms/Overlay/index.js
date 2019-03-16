import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { styled, isClient, createGlobalStyle } from '../../utils';
import Icon from '../Icon';

const Overlay = ({
  children, open, showClose, onClose,
}) => {
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
    ReactDOM.createPortal(
      <OverlayContainer isOpen={isOpen} onTouchStart={e => e.preventDefault()}>
        <OverlayBodyStyle isOpen={isOpen} />
        {showClose && (
        <OverlayClose>
          <Icon icon="close" onClick={close} />
        </OverlayClose>
        ) }
        {children}
      </OverlayContainer>, isClient && document.body,
    )
  );
};

const OverlayContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    top: 0; bottom: 0;
    width: 100%;
    height: 100%;
    color: white;
    background: rgba(0,0,0,0.8);
    z-index: 999;
    overflow: hidden;
`;

const OverlayBodyStyle = createGlobalStyle`
  html, body {
    ${(props) => {
    const { isOpen } = props;
    if (!isOpen) return null;
    return `
            overflow: hidden;
            -webkit-overflow-scrolling: touch;
        `;
  }};
  }
`;

const OverlayClose = styled.div`
  position: absolute;
  padding: 1rem;
  right: 0; top: 0;
`;

Overlay.propTypes = {
  /** Your inner content for the component will be shown here */
  children: PropTypes.any,
  /** Pass true or false to open/close the Overlay */
  open: PropTypes.bool,
  /** An optional close button */
  showClose: PropTypes.bool,
  /** A function passed from overlay onClose */
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  open: false,
};

/** @component */
export default Overlay;
