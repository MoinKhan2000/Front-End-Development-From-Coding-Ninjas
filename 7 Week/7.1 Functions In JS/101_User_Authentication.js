function main() {
    const userAuth = (
        function () {
            let users = [];
            function registerUser(username, password) {
                // Check if the user already exists
                if (checkCredentials(username)) {
                    throw new Error("The user is already registered")

                } else {
                    // If not, add the user to the users array
                    users.push({ username, password });
                    return "The user has been added to the registered users array";
                }
            }

            // Function to check if user exists in the users array
            function checkCredentials(username) {
                for (let user of users) {
                    if (user.username === username) {
                        return true;
                    }
                }
                // If the username doesn't exist, return false
                return false;
            }

            // Returning the registerUser and checkCredentials functions
            return {
                registerUser: registerUser,
                checkCredentials: checkCredentials
            };
        }
    )(); // Invoking the IIFE

    console.log(userAuth.registerUser("user1", "password123"));
    // Output: The user has been added to the registered users array

    console.log(userAuth.registerUser("user1", "password123"));
    // Output: The user is already registered

    return userAuth;
}

main();
