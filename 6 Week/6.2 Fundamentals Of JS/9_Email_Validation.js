// Email Varification

// 1. Input an email
// 2. Length of email > 11
// 3. after. only 2 or 3 characters allowed
// 4. minimum 3 characters between @ and .



email = 'moin@gmail.com'
emailLen = email.length
dotIndex = email.lastIndexOf('.')
atIndex = email.lastIndexOf('@')
lastIndex = emailLen - 1

if (emailLen < 11 || lastIndex - dotIndex < 2 || lastIndex - dotIndex > 3 || dotIndex - atIndex < 3 || dotIndex - atIndex < 3) {
    console.log("Invalid Email")
} else {
    console.log('Valid Email', email)
}