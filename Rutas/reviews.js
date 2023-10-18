const express = require('express')
const router = express.Router()

//endpoints: url de opinines
//Rutas de recursos de opiniones
router.get('/', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todas las opiniones`
        })
})
//obtener el opiniones por id
router.get('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar la opinión ${ request.params.id }`
        })
})
//crear opiniones
router.post('/', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a crear la opinión`
        })
})
//actualizar opiniones por id
router.put('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a actualizar la opinión ${ request.params.id }`
        })
})
//eliminar opiniones por id
router.delete('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a eliminar la opnión ${ request.params.id }`
        })
})

//exportar(commonjs) route
module.exports = router