require("dotenv").config()
const express = require('express');
const cors = require('cors');
const path = require('path');


const port = process.env.PORT || 3000;

const app=express();

app.use(cors());
app.use(express.static('../Frontend/dist'));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Frontend/dist', 'index.html'));
 });
// app.get("/api", (req,res)=>{
//     res.json({
//         success: 1,
//         message: "This is rest api working"
//     });
// });

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})