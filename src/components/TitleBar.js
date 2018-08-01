import React, { Component } from 'react';
import styled from 'styled-components';

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

const TitleBarBox = styled.ul`
  display: block;
  height: 24px;
  line-height: 24px;
  background-color: #fafafa;
  margin: 0;
  padding: 0 5px;
  -webkit-app-region: drag;

  & > li {
    display: inline-block;
    float: right;
    cursor: pointer;
    -webkit-app-region: no-drag;
    margin: 5px 3px 0 3px;
  }
`;

const IconWrapper = styled.span`
  display: inline-block;
  color: #c1c1c1;

  &:hover {
    color: #696969;
  }
`;

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