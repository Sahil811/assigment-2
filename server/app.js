const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: `${__dirname}/config.env` });

app.use(bodyParser.json());

app.use(express.json({ limit: "10kb" }));

app.use(cookieParser());

app.use("/api/v1/users", userRouter);

app.use(express.static("build"));
app.use("*", express.static(path.join(__dirname, "build", "index.html")));

module.exports = app;
