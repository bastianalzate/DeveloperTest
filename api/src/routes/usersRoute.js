const { Router } = require("express");
const router = Router();
const { 
    createUser
} = require("../controllers/usersControllers");

router.post("/create", async (req, res) => {
    const { codeClient, name, username, phone, cellphone, email, position, password} = req.body;


    const resultado = await createUser({ codeClient, name, username, phone, cellphone, email, position, password})
    res.send("usuario creado")
})

router.get("/get", async (req, res) => {
    res.send("hola")
})



module.exports = router;