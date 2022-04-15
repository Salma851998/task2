const express = require('express')
const app = express()
const port = process.env.port||3000
const hbs=require('hbs')
const news=require('./tools/news')
const path=require("path")
const publicDirctory=path.join(__dirname,'../task2')
app.use(express.static(publicDirctory))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'../templates/views'))
const partialPath=path.join('__dirname','../templates/partials')
hbs.registerPartials(partialPath)

/*app.get('/',(req,res)=>{
  res.send("hello world")
})*/
/*app.get('/',(req,res)=>{
  res.render('index',{
    title:"sassa",
    name:"dsddwd"
  })
})*/
app.get('/',(req,res)=>{

    news((error,newsData)=>{
      if(error){
        return res.send({error})
      }
        res.render('index',
        {
        
          title:newsData[0].title,
        content:newsData[0].content,
        img:newsData[0].urlToImage
      
        })
              
})
})

app.get('*',(req,res)=>{
  res.send('404 page')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })