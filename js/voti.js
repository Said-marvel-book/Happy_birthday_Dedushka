var butvoti = document.getElementsByClassName("voti");
for(var i = 0; i < butvoti.length; i++){
    butvoti[i].addEventListener("click", voti);
}
function voti(){
    var login = document.getElementById("loginBox");
    var loginText = login.value;
    var password = document.getElementById("passwordBox");
    var passText = password.value;
    if(loginText == "Dedushka" && passText == "1207"){
        window.location.href = "main.html";
    }
    else{
        alert("Если вы не знаете пароля не пробуйте!")
        console.log(passText);
        console.log(loginText);
    }
}