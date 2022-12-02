/*
1). Run npm init 
2). Run npm i express 
3). Create .gitignore file
4). Paste the following code below
5). Start the server by running the command "npm start"
*/

import express from 'express'; //Express is library which help in making server
import cors from 'cors';

const app = express(); //Initialize the express library 
const port = 3000 // Gave port a number where you can access it

app.use(cors())

//When a server recieves a get request 
app.get('/home',(req, res) => { //A request handler when a request is made. 
    res.send('I am home page!') //At this point only one request could be handled
})

app.get('/profile', (req, res)=> {
    res.send("I am profile page")
})

app.get('/weather', (req, res)=>{
    res.send({
        "weather": "Cool",
        "temperature": "23",
        "city": "Karachi" 
    })
})


app.listen(port, ()=> { //Run the app on the port number 
    console.log(`Hello World server is listening on port ${port}`)
})
