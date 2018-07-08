import React, { Component } from 'react';
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
  height: 60px;
  width: 100%;

  ${InputFile}:focus & {
    height: 100px !important;
  }
`;

const InputFile = styled.input`
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
  render() {
    return (
      <div>
        <AppHeader>
          <HeaderInner>
            <Logo />
            <InputFile type="text" placeholder="파일 검색" />
          </HeaderInner>
        </AppHeader>
      </div>
    );
  }
}

export default FileExplorer;