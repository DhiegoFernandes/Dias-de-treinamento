const nome = "Dhiego";
let evento = "";
let dias = "";

console.log(getEventoAleatorio());
console.log(getDiasTreino(evento));
logEvento(nome, evento);
logTempo(nome, dias);


function getEventoAleatorio(){
    const x = Math.floor(Math.random() * 3);
    if (x == 0) {
        evento = "Maratona";
    } else if (x == 1){
        evento = "Triathlon";
    } else{
        evento = "Pentathlon";
    }

    return evento;
}

function getDiasTreino(evento){
    if (evento == "Maratona") {
        dias = 50;
    } else if(evento == "Triathlon"){
        dias = 100;
    } else{
        dias = 200;
    }
    return dias;
}

function logEvento(nome, evento){
    console.log(`${nome} vai participar de ${evento}`);
}

function logTempo(nome, dias){
    console.log(`${nome} vai treinar por ${dias} dias`);

}