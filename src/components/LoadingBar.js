import React, { Component } from 'react';
import {
  LoadingBarPosition,
  LoadingInner,
  Colorizer
} from './LoadingBar.sc'

class LoadingBar extends Component {
  render() {
    return (
      <LoadingBarPosition>
        <LoadingInner>
          <Colorizer color="#da4733" />
          <Colorizer color="#3b78e7" duration="2s" delay="1s" />
          <Colorizer color="#fdba2c" duration="1s" delay="3s" />
        </LoadingInner>
      </LoadingBarPosition>
    );
  }
}

export default LoadingBar;