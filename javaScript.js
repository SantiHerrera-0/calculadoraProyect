let numero1;
let numero2;
let operador;
const contenedor = document.querySelector(".contenedor");
const botones = document.querySelector(".botonera");
const botonesB = document.querySelector(".botoneraB")

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
            suma(numero1,numero2);
            break;
        case "-":
            resta(numero1,numero2);
            break;
        case "*":
            mult(numero1,numero2);
            break;
        case "/":
            div(numero1,numero2);
            break;
    }
}

const botonClear = document.createElement("button");
botonClear.classList.add("botonClear");
botonClear.style.display = "flex";
botonClear.style.flex = "1 1 38px";
botonClear.style.height = "auto";
botonClear.style.border = "solid green";
botonClear.style.background = "black";
botonClear.style.alignItems="center";
botonClear.style.justifyContent = "center";
botonClear.style.color = "white";
botonClear.textContent = "C";
botonesB.appendChild(botonClear);


const pantalla = document.querySelector(".pantalla");
pantalla.textContent = "1234678";

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

contenedor.addEventListener("click", (item)=>console.log(item.target.textContent));








