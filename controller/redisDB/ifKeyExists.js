var {redisClient}=require('../../config/redisConfig')
exports.ifKeyExists=async(key)=>{
    if(redisClient.setnx(key,"0")){
        redisClient.incr(key)
    }
    redisClient.lpush(process.env.TOPIC,key);
}