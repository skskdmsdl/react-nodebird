const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.method === 'GET') {
        if (req.url === '/api/posts') {

        }
    } else if (req.method === 'POST') {
        if (req.url === '/api/post') {

        }
    } else if (req.method === 'DELETE') {
        if (req.url === '/api/post') {
            
        }
    }
    res.write('<h1>Hello node1</h1>');
    res.write('<h2>Hello node2</h2>'); 
    res.end('<h3>Hello node3</h3>');
});
server.listen(3000, () => {
    console.log('서버 실행 중');
});