const mongoose = require('mongoose')
const validator = require('validator')

const Project = mongoose.model('Project',{
    name: {
        trim: true,
        type: String,
        required: true
    },
    about: {
        trim: true,
        type: String,
        required: true
    },
    used: {
        trim: true,
        type: String,
        required: true
    },
    link: {
        trim: true,
        type: String,
        required: true,
        validate(value){
            if(!validator.isURL(value)){
                throw new Error('URL not valid')
            }
        }
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

module.exports = Project;