import React, { Component } from 'react'
import Swipeable from 'react-swipeable'
import PropTypes from 'prop-types'

import './SwipeableImage.css'

const DEFAULT_STATE = {
  direction: null
}

const WIDTH = window.innerWidth * 1.5
const imageTransitionStyles = {
  left: {
    transform: `translateX(-${WIDTH}px)`,
    opacity: 0
  },
  right: {
    transform: `translateX(${WIDTH}px)`,
    opacity: 0
  }
}

export class SwipeableImage extends Component {
  constructor(props) {
    super(props)
    this.state = DEFAULT_STATE
    this.swiping = this.swiping.bind(this)
    this.swipingLeft = this.swipingLeft.bind(this)
    this.swipingRight = this.swipingRight.bind(this)
    this.swiped = this.swiped.bind(this)
  }
  swiping() {
    this.setState(DEFAULT_STATE)
  }
  swipingLeft(e, absX) {
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
    const { src, href } = this.props
    let imageStyle = imageTransitionStyles[this.state.direction]
    return (
      <Swipeable
        className="Swipeable-image"
        onSwiping={this.swiping}
        onSwipingLeft={this.swipingLeft}
        onSwipingRight={this.swipingRight}
        onSwiped={this.swiped}>
        <img src={src} style={imageStyle} alt={href}/>
      </Swipeable>
    )
  }
}

SwipeableImage.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string.isRequired,
  href: PropTypes.string,
  onSwiped: PropTypes.func
}

SwipeableImage.defaultProps = {
  id: null,
  src: '',
  href: '',
  onSwiped: () => {}
}

export default SwipeableImage
