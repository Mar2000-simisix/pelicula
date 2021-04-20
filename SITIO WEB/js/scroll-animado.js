let scroll__animado = document.querySelectorAll(".scroll__animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < scroll__animado.length; i++ ) {
        let alturaAnimado =  scroll__animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            scroll__animado[i].style.opacity = 1;
            scroll__animado[i].classList.add("mostrarArriba");
        } 
    }
}


window.addEventListener('scroll', mostrarScroll);