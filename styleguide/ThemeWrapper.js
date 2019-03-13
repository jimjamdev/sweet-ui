import React, { Fragment, Component } from 'react';
import { SweetThemeProvider } from '../src/utils';
import { Globals } from '../src/styles';

export default class ThemeWrapper extends Component {
  render() {
    return (
      <SweetThemeProvider>
        <Fragment>
          <Globals />
          {this.props.children}
        </Fragment>
      </SweetThemeProvider>
    );
  }
}
