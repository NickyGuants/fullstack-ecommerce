const sql = require('mssql');
const config = require('../config/db');

// GET all products in the database
exports.getProducts = async(req, res) => {
    try {
        let query = `select * from products.vehicles`;
        let pool = await sql.connect(config);
        let results = await pool.request().query(query);
        return res.status(201).send(results.recordset);
        
    } catch (error) {
        console.log(error);
    }
}

//Get a single product from the database using an id
exports.getSingleProduct = async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        let query = `select * from products.vehicles where id=${id}`
        let pool = await sql.connect(config);
        let results = await pool.request().query(query);
        return res.status(201).send(results.recordset);
    } catch (error) {
        console.log(error);
    }
}

