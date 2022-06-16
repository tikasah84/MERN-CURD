import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();
dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASS;
Connection(username, password);
const PORT = 8000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
