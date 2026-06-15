/*====================================
      FILTRO DE PRODUCTOS
====================================*/

const botones = document.querySelectorAll(".filtros button");
const tarjetas = document.querySelectorAll(".card");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        // Quitar botón activo
        botones.forEach(btn => btn.classList.remove("activo"));

        // Agregar botón activo
        boton.classList.add("activo");

        const filtro = boton.dataset.filter;

        tarjetas.forEach((card) => {

            if (filtro === "all") {

                card.style.display = "block";

            } else if (card.classList.contains(filtro)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/*====================================
      ANIMACIÓN AL HACER SCROLL
====================================*/

const elementos = document.querySelectorAll("section");

function mostrarElementos() {

    const altoPantalla = window.innerHeight;

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < altoPantalla - 120) {

            elemento.classList.add("mostrar");

        }

    });

}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);


/*====================================
      BOTÓN VOLVER ARRIBA
====================================*/

const botonTop = document.createElement("button");

botonTop.innerHTML = "⬆";

botonTop.id = "btnTop";

document.body.appendChild(botonTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        botonTop.style.display = "block";

    } else {

        botonTop.style.display = "none";

    }

});

botonTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*====================================
      EFECTO EN TARJETAS
====================================*/

tarjetas.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


/*====================================
      MENÚ MÓVIL (preparado)
====================================*/

const menu = document.querySelector("nav ul");

const menuBtn = document.createElement("div");

menuBtn.innerHTML = "☰";

menuBtn.id = "menuBtn";

document.querySelector("header").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("mostrarMenu");

});