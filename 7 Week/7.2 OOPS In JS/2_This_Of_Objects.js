const movie1 = {
    title: "Movie",
    year: 2000,
    genre: "Action, Sci-fi, Thriller",
    "languages available": "Hindi, Kannad, Malayalam, Telugu, English",
    cast: ['shaharukh Khan', 'Kajol', 'Saif Ali Khan'],
    getDetails() {
        console.log(`Title : ${this.title}`);
        console.log(`Year : ${this.year}`);
        console.log(`Genre : ${this.genre}`);
        console.log(`Languages : ${this["languages available"]}`);
        this.cast.forEach(member => {
            console.log("Cast Members : " + member.toUpperCase())
        });
        this.description && console.log(`Description :  ${this.description}`);
        console.log("\n");
    }
}

movie1.getDetails()

// spread operator  - constructor function
const movie2 = { ...movie1, title: "DilWale", description: "First movie of shaharukh khan" }
movie2.getDetails()