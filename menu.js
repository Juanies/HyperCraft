const boton = document.getElementById('boton');
const elementos = document.getElementById('elementos');

function mostrar() {
    elementos.style.top = '0vh';
}

function ocultar() {
    elementos.style.top = '-70vh';
}


let a = true
boton.addEventListener('click', function() {
    if(a == true){
        mostrar();
        a = false;
    }else{
        ocultar();
        a = true;
    }
    elementos.classList.toggle('animacion')

})

let width = window.innerWidth;
let height = window.innerHeight;

window.addEventListener('resize', () => {



    if ( width > 768 ) {
        mostrar();
    }else{
        ocultar();
    }

})

window.addEventListener('load', () => {
    if ( width > 768 ) {
        mostrar();
    }
})