var jsonFile=require('jsonfile')
var path=require('path')

var fs=require('fs')

exports.readFile=async()=>{

    var filePath= path.join(__dirname, `../../assets/json/${process.env.TOPIC}.json`)  

    
    console.log(filePath)

    if(!fs.existsSync(filePath)){
        await jsonFile.writeFile(filePath,{});
        console.log(`New File : ${filePath}`)
    }

    try{
        var data=await jsonFile.readFile(filePath,{encoding:'UTF-8'});
        console.log(" data is :",data)
        return data;
        
    }
    catch(error){
        console.log(error)
        return {};
    }
}

exports.writeJSON=async(updatedKeys)=>{

    var filePath= path.join(__dirname, `../../assets/json/${process.env.TOPIC}.json`)  

    var existingKeys=await this.readFile()
    

    for (const [key, value] of Object.entries(updatedKeys)) {
        existingKeys[key]=value
    }
    //console.log("existing keys Modified :",existingKeys)

    await jsonFile.writeFile(filePath,existingKeys);
        
}