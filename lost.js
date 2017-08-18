/*global myCanvas, keyDownHandler, tapDownHandler,  SCREEN_X, SCREEN_Y, INTERLACE, PF, BL, P0, P1, M0, M1, sound, screen, reset_collision, get_collision, background, print_large, print_small, number_large, number_small, playfield, player0, player1, ball, missile0, missile1, requestAnimationFrame*/
/*jslint node: true */
/*jslint bitwise: true*/
'use strict';
document.getElementById(myCanvas);


var nemesis = [
    'XXXX    ',
    'XXXX    ',
    'XXXX    ',
    'XXXX    '];









// Game states
var PAUSED = 1;
var READY = 0;
var PLAYING = 2;
var DONE = 3;


var blocky = [
    '   X   ',
    ' XXXXX ',
    'XXXXXXX',
    '  XXX  '];

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = (canvas.width / 2) * 1000;
var y = 0;
var dx = 200;
var thisTime = 0;
var lastTime = Date.now();
var dt = 1;

var game_state = READY;
var spacePressed = false;

var field_width = 24;
var NUM_LEVELS = 30;

var color_p0 = 7;
var color_p1 = 1 + (8 * 5);
var color_pf = 3 + (8 * 8);
var color_bk1 = 0;
var color_bk2 = 0;


var direction0 = 0;
var fire0 = false;

var anamation = 0.0;
var nemesis_y = 84.0;
var direction1 = -1.0;
var fire = 0;
var fire_x = 0;
var fire_y = 0;
var fire_v = 0;

var retries = 0;
var level_number = 1;


var t = 0;
var pos_x = SCREEN_X - 3;
var pos_y = SCREEN_Y - 5;
var vel_x = 0;
var vel_y = 0;
var height0 = 4;
var direction0 = -1.0;

var jumping = 0;

var sound_duration = 0;

var sound_vol = 10;
var freq_1 = 31;
var freq_2 = 24;
var type_1 = 5;
var type_2 = 5;

var qty_stars = 30;
var my = [];
var mx = [];
var j = 0;
for (j = 0; j < qty_stars; j = j + 1) {
    mx.push(Math.random() * 159);
    my.push(Math.random() * 207);
}



document.addEventListener('keydown', keyDownHandler, false);
document.body.addEventListener('touchstart', tapDownHandler, false);
document.body.addEventListener('click', tapDownHandler, false);


function onPause() {
    sound_duration = 0;
    sound(1, 0.3, freq_1, type_1);
    sound(2, 0.3, freq_2, type_2);
    game_state = PAUSED;
}

function onResume() {
    game_state = PLAYING;
}

function onAmazonPlatformReady() {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
}

document.addEventListener("amazonPlatformReady", onAmazonPlatformReady, false);

function tapDownHandler() {
    fire0 = true;
    game_state = PLAYING;
}



function keyDownHandler(event) {
    var key = event.which || event.keyCode;
    if ((key === 13) || (key === 32)) {
        if (game_state < DONE) {
            fire0 = true;
            game_state = PLAYING;
        }
    }
    if ((key === 19) || (key === 179) || (key === 80)) {
        if (game_state === PLAYING) {
            onPause();
        } else {
            if (game_state === PAUSED) {
                game_state = PLAYING;
            } else {
                game_state = READY;
            }

        }
    }
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

    if (sound_duration > 1) {
        sound_duration -= 1;
    } else {
        sound(1, 0, freq_1, type_1);
        sound(2, 0, freq_2, type_2);
    }



    if (game_state === PAUSED) {
        print_large(2, 4 + 152, '   GAME', 2, color_p0);
        print_large(2, 4 + 168, '  PAUSED', 2, color_p0);
    } else {
        screen();
        reset_collision();

        background(0, SCREEN_Y, color_bk2);

        pos_x += vel_x * dt / 50.0;
        pos_y += vel_y * dt / 50.0;


        player0(Math.trunc(pos_x / 50), Math.trunc(pos_y / 50) - 4, blocky, 1, 2, 0, color_p0);

        a = Math.trunc(anamation);
        b = level_number - 1;
        c = Math.trunc(nemesis_y);

        for (j = 0; j < qty_stars; j = j + 1) {
            missile0(mx[j], my[j], 1, 1, 2);
        }

    }
    print_large(12, 4 + 102, 'LOST', 2, color_p0);
    print_large(12, 4 + 118, ' IN', 2, color_p0);
    print_large(12, 4 + 134, 'SPACE', 2, color_p0);
    requestAnimationFrame(draw);
}

draw();
