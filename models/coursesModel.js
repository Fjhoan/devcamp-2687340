const mongoose = require('mongoose')
//Definir el esquema plano de todos los cursos
const courseSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: [true, "nombre requerido"],
        maxlength: [30, "Titulo demasiado largo"],
        minlength: [10, "Titulo demasiado corto"]
    },
    description: {
        type: String,
        required: [true, "descripción requerida"],
        minlength: [10, "Descripción demasiado corta"]
    },
    weeks: {
        type: Number,
        required: [true, "dirección requerida"],
        max: [9, "El numero de semanas es demasido alto"]
    },
    enroll_cost: {
        type: Number,
        required: [true,"Este campo es requerido"]
    },
    minimum_skill: {
        type: [String],
        enum:[
            "Beginner",
            "Intermediate",
            "Advanced",
            "Expert"
        ]
    }
})

//Exportar el modelo
const courseModel = mongoose.model("courses", courseSchema)

module.exports = courseModel