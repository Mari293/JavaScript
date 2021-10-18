const nameUser = document.querySelector("#name");
const txtMessage = document.querySelector("#captureMessage");
const keyLetter = document.querySelector("#letter");
const characterCounter = document.querySelector("#characters");
const btnSend = document.querySelector("#send");
const message = document.querySelector("#message");

const maxCharacters = 200;

nameUser.addEventListener('keyup', userNameLetter);
btnSend.addEventListener('click',showMessage);
txtMessage.addEventListener('keyup', numberCharacters);
txtMessage.addEventListener('keydown', function(keyboardEvent) {
    const code   = keyboardEvent.keyCode;
    if(code==8){
        if(parseInt(characterCounter.textContent)===200){
            characterCounter.textContent = parseInt(characterCounter.textContent)
        }
        else{
            characterCounter.textContent = parseInt(characterCounter.textContent) + 1;
        }
    } 
});



function userNameLetter(){  
    firstLetter = nameUser.value.charAt(0);
    capitalLetter = firstLetter.toUpperCase();
    keyLetter.textContent = capitalLetter;
}

function numberCharacters(){
    characters = txtMessage.value.length;
    characterCounter.textContent = maxCharacters-characters;
    if (characterCounter.textContent<= 50){
        characterCounter.style.color="red";
    }  
    if (characters===200){
        message.textContent = "No puede escribir más de 200 carácteres";
    }
}

function showMessage(){
    message.textContent = `${nameUser.value}: ${txtMessage.value}`;
}