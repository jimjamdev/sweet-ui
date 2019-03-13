import React, { PureComponent } from 'react';

import { debounce, get } from 'lodash';

const withScroll = (WrappedComponent, timeout = 50) => class ScrollHelperComponent extends PureComponent {
        state = {
          scrollPosition: {
            fromTop: 0,
            isDown: false,
            isUp: false,
          },
        };

        handleScroll = debounce(() => {
          const scroll = window;
          const { scrollPosition } = this.state;
          const fromTop = get(scroll, 'pageYOffset', 0);
          const isDown = get(scrollPosition, 'fromTop', 0) < fromTop;
          const isUp = get(scrollPosition, 'fromTop', 0) > fromTop;
          this.setState({
            scrollPosition: {
              fromTop,
              isDown,
              isUp,
            },
          });
        }, timeout);

        componentDidMount() {
          this.scroll.addEventListener('scroll', this.handleScroll);
        }

        componentWillUnmount() {
          this.scroll.removeEventListener('scroll', this.handleScroll);
        }

        render() {
          const { scrollPosition } = this.state;
          return (
            <WrappedComponent {...this.props} scrollPosition={scrollPosition} />
          );
        }
};

export default withScroll;
