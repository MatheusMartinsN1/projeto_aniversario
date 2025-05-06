AOS.init();

//Para clicar no <li> e abrir o link da tag <a>
document.querySelectorAll('.footer__container__sociais li').forEach(function(item) {
    item.addEventListener('click', function() {
        let link = item.querySelector('a');
        if (link) {
            window.open(link.href, '_blank');
        }
    });
});

//Contagem regressiva

let dataDoAniversario = new Date("Apr 10, 2026 16:00:00")
let timeStampDoAniversario = dataDoAniversario.getTime()

let contaAsHoras = setInterval(function(){
    let horaAtual = new Date()
    let timeStampAtual = horaAtual.getTime()

    let distanciaAteOAniversario = timeStampDoAniversario - timeStampAtual

    let diaEmMs = 1000 * 60 * 60 * 24
    let horaEmMs = 1000 * 60 * 60
    let minutosEmMs = 1000 * 60

    let diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs)
    let horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs)
    let minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutosEmMs)
    let segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutosEmMs) / 1000)

    document.getElementById('texto').innerHTML = `<span id="contagem">Começa em: ${diasAteOAniversario}D ${horasAteOAniversario}H ${minutosAteOAniversario}M ${segundosAteOAniversario}S</span>`

    if(distanciaAteOAniversario < 0) {
        clearInterval(contaAsHoras)
        document.getElementById('texto').innerHTML = 'Meu aniversario de 2026 já passou!'
    }
}, 1000)