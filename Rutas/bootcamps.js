const express = require('express')
const router = express.Router()

//endpoints: url de bootcamps
//obtener todos los bootcamp
router.get('/', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los bootcamps`
        })
})

//obtener bootcamp por id
router.get('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a mostrar todos los bootcamps por id ${ request.params.id }`
        })
})

//crear bootcamp
router.post('/', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se va a crear los bootcamps`
        })
})

//actualizar bootcamp por id
router.put('/:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a actualizar el bootcamp ${ request.params.id }`
        })
})

//eliminar bootcamp por id
router.delete('/f:id', (request, response) => {
    response
        .status(200)
        .json({
            "sucess" : true,
            "msg" : `Aquí se van a eliminar el bootcamp ${ request.params.id }`
        })
})

//exportar(commonjs) route
module.exports = router
