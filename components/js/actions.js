let cantidad = document.getElementById("cantidad")
let btnRestar = document.getElementById("restar")
let btnSumar = document.getElementById("sumar")
let price = document.getElementById("precio")

let precio = parseFloat(price.innerText)
let precio2 = precio
let cant = 1
cantidad.innerText = cant

function restar(){
    if(cant > 1){
        btnSumar.innerText = "add"
        btnRestar.innerText = "remove"
        btnSumar.style.color = "black"
        btnRestar.style.color = "black"
        cant = cant - 1
        cantidad.innerText = cant
        precio2 = precio2 - precio
        price.innerText = precio2.toString()
    } else{
        if(btnRestar.innerText != "block"){
            btnRestar.innerText = "block"
            btnRestar.style.color = "gray"
            alert('En serio vas a comprar 0 unidades?')
        }
    }
}

function sumar(){
    if(cant < 15){
        btnSumar.innerText = "add"
        btnRestar.innerText = "remove"
        btnSumar.style.color = "black"
        btnRestar.style.color = "black"
        cant = cant + 1
        cantidad.innerText = cant
        precio2 = precio2 + precio
        price.innerText = precio2.toString()
    } else {
        if(btnSumar.innerText != "block"){
            btnSumar.innerText = "block"
            btnSumar.style.color = "gray"
            alert('No te parecen suficientes 15 unidades?')
        }
    }
}