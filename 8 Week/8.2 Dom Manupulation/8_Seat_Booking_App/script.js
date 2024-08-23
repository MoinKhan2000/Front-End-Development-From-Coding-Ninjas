const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];

const selectMovie = document.getElementById('selectMovie');
const seatCont = document.getElementById('seatCont');
const totalPrice = document.getElementById('totalPrice');
const selectedSeatsHolder = document.getElementById('selectedSeatsHolder');
const continueBtn = document.getElementById('continueBtn');
const cancelBtn = document.getElementById('cancelBtn');
const numberOfSeat = document.getElementById('numberOfSeat');

// Populate dropdown with movie options
moviesList.forEach(movie => {
    const option = document.createElement('option');
    option.text = movie.movieName + "   $" + movie.price;
    selectMovie.add(option);
});

// Initialize selected seats array
let selectedSeats = [];

// Add event listeners to unoccupied seats
seatCont.addEventListener('click', e => {
    console.log(seatCont);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        const seatIndex = selectedSeats.indexOf(e.target);
        if (seatIndex !== -1) {
            console.log(seatIndex);
            e.target.classList.remove('selected');
            selectedSeats.splice(seatIndex, 1);
        } else {
            e.target.classList.add('selected');
            selectedSeats.push(e.target);
        }
        updateTotalPrice();
        updateTotalSeats();
        updateSelectedSeatsHolder();
    }
});

// Add event listener to continue button
continueBtn.addEventListener('click', () => {
    if (selectedSeats.length === 0) {
        alert("Oops no seat selected");
    } else {
        alert(`Yayy! Your ${selectedSeats.length} seat(s) have been booked`);
        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
            seat.classList.add('occupied');
        });
        selectedSeats = [];
        updateTotalPrice();
        updateSelectedSeatsHolder();
    }
});

// Add event listener to cancel button
cancelBtn.addEventListener('click', () => {
    selectedSeats.forEach(seat => {
        seat.classList.remove('selected');
    });
    selectedSeats = [];
    updateTotalPrice();
    updateSelectedSeatsHolder();
});

// Update total price based on selected seats
function updateTotalPrice() {
    const selectedMoviePrice = getSelectedMoviePrice();
    moviePrice.textContent = `$${selectedMoviePrice}`;
    totalPrice.textContent = `$${selectedSeats.length * selectedMoviePrice}`;
}

// Get price of selected movie
function getSelectedMoviePrice() {
    const selectedMovieIndex = selectMovie.selectedIndex;
    return moviesList[selectedMovieIndex].price;
}

// Update selected seats holder
// Update selected seats holder
function updateSelectedSeatsHolder() {
    selectedSeatsHolder.innerHTML = ""; // Clear previous content
    const selectedSeatNumbers = selectedSeats.map(seat => seat.textContent);

    if (selectedSeatNumbers.length > 0) {
        const selectedSeatsText = document.createTextNode(`Selected Seats: `);
        selectedSeatsHolder.appendChild(selectedSeatsText);

        selectedSeatNumbers.forEach(seatNumber => {
            const button = document.createElement('button');
            button.classList.add('selectedSeat');
            button.textContent = seatNumber;
            selectedSeatsHolder.appendChild(button);
        });
    } else {
        selectedSeatsHolder.textContent = "No seat selected";
    }
}

// Update the number of selected seats
function updateTotalSeats() {
    numberOfSeat.textContent = selectedSeats.length;
}
