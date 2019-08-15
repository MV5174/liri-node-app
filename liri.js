require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var node = process.argv;
var search = node.slice(3).join(" ")

var apiCall = function (api, artist) {
    if (api === "concert-this") {
        axios
            .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
            .then(function (response) {
                console.log(response.data)
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
            .search({ type: "track", query: artist, limit: 1 }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }
                //spotify object
                var spotArr = data.tracks.items
                //going through the results but limiting it to 1 above
                for (i = 0; i < spotArr.length; i++) {
                    console.log(`\nHere are the results: \n\nArtist: ${data.tracks.items[i].album.artists[0].name} \nSong: ${data.tracks.items[i].name}\nAlbum: ${data.tracks.items[i].album.name}\nSpotify link: ${data.tracks.items[i].external_urls.spotify}`)
                };
            });
    } else if (api === "movie-this") {
        axios
            .get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy")
            .then(
                function (response) {
                    console.log("\nResults for: " + JSON.stringify(response.data.Title, null, 2));
                    console.log("\nYear of release: " + JSON.stringify(response.data.Year, null, 2));
                    console.log("\nIMDB Rating: " + JSON.stringify(response.data.imdbRating, null, 2));
                    console.log("\nRotten Tomatoes Rating: " + JSON.stringify(response.data.Ratings[1].Value, null, 2));
                    console.log("\nCountries where the movie was produced: " + JSON.stringify(response.data.Country, null, 2));
                    console.log("\nLanguages in the movie: " + JSON.stringify(response.data.Language, null, 2));
                    console.log("\nPlot of the movie: " + JSON.stringify(response.data.Plot, null, 2));
                    console.log("\nActors featured in the movie: " + JSON.stringify(response.data.Actors, null, 2));
                })
            .catch(function (err) {
                console.log(err);
            });
    }
}

apiCall(node[2], search);