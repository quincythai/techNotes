const express = require("express");
const router = require("express").Router();
const path = require("path");
const usersController = require("../controllers/usersController");

router
  .route("/")
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
