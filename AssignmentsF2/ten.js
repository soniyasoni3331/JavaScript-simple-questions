const wordcounter=function(sentense){
    const wordMap = new Map();
    const words=sentense.toLowerCase().split(/\s+/);
    for(const word of words){
        if(wordMap.has(word)){
            wordMap.set(word, wordMap.get(word)+1);
        }else{
            wordMap.set(word,1);
        }

    }
    return wordMap;
}
const sentense="Please please submit your assignment on time, your assignments are important";
const result= wordcounter(sentense);
console.log(result);