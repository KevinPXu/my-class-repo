const express = require("express");
const feedback = require("./feedbackRouter");
const tips = require("./tipsRouter");
const router = express.Router();

router.use("/feedback", feedback);
router.use("/tips", tips);

module.exports = router