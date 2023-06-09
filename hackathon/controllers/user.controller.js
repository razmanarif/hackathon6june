const router = require('express').Router()

const User = require("../models/user.model")
const Lists =require("../models/list.model")

router.get("/", async (req,res) =>{
    try{
        const lists = await Lists.find()
        res.render("index", {lists})
    }catch (e){
        console.log(e)
    }
})

router.post("/new", async (req, res)=>{
    try{
        
    }catch{

    }
})

module.exports = router