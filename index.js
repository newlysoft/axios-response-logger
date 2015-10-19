var axios = require('axios');

module.exports = axios.interceptors.response.use(
  function logResponse(res) {
    console.log('%c Request Success:', 'color: #4CAF50; font-weight: bold', res);
    return res;
  },

  function logPromiseError(err) {
    console.log('%c Request Error:', 'color: #EC6060; font-weight: bold', err);
    return Promise.reject(err);
  }
);
