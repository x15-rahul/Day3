const items = [
    {itemName: 'shirt', price: 650, quantity: 3},
    {itemName: 'pant', price: 800, quantity: 2},
    {itemName: 'shoe', price: 1500, quantity: 2},
    {itemName: 'belt', price: 500, quantity: 3}
];

function getTotalPrice(items){
    let totalPrice = 0;
    for(const item of items){
        totalPrice += (item.price * item.quantity);
    }
    return totalPrice;
}

const total = getTotalPrice(items);
console.log(total);