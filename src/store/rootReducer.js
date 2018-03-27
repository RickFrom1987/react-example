// Reducer handles action types and helps extend app state
import * as c from '../actions/constants'

function images(state, action) {
  switch(action.type) {
    case c.REQUEST_IMAGES:
      return Object.assign({}, state, {
        isLoading: true,
        data: state.data,
        msg: null
      })
    case c.RECEIVE_IMAGES:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.images,
        msg: null
      })
    case c.ERROR_IMAGES:
      return Object.assign({}, state, {
        isLoading: false,
        data: null,
        msg: action.msg
      })
    default:
      return state;
  }
}

const defaultState = {
  images: {
    isLoading: false,
    data: [],
    msg: null
  }
};

export default function (state = defaultState, action = {}) {
  return {
    images: images(state.images, action)
  }
}
