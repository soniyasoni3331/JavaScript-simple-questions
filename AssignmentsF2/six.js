const productDetails={
    name: "Apple 2020 MacBook Air Laptop",
    price:82000,
    color:"Grey",
    hardDisk:"256 GB",
};
console.log("Below are the products details.")
for (const keys in productDetails){
    console.log(` ${keys}: ${productDetails[keys]}`)
};

// output-
// below are the product details-
// name: Apple 2020 MacBook Air Laptop
// price: 82000,
// color: Grey,
// hardDisk: 256 GB
