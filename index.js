const express=require ("express");
const cors=require("cors")
const app=express();
const PORT=process.env.PORT||4000;
const mysql=require ("mysql")

app.use(cors())



const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"jagadeesh9948",
    database:"ddl_commands"
})

connection.connect(e=>{
    if(e){
        console.log(e)
        return e
    }
    else console.log("connected successfully")
})

const users={
    name:"jagadeesh",
    age:23,
    address:"vijayawada",
    email:"jagadeeshsairowthula@gmail.com"
}

app.get("/",(req,res)=>{
    res.send("hello this is default root route")
})
app.get("/users",(req,res)=>{
    res.json(users)
})
app.get("/getusers",(req,res)=>{
    connection.query("select * from users",(err,result)=>{
         if(err)
            return res.send(err)
         else
            return res.json(result)

    })
})




app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))