import axios from 'axios';

const DEFAULT_CONFIG = {
  api_key: 'MjkwMTEw',
  image_id: null,
  score: 0
}

function postVote(options) {
  const config = Object.assign({}, DEFAULT_CONFIG, options)
  const params = Object.keys(config).map((k, i) => {
    return `${k}=${config[k]}`
  })
  return axios.post(`http://thecatapi.com/api/images/vote?${params.join('&')}`)
}

export {
  postVote
}
