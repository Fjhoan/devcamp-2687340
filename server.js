const express = require('express')

//crear el objeto principal de api
const app = express()

//url de prueba
app.get('/prueba', function(request, response){
    response.send("hola")
})

app.get('/prueba2', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true
        })
})

//Rutas del recurso bootcamps
//obtener todos los bootcamp
app.get('/api/v1/devcamp/bootcamps', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los bootcamps`
        })
})

//obtener el bootcamp por id
app.get('/api/v1/devcamp/bootcamps/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los bootcamps ${ request.params.id }`
        })
})
//crear bootcamp
app.post('/api/v1/devcamp/bootcamps', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a crear los bootcamps`
        })
})
//actualizar bootcamp por id
app.put('/api/v1/devcamp/bootcamps/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a actualizar el bootcamp ${ request.params.id }`
        })
})
//eliminar bootcamp por id
app.delete('/api/v1/devcamp/bootcamps/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a eliminar el bootcamp ${ request.params.id }`
        })
})
//Rutas de recursos de usuario
app.get('/api/v1/devcamp/usuarios', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los usuarios`
        })
})
//obtener el usuario por id
app.get('/api/v1/devcamp/usuarios/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los usuarios ${ request.params.id }`
        })
})
//crear usuario
app.post('/api/v1/devcamp/usuarios', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a crear los usuario`
        })
})
//actualizar usuario por id
app.put('/api/v1/devcamp/usuarios/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a actualizar de el usuario ${ request.params.id }`
        })
})
//eliminar usuario por id
app.delete('/api/v1/devcamp/usuarios/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a eliminar el usuario ${ request.params.id }`
        })
})
//Rutas de recursos de cursos
app.get('/api/v1/devcamp/cursos', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los cursos`
        })
})
//obtener el cursos por id
app.get('/api/v1/devcamp/cursos/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar el curso ${ request.params.id }`
        })
})
//crear cursos
app.post('/api/v1/devcamp/cursos', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a crear el curso`
        })
})
//actualizar cursos por id
app.put('/api/v1/devcamp/cursos/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a actualizar el curso ${ request.params.id }`
        })
})
//eliminar cursos por id
app.delete('/api/v1/devcamp/cursos/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a eliminar el curso ${ request.params.id }`
        })
})
//Rutas de recursos de cursos
app.get('/api/v1/devcamp/opiniones', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todas las opiniones`
        })
})
//obtener el cursos por id
app.get('/api/v1/devcamp/opiniones/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar la opinión ${ request.params.id }`
        })
})
//crear cursos
app.post('/api/v1/devcamp/opiniones', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a crear la opinión`
        })
})
//actualizar cursos por id
app.put('/api/v1/devcamp/opiniones/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a actualizar la opinión ${ request.params.id }`
        })
})
//eliminar cursos por id
app.delete('/api/v1/devcamp/opiniones/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a eliminar la opnión ${ request.params.id }`
        })
})

//crear el servidor de aplicacion:
app.listen(5000, 
        console.log('Servidor ejecutando en puerto ' + 5000 ))

