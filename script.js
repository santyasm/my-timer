function criaHoraDosSegundos(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR",{
        timeZone: "GMT"
    });
}
console.log(criaHoraDosSegundos(10))



const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer; 

function iniciaRelogio() {
     timer = setInterval(function () {
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000);
}

iniciar.addEventListener("click", function (envent) {
    relogio.classList.remove("pausado");
    clearInterval(timer)
    iniciaRelogio();
});

pausar.addEventListener("click", function (envent) {
    relogio.classList.add("pausado")
    clearInterval(timer);
});

zerar.addEventListener("click", function (envent) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    relogio.innerHTML = "00:00:00"
    segundos = 0;
});