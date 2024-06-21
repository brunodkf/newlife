const swiper = new Swiper('.professores__lista', {
    // Optional parameters
    slidesPerView: 4,
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
    }
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
