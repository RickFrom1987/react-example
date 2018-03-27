// apiMiddleware is a mix between thunk and api fetch
import convert from 'xml-to-json-promise'
import * as c from '../actions/constants'
import { fetch } from '../api/fetch'
import { postVote } from '../api/post'

function createMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument)
    }
    switch(action.type) {
      case c.REQUEST_IMAGES:
        return fetch().then((response) => {
          convert.xmlDataToJSON(response.data).then((data) => {
            let image = {}
            const json = data.response.data[0].images[0].image[0]
            Object.keys(json).map((k, i) => {
              return image[k] = json[k][0]
            })
            return image
          }).then((images) => {
            return next({ 
              type: c.RECEIVE_IMAGES,
              images: images
            })
          })
        }).catch(e => {
          return next({ type: c.ERROR_IMAGES , e })
        })
      case c.POST_VOTE:
        return postVote(action.vote).then((response) => {
          console.log("POST_VOTE response", response)
          return next({ 
            type: c.SUCCESS_POST_VOTE,
          })
        }).catch(e => {
          return next({ type: c.ERROR_POST_VOTE , e })
        })
      default:
        return next(action)
    }
  };
}

const apiMiddleware = createMiddleware();
apiMiddleware.withExtraArgument = createMiddleware;

export default apiMiddleware;
