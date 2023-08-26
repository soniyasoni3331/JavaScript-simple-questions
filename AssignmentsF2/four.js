const products=[
    {name:"Laptop",price:120000 },
    {name:"Mobile",price:70000 },
    {name:"Laptop Bag",price:20000 },
    {name:"Watch",price:20000 },
    {name:"Mobile Charger",price:1500 },
]

let minProduct=null;
let maxProduct=null;
function checkPrice(products){
    for(let product of products){
        if(minProduct=== null || product.price < minProduct.price){
            minProduct=product;
        }
        if(maxProduct=== null || product.price > maxProduct.price){
            maxProduct=product;
        }
    }
    console.log(`The product with minimum amount is ${minProduct.name} which is priced at ${minProduct.price}.`)
    console.log(`The product with maximum amount is ${maxProduct.name} which is priced at ${maxProduct.price}.`)

}
checkPrice(products);

//output
//The product with minimum amount is Mobile Charger which is priced at 1500.
//The product with minimum amount is Laptop which is priced at 120000.

