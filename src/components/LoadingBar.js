import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingBarPosition = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 1px;
  background-color: #fdba2c;
`;

const LoadingInner = styled.div`
  position: relative;
  height: 100%;
`;

const animateEffect = keyframes`
  from { left: 50%; width: 0; z-index: 100; }
  33.3333% { left: 0; width: 100%; z-index: 10; }
  to { left: 0; width: 100%; }
`;

const Colorizer = styled.div`
  content: "";
  display: inline;
  position: absolute;
  width: 0;
  height: 100%;
  left: 50%;
  text-align: center;
  background-color: ${ props => props.color ? props.color : '#000' };
  animation: ${ animateEffect } ${ props => props.duration ? props.duration : '3s' } linear ${ props => props.delay ? props.delay : '' } infinite;
`;

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