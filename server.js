const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser'); 
const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//เรียกใช้ API 

const { service , adduser } = require('./API/api');
app.get('/service', service);
app.post('/adduser', adduser);

app.listen(3000 , () => {
    console.log('connect on port 3000');
});