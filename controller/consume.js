const {kafka}=require('../config/kafkaConfig')

exports.consume=(req,res)=>{
    res.status(200).json({"flag":"DONE!!"})
}
