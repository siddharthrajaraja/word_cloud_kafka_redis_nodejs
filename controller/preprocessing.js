const natural = require('natural')
const stopword = require('stopword')
const path = require('path')
const tokenizer = new natural.WordTokenizer()

var  {ifKeyExists}=require('./redisDB/ifKeyExists')

exports.preprocess=async(data)=>{
    var tokens = tokenizer.tokenize(data)
    //console.log(tokens)

    const newString = stopword.removeStopwords(tokens)

    var newVector = newString.filter((a)=>{
        if(a.length>=3){
            return a;
        }
    })
    
    //console.log(newVector);
    newVector.forEach(async(element)=>{
        await ifKeyExists(element);
    })
}

