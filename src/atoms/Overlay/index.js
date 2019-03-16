import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { styled, isClient, createGlobalStyle } from '../../utils';

const Overlay = ({ children, open }) => (
  ReactDOM.createPortal(
    <OverlayContainer isOpen={open} onTouchStart={e => e.preventDefault()}>
      <OverlayBodyStyle isOpen={open} />
      {children}
    </OverlayContainer>, isClient && document.body,
  )
);

const OverlayContainer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: fixed;
    top: 0; bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.85);
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

Overlay.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  open: false,
};

/** @component */
export default Overlay;
