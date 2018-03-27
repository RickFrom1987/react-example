import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestImages
} from './actions'

import Menu from './Menu'
import './App.css';

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    return dispatch(requestImages())
  }
  render() {
    const { images } = this.props
    const allImages = []
    return (
      <div className="App">
        <Menu/>
        <div className="body">
          {images.isLoading && <span>Loading...</span>}
          {allImages}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  images:  PropTypes.object
}

App.defaultProps = {
  images: {}
}

const mapStateToProps = state => {
  return { 
    images: state.images
  }
}

export default connect(mapStateToProps)(App);
