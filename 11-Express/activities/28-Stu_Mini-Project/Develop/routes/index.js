const express = require("express");
const miniApp = require("express").Router();
// Import our modular routers for /tips and /feedback
const tipsRouter = require("./tips");
const feedbackRouter = require("./feedback");
const diagnosticRouter = require("./diagnostics");
// TODO: import your diagnostics route

const app = express();

app.use("/tips", tipsRouter);
app.use("/feedback", feedbackRouter);
app.use("/diagnostic", diagnosticRouter);
// TODO: Initialize diagnostics route

module.exports = app;
