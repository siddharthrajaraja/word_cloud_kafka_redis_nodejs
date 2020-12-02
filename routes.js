var {testing}=require('./controller/testing')
var {produce}=require('./controller/produce')
var {homepage}=require('./controller/homepage')
var {getFinalJSON}=require('./controller/getJSON')
module.exports=(app,jsonParser)=>{
    app.post('/produce',jsonParser,produce);
    app.get('/testing',testing);
    app.get('/',homepage)
    app.get('/api/getAllWords',getFinalJSON)
    //app.get('/',wordCloud)
}