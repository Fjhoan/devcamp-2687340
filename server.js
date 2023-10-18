const express = require('express')

//rutas del bootcamps
const bootcampRoutes = require('./Rutas/bootcamps')
const userRoutes = require('./Rutas/users')
const reviewsRoutes = require('./Rutas/reviews')

//crear el objeto principal 
//de api
const app = express()

//vinvular al objeto app
app.use('/api/v1/devcamp/bootcamps', bootcampRoutes)
app.use('/api/v1/devcamp/user', userRoutes)
app.use('/api/v1/devcamp/review', reviewsRoutes)

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

//crear el servidor de aplicacion:
app.listen(5000, 
        console.log('Servidor ejecutando en puerto ' + 5000 ))

