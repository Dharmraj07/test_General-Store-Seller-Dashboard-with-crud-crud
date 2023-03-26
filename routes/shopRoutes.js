const express= require('express');
const { addProduct, allProduct, updateById, getProductById, deleteById } = require('../controllers/shopController');
const router=express.Router();


router.post('/add',addProduct);
 router.get('/',allProduct);
 router.get('/find/:id',getProductById);
 router.delete('/delete/:Id',deleteById);
 router.put('/update/:id',updateById)

module.exports=router;