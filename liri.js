require("dotenv").config();
var keys = require("./keys.js");
// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var node = process.argv;
var search = node.slice(3).join(" ")
var movieName = "";
for (var i = 2; i < node.length; i++) {

    if (i > 2 && i < node.length) {
        movieName = movieName + "+" + node[i];
    } else {
        movieName += node[i];

    }
}

var bandsApi = function (api, artist) {
    if (api === "concert-this") {
        axios
            .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function (response) {
                console.log("Here is the artist's events: " + response.data)
            })
            .catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("---------------Data---------------");
                    console.log(error.response.data);
                    console.log("---------------Status---------------");
                    console.log(error.response.status);
                    console.log("---------------Status---------------");
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an object that comes back with details pertaining to the error that occurred.
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                }
                console.log(error.config);
            })
    } else if (api === "spotify-this-song") {
        spotify
            .search({ type: "track", query: artist })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (err) {
                console.log(err);
            });
    } else if (api === "movie-this") {
        axios
            .get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy")
            .then(
                function (response) {
                    console.log(response.data);
                })
            .catch(function (err) {
                console.log(err);
            });
    }
}

bandsApi(node[2], search);