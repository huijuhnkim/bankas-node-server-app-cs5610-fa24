// const express = require("express");

import express from 'express';
import HelloRoute from './Hello.js';
import Lab5 from "./Lab5/index.js";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

HelloRoute(app)
Lab5(app)

app.listen(process.env.PORT || "4000");
