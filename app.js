//instantiate Github class
const github = new Github();
const ui = new UI();

//search input

const searchUser = document.querySelector("#searchUser");

//search event listener

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert
        ui.showAlert("User Not Found!!", "alert alert-danger");
      } else {
        //show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear prof
    ui.cleardata();
  }
});
