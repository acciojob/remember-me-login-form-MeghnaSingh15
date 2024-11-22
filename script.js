//your JS code here. If required.
let usernameInput = document.getElementById("username");
let ex_user = document.getElementById("existing");
ex_user.addEventListener("click", () => {
	alert(`Logged in as ${username}`);
});
let rememberMeCheckbox = document.getElementById("checkbox");
let sub_btn = document.getElementById("submit");
 sub_btn.addEventListener("click", (event) => {
                event.preventDefault(); 
                if (rememberMeCheckbox.checked) {
                    // Save details in localStorage
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    // Remove details from localStorage
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }

                alert(`Logged in as ${username}`);
