# liri-node-app

The Liri App is an app purposed to help you find concerts for your favorite artists, your favorite songs, favorite movies, and reading the command and argument from the random.txt

Liri.js is the core file that runs everything, it has all of the packages required at the top, it also imports the keys from keys.js that retrieves the keys from a .env file which is in .gitignore.
After that is finished, the user can then input which function they want to run with the argument they want to pass or search for with the function, those functions being "concert-this" to find 
the next five concerts the artist is performing, "spotify-this-song" to find details on the song searched for, "movie-this" to find details on the movie searched for, and "do-what-it-says" to
input a command and argument from the random.txt file. 

Open terminal, type in node liri.js, from here for the first argument you pass in the command you want such as: movie-this, then you pass in the query you want to search for, in this case "inception."
The app will then print information on the movie searched for ("inception") to view.

Video of the app functioning:
https://drive.google.com/file/d/1czLwf63g2BbXxlMviKltHrAFRsAabTcm/view

Link to deployed version of the app:
https://github.com/MV5174/liri-node-app

Technologies used in the app:
Node.JS, FS, Axios, BandsinTown API, Spotify API and node package, OMBD API, Moment.js node package, and DOTENV node package.

Developed the full app