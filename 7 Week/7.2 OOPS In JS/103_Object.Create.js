// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
    return Object.assign({}, user, updates)
}

function freezeProfile(user) {
    // Implement the code here
    return Object.freeze(user)
}


// Dummy user profile
let user = {
    name: "John Doe",
    email: "john@example.com",
    address: {
        city: "New York",
        country: "USA"
    }
};

// Updates to be applied to the user profile
const updates = {
    name: "Jane2 Doe",
    address: {
        city: "Los Angeles"
    },
    age: 30 // Adding a new property
};
user = freezeProfile(user)
console.log(updateProfile(user, updates));
