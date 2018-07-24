import React, { Component } from 'react';
import FileExplorer from './FileExplorer';

import { connect } from 'react-redux';
import * as actions from '../../actions';

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