const request=require("request")
const news=(callBack)=>
{
const url="https://newsapi.org/v2/everything?q=tesla&from=2022-03-15&sortBy=publishedAt&apiKey=c173ce709af8411eaa0e55804549c478"
request({url,json:true},(error,Response)=>{
    //low level error
    if(error)
    {
        callBack("error is occured",undefined)
       
    }
    else if(Response.body.error)
    {
        callBack(Response.body.error.message,undefined)
       
    }
    else
    {
        let articles=Response.body.articles
       callBack(undefined,articles)
    }
})
}

module.exports=news


