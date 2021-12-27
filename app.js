/**
 * server tampilan 
 * import express
 */
 const express = require("express");


 //object 
 const app = express();
 
 
 //midleware atau perantara
 const router = require("./routes/api");
 app.use(router);
 
 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 
 
 //definisi port
 app.listen(4000, () => {
     console.log("Server running at http://localhost:4000");
 });