const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStrand = (req, res) => {
  pool.query(queries.getStrand, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getLevel = (req, res) => {
  pool.query(queries.getLevel, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getSection = (req, res) => {
  pool.query(queries.getSection, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const {
    studnumber,
    lastname,
    firstname,
    middlename,
    otherinfo_id,
    strand_id,
    section_id,
    level_id,
    sem_id,
    acady_id,
  } = req.body;

  pool.query(
    queries.addStudent,
    [
      studnumber,
      lastname,
      firstname,
      middlename,
      otherinfo_id,
      strand_id,
      section_id,
      level_id,
      sem_id,
      acady_id,
    ],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("added");
    }
  );
};
const addStrand = (req, res) => {
  const { strand_name } = req.body;
  pool.query(queries.addStrand, [strand_name], (error, results) => {
    if (error) throw error;
    res.status(201).send("added");
  });
};
const addSection = (req, res) => {
  const { section_name } = req.body;
  pool.query(queries.addSection, [section_name], (error, results) => {
    if (error) throw error;
    res.status(201).send("added");
  });
};
const addLevel = (req, res) => {
  const { level_name } = req.body;
  pool.query(queries.addLevel, [level_name], (error, results) => {
    if (error) throw error;
    res.status(201).send("added");
  });
};
module.exports = {
  getStudents,
  getStrand,
  getLevel,
  getSection,
  addLevel,
  addStudent,
  addSection,
  addStrand,
};
