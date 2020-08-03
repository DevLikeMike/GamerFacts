const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect to Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to the contact api",
  });
});

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/games", require("./routes/games"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
