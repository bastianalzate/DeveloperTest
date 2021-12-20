const { Router } = require("express");
const router = Router();
const { 
    createUser,
    getUser,
    getAllUsers
} = require("../controllers/usersControllers");

router.post("/create", async (req, res) => {
    const { codeClient, name, username, phone, cellphone, email, position, password} = req.body;
    const resultado = await createUser({ codeClient, name, username, phone, cellphone, email, position, password})
    res.send("usuario creado")
})

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const resultado = await getUser({email, password})

    res.json(resultado)
})

router.get("/getAll", async (req, res) => {
    const resultado = await getAllUsers()

    res.json(resultado)
})



module.exports = router;