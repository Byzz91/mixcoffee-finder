import React, { Component } from 'react';
import FileExplorer from './FileExplorer';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const SeekerCore = window.require('dirs-stream');

/**
 * mapStateToProps
 */
const mapStateToProps = (state) => {
  return {
    dirsPath: state.fileExplorer.dirsPath
  }
};

/**
 * mapDispatchToProps
 */
const mapDispatchToProps = (dispatch) => {
  return {
    addDirsPath: (path) => {
      dispatch( actions.addDirsPath(path) );
    }
  };
};

class Finder extends Component {
  seeker;

  constructor(props) {
    super(props);

    this.seeker = null;
  }

  componentDidMount() {
    this.seeker = new SeekerCore("E:\\").Stream;
    this.seeker.on('data', (pathString) => {
      /**
       * add DirsPath
       */
      this.props.addDirsPath(pathString);
    });
  }

  render() {
    return (
      <FileExplorer
        dirsPath={this.props.dirsPath}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finder);