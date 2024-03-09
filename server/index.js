import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (!process.env.ORIGIN) {
  throw new Error("ORIGIN is not defined");
}

const corsOptions = {
  origin: process.env.ORIGIN,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/api/", (req, res) => {
  res.send({ data: "Test 123" });
});

const port = process.env.PORT;

if (!port) {
  throw new Error("PORT is not defined");
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
