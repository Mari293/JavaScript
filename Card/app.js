const nameUser = document.querySelector("#name");
const message = document.querySelector("#message");

nameUser.addEventListener('keydown', characterValidation)

function characterValidation (keyboardEvent) {
    const code   = keyboardEvent.keyCode;
    if(code==55 || code==187 || code==189 ){
        message.style.color = "red";
        
        message.textContent = "No puede contener los siguientes carácter '*' , '+' , '/' , '-' , '_'";
    } 
    else {
        message.style.color = "green";
        message.textContent = "Usuario Válido";
    }
};

message.style.fontWeight= "bold";
