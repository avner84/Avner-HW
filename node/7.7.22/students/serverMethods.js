const fs = require("fs");

function getStusents() {
    const studentsList = fs.readFileSync("./views/data/students.json", "utf-8");
    return studentsList;
}

function deleteStudent() {
    const studentsList = getStusents();
    var studentsListObj = JSON.parse(studentsList);
    var studentRemove = studentsListObj.shift();
    var studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync("./views/data/students.json", studentsListStr);
    return studentRemove;
}

module.exports = { getStusents, deleteStudent };