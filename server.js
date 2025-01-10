const express = require('express')
const router = express.Router();
const app = express();

const cors = require('cors');
app.use(cors());

const db = require('./db');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // will store in req.body
app.use(express.json()); // Add this to parse JSON request bodies


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log('GET request received');
    res.send('Hey how can I help you');
  });
  
  const adminRoutes = require('./routes/adminRoutes');
  app.use('/',adminRoutes);
//   const admin = require('./models/admin'); 

const eventCoordinator = require('./routes/eventCoordinator');
app.use('/admin',adminRoutes);
// const admin = require('./models/admin'); 
const event = require('./models/event'); 
const team = require('./models/team'); 
const user = require('./models/user'); 


const PORT = 5000;
app.listen(PORT);
