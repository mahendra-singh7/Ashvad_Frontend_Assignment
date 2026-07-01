function changeTheme() {

    let body = document.body;
    let button = document.getElementById("themeBtn");

    if (body.classList.contains("dark")) {

        body.classList.remove("dark");
        body.classList.add("light");

        button.innerText = "Dark Theme";

    } 
    else {

        body.classList.remove("light");
        body.classList.add("dark");

        button.innerText = "Light Theme";

    }

}