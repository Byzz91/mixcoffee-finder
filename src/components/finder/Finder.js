import React, { Component } from 'react';
import FileExplorer from './FileExplorer';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const SeekerCore = window.require('dirs-stream');

const mapStateToProps = (state) => {
  return {
    isFileExplorerFocus: state.fileExplorer.isFocus
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFileExplorerFocus: (isFocus) => { dispatch( actions.setFileExplorerFocus(isFocus) ); }
  };
};

class Finder extends Component {
  seeker;
  dirsIndexed;

  constructor(props) {
    super(props);

    this.seeker = void 0;
    this.dirsIndexed = [];
  }

  componentDidMount() {
    this.seeker = new SeekerCore("D:\\").Stream;
    this.seeker.on('data', (pathString) => {
      this.dirsIndexed.push(pathString);
    });
  }

  render() {
    return (
      <FileExplorer
        isFocus={this.props.isFileExplorerFocus}
        setFocus={this.props.setFileExplorerFocus}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finder);