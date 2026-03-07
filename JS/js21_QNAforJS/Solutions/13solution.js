
// 13. The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

const products=[ {
    name: "Mousepad",
    price: "100"},{
          name: "Printer",
    price: "10000"}
,{
          name: "Laptop",
    price: "100000"

    }

]
const cart=[
    {productName:"Mousepad",
        noofitem:4
    },{
         productName: "Laptop",
         noofitem:2
    }
    ,{
         productName: "Printer",
         noofitem:4
    }

]
function calculateTotal(products, cart) {
  let totalPrice = 0;

  for (const item of cart) {
    for (const product of products) {
      if (item.productName === product.name) {
        totalPrice += Number(product.price) * item.noofitem;
      }
    }
  }

  return totalPrice;
}

console.log(calculateTotal(products, cart));