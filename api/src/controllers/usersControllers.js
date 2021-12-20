const axios = require("axios");
const { Op } = require("sequelize");
const { User } = require("../db");

// Query a la base de datos en el cual traera solo los que contengan lo que pasamos por el parametro nombre
const createUser = async (user) => { 
    const resultado = await User.create(user)
}




module.exports = {
    createUser
}