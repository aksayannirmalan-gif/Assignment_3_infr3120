let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connects router to model
let Item = require('../models/item');

//create


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