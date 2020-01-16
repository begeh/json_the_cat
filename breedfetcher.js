const request = require('request');
let args = process.argv.slice(2);
let breed = args[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    return console.log('Request failed');
  }
  const data = JSON.parse(body);
  if (response.statusCode === 200 && data.length === 1) {
    return console.log(data[0].description);
  } else {
    return console.log("Invalid breed name");
  }
});