/*
1). Run npm init 
2). Run npm i express 
3). Create .gitignore file
4). Paste the following code below
5). Start the server by running the command "npm start"
*/

import express from 'express';

const app = express();
const port = 3000

app.get('/',(req, res) => {
    res.send('Hello World!')
})

app.listen(port, ()=> {
    console.log(`Hello World server is listening on port ${port}`)
})
