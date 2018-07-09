import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from '../Logo';

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
  height: ${ props => props.isFocus ? '100px' : '60px' };
  width: 100%;
  transition: 0.1s;
`;

const InputSearch = styled.input`
  height: 44px;
  vertical-align: top;
  font: normal 16px Roboto, 굴림, dotum, arial, sans-serif;
  background-color: #fff;
  color: #222;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  border: none;
  margin: 8px 0 0 10px;
  padding: 0 10px;
  text-indent: 5px;
  width: calc(100% - 200px);

  &:hover,
  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`;

class FileExplorer extends Component {
  static propTypes = {
    isFocus: PropTypes.bool
  };

  static defaultProps = {
    isFocus: false
  };

  constructor(props) {
    super(props);

    this.handleInputSearchFocus = this.handleInputSearchFocus.bind(this);
  }

  handleInputSearchFocus() {
    this.props.setFocus( !!(this.inputSearch === document.activeElement) );
  }

  componentDidMount() {
    this.inputSearch.focus();
  }

  render() {
    return (
      <AppHeader isFocus={this.props.isFocus}>
        <HeaderInner>
          <Logo />
          <InputSearch 
            innerRef={ (input) => { this.inputSearch = input; } }
            type="text" 
            placeholder="파일 검색"
            onFocus={this.handleInputSearchFocus}
            onBlur={this.handleInputSearchFocus}
          />
        </HeaderInner>
      </AppHeader>
    );
  }
}

export default FileExplorer;