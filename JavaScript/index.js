const botones = document.querySelectorAll('.nav-item');
const submit = document.querySelector('.enviar');
const tarjetaUno = document.querySelector('.tarjetaUno');
const tarjetaDos = document.querySelector('.tarjetaDos');
const score = document.querySelector('.score');
let scoreTemp = 0;

submit.addEventListener('click', submitEvento);

botones.forEach( ele => {
    ele.addEventListener('click', eleccionBoton);
});

function submitEvento () {
    tarjetaUno.classList.add('ocultar');
    score.textContent = scoreTemp;
    tarjetaDos.classList.remove('ocultar');
}

function eleccionBoton(event) {
    botones.forEach(btn => {
        btn.classList.remove('seleccion');
    });

    if (event.target.classList.contains('botones')) {
        event.target.classList.add('seleccion');
    } else {
        event.target.parentElement.classList.add('seleccion');
    }

    scoreTemp = event.target.textContent;
}