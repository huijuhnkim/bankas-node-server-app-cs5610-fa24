// const express = require("express");

import express from 'express';
import HelloRoute from './Hello.js';
import Lab5 from "./Lab5/index.js";

const app = express();

HelloRoute(app)
Lab5(app)

app.listen("4000");
