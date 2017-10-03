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

var txt ='';

function draw() {
    // drawing code
    var i,
        ax,
        ay;
    thisTime = Date.now();
    dt = thisTime - lastTime;
    lastTime = thisTime;

    dt = dt / 3;
    x += dx * dt;

    // if not crashed roll x movement across screen
    if (gs==c && (x<0 || x>s)){
      x=x-(Math.abs(x)/x)*s;
    }

    // if not crashed or landed update lunar module velocity and position
    if (gs==c){
        v=v+1;
        x=(10*x+u)/10;
        y=(10*y+v)/10;
    }


    // test for landing
    if ((y+8)>=my[pl] && x>mx[pl-1] && x<mx[pl] && v<30){
        gs=d;
    }

    // test for collision
    for (i=0;i<mn;i++){
        if (gs==c && mx[i]<=x && mx[i+1]>=x && (my[i]<=y || my[i+1]<=y)){
             cr=1;
            // color of landing gear is black during crash
            cg=b;
            gs=e;
        }
    }

    // clear screen
    ctx.beginPath();
    ctx.fillStyle = b;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
    ctx.beginPath();
    ctx.fillStyle = w;
    ctx.strokeStyle = w;

    //draw landing pad
    ctx.moveTo(mx[pl-1],my[pl-1]);
    ctx.lineTo,(mx[pl],my[pl]);

    // explosion
    if (wi>10 && gs==e){
        // expanding lunar module
        r=r+z;
        // decreament explosion effect counter
        wi=wi-z;
        // sound string crash
        ss=st;
    }


    x=50;

    // draw lunar module, radius expands for explosion
    ctx.fillStyle = wi;
    ctx.strokeStyle = wi;
    for (i=0;i<50;i++){
        ax=Math.sin(i/8);
        ay=Math.cos(i/8);
        ctx.fillRect((x+r*ax),(y+r*ay),1,1);
    }

    // draw landing gear
    ctx.fillStyle = cg;
    ctx.strokeStyle = cg;
    ctx.moveTo(x+3,y+3);
    ctx.lineTo,(x+4,y+6);
    ctx.moveTo(x-3,y+3);
    ctx.lineTo,(x-4,y+6);


    // draw thruster fire
//    ctx.fillStyle = cl;
//    ctx.strokeStyle = cl;
    ctx.moveTo(x+2,y+5);
    ctx.lineTo,(x,y+9);
//    ctx.fillStyle = cr;
//    ctx.strokeStyle = cr;
    ctx.moveTo(x-2,y+5);
    ctx.lineTo,(x,y+9);



    // draw mountains
//    ctx.fillStyle = sc;
//    ctx.strokeStyle = sc;
    ctx.moveTo(0, my[0]);
    ctx.beginPath();
    for (i = 0; i < mn; i++) {
        ctx.lineTo(mx[i], my[i]);
    }


    ctx.stroke();
    ctx.fillStyle = w;
    txt = 'FUEL %3d     ALT %3d     VERT SPD %3d     HORZ SPD %3d',f,s-y,v,u;
    ctx.fillText(txt, 10, canvas.height - 10);

//    requestAnimationFrame(draw);
}

setInterval(draw, 200);
//draw();
