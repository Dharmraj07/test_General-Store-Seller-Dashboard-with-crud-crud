const {Sequelize,INTEGER,STRING,FLOAT}=  require('sequelize');


const sequelize=new Sequelize('test26m','root','#@Dharm007',{
    dialect:'mysql',
    host:'localhost'
});

const Shop=sequelize.define('shop',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:Sequelize.STRING,
    description:Sequelize.STRING,
    price:Sequelize.FLOAT,
    quantity:Sequelize.INTEGER
});

sequelize.sync();
module.exports=Shop;