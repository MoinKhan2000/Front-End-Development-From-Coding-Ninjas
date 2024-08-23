// Write the program to calculate the discount on the given amount
// store the calculated discount in the "discount" variable
// Please do not alter anything given in the starter code
function calculate(amount) {
    let discount;

    switch (true) {
        case (amount < 500):
            discount = 'No'
            break

        case (amount >= 500 && amount < 1000):
            discount = '10% Discount'
            break

        case (amount >= 1000 && amount < 2000):
            discount = '20% Discount'
            break

        case (amount >= 2000 && amount < 4000):
            discount = '30% Discount'
            break

        case (amount >= 4000 && amount < 5000):
            discount = '40% Discount'
            break
        case (amount >= 5000):
            discount = '50% Discount'
            break

        default:
            discount = 'No Discount';
            break;
    }
    return discount;
}

calculate(5000)