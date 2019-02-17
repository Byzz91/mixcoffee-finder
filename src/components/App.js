import React, { Component } from 'react';
import Finder from './finder/Finder';
import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border-width: 0 1px 1px 1px;
    border-color: #eee;
    border-style: solid;
    box-sizing: border-box;
  }
  body, input {
    font-weight: normal;
    font-family: "Roboto", sans-serif;
  }
  #root { width: 100%; height: 100%; }
`;

class App extends Component {
  render() {
    return (
      <Finder />
    );
  }
}

export default App;