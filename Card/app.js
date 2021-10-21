const principalContainer = document.querySelector("main");
const title = document.querySelector("header");
const userContainer = document.querySelector("#container-name");
const informationContainer = document.querySelector("#container-information");
const cardContainer = document.querySelector("#container-card");
const card = document.querySelector("#card");
const nameCard = document.querySelector("#name-card");
const messageWelcome = document.querySelector("#welcome");
const nameUser = document.querySelector("#name");
const message = document.querySelector("#message");
const btn_Generate = document.querySelector("#generate");

nameUser.addEventListener('keydown', characterValidation)
btn_Generate.addEventListener('focus', createCard)

function characterValidation (keyboardEvent) {
    const code   = keyboardEvent.keyCode;
    btn_Generate.style.backgroundColor = "#ccc";
    if(code==55 || code==187 || code==189){
        message.style.color = "#d00000";
        message.textContent = "No puede contener los siguientes carácter '*' , '+' , '/' , '-' , '_'";
    } 
    else {
        message.style.color = "#25a244";
        message.textContent = "Usuario Válido";
    }
};

function createCard(){
    btn_Generate.style.backgroundColor = "#0077b6";
    nameCard.textContent = `${nameUser.value}`;
    messageWelcome.textContent = "Bienvenido al sistema";
    card.style.height = "90px";
    card.style.width = "85%";
    card.style.border = "1px solid #000";
    card.style.boxShadow = "0px 0px 6px 1px red";
    card.style.borderRadius = "2%";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.alignItems = "center";
    card.style.justifyContent = "center";
}

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
btn_Generate.style.backgroundColor = "#ccc";

informationContainer.style.border = "1px solid #000";
informationContainer.style.width = "50%";
informationContainer.style.display = "flex";
informationContainer.style.flexDirection = "column";
informationContainer.style.justifyContent = "center";
informationContainer.style.alignItems = "center";

cardContainer.style.border = "1px solid #000";
cardContainer.style.width = "50%";
cardContainer.style.display = "flex";
cardContainer.style.justifyContent = "center";
cardContainer.style.alignItems = "center";