var global_array = []
var chart = am4core.create('container',am4plugins_wordCloud.WordCloud)
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries())
var getRequest = async ()=>{
    try {
        data = await axios.get("/api/getAllWords")
        
        var {data}=data.data
        var values=data
        series.data = values
        series.dataFields.word = "tag"
        series.dataFields.value = "weight"
        series.colors = new am4core.ColorSet();
        series.colors.passOptions = {};
        series.colors.resuse = true;
        series.randomness = 0.0025
        //console.error("Refreshed!!")
    } catch (error) {
        console.error(error)
    }
    
}
getRequest();


