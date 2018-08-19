import React, { Component } from 'react';
import Logo from '../Logo';
import LoadingBar from '../LoadingBar';
import PanelSettings from './PanelSettings';
import TitleBar from '../TitleBar';
import FileList from './FileList';
import { 
  RootBox, 
  HeaderInner,
  AppHeader,
  InputSearch,
  Setting
} from './FileExplorer.sc';

import { Icon } from 'react-icons-kit';
import { ic_settings } from 'react-icons-kit/md/ic_settings'

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
        <LoadingBar />
        <TitleBar />

        <AppHeader 
          isFocus={this.state.searchPanelOpened}
          onMouseOver={this.handleSearchPanelOpen}
          onMouseOut={this.handleSearchPanelClose}
        >
          <HeaderInner>
            <RootBox>
              <Logo />
              <InputSearch 
                innerRef={ (input) => { this.inputSearch = input; } }
              />
              <Setting onClick={this.togglePanelSettings}>
                <Icon icon={ic_settings} size="22" />
              </Setting>
            </RootBox>
          </HeaderInner>

          <PanelSettings 
            visible={this.state.panelSettings}
            togglePanel={this.togglePanelSettings}
          />
        </AppHeader>

        <FileList
          dirsPath={this.props.dirsPath}
        />
      </div>
    );
  }
}


export default FileExplorer;