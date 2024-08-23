
const productList = [
    { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
    { id: "p2", name: "Oranges", category: "Fruits", price: 1.99, inStock: false },
    { id: "p3", name: "Blueberries", category: "Fruits", price: 4.99, inStock: true },
    { id: "p4", name: "Carrots", category: "Vegetables", price: 1.0, inStock: true },
    { id: "p5", name: "Tomatoes", category: "Vegetables", price: 1.5, inStock: true }
];
function searchAndBuyProduct(productList, productName) {

    let product = productList.find(product => {
        return product.name === productName
    })

    if (product.inStock == true) {
        product.inStock = false;
        return true
    }
    return false
}

console.log(searchAndBuyProduct(productList, 'Oranges'));