const express = require('express');
const sql = require('mssql');
const config = require('./config/db');
const products = require('./routes/products');
const users = require('./routes/users')


const app = express();

app.use(express.json());

sql.connect(config).then(pool => {
    if (pool.connected) {
        console.log("Connected to the db")
    }
}).catch(e => console.log(e));

app.use('/api/products', products);
app.use('/api/users', users)


app.listen(5001);