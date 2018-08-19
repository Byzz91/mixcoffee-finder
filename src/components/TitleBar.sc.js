import styled from 'styled-components';

export const TitleBarBox = styled.ul`
  position: relative;
  display: block;
  float: left;
  height: 24px;
  line-height: 24px;
  background-color: #fafafa;
  margin: 0;
  padding: 0 5px;
  z-index: 99;
  -webkit-app-region: drag;
  box-sizing: border-box;
  width: 100%;

  & > li {
    display: inline-block;
    float: right;
    cursor: pointer;
    -webkit-app-region: no-drag;
    margin: 5px 3px 0 3px;
  }
`;

export const IconWrapper = styled.span`
  display: inline-block;
  color: #c1c1c1;

  &:hover {
    color: #696969;
  }
`;