const express = require ("express")

const router = express.Router()

const Contact = require('../models/Contact')

router.get('/test',(req,res)=>{
    res.send("hello word")
})


router.post('/', async (req,res)=>{
    try {
        const{name,email,phone}=req.body
        const newContact = new Contact({name, email, phone})
        await newContact.save()
        res.status(200).send({msg:"contact added successfully...", newContact})
    } catch (error) {
        res.status(400).send({msg:"Can not add contact!!!", error})
    }
})

router.get('/', async (req,res)=>{
    try {
        const listContacts = await Contact.find()
        res.status(200).send({msg:"this is the list of all contacts...", listContacts})
    } catch (error) {
        res.status(400).send({msg:"Can not get all contacts!!!", error})
    }
})

router.get('/:id', async (req,res)=>{
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg:"I get the contact..", contactToGet})
    } catch (error) {
        res.status(400).send({msg:"Can not get the contact with this id!!!", error})
    }
})

router.put('/:_id' , async (req,res)=>{
    try {
        const {_id}= req.params
        const result = await Contact.updateOne({_id},{$set: {...req.body}})
        res.status(200).send({msg:"Contact updated..."})
    } catch (error) {
        res.status(400).send({msg:"Can not get the contact with this id!!!", error})
    }
})

router.delete('/:_id', async(req,res)=>{
    try {
        const {_id}= req.params
        await Contact.findOneAndDelete({_id})
        res.status(200).send({msg:"Contact deleted..."})
    } catch (error) {
        res.status(400).send({msg:"Can not delete the contact with this id!!!", error})
    }
})



module.exports = router
