const mysql = require('mysql')

var getconnection  =  ()=>{
    return mysql.createConnection({
        host: 'localhost',
        user: 'shoper',
        password: 'beyblade',
        database: 'shoppingcart'
    });
};

module.exports = {

    getproducts: (cb)=>{
        var connection = getconnection();
        query = 'select * from products';
        connection.query(query , (err , rows , fields)=>{
            if(err) throw err;

            cb(rows);

        })
    },

    addproducts: (product , price , cb)=>{
        var connection = getconnection();
        query = 'insert into products(product , price) values( "'+ product +'" , "'+ price +'" );';
        connection.query(query , (err , rows , fields)=>{
            if(err) throw err;
            cb();
        })
    }

};