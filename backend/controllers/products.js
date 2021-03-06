const sql = require('mssql');
const config = require('../config/db');

// GET all products in the database
exports.getProducts = async(req, res) => {
    try {
        let query = `select * from products.vehicles`;
        let pool = await sql.connect(config);
        let results = await pool.request().query(query);
        return res.status(201).json(results.recordset);
        
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
        if (results.recordset.length ===0) {
            return res.status(404).send("No product with that id exists");
        }
        return res.status(201).json(results.recordset[0]);
    } catch (error) {
        console.log(error);
    }
}

