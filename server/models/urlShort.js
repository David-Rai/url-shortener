const mongoose = require("mongoose");
const {ulid}=require("ulid")

 mongoose.connect("mongodb://localhost:27017/urlDatas")
 .then(()=> console.log("Sucessfully connected to mongodb"))
.catch((err)=> console.log("err caught"))

const urlSchema = new mongoose.Schema(
  {
    shortUrl: { type: String,default:ulid() },
    originalUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const url=mongoose.model("url",urlSchema)
module.exports=url