const express = require("express");
const router = require("express").Router();

// for get requests that match '/' or index or index.html
router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
