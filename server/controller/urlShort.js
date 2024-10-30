const url=require('../models/urlShort')
const express=require('express')
const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Creating the shortUrl
const createShort=async (req,res)=>{
     const  originalUrl = req.body.url

if(!originalUrl){
  res.json({
    message:"url is not passed properly"
  })
}

     //Adding new url
    const newData=await new url({
    originalUrl:originalUrl
})
newData.save()

//finding the shortURl
const result=await url.findOne({originalUrl:originalUrl})

if(result){
  res.json({
    shortUrl:result.shortUrl,
    originalUrl
})
}
}


//Showing all the urls
const showAll=async (req,res)=>{
    const urls=await url.find()
  res.json(urls)
}

//goto specific
const Goto = async (req, res) => {
    try {
      const toUrl = req.params.shortUrl;
      // Use findOne to look up the document by the shortUrl field
      const result = await url.findOne({ shortUrl: toUrl });
      
      if (result) {
        // Redirect to the longUrl if found
        res.redirect(result.originalUrl);
      } else {
        // Handle case where URL is not found
        res.status(404).send("URL not found");
      }
    } catch (error) {
      // Handle any errors that occur
      console.error(error);
      res.status(500).send("Server error");
    }
  };
  

module.exports={
    createShort,showAll,Goto
}