const { where } = require('sequelize');
const Shop=require('../models/shop');
const { param } = require('../routes/shopRoutes');
exports.addProduct=async(req,res)=>{
    try {
        const response=await Shop.create(req.body);
        res.send(response);
    } catch (error) {
        console.error(error);
        res.send("there is error is ")
    }
}

exports.allProduct=async(req,res)=>{
    try {
        const response=await Shop.findAll();
        res.send(response);
    } catch (error) {
        console.error(error);
    }
}

exports.updateById=async(req,res)=>{
    try {
        const i=req.params.id;
        
        const product=await Shop.findByPk(i);
       // res.send(product);
         const update=await product.update(req.body);
         res.send(update);
       // console.log(product);
        
    } catch (error) {
        console.error(error);
    }
}

exports.getProductById=async (req,res)=>{
    try {
        const id=req.params.id;
        const product=await Shop.findByPk(id);
        res.send(product);
    } catch (error) {
        console.error(error);
        
    }
}

exports.deleteById=async (req,res)=>{
    try {
        const id=req.params.Id;
        const product=await Shop.findByPk(id);
        
        if(!product){
            res.send("Product is not found");
            return;
        }
        await product.destroy();
        res.send("product is Deleted successfully");

    } catch (error) {
        console.error(error);
    }
}