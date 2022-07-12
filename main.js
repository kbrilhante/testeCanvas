// Canvas refecence:
// https://www.w3schools.com/graphics/canvas_reference.asp
 var evento = "";

var posicaoX, posicaoY;
var ultimaPosicaoX, ultimaPosicaoY;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var txtCor = document.getElementById("cor");
var txtTraco = document.getElementById("traco");

var cor = "red";
var largTraco = 3;

function getEventType (e) {
    evento = e.type;
    console.log(evento);
}

canvas.addEventListener("mousedown", mouseDown);

function mouseDown (e) {
    getEventType(e);
    // console.log(e);
    // console.log("Offset: X = " + e.offsetX + " | Y = " + e.offsetY);
    // console.log("Client: X = " + e.clientX + " | Y = " + e.clientY);
    // console.log("Client - Offset: X = " + (e.clientX - e.offsetX) + " | Y = " + (e.clientY - e.offsetY));
}

canvas.addEventListener("mouseup", mouseUp);

function mouseUp (e) {
    getEventType(e);
    // console.log(e);
}

canvas.addEventListener("mouseleave", mouseLeave);

function mouseLeave (e) {
    getEventType(e);
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
    var offsetX = e.touches[0].clientX - (e.target.clientLeft + e.target.offsetLeft);
    var offsetY = e.touches[0].clientY - (e.target.clientTop + e.target.offsetTop);
    // console.log("Offset: X = " + offsetX + " | Y = " + offsetY);
    posicaoX = offsetX;
    posicaoY = offsetY;
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

    ctx.strokeStyle = cor;
    ctx.lineWidth = largTraco;

    console.log(ctx);

    ctx.moveTo(ultimaPosicaoX,ultimaPosicaoY);

    ctx.lineTo(posicaoX, posicaoY);

    ctx.stroke();
}

function limpar () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("cor").value = "";
    document.getElementById("traco").value = "";
}

txtCor.addEventListener("submit", function (e) {
    cor = e.target.value;
});

txtTraco.addEventListener("input", function (e) {
    largTraco = e.target.value;
});