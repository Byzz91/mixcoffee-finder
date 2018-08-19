import React, { Component } from 'react';
import {
  TitleBarBox,
  IconWrapper
} from './TitleBar.sc';

import { Icon } from 'react-icons-kit';
import { ic_close } from 'react-icons-kit/md/ic_close';
import { ic_fullscreen } from 'react-icons-kit/md/ic_fullscreen';
import { ic_fullscreen_exit } from 'react-icons-kit/md/ic_fullscreen_exit';

/**
 * @awesome Thank for github.com
 * 
 * https://github.com/electron/electron/issues/7300
 */
const ipcRenderer = window.require('electron').ipcRenderer;

class TitleBar extends Component {

  constructor(props) {
    super(props);
    this.handleWindow = this.handleWindow.bind(this);
  }

  componentDidMount() {
    ipcRenderer.on('invoke-action', (event, args) => {
      console.log(args);
    });
  }

  handleWindow(eventType) {
    ipcRenderer.send('invoke-action', {
      type  : 'windowController',
      params: [eventType]
    });
  }

  render() {
    return (
      <TitleBarBox>
        <li>
          <IconWrapper>
            <Icon icon={ic_close} 
                  data-window-action="close"
                  onClick={this.handleWindow.bind(this, 'close')}
                  size="24"
            />
          </IconWrapper>
        </li>
        <li>
          <IconWrapper>
            <Icon icon={ic_fullscreen} 
                  data-window-action="maximize" 
                  onClick={this.handleWindow.bind(this, 'maximize')} 
                  size="24"
            />
          </IconWrapper>
        </li>
        <li>
          <IconWrapper>
            <Icon icon={ic_fullscreen_exit} 
                  data-window-action="minimize"
                  onClick={this.handleWindow.bind(this, 'minimize')}
                  size="24"
            />
          </IconWrapper>
        </li>
      </TitleBarBox>
    );
  }
}

export default TitleBar;