let form = document.getElementById("myForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(name == ""){
        message.innerHTML = "Please enter your name";
        return;
    }

    if(email == ""){
        message.innerHTML = "Please enter your email";
        return;
    }

    if(password == ""){
        message.innerHTML = "Please enter your password";
        return;
    }

    if(password.length < 6){
        message.innerHTML = "Password must be at least 6 characters";
        return;
    }

    message.innerHTML = "Form Submitted Successfully!";
});