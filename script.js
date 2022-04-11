let NumeroCartas = 0;
let NumeroJogadas = 0;
let cartasComparar = [];
let pares = 0;


const cards = [
    { nome: "card0", urlImage: "bobrossparrot.gif"},
    { nome: "card1", urlImage: "explodyparrot.gif"},
    { nome: "card2", urlImage: "fiestaparrot.gif"},
    { nome: "card3", urlImage: "metalparrot.gif"},
    { nome: "card4", urlImage: "revertitparrot.gif"},
    { nome: "card5", urlImage: "tripletsparrot.gif"},
    { nome: "card6", urlImage: "unicornparrot.gif"},
]

const cartas = document.querySelector(".cartas");

function SelecionaGifs() {
    const CartaEscolhida = [];
   
    function Embaralha() {
        return Math.random() -0.5;
    }
    
    for(let i =0; i < (NumeroCartas/2); i++){
        for (let k = 0; k < 2; k++){
            CartaEscolhida.push(cards[i]);        
        }
    }
    
    CartaEscolhida.sort(Embaralha)

    return CartaEscolhida;
}

function CartasNaMesa() {
    const listaCartas = SelecionaGifs();

    for(let j = 0; j < listaCartas.length; j++ ){
        cartas.innerHTML += `
        <div class = "card" nome =${listaCartas[j].nome} onclick = "virarCarta(this)">
            <img class = "front hidden" src=./img/${listaCartas[j].urlImage} alt = "parrot-card">
            <img class = "back" src="./img/front.png" alt = "parrot-card">
        </div>
        `;
    }
}

function StartGame() {
    NumeroCartas = Number(prompt("Quantas cartas você quer?"));
    while (NumeroCartas%2 !==0 || NumeroCartas < 4 || NumeroCartas > 14){
        NumeroCartas = prompt("Número de cartas inválido, escolha um par de cartas entre 4 a 14 cartas.");
    }
    CartasNaMesa();
}
StartGame();

function virarCarta(carta) {
    NumeroJogadas++;
    let cartaFrente = carta.querySelector(".front")
    let cartaAtras= carta.querySelector(".back")
    
    cartaFrente.classList.toggle("hidden");
    cartaAtras.classList.toggle("hidden");
    

    cartasComparar.push(carta);
    if (cartasComparar.length === 2){
        setTimeout(verificar, 1000);
    }
    
    
}
function verificar() {
    let carta1 = cartasComparar[0];
    let carta2 = cartasComparar[1];
    carta1.classList.add(".flip");
    carta2.classList.add(".flip");
    

    if (carta1.getAttribute("nome") === carta2.getAttribute("nome")){
        
        pares++;
        cartasComparar = [];
        
    }else {
        cartasComparar.forEach((carta)=>{
            carta.querySelector(".front").classList.toggle("hidden")
            carta.querySelector(".back").classList.toggle("hidden")


        })
          
        cartasComparar = [];
    }
    carta1.classList.remove(".flip");    
    carta2.classList.remove(".flip");

    if (pares === NumeroCartas/2){
        alert(`Parabéns! Você ganhou em ${NumeroJogadas} jogadas!!`);
    }
}


//let numeroCarta = prompt("Quantas cartas você quer?")
/*while (numeroCarta%2 !== 0 || numeroCarta < 4 || numeroCarta > 14) {
    numeroCarta = prompt("Número de cartas inválido, escolha um par de cartas entre 4 a 14 cartas.");
}

StartGame();

function StartGame() {
    console.log("startgame")
    let cartas = document.querySelector(".cartas");

    for(let i = 0; i < (numeroCarta/2); i++) {
        
        for (let index = 0; index < 2; index++) {
            cartas.innerHTML += `<div class="card">${i}</div>`
            
        }
    }
    
}*/

