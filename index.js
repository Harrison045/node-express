const express = require('express');
const parser = require ('body-parser')
const path = require('path')

server.use(express.static(path.join(__dirname, "public")))

// const servicePage = (req, res) => {
//     const servicePath= path.join(__dirname,"public", "service.html")

// res.sendfile(servicePath)

// }


// const homePage = (req, res) => {
//     const homePath= path.join(__dirname,"public", "index.html")

// res.sendfile(homePath)

// }


// const aboutPage = (req, res) => {
//     const aboutPath= path.join(__dirname,"public", "about.html")

// res.sendfile(aboutPath)

// }


// const contactPage = (req, res) => {
//     const contactPath= path.join(__dirname,"public", "contact.html")

// res.sendfile(contactPath)

// }

const loginPage = (req , res) => {
    console.log(req.body);
    

    res.send('i logged in yay!!! ')
}


// const server = express();
// server.get('/contact',aboutPage);
// server.get('/about',aboutPage);
// server.post('/services',servicePage);
// server.get('/',homePage);
server.use(parser.urlencoded({extended:true}))
server.post('/login', loginPage )
server.listen(3000, 'localhost', () => {
    console.log("server is in actioon")
});