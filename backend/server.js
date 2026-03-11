require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, sequelize } = require('./config/db');

const app = express();

// conectar base de datos
connectDB().then(() => {
  sequelize.sync();
});

// middlewares
app.use(cors());
app.use(express.json());

// rutas
app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/summaries'));

// ruta de prueba
app.get("/", (req, res) => {
  res.send("API running");
});
app.get("/api/test", (req, res) => {
  res.json({ message: "API works" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});