//complete the ExpenseTracker class.
// Do not alter the starter code
function main() {
    class ExpenseTracker {
        //Create your private properites here
        #income;
        #expenses;

        //Create a constructor function
        constructor(income) {
            this.#income = income;
            this.#expenses = [];
        }

        //create your private properties to calculate expenses
        #calculateTotalExpenses() {
            let totalExpenses = 0
            for (const expense of this.#expenses) {
                totalExpenses += expense.amount
            }
            return totalExpenses;
        }

        //Create your public properties here
        addExpense(name, amount, date) {
            this.#expenses.push({ name, amount, date })
        }

        calculateBalance() {
            const totalExpenses = this.#calculateTotalExpenses()
            return this.#income - totalExpenses
        }
    }
    //The class should function accordingly.
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance()); // should output 3500
    return ExpenseTracker;
}
main()

