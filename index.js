require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3004;
const cors =require('cors');

app.use(cors())
app.use(express.json())

app.use('*', (req, res) => {
   res.status(404).json({msg: 'GOT YOU! this route is not create yet! 😘'})
})

app.listen(port, () => console.log(`server is running on port ${port} `));
