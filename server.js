const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// DB Connexion
const db = require("./db");

// Middlewares
app.use(cors());
app.use(express.json());

// Route Middlewares
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
