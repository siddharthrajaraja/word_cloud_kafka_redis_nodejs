var {redisClient}=require('../../config/redisConfig')
var {promisify}=require('util')
const getAsync=promisify(redisClient.get).bind(redisClient);

exports.getValue=async(key)=>{
    try{
        var value=await getAsync(key)
        return value;
    }
    catch(error){
        console.log(error)
        return 0;
    }
}