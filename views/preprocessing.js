const natural = require('natural')
const stopword = require('stopword')
const path = require('path')

const tokenizer = new natural.WordTokenizer()
var tokens = tokenizer.tokenize("Machine learning is awesome and great!Raja doesn't like it?")
//console.log(tokens)

const newstring = stopword.removeStopwords(tokens)

var newvector = newstring.filter((a)=>{
    if(a.length>=3){
        return a;
    }
})
//console.info(newvector)
exports.wordCloud = (req,res)=>{
    res.render('index')
}

