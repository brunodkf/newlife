const swiper = new Swiper('.professores__lista', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    // freeMode: true,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
});






const contadorContainer = document.querySelector('[data-target="contador"]');
const contadorNumeros = document.querySelectorAll('.professores__numero');

const ativarContador = () => {
    contadorNumeros.forEach((e) => {
        const numMax = parseInt(e.textContent)
        function increment(i, max) {
            if (i > max) return;
            setTimeout(function () {
                e.innerText = i;
                increment(i + 1, max);
            }, 10)
        }
        increment(0, numMax);
    })
}


const observer = new IntersectionObserver(e => {
    if (e[0].isIntersecting) {
        ativarContador();;
    }
}, {
    threshold: 0
})

observer.observe(contadorContainer)
