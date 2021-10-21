const principal_Container = document.querySelector("main")
const change_Color = document.querySelector("#container-color");
const btn_Generate = document.querySelector("#generate");
btn_Generate.addEventListener("click",color);
function generateLetter(){
	let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	let numero = Math.floor(Math.random()*15);
	return letras[numero];
}
	
function color(){
	let coolor = "";
	for(let i=0;i<6;i++){
		coolor = coolor + generateLetter() ;
	}
	let color = "#" + coolor;
    change_Color.style.backgroundColor = color;
}

change_Color.style.border = "5px solid #000";
change_Color.style.display = "flex";
change_Color.style.alignItems= "center";
change_Color.style.justifyContent= "center";
change_Color.style.height= "350px";
change_Color.style.width = "40%";
change_Color.style.border = "5px solid #000";
change_Color.style.fontFamily = "sans-serif";

principal_Container.style.display = "flex";
principal_Container.style.flexDirection = "column";
principal_Container.style.width = "100%";
principal_Container.style.alignItems = "center";
principal_Container.style.height= "100vh";
principal_Container.style.justifyContent= "space-evenly";

btn_Generate.style.borderRadius = "40px";
btn_Generate.style.height= "70px";
btn_Generate.style.backgroundColor = "#90e0ef";
btn_Generate.style.border = "4px solid #90e0ef";
btn_Generate.style.fontSize = "85%";
