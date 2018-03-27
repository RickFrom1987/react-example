import rootReducer from '../store/rootReducer'
import * as c from '../actions/constants'

describe('rootReducer', () => {
  const defaultState = {
    images: {
      isLoading: false,
      data: [],
      msg: null
    }
  };

  it('should return the defaultState', () => {
    const defaultReducerValue = rootReducer()
    expect(defaultReducerValue).toEqual(defaultState)
  });

  it('should handle REQUEST_IMAGES', () => {
    const mockResponse = { 
      images: { 
        isLoading: true,
        data: [],
        msg:  null
      }
    }
    const action = {
      type: c.REQUEST_IMAGES
    }
    const reducer = rootReducer(defaultState, action)
    expect(reducer).toEqual(mockResponse)
  });

  it('should handle ERROR_IMAGES', () => {
    const mockResponse = { 
      images: { 
        isLoading: false,
        data: null,
        msg: 'There was an error!'
      }
    }
    const action = {
      type: c.ERROR_IMAGES,
      data: null,
      msg: 'There was an error!'
    }
    const reducer = rootReducer(defaultState, action)
    expect(reducer).toEqual(mockResponse)
  });

})
