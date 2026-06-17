const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    
    
    
    res.write('<h1>Hello World!</h1>');
    res.write('<p>This is my own NodeJs Server...</p>');
    
    res.end();
});


server.listen( 3000,() => {
    console.log(`Server Started Sucessfully`);
    console.log(`Open This link in Your Browser : http://localhost:${PORT}`);
});