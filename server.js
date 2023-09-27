require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND

const corsOptions = {
  origin: 'https://rest-api-frontend-dot.netlify.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello NODE API");
});

app.get("/blog", (req, res) => {
  res.send("Hello Blog, My name is Kamogelo");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Node API app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
