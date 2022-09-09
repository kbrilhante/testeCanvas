// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const opcaoCor = document.getElementById("colorOption");
const txtCor = document.getElementById("cor");
const txtTraco = document.getElementById("traco");

var cor = "";
var rainbow = false;
var hue = 0;
var traco = 3;

var evento = "";

var posicaoX, posicaoY;
var ultimaPosicaoX, ultimaPosicaoY;
console.log(window)
const larguraTela = innerWidth;
const alturaOptions = document.getElementById("options").clientHeight + document.getElementById("header").clientHeight;
const novaLargura = larguraTela * 0.9;
const novaAltura = innerHeight - (alturaOptions + 60);

canvas.width = novaLargura;
console.log(canvas.width)
canvas.height = novaAltura;
document.body.style.overflow = "hidden";

canvas.addEventListener("mousedown", getEventType);
canvas.addEventListener("mouseup", getEventType);
canvas.addEventListener("mouseleave", getEventType);

function getEventType (e) {
    evento = e.type;
    console.log(evento);
}

canvas.addEventListener("mousemove", mouseMove);

function mouseMove (e) {
    posicaoX = e.offsetX;
    posicaoY = e.offsetY;
    if (evento == "mousedown") {
        // console.log("Offset: X = " + posicaoX + " | Y = " + posicaoY);
        desenha();
    }
    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}

canvas.addEventListener("touchstart", touchStart);

function touchStart (e) {
    getEventType(e);
    // console.log(e);
    posicaoX = e.touches[0].clientX - (canvas.clientLeft + canvas.offsetLeft);
    posicaoY = e.touches[0].clientY - (e.target.clientTop + e.target.offsetTop); //e.target é o mesmo que canvas. deixei um de cada pra referencia
    // console.log("Offset: X = " + posicaoX + " | Y = " + posicaoY);
    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}

canvas.addEventListener("touchend", touchEnd);

function touchEnd (e) {
    getEventType(e);
    // console.log(e);
}

canvas.addEventListener("touchmove", touchMove);

function touchMove (e) {
    var offsetX = e.touches[0].clientX - (e.target.clientLeft + e.target.offsetLeft);
    var offsetY = e.touches[0].clientY - (e.target.clientTop + e.target.offsetTop);
    // console.log("Offset: X = " + offsetX + " | Y = " + offsetY);
    posicaoX = offsetX;
    posicaoY = offsetY;
    if (evento = "touchstart") {
        desenha();
    }
    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}

function desenha () {
    ctx.beginPath();

    // 
    if (cor === 'random') {
        ctx.strokeStyle = "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
        // console.log(ctx.strokeStyle);
    // } else if (cor === 'rainbow' || cor === '') {
    } else if (cor === 'rainbow') {
        let codCor = 'hsl(' + hue++ + ', 100%, 50%)';
        if (hue > 360) hue = 0;
        console.log(codCor);
        ctx.strokeStyle = codCor;
        console.log(hue);
        // console.log(ctx.strokeStyle);
    } else {
        ctx.strokeStyle = cor;
    }
    
    ctx.lineWidth = traco;

    ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);
    ctx.lineTo(posicaoX, posicaoY);

    ctx.stroke();
}

function limpar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("cor").value = "";
    document.getElementById("traco").value = "";
}

txtCor.addEventListener("input", function (e) {
    // const novaCor = txtCor.value.toLowerCase();
    // if (validaCor(novaCor)) {
        cor = txtCor.value;
        console.log(cor);
    // }
});

txtTraco.addEventListener("input", function (e) {
    if (txtTraco.value > 0) {
        traco = txtTraco.value;
    }
});

function randomNumber (){
    return Math.floor(Math.random() * 255);
}
// function randomNumber (min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * ((max-min) + 1)) + min;
// }





// function validaCor (testeCor) {
//     var controle = 'red';
//     var d = document.createElement('div');
//     d.style.color = controle;
//     d.style.color = testeCor;

//     // if (testeCor !== controle && (d.style.testeCor === controle || d.style.testeCor === '')) {
//     // if (testeCor !== controle && d.style.testeCor === controle) { //eu quero que meu codigo retorne true no texto vazio para cores aleatórias
//     if (testeCor === 'rainbow'|| testeCor === 'random') {
//         return true;
//     } else if (testeCor !== controle && d.style.color === controle) { //eu quero que meu codigo retorne true no texto vazio para cores aleatórias
//         return false;
//     }
//     return true;
// }