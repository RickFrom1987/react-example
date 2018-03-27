import * as c from './constants'

function requestImages() {
  return { type: c.REQUEST_IMAGES }
}

function receiveImages(images) {
  return { type: c.RECEIVE_IMAGES, images };
}

function errorImages(msg) {
  return { type: c.ERROR_IMAGES, msg };
}

function postVote(vote) {
  return { type: c.POST_VOTE, vote };
}

export {
  requestImages,
  receiveImages,
  errorImages,
  postVote
}
