// menu mobile
const menu = document.querySelector('.header');
const btnMobile = document.querySelector('[data-button-menu]');

btnMobile.addEventListener('click', () => {
    menu.classList.toggle('active');

    const someBarra = () => {
        if (window.scrollY >= 500) {
            menu.classList.remove('active');
            document.querySelector('#checkbox-menu').checked = false;
        }
    }

    window.addEventListener('scroll', () => {
        someBarra();
    });
})



const swiper = new Swiper('.professores__lista', {

    slidesPerView: 3,
    spaceBetween: 30,

    direction: 'horizontal',
    loop: true,


    pagination: {
        el: '.swiper-pagination',
    },


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



// Animação dos números

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




// imc
const formulario = document.querySelector('.calculadora__form');
const valores = document.querySelectorAll('.calc__campo');
const resultado = document.querySelector('.calc__resultado');


formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let peso = valores[0].value;
    let altura = valores[1].value;

    let imc = peso / altura ** 2;

    let fraseEscolhida = '';

    if (imc <= 18.5) {
        fraseEscolhida = 'Magreza';
    } else if (imc <= 24.9) {
        fraseEscolhida = "IMC Normal";
    } else if (imc <= 29.9) {
        fraseEscolhida = 'Sobrepeso';
    } else if (imc <= 39.9) {
        fraseEscolhida = 'Obesidade';
    } else if (imc >= 40) {
        fraseEscolhida = 'Obesidade Grave';
    }


    resultado.value = `${imc.toFixed(2)} => Isso indica: ${fraseEscolhida}.`;
});
