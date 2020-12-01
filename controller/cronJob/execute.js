var {redisClient}=require('../../config/redisConfig')
var {promisify}=require('util')
var {writeJSON}=require('./rwJSON')
var  {getValue}=require('./getValue')
var {deleteKey}=require('../cronJob/clearRedisList')
exports.getAllKeys=async()=>{

    try{
        const lRangeAsync=promisify(redisClient.lrange).bind(redisClient)
        var updatedKeys=await lRangeAsync(process.env.TOPIC,0,-1);
        
        var updatedKeysObject={}
        
        for(var i=0;i<updatedKeys.length;i++){
            var element=updatedKeys[i]
            var value=await(getValue(element));
            console.log("value is :",value)
            updatedKeysObject[element]=value;

        }
        
        await writeJSON(updatedKeysObject);
        await deleteKey(process.env.TOPIC)



    }
    catch(error){
        console.log(error)
    }
}