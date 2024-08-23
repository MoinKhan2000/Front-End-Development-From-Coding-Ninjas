function movie(title, year) {
    const movie = {
        title: title,
        year: year,
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
    return movie
}

m1 = movie('DDLJ', 2000)
m1.getDetails()


// Constructor function

function Movie(title, year) {
    this.title = title;
    this.year = year;
    this.getDetails = function () {
        console.log(`Titles : ${this.title}`);
        console.log(`Year : ${this.year}`);
    }
}
class Movie2 {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        this.getDetails = function () {
            console.log(`Titles : ${this.title}`);
            console.log(`Year : ${this.year}`);
        };
    }
}
//! Constructor function always call using new keyword.  
m2 = new Movie('RAWAN', 2018)
m2.getDetails()

m2 = new Movie2('RAWAN', 2018)
m2.getDetails()
