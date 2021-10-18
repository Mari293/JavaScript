const nameUser = document.querySelector("#name");
const dateBirthday = document.querySelector("#date");
const btn_Calculate = document.querySelector("#calculate");
const message = document.querySelector(("#message"));

btn_Calculate.addEventListener("click", calculateAge);

function calculateAge(){
    console.log(dateBirthday.value)

    let birthday = dateBirthday.value.split('-');

    let current_day = new Date();

    let year = current_day.getFullYear();

    let month = current_day.getMonth();

    let day = current_day.getDate();

    let resultYear = year - birthday[0];
    let resultMonth = (month+1) - birthday[1];
    let resultDay = day - birthday[2];
    
    
    if (resultYear>=18 && resultMonth>=0  && resultDay>=0){
        message.textContent = `${nameUser.value} SI puede votar`;
    }
    else if (resultYear>=18 && (resultMonth<0 || resultMonth>0) && (resultDay<0 || resultDay>0)){
        message.textContent = `${nameUser.value} SI puede votar`;
    }
    else if (resultYear<18 && resultMonth>=0 && resultDay>=0){
        message.textContent = `${nameUser.value} NO puede votar`;
    }
    else if (resultYear==18 && resultMonth<0 && resultDay>0){
        message.textContent = `${nameUser.value} NO puede votar`;
    }
    else if (resultYear==18 && resultMonth>=0 && resultDay<0){
        message.textContent = `${nameUser.value} NO puede votar`;
    } 
    else{
        message.textContent = `${nameUser.value} NO puede votar`;
    }
}