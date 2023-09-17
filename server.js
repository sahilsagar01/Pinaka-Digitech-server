const express = require("express");
// const bobyParser = require("body-parser");

const app = express();
app.use(express.json());


// app.use(bobyParser)

const PORT = 3000;
const allDoc = []

app.get("/", (req, res) => {
    res.send("This server is created for Pinaka Digitech.")
    console.log("allData",allDoc)
} );

app.post("/api", (req, res)=> {
    const jsonData = req.body;
        res.send("Doc successfully posted.")
        console.log(jsonData)
        allDoc.push(jsonData)
})

app.put("/api", (req, res) => {
    const jsonData = req.body;
    console.log(jsonData)
        res.send("Doc is successfully updated.");
})

app.delete("/api", (req, res) =>{
            res.send("Doc sucessfully deleted.")
})
app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});