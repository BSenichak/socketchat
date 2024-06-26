document
    ?.querySelector(".register")
    ?.addEventListener("submit", function (event) {
        event.preventDefault();
        let { login, password, repeat_password } = event.target;
        console.log(login, password, repeat_password);
        if (password.value !== repeat_password.value) {
            alertify.error("Passwords is not match");
            return;
        }
        let user = {
            login: login.value,
            password: password.value,
        };
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/register");
        xhr.onload = () => {
            alertify.success("We are stupid beatch");
        };
        xhr.send(JSON.stringify(user));
    });

document?.querySelector(".login")?.addEventListener("submit", function (event) {
    event.preventDefault();
    let { login, password } = event.target;
    console.log(login, password);
    let user = {
        login: login.value,
        password: password.value,
    };
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/login");
    xhr.onload = () => {
        if (xhr.status == 200) {
            let token = xhr.response;
            document.cookie = `token="${token}"`;
            alert(token)
            location.assign("/");
        } else {
            alertify.error(xhr.response);
        }
    };
    xhr.send(JSON.stringify(user));
});
