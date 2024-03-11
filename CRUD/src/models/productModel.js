//models/productmodel.js
//creaciion modelo producto

import {dbConfig} from '../config/db.Config'
import mysql from 'mysql2/promise';
import { getProducts } from './productModel';
import { query } from 'express';

//este crea la conexion con mysql y trae los parametros
const pool = mysql.createPool(dbConfig);

//obtener todos los productos 
// get alll
export const getProducts=async()=>{
    const [rows] = await pool.query('select * from products');
    return rows;
};

//obtener un solo producto por su id
//getById

export const getProductById=async(productId)=>{
    const [rows]=await pool-query('SELECT * FROM products WHERE id=?',[productId]);
    return row[0];
} 

//agg un producto nuevo 
//create

export  const createProduct=async(productData)=>{
    const {name,price,description}=productData;
    const[result]=await pool.query('INSERT INTO products(name,price,description) values(?,?,?)' [name,price,description]);
     
} 