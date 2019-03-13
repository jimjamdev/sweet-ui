import React from 'react';
import { ThemeProvider } from './libs';
import { defaultTheme } from '../theme';

const SweetThemeProvider = props => (
  <ThemeProvider theme={defaultTheme}>
    {props.children}
  </ThemeProvider>
);

export default SweetThemeProvider;
