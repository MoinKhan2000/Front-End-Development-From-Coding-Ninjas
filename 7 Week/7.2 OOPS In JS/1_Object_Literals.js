// making a myMovie object
"use strict";
const myMovie = {
    title: "myMovie",
    year: 2000,
    genre: "Action, Sci-fi, Thriller",
    "languages available": "Hindi, Kannad, Malayalam, Telugu, English",
    cast: ['shaharukh Khan', 'Kajol', 'Saif Ali Khan'],
    getDetails: function () {
        console.log(`Title : ${myMovie.title}`);
        console.log(`Year : ${myMovie.year}`);
        console.log(`Genre : ${myMovie.genre}`);
        console.log(`Languages : ${myMovie["languages available"]}`);
        myMovie.cast.forEach(member => {
            console.log("Cast Members : " + member.toUpperCase())
        });
    }
}

mymyMovie.getDetails()