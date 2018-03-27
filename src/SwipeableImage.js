import React, { Component } from 'react'
import Swipeable from 'react-swipeable'

import './SwipeableImage.css';

export class SwipeableImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: null
    }
    this.swiping = this.swiping.bind(this)
    this.swipingLeft = this.swipingLeft.bind(this)
    this.swipingRight = this.swipingRight.bind(this)
    this.swiped = this.swiped.bind(this)
  }
  swiping() {
    this.setState({
      direction: null
    })
  }
  swipingLeft() {
    this.setState({
      direction: 'left'
    })
  }
  swipingRight() {
     this.setState({
      direction: 'right'
    })
  }
  swiped() {
    const { onSwiped } = this.props
    return onSwiped(this.state.direction)
  }
  render() {
    const { id, src, href } = this.props
    return (
      <Swipeable
        className="Swipeable-image"
        onSwiping={this.swiping}
        onSwipingLeft={this.swipingLeft}
        onSwipingRight={this.swipingRight}
        onSwiped={this.swiped}>
        <a href={href}>
          <img src={src} alt={id}/>
        </a>
      </Swipeable>
    );
  }
}

SwipeableImage.propTypes = {}

SwipeableImage.defaultProps = {}

export default SwipeableImage
