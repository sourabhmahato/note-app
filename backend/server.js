const express = require("express")
const notes = require("./data/notes")
const dotenv = require("dotenv")
const app = express()
dotenv.config();

app.get("/", (req,res)=>{
    res.status(200).send("api running")
})

app.get("/api/notes", (req,res)=>{
    res.send(notes)
})

app.get("/api/notes/:id", (req,res)=>{
    const note = notes.find((n)=> n._id === req.params.id)
    res.status(200).send(note)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server on port 5000"))