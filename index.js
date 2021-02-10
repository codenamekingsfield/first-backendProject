// const http = require('http');
const express = require('express')

const handleAllRequest = (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url === '/signup') {
        responseObject.send('<h1> sign in page</h1>');
        
    } else if (url === '/login') {
        responseObject.send('<h2>404 page not working </h2>');
        
    } else if (url === '/contact') {
        responseObject.send('contact page');
        
    } else if (url === '/home') {
        responseObject.send('homepage');
        
     }else if (url === '/signin') {
        responseObject.send('sign in page');
        
     }
}


const handleLoginGet = (req, res) => {
    res.send('this is login get');
}
const handleLoginPut = (req, res) => {
    res.send('this is login put');
}
const handleLoginPost = (req, res) => {
    res.send('this is login post');
}
const handleLoginDelete = (req, res) => {
    res.send('this is login delete');
}


// const server = http.createServer(handleAllRequest);



const server = express()
// server.use(handleAllRequest)


server.get('/login', handleLoginGet)
server.put('/login', handleLoginPut)
server.delete('/login', handleLoginDelete)
server.post('/login',handleLoginPost)










server.listen(3000, "127.0.0.1", () => {
    console.log('server running')
});