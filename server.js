//Dependencias del proyecto
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')

//dependencia de conexión:
const conectarDB = require("./config/db")

//Dependencias de rutas
const bootcapmsRoutes = require('./routes/bootcampRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const userRoutes = require('./routes/UserRoutes')

//configurar dotenv
dotenv.config({
    path: "./config/.env"
})

//conectar a bd
conectarDB()

//crear objeto de app express
const app = express()

//Habilitar express para recibir body en formato json
app.use(express.json())

//Establecer rutas del proyecto
app.use('/api/v1/bootcamps', bootcapmsRoutes)
app.use('/api/v1/courses', coursesRoutes)
app.use('/api/v1/auth', userRoutes)

//crear el servidor de aplicación express
app.listen( process.env.puerto, 
    () => {
    console.log(`Servidor express ejecutando ${process.env.puerto}`.bgWhite.cyan.underline)
    }
)