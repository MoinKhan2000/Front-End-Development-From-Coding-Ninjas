
function Book(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
}

const isClassic = function () {
    const currentYear = 2023;
    const age = currentYear - this.publicationYear;
    if (age >= 50) {
        return "The book is from the classic collection";
    }
    return "The book is not a classic collection book";
};

Book.prototype.isClassic = isClassic


// Create a few book objects
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);


// Consoling output
console.log(book1.isClassic()); // Output: 63
console.log(book3.isClassic()); // Output: 98
