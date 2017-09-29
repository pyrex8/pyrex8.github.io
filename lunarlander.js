/*global canvas, keyDownHandler, tapDownHandler, requestAnimationFrame*/
/*jslint node: true */
/*jslint bitwise: true*/
/*global Float32Array*/
'use strict';


var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

ctx.font = "10px Courier";


var dx = 200;
var thisTime = 0;
var lastTime = Date.now();
var dt = 1;

// message strings
var c = '';
var d = 'LANDING';
var e = 'CRASH';
// short version of 255
var n = 255;

// black
var b = 'black';
// white
var w = 'white';

var dn = 0;
// screen size
var s = 400;

var o = 100;

// width of lunar lander
var z = 10;
// length of screen minus lander width
var Z = s - z;

// thruster left and right start out black
var cl = b;
var cr = b;

// thruster y velocity adjustment
var a = 2;

// sound string is blank
var ss = c;

// lander start x location
var x = (Math.random * Z) + z;
// lander start y location
var y = z;

// set fuel to 400
var f = s;

// x and y velocities
var u = 0;
var v = 0;

// lander module diameter, expands on explosion
var r = 5;
// color of landing gear
var cg = w;
// reset explosion effect counter
var wi = n;
var q = 127;
var p = -q;
// message string clear
var gs = c;

var mh = s / 20;
// landing pad width
var lp = 14;
// landing pad location
var pl = 20;


// font size
var fs = s / 32;

// audio parameters
var P = 0.01;
var N = n * 4;
var ph = Math.random() * s;
var am = s / 5;

// sample frequency for sound
var T = 11025;


// landing pad width
var lp=14
// landing pad location
var pl=20
// number of line segments making up mountains
var mn=40
// mountain height
var mh=s/20

// Array for mountains
var mx = [];
var my = [];
var j;

// Mountain x and y points
for (j = 0; j < mn + 1; j++) {
    mx.push(z*j);
    my.push(-(Math.random() * mh) + (am * (4 - Math.sin((j + ph) / 5))) - fs);
}
// last point
mx.push(s);
my.push(-(Math.random * mh) + s);
// "Carve out" landing pad
mx[pl]=mx[pl-1]+lp;
my[pl]=my[pl-1];



function draw() {
    // drawing code
    var i;
    thisTime = Date.now();
    dt = thisTime - lastTime;
    lastTime = thisTime;

    dt = dt / 3;
    x += dx * dt;
    ctx.beginPath();
    ctx.fillStyle = b;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = w;
    ctx.strokeStyle = w;
    ctx.arc(100, 75, 5, 0, 2 * Math.PI);
    ctx.stroke();


    ctx.moveTo(0, my[0]);
    ctx.beginPath();
    for (i = 0; i < mn; i++) {
        ctx.lineTo(mx[i], my[i]);
    }
    ctx.stroke();
    ctx.fillStyle = w;
    ctx.fillText("FUEL", 10, canvas.height - 10);


    requestAnimationFrame(draw);
}

draw();
