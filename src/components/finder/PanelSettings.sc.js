import styled from 'styled-components';

export const PanelSettingsBox = styled.section`
  display: ${ props => props.visible ? 'block' : 'none' };
  position: fixed;
  background-color: #FFF;
  border-radius: 2px;
  width:  ${ props => `${props.boxScale.width}px` };
  height: ${ props => `${props.boxScale.height}px` };
  left:   ${ props => `${props.positionX}px` };
  top:    ${ props => `${props.positionY}px` };
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2);
  z-index: 999;
  box-sizing: border-box;
  padding: 10px;
  transition: 0.1s;
`;

export const Header = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Title = styled.h3`
  display: inline-block;
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', serif;
  color: #989898;
  font-size: 24px;
  font-weight: 100;
  letter-spacing: -1px;
  display: none;
`;

export const Close = styled.span`
  display: inline-block;
  float: right;
  color: #c1c1c1;
  cursor: pointer;

  &:hover {
    color: #696969;
  }
`;