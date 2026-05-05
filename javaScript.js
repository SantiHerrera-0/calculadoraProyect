let numero1="";
let numero2="";
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

//contenedor.addEventListener("click", (item)=>console.log(+item.target.textContent));
const pantalla = document.querySelector(".pantalla");

contenedor.addEventListener("click", (item)=>{
    item.preventDefault;
    numero1 = numero1 + item.target.textContent;
    pantalla.textContent = numero1;});









