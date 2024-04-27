const http = require("http");
const fs = require("fs");
    
http.createServer(function(request, response){
      
    if(request.url == "/hello"){
        const users = [
          
        ];
        response.end(JSON.stringify(users));
    }
    else{
        fs.readFile("start.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));
