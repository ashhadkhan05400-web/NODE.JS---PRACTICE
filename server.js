const resend = (res , message) => {
return res.end(message)
}

const http = require('http');
const server  =  http.createServer((req, res) => {
    const endpoint = req.url;

if(endpoint == "/"){
        resend(res, "Welcome to shop");
}
else if (endpoint == "/dashboard"){
    resend(res , "Welcome to ur dashboard")
}
else if (endpoint == "/users"){
    resend(res , "Showing users profile...")
}
else{
    res.writeHead(404)
    resend(res , "PAGE NOT FOUND!!")
}


})


server.listen(5000 , "127.0.0.1" , () => {
    console.log("Server is listening on port 5500")
})