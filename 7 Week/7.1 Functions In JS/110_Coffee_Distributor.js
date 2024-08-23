//Complete the totalorderValue function
// Do not alter the starter code
const orders = [
    {
        orderNumber: 1,
        items: [
            { name: "Cappuccino", price: 3.5 },
            { name: "Chocolate Croissant", price: 2.5 }
        ]
    },
    {
        orderNumber: 2,
        items: [
            { name: "Latte", price: 4.0 },
            { name: "Blueberry Muffin", price: 2.75 }
        ],
        discountCode: "COFFEELOVER"
    }
];
function applyDiscount(discountCode, totalOrderValue) {
    switch (discountCode) {
        case "COFFEELOVER":
            return totalOrderValue * 0.1;
        case "TEALOVER":
            return totalOrderValue * 0.2;
        default:
            return 0;
    }
}
function totalOrderValue(orders, applyDiscount) {
    const orderTotalValues = orders.map(order => {
        const orderTotal = order.items.reduce((acc, item) => acc + item.price, 0)
        if (order.discountCode) {
            const discount = applyDiscount(order.discountCode, orderTotal)
            console.log(discount);

            return orderTotal - discount
        }
        return orderTotal
    })

    const total = orderTotalValues.reduce((acc, item) => acc + item, 0)
    return total.toFixed(2)
}
console.log(totalOrderValue(orders, applyDiscount)); 