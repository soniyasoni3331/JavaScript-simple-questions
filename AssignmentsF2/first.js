const userNameList=["Mithun", "Abhay", "Shiv", "Keshav"]
function isUserPresent(username){
        if(userNameList.includes(username)){
            console.log(`Yes,${username} is a valid user name.`)
        }else{
            console.log(`No,${username} is not a valid user.`)
        }
}

isUserPresent("Mithun");
//output- Yes, mithun is a valid user name.
isUserPresent("Someone");   
//output- No, Someone is not a valid user name.
