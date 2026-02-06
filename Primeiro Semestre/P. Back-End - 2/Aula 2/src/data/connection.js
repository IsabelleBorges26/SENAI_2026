const mysql = require("mysql2/promise");

const con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "testee",
    port: 3306
});

module.exports = con;