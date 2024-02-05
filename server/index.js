import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const host = process.env.HOST || "http://localhost:3000";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const corsOptions = {
  origin: host,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/api/", (req, res) => {
  res.send({ data: "Hello from Express!" });
});

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
