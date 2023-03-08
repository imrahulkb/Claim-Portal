require("dotenv").config()
const express = require('express');
const cors = require('cors');
const path = require('path');


// const port = process.env.PORT || 5000;


const app=express();


app.use(cors());
app.use(express.static('../Frontend'));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend', 'index.html'));
 });
// app.get("/api", (req,res)=>{
//     res.json({
//         success: 1,
//         message: "This is rest api working"
//     });
// });

app.listen(process.env.APP_PORT , ()=>{
    console.log("Server is up and running on PORT : ",process.env.APP_PORT);
});