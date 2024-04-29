document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;
    //  add your sign up logic here, like sending data to a server
    console.log("Sign up:", username, email, password)
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    //  add your login logic here, like sending data to a server and validating credentials
    console.log("Login:", username, password);
});