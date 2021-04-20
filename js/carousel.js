window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1, //antes aquí estaba el 4 porque glider.js inicia a una escala de escritorio
        slidesToScroll: 1, //antes aquí estaba el 4 porque glider.js inicia a una escala de escritorio
        // draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel-izquierda',
          next: '.carousel-derecha'
        }, 

        responsive: [

            {
                breakpoint: 480,
                settings: {

                    slidesToShow: 3, //Cuantos slides se van a mostrar. Para acceder a esto hay que entrar al sitio oficial de glider.js
                    slidesToScroll: 3, //Cuantas veces se va a scrollear. Para accerder a esto hay que entrar al sirio oficial de glider.js
                }
            },

            {
              breakpoint: 768,
              settings: {
              
                slidesToShow: 4,
                slidesToScroll: 4,
              
              }
            }, 
            {
                breakpoint: 1024,
              settings: {

                slidesToShow: 5,
                slidesToScroll: 5,
            
              }
            }
          ]
    });
});