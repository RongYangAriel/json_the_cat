const request = require('request');

const fetchBreedDescription = (searchStr, callback ) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${searchStr}`;
  request.get(url, (error, response, body) => {
    if (error) {
      callback (error, null);
      return;
    } 
    let data = JSON.parse(body);
    if(data.length === 0) {
      callback ('NOT FOUND', null);
    } else {
      callback(null, data[0].description);
    }
  })
};

module.exports = { fetchBreedDescription };