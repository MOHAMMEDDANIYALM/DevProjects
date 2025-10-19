const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectdb = require('./config/db');

require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);


dotenv.config();
connectdb();  // must be after dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', require('./routes/authroutes'));
app.use('/api/progress', require('./routes/progressroutes'));

// test route
app.get('/', (req, res) => res.send('backend running'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
