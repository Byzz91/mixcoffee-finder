import React, { Component } from 'react';
import styled from 'styled-components';

import IconClose from 'react-icons/lib/md/close';

/**
 * PanelSettings Scale
 */
const boxSize = {
  width: 400,
  height: 700
};

const PanelSettingsBox = styled.section`
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

const Header = styled.div`
  position: relative;
  overflow: hidden;
`;

const Title = styled.h3`
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

const Close = styled(IconClose)`
  display: inline-block;
  float: right;
  color: #c1c1c1;
  font-size: 20px;
  cursor: pointer;
  font-weight: 100;

  &:hover {
    color: #696969;
  }
`;

class PanelSettings extends Component {
  state = {
    positionX: 0,
    positionY: 0
  };

  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({
      positionX: Math.floor((window.outerWidth / 2) - (boxSize.width / 2)),
      positionY: Math.floor((window.innerHeight / 2) - (boxSize.height / 2))
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <PanelSettingsBox 
        boxScale={boxSize} 
        positionX={this.state.positionX} 
        positionY={this.state.positionY} 
        visible={this.props.visible}
      >
        <Header>
          <Title>Settings</Title>
          <Close onClick={this.props.togglePanel} />
        </Header>
      </PanelSettingsBox>
    );
  }
}

export default PanelSettings;