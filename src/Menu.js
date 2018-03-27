import React, { Component } from 'react'

import './Menu.css';

export class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <input defaultChecked="checked" className="menu-toggler" id="menu-toggler" type="checkbox" />
        <label htmlFor="menu-toggler" />
        <ul>
          <li className="menu-item">
            <a href="/">/</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Menu
