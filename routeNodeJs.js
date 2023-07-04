const http = require('http');
const fs = require('fs');


const port = 3000;
const host = "localhost";

const serv = http.createServer((req,res)=>{
    let route = "";
    switch(req.url){
        case "/":
            route="./index.html";
            break;
        default :
            route="./error404.html";
            break;
    }


    fs.readFile(route,"utf-8",(err,data)=>{
        res.end(data);
    })
});

serv.listen(port , host , ()=>{
    console.log("runing...");
})
