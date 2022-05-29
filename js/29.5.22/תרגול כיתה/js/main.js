var userJSON = localStorage.user;
const user = userJSON ? JSON.parse(userJSON) : {};

$.button.addEventListener("click", function() {
    //VERIFY IN SERVER 
    var email = $.email.value;
    var pass = $.pass.value;
    if (userFromDB.email === email && userFromDB.pass === pass) {

        user.email = email;
        user.pass = pass;
        userJSON = JSON.stringify(user);
        localStorage.user = userJSON;
        $.main.innerHTML = `Welcome, ${userFromDB.fName}`
    } else {
        alert("Wrong Credentials");
    }
});
if (user.email && user.pass) {
    //VERIFY IN SERVER
    if (user.email === userFromDB.email && user.pass === userFromDB.pass) {
        $.main.innerHTML = `Welcome, ${userFromDB.fName}`;
    }
}