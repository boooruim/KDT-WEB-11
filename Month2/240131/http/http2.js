const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>

{
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    
    } catch (error){
        console.log(error);
        res.writeHead(404);
        res.end();
    }
})


//listen: 서버를 실행
server.listen(8000, function (){
    console.log('8000번 포트실행');
})