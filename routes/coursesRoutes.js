const express = require('express')
const courseModel = require('../models/coursesModel')
const mongoose = require('mongoose')

//Definir ruteador
const router = express.Router()

//Definir rutas de curso con el ruteador
//Esta ruta va a traer rodos los curso
router.get('/', async (req, res) => {
    //Seleccionar todos los curso en la collection
    try {
        const courses = await courseModel.find()
        if (courses.length === 0) {
            res.
                status(400).json({
                    sucess: false,
                    msg: "no hay curso en la colección"
                })
        } else {
            res.status(200).json({
                success: true,
                data: courses
            })
        }
    } catch (error) {
        res.status(error.status).json({
            sucess: false,
            msg: error.message
        })
    }
})

//selecionar curso por id
router.get('/:id', async (req, res) => {
    try {
        //Recoger el parametro id de la url
        coursesid = req.params.id
        if (!mongoose.Types.ObjectId.isValid(coursesid)) {
            res.status(400).json({
                sucess: true,
                msg: `el id no es valido`
            })
        } else {
            //seleccionar el curso por id
            selected_courses = await courseModel.findById(coursesid)
            if (selected_courses) {
                //se encontro el curso
                res.status(200).json({
                    sucess: true,
                    results: selected_courses
                })
            } else {
                //no se encontro el curso
                res.status(400).json({
                    sucess: false,
                    msg: `no se encontro el curso ${coursesid}`
                })
            }
            //enviar la respuesta
        }
    } catch (error) {
        res.status(error.status).json({
            success: false,
            msg: error.message
        })
    }
})

//Crear curso
router.post('/', async (req, res) => {
    try {
        const newCourses = await courseModel.create(req.body)
        res.status(201).json({
            sucess: true,
            results: newCourses
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            msg: error.message
        })
    }

})

//Ruta de actualizar
router.put('/:id', async (req, res) => {
    try {
        //Recoger el parametro id de la url
        coursesid = req.params.id
        if (!mongoose.Types.ObjectId.isValid(coursesid)) {
            res.status(400).json({
                sucess: true,
                msg: `el id no es valido`
            })
        } else {
            //seleccionar el curso por id
            selected_courses = await courseModel.findByIdAndUpdate(coursesid, req.body, { new: true })
            if (selected_courses) {
                //se encontro el curso
                res.status(200).json({
                    sucess: true,
                    results: selected_courses
                })
            } else {
                //no se encontro el curso
                res.status(400).json({
                    sucess: false,
                    msg: `no se encontro el curso ${coursesid}`
                })
            }
            //enviar la respuesta
        }
    } catch (error) {
        res.status(error.status).json({
            success: false,
            msg: error.message
        })
    }
})

//Ruta de eliminar
router.delete('/:id', async (req, res) => {
    try {
        //Recoger el parametro id de la url
        coursesid = req.params.id
        if (!mongoose.Types.ObjectId.isValid(coursesid)) {
            res.status(400).json({
                sucess: true,
                msg: `el id no es valido`
            })
        } else {
            //seleccionar el curso por id
            selected_courses = await courseModel.findByIdAndDelete(coursesid, req.body, { new: true })
            if (selected_courses) {
                //se encontro el curso
                res.status(200).json({
                    sucess: true,
                    results: selected_courses
                })
            } else {
                //no se encontro el curso
                res.status(400).json({
                    sucess: false,
                    msg: `no se encontro el curso ${coursesid}`
                })
            }
            //enviar la respuesta
        }
    } catch (error) {
        res.status(error.status).json({
            success: false,
            msg: error.message
        })
    }
})

//exportar ruteador
module.exports = router