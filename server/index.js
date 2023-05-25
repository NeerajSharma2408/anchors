const express = require("express")
const app = express();

app.use(express.json())

const {router} = require('./router/landingRoutes')
app.use(router);

app.listen(3001, (err)=>{
    if(err){
        console.log("App Error: ", err)
    }else{
        console.log("App started at port: " + `${3001}`);
    }
})