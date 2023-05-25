const express = require("express")
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

const {router} = require('./router/landingRoutes')
app.use(router);

app.listen(3001, (err)=>{
    if(err){
        console.log("App Error: ", err)
    }else{
        console.log("App started at port: " + `${3001}`);
    }
})