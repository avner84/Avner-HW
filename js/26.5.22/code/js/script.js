let code = 0;

let codeVerification = "";

function enterCode() {

    code = document.querySelector("#codeInput").value.toString();
    document.querySelector("#codeInput").remove();
    document.querySelector("button").remove();


}

function checkCode() {

    document.querySelectorAll(".digit")[0].style.color = "red";
}