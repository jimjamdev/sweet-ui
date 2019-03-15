import React from 'react';
import PropTypes from 'prop-types';
import { styled, withTheme } from '../../utils';

const Icon = withTheme(({
  theme, icon, scale, onClick,
}) => (
  <IconStyle
    scale={scale}
    onClick={onClick}
    width="1024"
    height="1024"
    shape-rendering="auto"
    viewBox="0 0 1024 1024"
  >
    <PathStyle
      d={theme.icons[icon]}
      shape-rendering="optimizeQuality"
    />
  </IconStyle>
));

const IconStyle = styled.svg`
  display: inline-block;
  vertical-align: middle;
  transform: translate3d(0,0,0);
  width: ${({ scale }) => `${scale}rem`};
  height: ${({ scale }) => `${scale}rem`};
`;

const PathStyle = styled.path`
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
`;

Icon.propTypes = {
  icon: PropTypes.string,
};

Icon.defaultProps = {
  icon: 'home',
  scale: '1',
};

/** @component */
export default withTheme(Icon);
