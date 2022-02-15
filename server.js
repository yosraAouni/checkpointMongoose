const express = require ('express');

const app = express() ;


const  cors = require('cors');
app.use(cors());

require ('dotenv').config();

const connectDB = require('./config/connectDB')
connectDB()

app.use(express.json())

app.use('/api/contact', require("./routes/contact"))
const PORT = process.env.PORT


app.listen(PORT,error => {
    error ? console.error(`Failed to connect server!!! ${error}`)
    :
    console.log (`server is running in ${PORT}`);
})
