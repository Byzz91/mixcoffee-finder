import styled, { keyframes } from 'styled-components';

export const LoadingBarPosition = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  height: 1px;
  background-color: #fdba2c;
  z-index: 9999;
`;

export const LoadingInner = styled.div`
  position: relative;
  height: 100%;
`;

export const animateEffect = keyframes`
  from { left: 50%; width: 0; z-index: 100; }
  33.3333% { left: 0; width: 100%; z-index: 10; }
  to { left: 0; width: 100%; }
`;

export const Colorizer = styled.div`
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