import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingWrapper = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 6px;
  background-color: #fdba2c;
`;

const animateEffect = keyframes`
  from { left: 50%; width: 0; z-index: 100; }
  33.3333% { left: 0; width: 100%; z-index: 10; }
  to { left: 0; width: 100%; }
`;

const Colorizer = styled.div`
  background-color: ${ props => props.color ? props.color : '#000' };
  animation: ${ animateEffect } 3s linear ${ props => props.speed ? props.speed : '' } infinite;
`;

class LoadingBar extends Component {
  render() {
    return (
      <LoadingWrapper>
        <Colorizer color="#da4733" />
        <Colorizer color="#3b78e7" speed="1s" />
        <Colorizer color="#fdba2c" speed="2s" />
      </LoadingWrapper>
    );
  }
}

export default LoadingBar;