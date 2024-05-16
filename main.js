const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (seja i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function() {

        for (seja j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Data("2020-10-05T00:00:00");
const tempoObjetivo2 = new Data("2023-12-05T00:00:00");
const tempoObjetivo3 = new Data("2023-12-30T00:00:00");
const tempoObjetivo4 = new Data("2024-02-01T00:00:00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    deixe tempoAtual = new Data();
    deixe tempoFinal = tempoObjetivo - tempoAtual;
    deixe segundos = Math.floor(tempoFinal / 1000);
    deixe minutos = Math.floor(segundos / 60);
    deixe horas = Math.floor(minutos / 60);
    deixe dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } outro {
        return "Prazo Finalizado";
    }
}

function atualizaCronômetro(){

    for (seja i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);   
    }
}

function comecaCronômetro(){
    atualizaCronômetro();
    setInterval(atualizaCronômetro,1000);
}

//comecaCronômetro();
