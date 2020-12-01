const {kafka}=require('../config/kafkaConfig')
exports.produce=async(req,res)=>{
    
    try{
        const {message}=req.body;
        const producer=kafka.producer()
        await producer.connect();
        await producer.send({
            topic:process.env.TOPIC,
            messages:[
                {value:message}
            ]
        });

        await producer.disconnect();
        
        res.status(200).json({"flag":"Message Posted!!"})

    }
    catch(error){
        res.status(400).json({"flag":"ERROR!!"})
    }
 
}