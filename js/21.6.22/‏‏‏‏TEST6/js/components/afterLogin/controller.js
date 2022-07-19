import * as viewAfterLogin from "./view.js";
import * as modelAfterLogin from "./model.js";
let currentUser = null;

export async function welcome(obj) {
    console.log("you are login");
    // console.log(obj);
    currentUser = obj.Table[0];

    viewAfterLogin.showUI(obj);
    let roleCurrentUser = currentUser.role;

    if (roleCurrentUser < 3) {
        let list = await modelAfterLogin.getMoreUsers(roleCurrentUser);
        let listOfMoreUsers = list.Table;

        viewAfterLogin.addMoreUsersToTable(listOfMoreUsers);

        const deleteBtnsArray = document.querySelectorAll(".fa-trash-can")
        deleteBtnsArray.forEach(el => el.addEventListener('click', event => {
            let roleOfUser =event.target.getAttribute("roleOfUser");
            let idOfUser = event.target.getAttribute("idOfUser")

            if (roleOfUser == 1) {
                alert("The administrator account could not be deleted")
            }
            else {
                viewAfterLogin.WarningBeforeDeletion(idOfUser);
            }

        }));

    }

}