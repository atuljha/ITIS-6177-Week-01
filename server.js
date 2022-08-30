const express = require("express")

const app = express();

let port = 3006;
let host = 'localhost';



//start the server
app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
});
