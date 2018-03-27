import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import { App } from '../App'

describe('App', () => {
  let mockProps, mockApp
  let createMockApp = (config = {}) => {
    mockProps =  {
      images: {
        isLoading: false,
        data: []
      },
      dispatch: () => {}
    }
    mockProps = Object.assign({}, mockProps, config)
    mockApp = renderer.create(<App {...mockProps}/>)
    return mockApp
  }

  let cleanMockApp = () => {
    return mockApp.unmount()
  }

  afterEach(() => {
    cleanMockApp()
  })

  it('renders without crashing', () => {
    const app = createMockApp()
    expect(app.getInstance())
  });

  it('always renders a container div with class App', () => {
    const app = createMockApp()
    const renderedApp = app.root.findByProps({ className: 'App' })
    expect(renderedApp.children.length).toBeGreaterThan(0)
  });

})
