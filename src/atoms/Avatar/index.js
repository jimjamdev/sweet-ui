import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../utils';

const Avatar = ({ image, alt, scale }) => (
  <AvatarStyle src={image} alt={alt} scale={scale} />
);

const AvatarStyle = styled.img`
    border-radius: 500rem;
    width: ${({ scale }) => scale}rem;
    height: auto;
`;

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  scale: PropTypes.number,
};

Avatar.defaultProps = {
  scale: 5,
};

export default Avatar;
