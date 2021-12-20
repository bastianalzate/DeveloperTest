const express = require('express');
const router = express();
const user = require("./usersRoute");

// Rutas principales
router.use("/user", user)




module.exports = router;
