const express = require('express');
const app = express()

//  homepage route
app.get('/home', (request, response) => response.sendFile(__dirname + `/views/index.html`))
//  about page route
app.get('/about', (request, response) => response.sendFile(__dirname + `/views/about.html`))
//  works page route
app.get('/works', (request, response) => response.sendFile(__dirname + `/views/works.html`))

app.listen(3000)