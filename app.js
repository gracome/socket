const express = require('express');
const app = express();
const port = 1000;
const cors = require('cors')
const dotenv= require('dotenv')
const io = require('socket.io')


app.use(express.json());
app.use(cors({origin: '*'}))


app.listen(port, () => {
    console.log(`App is running on port ${port}.`);
  
  
    
  })