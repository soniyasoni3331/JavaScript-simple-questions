function uniqueCharactersCheck(inputString){
    const charSet =new Set();
    for(const char of inputString){
        if (charSet.has(char)){
            return "The input string conatains duplicates."
        }
        charSet.add(char);
    }
    return "The input string contains unique characters"
}
console.log(uniqueCharactersCheck("mithun"));
//output- The input string contains unique characters

console.log(uniqueCharactersCheck("anurag"));
//output- The input string contains duplilcates

