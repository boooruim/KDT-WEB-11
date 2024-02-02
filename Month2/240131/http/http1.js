const http = require('http')

const server = http.createServer(function (req,res){
    res.writeHead(200);
    res.write('<h1>Hello Nodejs</h1>');
    res.end('<p>End</p>');

})

server.on('request', function (){
    console.log('요청 이벤트');
})

server.on('connection', function (){
    console.log('접속 이벤트');
})

//listen: 서버를 실행
server.listen(8000, function (){
    console.log('8000번 포트실행');
})