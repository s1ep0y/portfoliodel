const express = require('express')
const router = new express.Router()
const Project = require('../models/project')

router.post('/projects', async (req, res) =>{
    const project = new Project(req.body)
    try{
        await project.save()
        res.status(201).send(project)
    } catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/projects', async (req, res) =>{
    try{
        const projects = await Project.find({}).sort('-createdAt')
        res.send(projects);
    }catch(e){
        res.status(500).send()
    }
})

router.get('/projects/:id', async (req, res) =>{
    const _id = req.params.id

    try{
        const project = await Project.findById(_id)
        if(!project){
            return res.status(404).send
        }
        res.send(project)
    }catch(e){
        res.status(500).send()
    }
})

router.put('/projects/:id', async (req, res) =>{
    const updates = Object.keys(req.body)
    console.log(updates)
    const allowedUpdate = ['name', 'link', 'about', 'used']
    const isValidOperation = updates.every((update)=> allowedUpdate.includes(update) )
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates'})
    }

    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators: true})
        if(!project){
            return res.status(404).send()
        }
        res.send(project)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/projects/:id', async (req, res) =>{
    const _id = req.params.id
    try {
        const project = await Project.findByIdAndDelete(_id)
        if(!project){
            res.status(404).send()
        }
        res.send(project)
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router