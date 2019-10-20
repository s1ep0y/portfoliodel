const express = require('express')
const router = new express.Router()
const Project = require('../models/project')

router.get('/projectlist', async (req, res) =>{
    try{
        const projects = await Project.find({}).sort('-createdAt')
        res.render('projectlist', {projects});
    }catch(e){
        res.status(500).send()
    }
})

router.get('/', async (req, res) => {
    const latestProjects = await Project.find({}).sort('-createdAt')
    console.log(latestProjects)
    latestProjects.length = 2
    res.render('index', {latestProjects});
})

router.get('/admin', async (req, res) =>{
    res.render('admin')
})


module.exports = router