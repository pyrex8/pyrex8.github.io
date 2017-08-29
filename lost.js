/*global myCanvas, keyDownHandler, tapDownHandler,  SCREEN_X, SCREEN_Y, INTERLACE, PF, BL, P0, P1, M0, M1, sound, screen, reset_collision, get_collision, background, print_large, print_small, number_large, number_small, playfield, player0, player1, ball, missile0, missile1, requestAnimationFrame*/
/*jslint node: true */
/*jslint bitwise: true*/
'use strict';
document.getElementById(myCanvas);



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


var ship = [
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
var color_p1 = 53;
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

var fire_v = 4;
var accel_rate = 1;
var decel_rate = 0.03;
var vel_max = 8;

var t = 0;
var pos_div = 50;
var pos_x = (SCREEN_X / 4) * pos_div;
var pos_y = (SCREEN_Y / 4) * pos_div;
var vel_x = 0;
var vel_y = 0;
var height0 = 4;
var direction0 = 0;

var pf_x = 0;
var pf_y = 0;
var pf_x_last = 0;
var pf_y_last = 0;

var jumping = 0;
var direction = 0;

var sound_duration = 0;

var sound_vol = 10;
var freq_1 = 31;
var freq_2 = 24;
var type_1 = 5;
var type_2 = 5;

var qty_stars = 30;
var my = 0;
var mx = 0;


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
        vel_y -= accel_rate;
        if (vel_y < -vel_max) {
            vel_y = -vel_max;
        }
    }
    if (key === 40) {
        //down arrow
        direction0 = 3;
        vel_y += accel_rate;
        if (vel_y > vel_max) {
            vel_y = vel_max;
        }
    }

    if (key === 37) {
        //left arrow
        direction0 = 0;
        vel_x += accel_rate;
        if (vel_x > vel_max) {
            vel_x = vel_max;
        }
    }
    if (key === 39) {
        //right arrow
        direction0 = 2;
        vel_x -= accel_rate;
        if (vel_x < -vel_max) {
            vel_x = -vel_max;
        }
    }

    if ((key === 13) || (key === 32)) {
        if (fire0 === false) {
            sound(2, sound_vol, freq_2, type_2);
            sound_duration = 5;
            fire0 = true;
            fire_x = (SCREEN_X / 2) + 1;
            fire_y = (SCREEN_Y / 2) + 1;
            if (direction0 === 0) {
                fire_vx = -fire_v;
                fire_vy = 0;
            }
            if (direction0 === 1) {
                fire_vx = 0;
                fire_vy = -fire_v;
            }
            if (direction0 === 2) {
                fire_vx = fire_v;
                fire_vy = 0;
            }
            if (direction0 === 3) {
                fire_vx = 0;
                fire_vy = fire_v;
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
        i,
        j;
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

        mx += vel_x * dt / 50.0;
        if (mx > SCREEN_X) {
            mx -= SCREEN_X;
        }
        if (mx < 0) {
            mx += SCREEN_X;
        }
        my += vel_y * dt / 25.0;
        if (my > SCREEN_Y) {
            my -= SCREEN_Y;
        }
        if (my < 0) {
            my += SCREEN_Y;
        }

        // draw field
        pf_x_last = pf_x;
        pf_y_last = pf_y;
        pf_x = Math.trunc((SCREEN_X - mx) / 4);
        pf_y = Math.trunc(my / 8);
        for (i = 0; i < 26; i += 1) {
            j = i + pf_y;
            if (j > 25) {
                j -= 25;
            }
            if (j < 0) {
                j += 25;
            }
 //           j = i;
            a = planet[j].slice(pf_x, 39) + planet[j].slice(0, pf_x);
            playfield(i * 8, 8, a, color_pf);
        }

        d = direction0 * 4;
        player0((SCREEN_X / 2), (SCREEN_Y / 2), ship.slice(d, d + 4), 1, 2, 0, color_p0);

        a = Math.trunc((SCREEN_X - mx) / 4) + Math.trunc(pos_x / pos_div);
        b = Math.trunc(my / 8) + Math.trunc(pos_y / pos_div);
        if (a > 20) {
            a -= 20;
        }
        if (a < 0) {
            a += 20;
        }
        if (b > 25) {
            b -= 25;
        }
        if (b < 0) {
            b += 25;
        }


        player1((a * 4), (b * 8), ship.slice(d, d + 4), 1, 2, 0, color_p1);


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

        if (get_collision(M0, PF) === 1) {
            fire0 = false;
            sound(1, sound_vol, freq_1, type_1);
            sound_duration = 5;

            fire_x = -4;
            fire_y = -8;
        }

        if (get_collision(P0, PF) === 1) {
            sound(1, sound_vol, freq_1, type_1);
            sound_duration = 5;
            if (pf_x !== pf_x_last) {
                vel_x = -vel_x;
            }
            if (pf_y !== pf_y_last) {
                vel_y = -vel_y;
            }
        }
    }
    //print_large(12, 4 + 102, 'LOST', 2, color_p0);
    //print_large(12, 4 + 118, 'SPACE', 2, color_p0);
    //print_large(12, 4 + 134, 'BABIES', 2, color_p0);
    requestAnimationFrame(draw);
}

draw();
