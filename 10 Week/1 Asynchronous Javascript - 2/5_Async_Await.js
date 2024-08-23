console.log('async await');
// Fetching data from GitHub API for users
const getUsersFromGitHub = async () => {
    try {
        const response = await fetch('https://api.github.com/users?per_page=20');
        if (!response.ok) {
            throw new Error('Failed to fetch data from GitHub');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // return empty array in case of error
    }
};

// Function to print users' data
const printUserData = async () => {
    const users = await getUsersFromGitHub();
    users.forEach(user => {
        console.log(user.login); // or any other property you want to print
    });
};

// Call the function to print users' data
printUserData();
