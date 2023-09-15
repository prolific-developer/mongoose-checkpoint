const async = require('express-async-handler')
const personlist = require('../model/schema')


const getPerson = async(async(req,res)=>{
    
    const person = await personlist.find()

    res.status(200).json(person)
    
    

});
const postPerson = async(async(req, res)=>{
    if(!req.body.name, !req.body.age && !req.body.favouritefoods){
        res.status(400)
        throw new Error('please add a content')

    }

    const person = await personlist.create({
        name:req.body.name,
        age:req.body.age,
        favouritefoods:req.body.favouritefoods,
        

    
    })
    res.status(200).json(person)
   
});
const updatePerson = async(async( req ,res)=>{
    const person = await personlist.findById(req.params.id)
 
    
    if(!person){
        res.status(400)
        throw new Error('person not found')
    }

        const updatedPerson = await personlist.findOneAndUpdate({ _id :("65021837fbff55004fff6137") }, { $set: { age: 20 } })
    res.status(200).json(updatedPerson)
    
        
        
});
const deletePerson = async(async( req ,res)=>{
    const person = await personlist.findByIdAndRemove(req.params.id)

    
    if(!person){
        res.status(400)
        throw new Error('person not found')
    }
    await personlist.remove({_id:("650215656567aa807adface3")})
    res.status(200).json({id:req.params.id})
});
module.exports = {
    getPerson,postPerson,updatePerson, deletePerson
}
