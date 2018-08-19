import React, { Component } from 'react';
import FileExplorer from './FileExplorer';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const SeekerCore = window.require('dirs-stream');
const fileParser = require('../../engines/finder/file-parser');

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
  dirsDictionary;

  constructor(props) {
    super(props);

    this.seeker = null;
    this.dirsDictionary = [];
  }

  componentDidMount() {
    this.seeker = new SeekerCore("D:\\devs\\").Stream;

    this.seeker.on('data', (pathString) => {
      /**
       * add DirsPath
       */
      pathString = pathString.toString();
      console.log('pathString', pathString);
      this.dirsDictionary.push( pathString );
      // console.log(pathString.toString());
      // this.props.addDirsPath(pathString);
    });

    this.seeker.on('end', () => {
      console.log(`No More Datas...`);
      console.log(this.dirsDictionary);
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