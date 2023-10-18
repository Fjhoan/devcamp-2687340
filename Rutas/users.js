const express = require('express')
const router = express.Router()

//endpoints: url de users

//Rutas de recursos de usuario
router.get('/', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los usuarios`
        })
})
//obtener el usuario por id
router.get('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los usuarios ${ request.params.id }`
        })
})
//crear usuario
router.post('/', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a crear los usuario`
        })
})
//actualizar usuario por id
router.put('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a actualizar de el usuario ${ request.params.id }`
        })
})
//eliminar usuario por id
router.delete('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a eliminar el usuario ${ request.params.id }`
        })
})

//exportar(commonjs) route
module.exports = router