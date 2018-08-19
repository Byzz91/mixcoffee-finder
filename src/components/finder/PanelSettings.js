import React, { Component } from 'react';
import {
  PanelSettingsBox,
  Header,
  Title,
  Close
} from './PanelSettings.sc';

import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';

/**
 * PanelSettings Scale
 */
const boxSize = {
  width: 400,
  height: 700
};

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
          <Close onClick={this.props.togglePanel}>
            <Icon icon={ic_close} size="32" />
          </Close>
        </Header>
      </PanelSettingsBox>
    );
  }
}

export default PanelSettings;