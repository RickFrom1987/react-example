// apiMiddleware is a mix between thunk and api fetch
import * as c from '../actions/constants'
import { fetch } from '../api/fetch'

function createMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument)
    }
    switch(action.type) {
      case c.REQUEST_IMAGES:
        return fetch().then((response) => {
          return next({ 
            type: c.RECEIVE_IMAGES,
            images: response.data
          })
        }).catch(e => {
          return next({ type: c.ERROR_IMAGES , e })
        })
      default:
        return next(action)
    }
  };
}

const apiMiddleware = createMiddleware();
apiMiddleware.withExtraArgument = createMiddleware;

export default apiMiddleware;
