const {Kafka}=require('kafkajs')
const brokers=process.env.KAFKA_BROKERS.split(',')
const clientID=process.env.CLIENT_ID

const kafka= new Kafka({
    clientId:clientID,
    brokers:brokers
})

module.exports={
    kafka:kafka
}

