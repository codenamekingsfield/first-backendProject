const http = require('http');


const handleAllRequest = (requestObject, responseObject) => {
    const url = requestObject.url;
    responseObject.setHeader('content-type', 'text/html');
    if (url === '/signup') {
        responseObject.write('<h1> signup page</h1>');
        responseObject.end();
    } else if (url === '/login') {
        responseObject.write('<h2>404 page not working </h2>');
        responseObject.end();
    } else if (url === '/contact') {
        responseObject.write('contact page');
        responseObject.end()
    } else if (url === '/home') {
        responseObject.write('homepage');
        responseObject.end();
     }else if (url === '/signin') {
        responseObject.write('sign in page');
        responseObject.end();
     }
}


const server = http.createServer(handleAllRequest);
server.listen(3000, "127.0.0.1", () => {
    console.log('server running')
});