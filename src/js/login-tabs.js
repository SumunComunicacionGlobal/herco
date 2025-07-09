var log = document.getElementById("log");
var sign = document.getElementById("sign");

function openSignup() {
    document.getElementById("signup-tab").style.display = "block";
    document.getElementById("login-tab").style.display = "none";
    sign.classList.add("btn-active");
    log.classList.remove("btn-active");
    log.removeAttribute("disabled");
    sign.setAttribute("disabled", "disabled");
    document.getElementById("animation-sing").classList.add("animationA");
}

function openLogin() {
    document.getElementById("login-tab").style.display = "block";
    document.getElementById("signup-tab").style.display = "none";
    log.classList.add("btn-active");
    sign.classList.remove("btn-active");
    sign.removeAttribute("disabled");
    log.setAttribute("disabled", "disabled");
    document.getElementById("animation-log").classList.add("animationB");
}

function showTextInput() {
    var icon = document.getElementById("eye");
    if (icon.classList.contains('icon-eye')) {
        icon.classList.remove('icon-eye');
        icon.classList.add('icon-lock');
    } else {
        icon.classList.add('icon-eye');
    }
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}