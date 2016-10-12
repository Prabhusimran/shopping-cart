/**
 * Created by rishabhkhanna on 12/10/16.
 */
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set('views' , __dirname + "/views");
app.set('view engine' , 'hbs');

app.use('/',express.static(__dirname + "/public"));

const products = require('./products');


app.use('/products',(req , res)=>{
    products.getproducts((rows)=>{
        console.log(rows);
        res.render('products' , {products : rows});
    })
});

app.post('/additems' , (req , res)=>{
    console.log(req.body.product , req.body.price);
    products.addproducts(req.body.product , req.body.price ,()=>{
        res.redirect('/products');
    });
});

app.post('/cart' ,(req , res)=>{
    products.getproducts((rows)=>{
        console.log(rows);
        res.render('cart' , {products : rows});
    })
});

app.listen('3333' , ()=>{

    });