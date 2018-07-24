import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import LoadingBar from '../LoadingBar';
import PanelSettings from './PanelSettings';

/**
 * @Ref https://material-ui.com/demos/selection-controls/
 */
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import IconSetting from 'react-icons/lib/md/settings';

const RootBox = styled.div`
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
  height: 100px;
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
  width: calc(100% - 200px);

  &:hover,
  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`;

const OptionBox = styled.div`
  ${'' /* display: ${ props => props.isFocus ? 'block' : 'none' }; */}
  display: block;
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
            <IconSetting 
              onClick={this.togglePanelSettings}
              size="25"
              style={{
                color: '#b7b7b7',
                cursor: 'pointer',
                marginTop: '16px',
                marginLeft: '10px'
              }}
            />
          </RootBox>

          <OptionBox isFocus={this.state.searchPanelOpened}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.excludeSystemFile}
                    onChange={this.handleOptionCheckbox('excludeSystemFile')}
                    value="excludeSystemFile"
                  />
                }
                label="System Files"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.excludeDevFile}
                    onChange={this.handleOptionCheckbox('excludeDevFile')}
                    value="excludeDevFile"
                  />
                }
                label="Dev Files"
              />
            </FormGroup>
          </OptionBox>
        </HeaderInner>

        <PanelSettings visible={this.state.panelSettings}></PanelSettings>
      </AppHeader>
    );
  }
}


export default FileExplorer;