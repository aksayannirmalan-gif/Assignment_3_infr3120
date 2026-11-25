let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connects router to model
let Item = require('../models/item');

//create/add

//gets info
router.get('/add',async(req,res,next)=>{
    try{
        res.render('Items/add',{
            title:'Add Title'
        })
    }
    catch(err){
        console.log(err);
        res.render('Items/list',{
            error:'error on the server'
        })

    }
})


//posts info
router.post('/add',async(req,res,next)=>{
    try{
        let newItem = Item({
            "item":req.body.item,
            "location":req.body.location,
            "price":req.body.price

        });
        Item.create(newItem).then(()=>{
            res.redirect('/')
        });
            
    }
    catch(err){
        console.log(err);
        res.render('Items/list',{
            error:'error on the server'
        })

    }
})

//updates info
router.get('/edit/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const editItem = await Item.findById(id)
        res.render('Items/edit',{
            title:'Edit Products',
            Item: editItem
        })
    }
    catch(err){
        console.log(err);
        next(err);

    }
})

//Posts updated info
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let updatedItem = Item({
            "_id":id,
            "item":req.body.item,
            "location":req.body.location,
            "price":req.body.price
        })
        Item.findByIdAndUpdate(id,updatedItem).then(()=>{
            res.redirect('/')
        })
    }
    catch(err){
        console.error(err);
        res.render('Items/list',{
            error:'error on the server'
        })
    }
})

// edit/:id is used to edit the contents of the database

//deletes info
router.get('/delete/:id',async(req,res,next)=>{})

/*get and post operations are needed to post information 
on the database and get that same information from the database*/


//read
router.get('/',async(req,res,next) => {
    try{
        const Itemlist = await Item.find();
        res.render('Items/list',{
            title: 'Items',
            itemlist: Itemlist
            // javascript is case sensitive
            //both variables cantbe the same
        })
    }
    catch(err){
        console.log(err);
        res.render('Items/list',{
            error:'error on the server'
        })

    }

})

//update




//delete

module.exports = router;