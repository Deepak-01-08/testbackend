require('dotenv').config()
const express = require('express')
//import express from "express" - same as above line
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/app', (req, res) => {
    res.send("This is App")
})

app.get('/login', (req, res) => {
    res.send('<h2>This is Login</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})