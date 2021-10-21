const principalContainer = document.querySelector("main");
const title = document.querySelector("header");
const userContainer = document.querySelector("#container-name")
const informationContainer = document.querySelector("#container-information")
const cardContainer = document.querySelector("#container-card")
const nameUser = document.querySelector("#name");
const message = document.querySelector("#message");
const btn_Generate = document.querySelector("#generate")

nameUser.addEventListener('keydown', characterValidation)

function characterValidation (keyboardEvent) {
    const code   = keyboardEvent.keyCode;
    if(code==55 || code==187 || code==189){
        message.style.color = "red";
        message.textContent = "No puede contener los siguientes carácter '*' , '+' , '/' , '-' , '_'";
    } 
    else {
        message.style.color = "green";
        message.textContent = "Usuario Válido";
    }
};

title.style.color = "#ae2012";
title.style.fontSize = "150%";
title.style.textAlign = "center";
title.style.fontFamily = "sans-serif";

nameUser.style.border = "transparent";
nameUser.style.textAlign = "center";

message.style.fontWeight = "bold";

principalContainer.style.height = "75vh";
principalContainer.style.margin = "1%";
principalContainer.style.fontFamily = "sans-serif";
principalContainer.style.display = "flex";

userContainer.style.border = "1px solid #000";
userContainer.style.borderRadius = "8px";
userContainer.style.height = "45px";
userContainer.style.display = "flex";
userContainer.style.alignItems= "center";
userContainer.style.alignItems= "center";
userContainer.style.width = "35%";
userContainer.style.justifyContent = "space-evenly";

btn_Generate.style.height = "50px";
btn_Generate.style.fontWeight = "800";
btn_Generate.style.borderRadius= "8px";

informationContainer.style.border = "1px solid #000";
informationContainer.style.width = "50%";
informationContainer.style.display = "flex";
informationContainer.style.flexDirection = "column";
informationContainer.style.justifyContent = "center";
informationContainer.style.alignItems = "center";

cardContainer.style.border = "1px solid #000";
cardContainer.style.width = "50%";