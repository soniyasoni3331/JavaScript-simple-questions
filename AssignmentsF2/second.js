function totalCartValue(){
    sum=0;
    for(var i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    console.log(`The total cart value is ${sum}`);
    return sum;
}
totalCartValue(23,454,76);
//output- The toal cart vlaue is 553