let numero1=0;
let numero2=0;
let operador="";
const contenedor = document.querySelector(".contenedor");
const botones = document.querySelector(".botonera");
const botonesB = document.querySelector(".botoneraB")
const pantalla = document.querySelector(".pantalla");

function suma(a,b){
    return a+b;
}

function resta(a,b){
    return a-b;
}

function mult(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function operar(numero1,numero2,operador){
    
    switch (operador){
        case "+":
            return suma(numero1,numero2);
            break;
        case "-":
            return resta(numero1,numero2);
            break;
        case "*":
            return mult(numero1,numero2);
            break;
        case "/":
            if(numero2 === 0){
                alert("No se puede dividir por cero")
                return 0;
                break;
            }else{
                return div(numero1,numero2);
                break;
            }
            
    }
}

for(let i=0; i<5; i++){
    const botonB = document.createElement("button");
    botonB.style.display = "flex";
    botonB.style.flex = "1 1 38px";
    botonB.style.height = "auto";
    botonB.style.border = "solid green";
    botonB.style.background = "black";
    botonB.style.alignItems="center";
    botonB.style.justifyContent = "center";
    botonB.style.color = "white";
    botonB.style.fontSize = "22px"
    switch (i){
        case 0:
            botonB.classList.add("botonClear");
            botonB.textContent = "C";
            botonesB.appendChild(botonB);
            break;
        case 1:
            botonB.classList.add("botonSuma");
            botonB.textContent = "+";
            botonesB.appendChild(botonB);
            break;
        case 2:
            botonB.classList.add("botonResta");
            botonB.textContent = "-";
            botonesB.appendChild(botonB);
            break;
        case 3:
            botonB.classList.add("botonMult");
            botonB.textContent = "*";
            botonesB.appendChild(botonB);
            break;
        case 4:
            botonB.classList.add("botonDiv");
            botonB.textContent = "/";
            botonesB.appendChild(botonB);
            break;
    }
}

for(let i=0; i<12 ; i++){
    const boton = document.createElement("button");
    boton.classList.add(`boton${i}`)
    boton.style.display = "flex";
    boton.style.flex = "1 1 60px";
    boton.style.height = "auto";
    boton.style.border = "solid green";
    boton.style.background = "black";
    boton.style.alignItems="center";
    boton.style.justifyContent = "center";
    boton.style.color = "white";
    if (i<10){
        boton.textContent = `${i}`;
    }
    else if(i === 10){
        boton.textContent = ".";
    }else if(i === 11){
        boton.textContent = "=";
    }
    botones.appendChild(boton);
}

function verificarBoton(botonPrecionado){    
    if (Number.isInteger(+botonPrecionado)){
        if(operador === ""){
            numero1 = numero1 + botonPrecionado;
            console.log(numero1);
        }else if(operador !== ""){
            numero2 = numero2 + botonPrecionado;
            console.log(numero2);
        }
    }else if (botonPrecionado === "+" || botonPrecionado === "-" || botonPrecionado === "*" || botonPrecionado === "/" || botonPrecionado === "="){
                operador = botonPrecionado;
                console.log(operador);    
        }
    }

contenedor.addEventListener("click", (item)=>{
    if(item.target !== pantalla){
       let resultado = numero1;
        verificarBoton(item.target.textContent);
        if (operador === "="){
            console.log(resultado);
        }
        if(numero2 !== 0){
            resultado = operar(+numero1,+numero2,operador);
            numero1 = resultado; 
            numero2 = 0;
            console.log(resultado);
        }
    }});









