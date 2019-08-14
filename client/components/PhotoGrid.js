import React, { Component } from 'react'

import Main from './Main';

class PhotoGrid extends Component {

  render() {
    return (
      <div>
        <Main />      
        <div className="photo-grid">
          I'm the photo-grid
        </div>
      </div>
    );
  }
}

export default PhotoGrid;


