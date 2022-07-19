const afterLoginDiv = document.querySelector("#afterLogin");



export function showUI(user) {
    afterLoginDiv.innerHTML = `<h3>Hye ${user.Table[0].first_name} ${user.Table[0].last_name}, You are connected.</h3>`;
    afterLoginDiv.innerHTML+= `<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">User Name</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Role</th>
        <th scope="col">Password</th>
        <th scope="col">Options</th>
      </tr>
    </thead>
    <tbody id="tableId">
      <tr id="thisUserDetails">
        <th scope="row">${user.Table[0].id}</th>
        <td> ${user.Table[0].username}</td>
        <td>${user.Table[0].first_name}</td>
        <td>${user.Table[0].last_name}</td>
        <td>${user.Table[0].role}</td>
        <td>${user.Table[0].password}</td>
        <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can" idOfUser="${user.Table[0].id}" roleOfUser=${user.Table[0].role}></i></td>
      </tr>
    </tbody>
  </table>`;
    $("#keyboardDiv").fadeOut(500);
         
     $("#afterLogin").delay(500).fadeIn(800);
}

export function addMoreUsersToTable(users){

let htmlOfMoreUsers = "";

users.forEach(element => {
  htmlOfMoreUsers += ` <tr>
  <th scope="row">${element.id}</th>
  <td> ${element.username}</td>
  <td>${element.first_name}</td>
  <td>${element.last_name}</td>
  <td>${element.role}</td>
  <td>${element.password}</td>
  <td><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash-can" idOfUser="${element.id}" roleOfUser=${element.role}></i></td>
</tr>`
});

document.getElementById("tableId").innerHTML+= htmlOfMoreUsers;


}

export function WarningBeforeDeletion(){

  let txt  = "";
  if (confirm("Are you sure you want to delete the user account?")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
}