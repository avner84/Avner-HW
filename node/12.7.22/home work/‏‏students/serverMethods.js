const fs = require("fs");
const path = require("path");
const viewsPath = path.join(__dirname + '/././views');

function getStusents() {
    const studentsList = fs.readFileSync(viewsPath + "/data/students.json", "utf-8");
    return studentsList;
}

function deleteStudent() {
    const studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);
    let studentRemove = studentsListObj.shift();
    let studentsListStr = JSON.stringify(studentsListObj);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
    return studentRemove;
}

async function setDataOfNewStudent(req) {
    let buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    let newStudent = Buffer.concat(buffers).toString();
    let newStudentObj =  JSON.parse(newStudent);
    return newStudentObj;
}

async function createStudent(req) {

    const buffers = [];
    for await (const chunk of req) {
        buffers.push(chunk);
    }
    const newStudent = Buffer.concat(buffers).toString();
    const newStudentObj =  JSON.parse(newStudent);


    // const newStudentObj1 = await setDataOfNewStudent(req)
    // console.log('newStudentObj1 :', newStudentObj1);
    

    const studentsList =  getStusents();

    const objStudents =  JSON.parse(studentsList);

    objStudents.push(newStudentObj);

    const studentsListStr = JSON.stringify(objStudents);
    fs.writeFileSync(viewsPath + "/data/students.json", studentsListStr);
}


async function checkId(req) {
    let newStudentObj = await setDataOfNewStudent(req)
    let id = newStudentObj.id;
    // console.log('id :', id);

    let studentsList = getStusents();
    let studentsListObj = JSON.parse(studentsList);


    let flag = true;

    studentsListObj.forEach(element => {
        if (element.id == id) {
            flag = false;
            return flag;
        }
    });
    return flag;
}


module.exports = { getStusents, deleteStudent, createStudent, checkId };