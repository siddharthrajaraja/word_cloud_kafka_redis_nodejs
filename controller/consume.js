const {kafka}=require('../config/kafkaConfig')
var {preprocess}=require('./preprocessing')


var consume=async()=>{
    const consumer = kafka.consumer({ groupId: process.env.GROUP_ID })

    await consumer.connect()
    await consumer.subscribe({ topic: process.env.TOPIC , fromBeginning: true })

    await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
            
            var data=message.value.toString();
        
            console.log("data is :",data)
            preprocess(data);

            

        },
    })

}
consume();