// MEDIA QUERYS
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})


//HEADER
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>500);
})


// BIENVENIDA AL SITIO WEB
let nombre = prompt("Distrito 4\nIngrese su nombre:");
    alert ("Bienvenido " + nombre);


//agregando productos interactuando con html
function agregarProducto (producto,precio) {
    alert ('Reservaste ' + producto + '\nPrecio: $' + precio);
}

//SELECCION DE PRODUCTO A COMPRAR
let stock = prompt ('Productos:\n1- Pioneer CDJ 3000 Nexus 2\n2- Pioneer DJM 900 Nexus 2\n3- Pioneer XDJ RX3\n4- Parlante "DAS"\n5- Grave "DAS"\n6- Cabezal móvil 7r\n7- Stormer RGB\n8- CABINA 3000\n9- CABINA 3000 2\n10- CABINA NXS 2\n11- COMBO X2\n12- COMBO X4\n13- COMBO SUB\n14- COMBO SUB X4');
let producto1 = 0;
let producto2 = 0;
let producto3 = 0;
let producto4 = 0;
let producto5 = 0;
let producto6 = 0;
let producto7 = 0;
let producto8 = 0;
let producto9 = 0;
let producto10 = 0;
let producto11 = 0;
let producto12 = 0;
let producto13 = 0;
let producto14 = 0;

function sumaPrecioTotal () {
    let precioTotal = producto1 + producto2 + producto3 + producto4 + producto5 + producto6 + producto7 + producto8 + producto9 + producto10 + producto11 + producto12 + producto13 + producto14;
    return precioTotal;
}

//COMPRA
while (stock != 'f') {
    switch (stock) {
        case '1': 
            producto1 = 30000;
            alert('Reservaste Pioneer CDJ 3000 Nxs 2');
            break;
        case '2': 
            producto2 = 20000;
            alert('Reservaste Pioneer DJM 900 Nxs 2');
            break;
        case '3': 
            producto3 = 20000;
            alert('Reservaste Pioneer XDJ RX3');
            break;
        case '4': 
            producto4 = 20000;
            alert('Reservaste Parlante DAS');
            break;
        case '5': 
            producto5 = 20000;
            alert('Reservaste Grave DAS');
            break;
        case '6': 
            producto6 = 15000;
            alert('Reservaste Cabezal móvil 7r');
            break;
        case '7': 
            producto7 = 8000;
            alert('Reservaste Stormer RGB');
            break;
        case '8': 
            producto8 = 45000;
            alert('Reservaste CABINA 3000');
            break;
        case '9': 
            producto9 = 40000;
            alert('Reservaste CABINA 3000 2');
            break;
        case '10': 
            producto10 = 35000;
            alert('Reservaste CABINA NXS 2');
            break;
        case '11': 
            producto11 = 60000;
            alert('Reservaste COMBO X2');
            break;
        case '12': 
            producto12 = 100000;
            alert('Reservaste COMBO X4');
            break;
        case '13': 
            producto13 = 150000;
            alert('Reservaste COMBO SUB');
            break;
        case '14': 
            producto14 = 100000;
            alert('Reservaste COMBO SUB X4');
            break;
    }   
    stock = prompt('¿Desea sumar otro producto más? \nNuestro stock es el siguiente\n1- Pioneer CDJ 3000 Nexus 2\n2- Pioneer DJM 900 Nexus 2\n3- Pioneer XDJ RX3\n4- Parlante "DAS"\n5- Grave "DAS"\n6- Cabezal móvil 7r\n7- Stormer RGB\n8- CABINA 3000\n9- CABINA 3000 2\n10- CABINA NXS 2\n11- COMBO X2\n12- COMBO X4\n13- COMBO SUB\n14- COMBO SUB X4\nSelecciona el número que deseas adquirir\nf-Finalizar elección y continuar con la compra');
}

//precio total
const precioTotal = sumaPrecioTotal();

//finalizar compra 
if (precioTotal == 0 ) {
    alert ('Gracias, lo esperamos pronto!');
}
    else if (precioTotal != 0) {
        alert ('El total de los productos elegidos es de: $' + precioTotal);
        let finalizarCompra = prompt ('¿Desea confirmar su compra de $'+precioTotal+'?\n1-Para confirmar\n2-Para cancelar');
        if (finalizarCompra == '1'){
            alert ('Felicitaciones, su reserva fue confirmada.');
        } else if (finalizarCompra == '2'){
            alert ('Gracias, lo esperamos pronto!');
        }
    }