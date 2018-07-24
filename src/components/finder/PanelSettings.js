import React, { Component } from 'react';
import styled from 'styled-components';

/**
 * PanelSettings Scale
 */
const boxSize = {
  width: 600,
  height: 700
};

const PanelSettingsBox = styled.div`
  position: fixed;
  background-color: #FFF;
  border-radius: 2px;
  width: ${ props => props.boxScale.width + 'px' };
  height: ${ props => props.boxScale.height + 'px' };
  left: ${ props => props.positionX + 'px' };
  top: ${ props => props.positionY + 'px' };
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.2);
  display: ${ props => props.visible ? 'block' : 'none' };
  z-index: 999;
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
        visible={this.props.visible}>
      </PanelSettingsBox>
    );
  }
}

export default PanelSettings;