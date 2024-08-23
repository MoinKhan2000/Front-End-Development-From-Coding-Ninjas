function main() {
    //create your class here with the name Account with all the private properties and getter and setter
    class Account {
        #accountNumber;
        #balance;

        constructor(accountNumber) {
            this.#accountNumber = accountNumber;
            this.#balance = 0;
        }

        get getbalance() {
            return this.#balance;
        }

        set balance(amount) {
            if (amount >= 0) {
                this.#balance = amount;
            } else {
                return "Please enter a positive value for the balance";
            }
        }

        deposit(amount) {
            if (amount > 0) {
                this.#balance += amount;
            }
        }

        withdraw(amount) {
            if (amount <= this.#balance) {
                this.#balance -= amount;
            } else {
                return "Insufficient balance";
            }
        }
    }


    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    //Do not modify the return statement
    return Account;
}
main();