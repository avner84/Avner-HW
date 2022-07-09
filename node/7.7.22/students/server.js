const http = require("http");
const fs = require("fs");
const serverMethods = require("./serverMethods")
const PORT = 3000;
const server = http.createServer((req, res) => {

    const url = req.url;

    switch (url) {
        case "/class":
            const classPage = fs.readFileSync("./views/class/class.html");
            res.end(classPage);
            break;
        case "/class.css":
            const classCss = fs.readFileSync("./views/class/class.css");
            res.end(classCss);
            break;
        case "/class.js":
            const homeJs = fs.readFileSync("./views/class/class.js");
            res.end(homeJs);
            break;
        case "/delete":
            const loginPage = fs.readFileSync("./views/delete/delete.html");
            res.end(loginPage);
            break;
        case "/delete.css":
            const loginCss = fs.readFileSync("./views/delete/delete.css");
            res.end(loginCss);
            break;
        case "/delete.js":
            const loginJS = fs.readFileSync("./views/delete/delete.js");
            res.end(loginJS);
            break;
        case "/removeStudent":
            var studentRemoveObj = serverMethods.deleteStudent();
            var studentRemoveStr = JSON.stringify(studentRemoveObj)
            res.end(studentRemoveStr);
            break;
        case "/showStudenslist":
            const studentsList = serverMethods.getStusents();
            res.end(studentsList);
            break;
    }
});

server.listen(PORT);