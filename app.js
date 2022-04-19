const express = require('express') 
const fs = require('fs')
const data = require('./data.json')

const port = 3000
const app = express()

function imgPicker(){
  let RIndex = Math.ceil(Math.random()*20)
  return data['anime-pfp'][RIndex]
}

app.get('/get',(req,res)=>{
  res.type('text')
  res.status(200).send(imgPicker())
})

app.listen(port,()=>{
  console.log(`server running on http://127.0.0.1:${port}`);
})