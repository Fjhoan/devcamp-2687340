const express = require('express')
const router = express.Router()
const UserModel = require('../models/UserModel')

//Registrar usuarios 
router.post('/register', async function (req, res) {
    try {
        const user = await UserModel.create(req.body)
        return res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            msg: error.message
        })
    }
})

//Logear usuarios 
router.post('/login', async function (req, res) {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            res.status(401).json({
                success: false,
                msg: "Usuario no hallado"
            })
        } else {
            const isMatch = await user.compararPassword(password)
            if (!isMatch) {
                res.status(401).json({
                    success: false,
                    msg: "Contraseña invalida"
                })
            } else {
                res.status(200).json({
                    success: true,
                    msg: "Usuario logueado exitosamente"
                })
            }
        }
    } catch (error) {
        response.status(500).json({
            success: false,
            msg: error.message
        })
    }
})

module.exports = router