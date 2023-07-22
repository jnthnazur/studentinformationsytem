const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
const addStudents = (req, res) => {
  pool.query(queries.addStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
module.exports = {
  getStudents,
};
