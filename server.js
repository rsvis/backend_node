const http = require('http');
const fs=require('fs');
const _ =require('lodash');
const server = http.createServer((req,res)=>{
    console.log("request has been made from browser to server");
//     console.log("request mehtod", req.method)
//     console.log("request URL", req.url)
   res.setHeader('Content-Type','text/html');
//    res.write('<h1>Hello Ravi how are you?</h1>');
//    res.write('<h2>Hello Vandana how are you?</h2>');
//    res.end();

//loadash

let num = _.random(0,20);
console.log(num)

let path='./views';
switch(req.url){
    case '/' :
        path+='/index.html';
        res.statusCode=200; 
        break;
    case '/about':
        path+='/about.html';
        res.statusCode=200; 
        break;
    case '/about-us':
        res.setHeader('Location','/about');
        res.statusCode=301; 
        res.end();
        break;
    default:
        path+='/404.html';
        res.statusCode=404; 
}

fs.readFile(path,(err,fileData)=>{
    if(err){
        console.log(err)
    }else{
        // res.write(fileData);
        res.end(fileData);
    }
})

});

server.listen(3000,'localhost',()=>{
    console.log("server is listening on port 3000");
});
