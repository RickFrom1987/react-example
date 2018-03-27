import React, { Component } from 'react'
import './Image.css';

export class Image extends Component {
  getHtml() {
    const { html } = this.props
    return { __html: html }
  }
  render() {
    return (
      <div class="Image" dangerouslySetInnerHTML={this.getHtml()}></div>
    );
  }
}

Image.propTypes = {}

Image.defaultProps = {}

export default Image
