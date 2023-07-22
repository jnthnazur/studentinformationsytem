const getStudents = "SELECT * FROM tblstudinfo";
const getStrand = "SELECT * FROM tblstrand";
const getLevel = "SELECT * FROM tbllevel";
const getSection = "SELECT * FROM tblsection";

const addStudent =
  "INSERT INTO tblstudinfo(studnumber,lastname,firstname,middlename,otherinfo_id,strand_id,section_id,level_id,sem_id,acady_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
const addStrand = "INSERT INTO tblstrand(strand_name) VALUES ($1)";
const addLevel = "INSERT INTO tbllevel(level_name) VALUES ($1)";
const addSection = "INSERT INTO tblsection(section_name) VALUES ($1)";

module.exports = {
  getStudents,
  getStrand,
  getLevel,
  getSection,
  addStudent,
  addStrand,
  addLevel,
  addSection,
};
