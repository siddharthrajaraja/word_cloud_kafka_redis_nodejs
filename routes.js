var {testing}=require('./controller/testing')
var {produce}=require('./controller/produce')
var {consume}=require('./controller/consume')
module.exports=(app,jsonParser)=>{
    app.post('/produce',jsonParser,produce);
    app.get('/consume',consume);
    app.get('/testing',testing);
}