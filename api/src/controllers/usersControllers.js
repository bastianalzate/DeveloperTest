const axios = require("axios");
const { Op } = require("sequelize");
const { User } = require("../db");

// Query a la base de datos en el cual traera solo los que contengan lo que pasamos por el parametro nombre
const createUser = async (user) => { 
    const resultado = await User.create(user)
}

const getUser = async (user) => { 
    const resultado = await User.findOne({
        where:{
            email: user.email, 
            password: user.password
        }
    })
    return resultado;
}


const getAllUsers = async () => { 
    const resultado = await User.findAll()
    return resultado;
}


module.exports = {
    createUser,
    getUser,
    getAllUsers
}