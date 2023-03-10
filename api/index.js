const express = require('express');
const app = express();
const dotenv = require('dotenv')
var cors = require('cors');
const path = require('path')

dotenv.config()
app.use(cors());

app.get('/api/getList', (req,res) => {
  const list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

// const port = process.env.API_PORT || 4000;
// app.listen(port,  () => console.log(`LISTENING ON PORT ${port}`))

module.exports = app;