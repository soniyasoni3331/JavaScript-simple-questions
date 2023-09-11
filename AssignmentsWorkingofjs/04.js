{
    console.log(a); //undefined
    var a="var variable";
    console.log(a); //var variable

    console.log(b); //
    let b="let variable";
    console.log(b); //let variable

    console.log(c); //
    const c="const variable";
    console.log(c); //const variable

}

console.log(a);
console.log(b);//referenceError- b is not defined
console.log(c);//referenceError- c is not defined
