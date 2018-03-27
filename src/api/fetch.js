import axios from 'axios';

function fetch() {
  return axios.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
}

export {
  fetch
}
