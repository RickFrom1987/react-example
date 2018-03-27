import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  requestImages,
  postVote
} from './actions'

import Menu from './Menu'
import SwipeableImage from './SwipeableImage'
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props)
    this.onSwiped = this.onSwiped.bind(this)
  }
  componentDidMount() {
    const { dispatch } = this.props
    return dispatch(requestImages())
  }
  onSwiped(data) {
    const { dispatch, images } = this.props
    const vote = {
      image_id: images.data.id,
      score: (data === 'left') ? 1 : 10
    }
    return dispatch(postVote(vote)).then((response) => {
      dispatch(requestImages())
      return
    })
  }
  render() {
    const { images } = this.props
    let imageHtml
    if(images.isLoading) {
      imageHtml = <div className="loader"></div>
    } else {
      imageHtml = <SwipeableImage
        id={images.data.id}
        src={images.data.url}
        href={images.data.source_url}
        onSwiped={this.onSwiped}>
      </SwipeableImage>
    }
    return (
      <div className="App">
        <Menu/>
        <div className="App-body">
          { imageHtml }
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
