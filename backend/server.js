require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');

const app = express();

// connect database
connectDB().then(() => {
	sequelize.sync();
});

// CORS
app.use(cors());

// body parser
app.use(express.json());

// routes
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/summaries'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
