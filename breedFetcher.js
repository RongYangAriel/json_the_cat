const request = require('request');

const fetchBreedDescription = (searchStr, callback ) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${searchStr}`;
  request.get(url, (error, response, body) => {
    if ( !error) {
      const data = JSON.parse(body);
      callback(null, data[0]['description']);
    } else {
      callback(error, null);
    }
  })
};

module.exports = { fetchBreedDescription };