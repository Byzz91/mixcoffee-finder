import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import LoadingBar from '../LoadingBar';
import PanelSettings from './PanelSettings';
import TitleBar from '../TitleBar';

import { Icon } from 'react-icons-kit';
import { ic_settings } from 'react-icons-kit/md/ic_settings'

const RootBox = styled.div`
  padding: 0 0 15px 0;
`;

const HeaderInner = styled.div`
  float: left;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  width: 700px;
`;

const AppHeader = styled.div`
  position: fixed;
  background-color: #fafafa;
  border-bottom: 1px solid #ebebeb;
  ${'' /* height: ${ props => props.isFocus ? '100px' : '60px' }; */}
  height: auto;
  width: 100%;
  transition: 0.1s;
`;

const InputSearch = styled.input`
  height: 44px;
  vertical-align: top;
  font: normal 16px Roboto, gulim, dotum, arial, sans-serif;
  background-color: #fff;
  color: #222;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  border: none;
  margin: 8px 0 0 0;
  padding: 0 10px;
  text-indent: 5px;
  width: calc(100% - 155px);

  &:hover,
  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`;

const Setting = styled.span`
  display: block;
  float: right;
  color: #c1c1c1;
  cursor: pointer;
  margin-top: 17px;

  &:hover {
    color: #696969;
  }
`;

class FileExplorer extends Component {
  state = {
    searchPanelOpened: false,
    excludeSystemFile: true,
    excludeDevFile   : true,
    /**
     * Panel is opened?
     */
    panelSettings    : false
  };

  constructor(props) {
    super(props);
    this.handleOptionCheckbox   = this.handleOptionCheckbox.bind(this);
    this.handleSearchPanelOpen  = this.handleSearchPanelOpen.bind(this);
    this.handleSearchPanelClose = this.handleSearchPanelClose.bind(this);
    this.togglePanelSettings    = this.togglePanelSettings.bind(this);
  }

  handleSearchPanelOpen() {
    this.setState({ searchPanelOpened: true });
  }

  handleSearchPanelClose() {
    this.setState({ searchPanelOpened: false });
  }

  handleOptionCheckbox(name) {
    return (event) => {
      this.setState({ [name]: event.target.checked });
    };
  }

  togglePanelSettings() {
    this.setState({ panelSettings: ! (!! this.state.panelSettings) });
  }

  componentDidMount() {
    this.inputSearch.focus();
  }

  render() {
    return (
      <div>
        <TitleBar />

        <AppHeader 
          isFocus={this.state.searchPanelOpened}
          onMouseOver={this.handleSearchPanelOpen}
          onMouseOut={this.handleSearchPanelClose}
        >
          <HeaderInner>
            <LoadingBar />
            <RootBox>
              <Logo />
              <InputSearch 
                innerRef={ (input) => { this.inputSearch = input; } }
                type="text" 
                placeholder="파일 검색"
              />
              <Setting onClick={this.togglePanelSettings}>
                <Icon icon={ic_settings} size="28" />
              </Setting>
            </RootBox>
          </HeaderInner>

          <PanelSettings 
            visible={this.state.panelSettings}
            togglePanel={this.togglePanelSettings}
          />
        </AppHeader>
      </div>
    );
  }
}


export default FileExplorer;