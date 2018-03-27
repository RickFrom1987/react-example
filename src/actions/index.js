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

export {
  requestImages,
  receiveImages,
  errorImages
}
