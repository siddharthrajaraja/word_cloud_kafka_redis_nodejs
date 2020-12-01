var {testing}=require('./controller/testing')
var {produce}=require('./controller/produce')
var {wordCloud} = require('./views/preprocessing')
module.exports=(app,jsonParser)=>{
    app.post('/produce',jsonParser,produce);
    app.get('/testing',testing);
    //app.get('/',wordCloud)
}