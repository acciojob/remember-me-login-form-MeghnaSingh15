let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let rememberMeCheckbox = document.getElementById("checkbox");
let sub_btn = document.getElementById("submit");

sub_btn.addEventListener("click", (event) => {
    event.preventDefault(); 
    let username = usernameInput.value;
    let password = passwordInput.value;
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
});

let ex_user = document.getElementById("existing");
if (ex_user) {
    ex_user.addEventListener("click", () => {
        let savedUsername = localStorage.getItem("username");
        if (savedUsername) {
            alert(`Logged in as ${savedUsername}`);
        }
    });
}