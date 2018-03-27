import React, { Component } from 'react'
import Swipeable from 'react-swipeable'

import './Image.css';

export class Image extends Component {
  getHtml() {
    const { html } = this.props
    return { __html: html }
  }
  swipingLeft() {
    console.log("left")
  }
  swipingRight() {
    console.log("right")
  }
  swiped() {
    console.log("done swiping")
  }
  render() {
    return (
      <Swipeable
        className="Image"
        onSwiping={this.swiping}
        onSwipingLeft={this.swipingLeft}
        onSwipingRight={this.swipingLeft}
        onSwiped={this.swiped}>
        <div dangerouslySetInnerHTML={this.getHtml()}></div>
      </Swipeable>
    );
  }
}

Image.propTypes = {}

Image.defaultProps = {}

export default Image
