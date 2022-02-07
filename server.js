// 1- require express
const express = require('express');
const path = require('path')
// 2- intialisation of my app
const app = express();
// 3- creation of the port 
const PORT = 4000; 
// 4- create the server
app.listen(PORT, (err) => 
err ? console.error(err) : console.log(`server is listening on port ${PORT}`))  ;
// 5- middlewares
const veriDate= (req, res, next) => {

    let hours = new Date().getHours() ;
    if (
       hours  %2 !== 0
    )
    {next () } else {res.send ('<h1 style="color: red;">we are closed, come back later</h1>')}
 }
 console.log (new Date().getHours())

 app.use(veriDate)
// 6- routing middlewares
app.get ('/', (req, res) => {
    res.sendfile('./Public/index.html')
})
app.get ('/about', (req, res) => {
    res.sendfile('./Public/about.html')
})
app.get ('/services', (req, res) => {
    res.sendfile('./Public/services.html')
})