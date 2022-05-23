const users = [
    { fullName: "Yossi Cohen", userName: "yos55", password: "1234" },
    { fullName: "Batya Levi", userName: "Barbi", password: "98765" },
    { fullName: "Moshe Israeli", userName: "momo", password: "1111" },
];

function check() {

    var uName = document.getElementById("userName").value;
    var pass = document.getElementById("password").value;


    for (let i = 0; i < users.length; i++) {

        if (users[i].userName == uName && users[i].password == pass) {
            document.querySelector("main").innerHTML = `<h1>Welcome ${users[i].fullName}</h1>`;
            break;

        } else if (i == users.length - 1) {

            alert("There is an error entering one of the details");
        }



    }
};