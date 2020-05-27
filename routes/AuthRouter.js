// CRIAR UMA ROTA POST PARA O ENDPOINT /LOGIN DIRECIONAR A REQ. PARA O AUTH CONTROLLER LOGIN
const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");

router.post("/login", AuthController.login);

module.exports = router;
