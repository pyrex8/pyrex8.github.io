/*global canvas, keyDownHandler, tapDownHandler, requestAnimationFrame*/
/*jslint node: true */
/*jslint bitwise: true*/
/*global Float32Array*/
'use strict';


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.font = "10px Courier";

var x = 50;
var y = 0;
var dx = 200;
var thisTime = 0;
var lastTime = Date.now();
var dt = 1;


var c = '';
var d = 'LANDING';
var e = 'CRASH';
var o = 100;
var dn = 0;
var s = 400;
var n = 255;
var z = 10;
var Z = s - z;
var mh = s / 20;
var lp = 14;
var pl = 20;
var f = s;
var ph = Math.random() * s;
var am = s / 5;
var fs = s / 32;
var cr = "black";
var cl = cr;
var ss = c;
var y = z;
var T = 11025;
var x = (Math.random * Z) + z;
var u = 0;
var v = 0;
var r = 5;
var cg = "white";
var wi = n;
var q = 127;
var p = -q;
var gs = c;
var N = n * 4;
var mn = 40;
var P = 0.01;



var lp = 20;
var my = [];
var j;

for (j = 0; j < mn + 1; j = j + 1) {
    my.push((Math.random() * mh) + (am * ( 4 - Math.sin((j + ph)/5))) - fs) ;
}

function draw() {
    // drawing code
    var a,
        b,
        c,
        d,
        i;
    thisTime = Date.now();
    dt = thisTime - lastTime;
    lastTime = thisTime;

    dt = dt / 3;
    x += dx * dt;
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.arc(100, 75, 5, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.moveTo(0, my[0]);
    ctx.beginPath();
    for (i = 0; i < mn; i = i + 1) {
        ctx.lineTo(i * s / mn, my[i]);
    }
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fillText("FUEL", 10, canvas.height - 10);


    requestAnimationFrame(draw);
}

draw();
