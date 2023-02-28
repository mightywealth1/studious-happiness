require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const allRouter = require("./routes/allRouter");

mongoose.set("strictQuery", true);

app.use(cors());
app.use(express.json());
app.use("/api/v1", allRouter);

//url localhost:3000/api/v1/tasks
app.use((req, res) => {
  res.send("route not found");
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
