var {readFile}=require('./cronJob/rwJSON')

exports.getFinalJSON=async(req,res)=>{


    var data=await readFile();

    var finalData=[]

    var keys=Object.entries(data);

    keys.forEach(element=>{
        finalData.push({"tag":element[0],"weight":parseInt(element[1])})
    })

    //console.log(finalData)

    res.status(200).json({"flag":"DONE!","data":finalData})

}