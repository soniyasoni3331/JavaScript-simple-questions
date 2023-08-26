let packageType="overnight";
switch(packageType){
    case "standard":
        console.log("Dilivery might take 3-5 days!");
        break;
    case "express":
        console.log("Dilivery will be done in 1-2 day!");
        break;
    case "overnight":
        console.log("Your package would be dilivered the next day!");
        break;
    default:
        console.log("Can't estimate the delivery time!");
        break;
}