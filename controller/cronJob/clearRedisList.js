var {redisClient}=require('../../config/redisConfig')

exports.deleteKey=async(key)=>{
    redisClient.DEL(key,(err,response)=>{
        if(err) throw err;
        if(response==1){
            console.log("Deleted :",key)
        }
    })
}