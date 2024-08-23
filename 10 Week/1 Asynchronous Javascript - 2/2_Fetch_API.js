// Fetching data from GitHub API for users
function getUsersFromGitHub() {
    return fetch('https://api.github.com/users?per_page=5')
        .then(response => {
            console.log(response);

            if (!response.ok) {
                throw new Error('Failed to fetch data from GitHub');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return []; // return empty array in case of error
        });
}

// Function to print users' data
function printUserData() {
    getUsersFromGitHub()
        .then(users => {
            users.forEach(user => {
                console.log(user.login); // or any other property you want to print
            });
        });
}

// Call the function to print users' data
printUserData();
