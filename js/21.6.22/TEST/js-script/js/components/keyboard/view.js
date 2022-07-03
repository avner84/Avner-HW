const digits = document.querySelectorAll(".digit");
var audio = new Audio('../../../sound/click.mp3');

export function showKeyboardPanel() {

    $("form").hide();
    //  keyBoardPanel.show();
    $("#keyboardDiv").fadeIn(2000);
    //  console.log("hi");
}

export function emphasizeDigit(digitId) {

    $(`#${digitId}`)[0].style.color = "red";
    audio.play();

}


export function clearDigit() {


    digits.forEach((dgt) => {
        dgt.style.color = "black";
    });

}