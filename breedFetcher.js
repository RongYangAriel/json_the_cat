const request = require('request');
const searchStr = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?q='


const fetchBreed = (searchStr, url) => {
  url = url + searchStr;
  request.get(url, (error, response, body) => {
    if ( !error && !body) {
      const data = JSON.parse(body);
      console.log(data);
    } else if (body) {
      console.log('Not Found!');
    } else if (error){
      console.log(`error is: ${error}`);
    }
  })
}

fetchBreed(searchStr, url)