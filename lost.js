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



var planet = [
    '                               XXX      ',
    '          XX                   XXXX     ',
    'XX                              XX      ',
    'XXX              XXXX                  X',
    'XX               XXXXX    XX            ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                                        ',
    '                          XX            ',
    '   X                     XXXX           ',
    '   XXX                   XXXX           ',
    '                          XX            ',
    '                                        ',
    '      XXXX                XX            ',
    '                                        ',
    '                                        ',
    '                  XX                    ',
    '                 XXXX                   ',
    '                  XX      XX            ',
    '                               XXX      ',
    '                               XXXX     ',
    '   X                            XX      ',
    '  XXX                                   ',
    '   X                                    ',
    '                                        '];

var planet_scrolled = planet;

// Game states
var PAUSED = 1;
var READY = 0;
var PLAYING = 2;
var DONE = 3;


var blocky = [
    ' XXX',
    'XXX ',
    'XXX ',
    ' XXX',

    ' XX ',
    'XXXX',
    'XXXX',
    'X  X',

    'XXX ',
    ' XXX',
    ' XXX',
    'XXX ',

    'X  X',
    'XXXX',
    'XXXX',
    ' XX '];

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

var color_p0 = 15;
var color_p1 = 3;
var color_pf = 34;
var color_bk1 = 0;
var color_bk2 = 0;


var direction0 = 0;
var fire0 = false;

var anamation = 0.0;
var nemesis_y = 84.0;
var direction1 = -1.0;
var fire = 0;
var fire_x = (SCREEN_X / 2) - 8;
var fire_y = (SCREEN_Y / 2) + 2;
var fire_vx = 0;
var fire_vy = 0;

var retries = 0;
var level_number = 1;

var accel_rate = 1;
var decel_rate = 0.003;

var t = 0;
var pos_x = (SCREEN_X / 2) * 50;
var pos_y = (SCREEN_Y / 2) * 50;
var vel_x = 0;
var vel_y = 0;
var height0 = 4;
var direction0 = 0;

var jumping = 0;
var direction = 0;

var sound_duration = 0;

var sound_vol = 10;
var freq_1 = 31;
var freq_2 = 24;
var type_1 = 5;
var type_2 = 5;

var qty_stars = 30;
var my = [];
var mx = [];
var mi = [];
var star_twinkle_rate = 0;
var j = 0;
for (j = 0; j < qty_stars; j = j + 1) {
    mx.push(Math.random() * 159);
    my.push(Math.random() * 207);
    mi.push(Math.trunc(Math.random() * 3) + 1);
}
mx[0] = 0;
my[0] = 0;


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
    //fire0 = true;
    game_state = PLAYING;
}


function keyDownHandler(event) {
    var key = event.which || event.keyCode;
    if (key === 38) {
        //up arrow
        direction0 = 1;
    }
    if (key === 40) {
        //down arrow
        direction0 = 3;
    }

    if (key === 37) {
        //left arrow
        direction0 = 0;
    }
    if (key === 39) {
        //right arrow
        direction0 = 2;
    }

    if ((key === 13) || (key === 32)) {
        if (fire0 === false) {
            sound(2, sound_vol, freq_2, type_2);
            sound_duration = 5;
            fire0 = true;
            fire_x = (SCREEN_X / 2) + 1;
            fire_y = (SCREEN_Y / 2) + 1;
            if (direction0 === 0) {
                vel_x -= accel_rate;
                fire_vx = -accel_rate;
                fire_vy = 0;
            }
            if (direction0 === 1) {
                vel_y -= accel_rate;
                fire_vx = 0;
                fire_vy = -accel_rate;
            }
            if (direction0 === 2) {
                vel_x += accel_rate;
                fire_vx = accel_rate;
                fire_vy = 0;
            }
            if (direction0 === 3) {
                vel_y += accel_rate;
                fire_vx = 0;
                fire_vy = accel_rate;
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

        star_twinkle_rate += 1;
        for (j = 0; j < qty_stars; j = j + 1) {

            mx[j] += vel_x * dt / 50.0;
            if (mx[j] > SCREEN_X) {
                mx[j] -= SCREEN_X;
            }
            if (mx[j] < 0) {
                mx[j] += SCREEN_X;
            }
            my[j] += vel_y * dt / 25.0;
            if (my[j] > SCREEN_Y) {
                my[j] -= SCREEN_Y;
            }
            if (my[j] < 0) {
                my[j] += SCREEN_Y;
            }

            if (star_twinkle_rate > 10) {
                mi[j] = Math.trunc(Math.random() * 3) + 1;
            }

            missile1(mx[j], my[j], 1, 2, mi[j]);
        }
        if (star_twinkle_rate > 10) {
            star_twinkle_rate = 0;
        }

        // draw field
        b = Math.trunc((SCREEN_X - mx[0]) / 4);
        c = Math.trunc(my[0] / 8);
        for (i = 0; i < 26; i += 1) {
            j = i + c;
            if (j > 25) {
                j -= 25;
            }
            if (j < 0) {
                j += 25;
            }
 //           j = i;
            a = planet[j].slice(b, 39) + planet[j].slice(0, b);
            playfield(i * 8, 8, a, color_pf);
        }

        d = direction0 * 4;
        player0((SCREEN_X / 2), (SCREEN_Y / 2), blocky.slice(d, d + 4), 1, 2, 0, color_p0);

        if (fire0 === true) {
            fire_x += fire_vx;
            fire_y += fire_vy;
            if (fire_x < 0) {
                fire0 = false;
            }
            if (fire_x > SCREEN_X) {
                fire0 = false;
            }
            if (fire_y < 0) {
                fire0 = false;
            }
            if (fire_y > SCREEN_Y) {
                fire0 = false;
            }
            missile0(fire_x, fire_y, 2, 4, color_p0);
        }

        if (vel_x > 0) {
            vel_x -= decel_rate;
        }

        if (vel_x < 0) {
            vel_x += decel_rate;
        }

        if (vel_y > 0) {
            vel_y -= decel_rate;
        }

        if (vel_y < 0) {
            vel_y += decel_rate;
        }
    }
    //print_large(12, 4 + 102, 'LOST', 2, color_p0);
    //print_large(12, 4 + 118, 'SPACE', 2, color_p0);
    //print_large(12, 4 + 134, 'BABIES', 2, color_p0);
    requestAnimationFrame(draw);
}

draw();
