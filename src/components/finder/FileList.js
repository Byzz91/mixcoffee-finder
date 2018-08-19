import React, { Component } from 'react';
import { Wrapper, FileItem } from './FileList.sc';

class FileList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <FileItem>1</FileItem>
        <FileItem>2</FileItem>
        <FileItem>3</FileItem>
      </Wrapper>
    );
  }
}

export default FileList;