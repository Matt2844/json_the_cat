// breedFetcher.js 


// console.log(request);

// Scan through TheCatAPI's documentation and find the API docs for the API URL/endpoint which will return cat breed results.

// 1. Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
// 2. Parse the body string using JSON


const request = require('request');
// const fs = require('fs');

// const http = require('https');

// const url = "https://api.thecatapi.com/v1/breeds/search?q=sib" (this url is specific to one cat breed)
const url = 'https://api.thecatapi.com/v1/breeds/search/?q='// (this url is specific to all the breeds);



// 1. 
// request(url, (error, response, body) => {

//   const data = JSON.parse(body);

//   console.log('Printing out error: ', error);
//   console.log('pringint out response: ', response.statusCode);
//   console.log('Printing out body JSON.parse: ', typeof data);
//   console.log('Printing out body JSON.parse', data);
//   console.log('Printing out description: ', data[0].description);
// })

// 2. (Uses code from question 1.)
// 3. Access the nfirst entry in the data array and print ou the description. (code in 1.)
// 4. Dynamic breed name. Allow user to specify breed name using command line-arguments (process.argv.slice(2))

// Setup: 

// Request = request is above.
// Const url = "..." is above.
const breed = process.argv.slice(2);

request(`${url}${breed}`, (error, response, body) => {

  const data = JSON.parse(body);

  if (breed !== data[0]) {
    console.log("Sorry, could not find that breed name.");
  } else {
    return console.log(data[0].description.trim());
  }
});

