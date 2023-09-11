//week 16 HOF- higher order function

const powerTwo = (n)=>{
    return n ** 2;
}
function powercube(powerTwo, n){
    return powerTwo(n)* n;
};
// console.log(powercube(powerTwo,3));

const higherOrder=n=>{
    const oneFunc=m=>{
        const twoFunc=p=>{
            return n+m+p;
        }
        return twoFunc;
    }
    return oneFunc;
}
// console.log(higherOrder(2)(3)(4));
function hello(){
    console.log("hello!")
}

// setInterval(hello,2000);//keep on exucuting after the time interwell
// setTimeout(hello,3000);//excute after 3 seconds
 
//for each

const arr=[2,3,5];
// arr.forEach(function(element,index, array){
//         console.log(index,element,array);

// });

const heros=["superman","ironman","thor","captain"];
// heros.forEach((el)=>{
//     console.log(el.toUpperCase());
// })
//filter

const heroWithMan=heros.filter((h)=>{
    return h.endsWith("man");
});
// console.log(heroWithMan);

//map

// heros.map((el)=>{
//     console.log(el.toUpperCase());
// })

//reduce

const cartBill=[20,30,50];
const sumOfCart=cartBill.reduce((prev,curr)=>prev + curr, 0);
// console.log(sumOfCart);

//every

const gameScore=[200,300,310,400];
const gameScoreCheck=gameScore.every((v)=>typeof v === "number");
// console.log(gameScoreCheck);

//find
const above200=gameScore.find((score)=>score>200);
console.log(above200);

//sort
//findIndex
//some

//regex

