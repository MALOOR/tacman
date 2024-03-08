var loop = {

   idEjecucion: null,
   ultimoRegistro: 0,
   aps: 0,
   fps: 0,
   iterar: function(registroTemporal){
        loop.idEjecucion=window.requestAnimationFrame(loop.iterar);
        loop.update(registroTemporal);
        loop.play();

        if(registroTemporal - loop.ultimoRegistro > 999){
            loop.ultimoRegistro = registroTemporal;
            console.log(loop.fps);
            loop.aps = 0;
            loop.fps = 0;
        };
   },
 
   update: function(){
        loop.aps++;

   },

   play: function(){

    loop.fps++;

    borrarCanvas();

    ctx.beginPath();
    ctx.font = "12px verdana";
    ctx.fillStyle = "blue";
    ctx.fillText(Timer.now, 15,20);
    ctx.stroke();

   }

}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var margen = 10;
var canvasTop = (margen/2);
var canvasLeft = (margen/2);
var canvasWidth = window.innerWidth-margen;
var canvasHeigth = window.innerHeight-margen;

function borrarCanvas(){

    canvas.width = canvasWidth;
    canvas.heigth = canvasHeigth;
}

function ResizeWindow(){

    canvas.style.top = canvasTop + "px";
    canvas.style.left = canvasLeft + "px";
    canvas.style.width = canvasWidth+"px";
    canvas.style.height = canvasHeigth+"px";
}; 

Concurrent.Thread.create(InitTimer);

window.addEventListener("load", function(e){

    ResizeWindow();
    loop.iterar();
});

window.addEventListener("resize", function(e){
    ResizeWindow();
});