//functions => In javascript functions are first class citizents.
//(functions can be treated as variables)

// Advantages =>DRY help us to follow DRY(do not repeat yourself) concept.

//where should we use functions =>whenever we feel we are repeating ourself we should
// use functions

// sytax=> 
//  function declaration
// calling functios 
// Parameters, arguments & Return statement

//ex=>
// function functionName(parameter1){
//     //function body
// }
// //calling a functions
// functionName()


//first functions

// function greetme(username){
//     console.log(`Hello ${username}`);

// }
// // greetme("soniya");
// // greetme("radhika");

// function addTwoNum(num1,num2){
//     return num1+num2;
// }
// // addTwoNum(4,5);
// const result= addTwoNum(5,6);
// console.log(result);


// function addArray(arr){
//     let result=0;
//     for(let i=0; i < arr.length;i++){
//         result += arr[i];
//     }
//     return result;
// }

// const resultArr=addArray([2, 2, 3]);
// console.log(resultArr);


//Arrow functions


// syntax =>

// functionName= (a,b) =>{
//     return a+b
// }

// functionName =(a,b)=> a+b;
// const result=functionName(2,4);
// console.log(result);


//functions in objects

const user={
    username: "john",
    greet: function(){
        console.log(`Hello ${this.username}`)
    },
    // greet2: ()=>{console.log(`Hello ${this.username}`)} //In this case this keyword is not accesable so we should not use arrow functions in obecjects
}

// user.greet();


//bind, call apply

//Arrays =>

const languages=["java", "cpp","js"];
const len=languages.length;
// console.log(len);
// console.log(languages[0]);

// array from constructor
 const arr=new Array(6); //here 6 is the lenght of the array

// array from array literals
let colors=Array("red","white","pink","blue");

//accessing the value
// let newPlayer=[];
// newPlayer[0]="virat";
// console.log(newPlayer);


//array methods

let fruits=['apple','banana','mango','watermelon','pineapple'];
// let last=fruits.pop();
// console.log(fruits);
// console.log(last);

// let add=fruits.push("kivi");
// console.log(fruits);
// console.log(add);

// let fisrt=fruits.shift();
// console.log(fruits);
// console.log(fisrt);

// let addFirst=fruits.unshift("watermelon");
// console.log(fruits);
// console.log(addFirst);


// let array1=[1, 2, 3];
// let array2=[4, 5, 6];

// let newArray=array1.concat(array2);
// console.log(newArray);

// let result=fruits.join();
// let result=fruits.join("-");

// console.log(result);

// let resultSlice=fruits.slice(1,3);
// console.log(fruits);
// console.log(resultSlice);

let resultSplice=fruits.splice(1,3);
// console.log(resultSplice);

// let flatArray=[1,4,5,[5,7]];
// let resuleFlat=flatArray.flat(1);
// console.log(resuleFlat);


//Obejects
//Creating objects using object literals
// const obj={
//     name:"pw",
//     org:"pwskills",
//     city:"Delhi"
// }

// console.log(obj);
// console.log(obj.name);


// Creating objects using object instance

// const obj= new Object();
// obj.username="Alex";
// obj.id=1;
// obj.salary=1000000;

// Object declration using constructor

// function Emp(id, name, salary){
//     this.id=id;
//     this.name=name;
//     this.salary=salary;
// }
// const emp=new Emp(101,"Alex",1000000);
// console.log(emp.id+" "+emp.name+" "+emp.salary+" ");


//accesing 

// let emp={
//     id:101,
//     name:"Alex",
//     salary:100000
// }
//. notation
// console.log(emp.id);
// console.log(emp.name);
// console.log(emp.salary);

//[] square bracket notation

// console.log(emp["name"]); //here " " are mandatory to write with the key name which we want to accesss

//Adding elements to an object
//. notation
// emp.items=10;
// console.log(emp);

//square bracket notation

// emp["type"]="intern";
// console.log(emp);


//Updating an object 
//Using dot notation

// emp.id=103;
// console.log(emp);

//using square notaion

// emp["name"]="soniya";
// console.log(emp);


//deleting object

//giving null value to a key 

// emp.id=null;
// console.log(emp);

//using delete keyword'

// delete emp.id;
// console.log(emp);

//looping threw the object 

// for (const key in emp){
//     console.log(emp[key]);
// }

// for(const key in emp){
//     console.log(`${key}:${emp[key]}`);
// }


//+++++++++Object Methods++++++

let emp={
    id:101,
    name:"Alex",
    salary:100000
};

var keys= Object.keys(emp);
// console.log(keys);

//entries

// console.log(Object.entries(emp));//this will give us arrays inside an array

function sumOfAllParameters(){
    let sum=0;
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
let result=sumOfAllParameters(1,24,466,87,98);
console.log(result);



