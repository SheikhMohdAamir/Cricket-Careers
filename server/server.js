const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./database/sql");
const table = require("./table");

app.use(cors());
app.use(bodyParser.json());
app.get("/", async(req, res, next) => {
  const playersData= await table.findAll()
  console.log(playersData)
  res.json({playersDetail:playersData})
});
app.post('/e',async(req,res,next)=>{
  const editData = await table.update({name:req.body.name,dob:req.body.dob,team:req.body.team,role:req.body.role},{
    where:{
      id:req.body.id}
  })
  res.json({edit:'Edit Request Successfull'})
})
app.post('/d',async(req,res,next)=>{
  const data= await table.findByPk(req.body.id)
  data.destroy()
  res.json({playersDetail:"data"})
})
app.post('/p',async(req,res,next)=>{
 
    const name=req.body.name
    const dob=req.body.dob
    const team=req.body.team
    const role=req.body.role

  const data= await table.create({name,dob,team,role})
  res.json({playersDetail:data})
})

sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("SERVER RUNNING AT PORT 40000")
    });
  })
  .catch((err) => {
    console.log(err);
  })