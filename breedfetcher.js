const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback('Request failed', null);
    }
    const data = JSON.parse(body);
    if (response.statusCode === 200 && data.length === 1) {
      return callback(null, data[0].description);
    } else {
      return callback(null, "Invalid breed name");
    }
  });
};

module.exports = { fetchBreedDescription };