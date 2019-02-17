import React, { Component } from 'react';
import { Wrapper, FileItem } from './FileList.sc';

class FileList extends Component {
  render() {
    const renderFileItems = () => {
      if (! this.props.dirsPath instanceof Array) { return; }

      return this.props.dirsPath.map((pathName, index) => {

        return (
          <FileItem key={ (index + 1) }>{ pathName.toString() }</FileItem>
        );
      });
    };

    return (
      <Wrapper>
        { renderFileItems() }
      </Wrapper>
    );
  }
}

export default FileList;