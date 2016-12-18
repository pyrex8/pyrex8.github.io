/*global myCanvas, keyDownHandler,  SCREEN_X, SCREEN_Y, sound, screen, background, print_small, player1, requestAnimationFrame*/
/*jslint node: true */
/*jslint bitwise: true*/
'use strict';
document.getElementById(myCanvas);

// Game states
var PAUSED = 1;
var READY = 0;
var PLAYING = 2;
var DONE = 3;

var pman = [
    '  XXX   ',
    ' XX XX  ',
    'XXXXXXX ',
    '    XXX ',
    'XXXXXXX ',
    ' XXXXX  ',
    '  XXX   ',

    '  XXX   ',
    ' X X X  ',
    'XXXXXXX ',
    'X     X ',
    'XXXXXXX ',
    ' XXXXX  ',
    '  XXX   ',

    '  XXX   ',
    ' XX XX  ',
    'XXXXXXX ',
    'XXX     ',
    'XXXXXXX ',
    ' XXXXX  ',
    '  XXX   ',

    '  XXX   ',
    ' XXXXX  ',
    'XXXXXXX ',
    'XXXXXXX ',
    'XXXXXXX ',
    ' XXXXX  ',
    '  XXX   '];


var game_list = [
    '         BLOCK THE KNIGHT              ',
    '         PITFALL                       ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        ',
    '         ------                        '];

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var thisTime = 0;
var lastTime = Date.now();
var dt = 1;

var game_state = READY;

var animation = 0.0;

var game_number = 0;

var color_p0 = 0;
var color_p1 = 16;
var color_pf = 3 + (8 * 8);
var color_bk1 = 76;
var color_bk2 = 74;

var sound_duration = 0;

var sound_vol = 0.3;
var freq_1 = 110;
var freq_2 = 44;
var type_1 = 'square';
var type_2 = 'square';



document.addEventListener('keydown', keyDownHandler, false);

function onPause() {
    sound_duration = 0;
    sound(1, 0, freq_1, type_1);
    sound(2, 0, freq_2, type_2);
}

function onResume() {
    sound_duration = 0;
}

function onAmazonPlatformReady() {
    document.addEventListener("pause", onPause, false);
    document.addEventListener("resume", onResume, false);
}

document.addEventListener("amazonPlatformReady", onAmazonPlatformReady, false);




function keyDownHandler(event) {
    var key = event.which || event.keyCode;
    if (key === 38) {
        //up arrow
        game_state = PLAYING;
        if (game_number > 0) {
            game_number -= 1;
        } else {
            game_number = 11;
        }

    }
    if (key === 40) {
        //down arrow
        game_state = PLAYING;
        if (game_number < 11) {
            game_number += 1;
        } else {
            game_number = 0;
        }
    }
    if ((key === 13) || (key === 32)) {
        if (game_number === 0) {
            location.href = "https://pyrex8.github.io/block_the_knight.html";
        }
        if (game_number === 1) {
            location.href = "https://pyrex8.github.io/pitfall.html";
        }
    }

}



function draw() {
    var a,
        b,
        i,
        color_list;

    thisTime = Date.now();
    dt = thisTime - lastTime;
    lastTime = thisTime;

    dt = dt / 3;

    if (sound_duration > 1) {
        sound_duration -= 1;
    } else {
        sound(1, 0, freq_1, type_1);
        sound(2, 0, freq_2, type_2);
    }


    if (game_state === PLAYING) {
        game_state = READY;
        sound(1, sound_vol, freq_1, type_1);
        sound_duration = 2;
    }



    color_p1 = (color_p1 + 8) & 0x7F;
    animation += dt / 100.0;
    if (animation >= 4.0) {
        animation = 0.0;
        color_p0 = (color_p0 + 8) & 0x78;
    }

    a = Math.trunc(animation);
    b = (4 - a) & 0x03;

    screen();
    background(0, SCREEN_Y, color_bk1);
    background(42 + game_number * 14, 14, color_bk2);
    print_small(2, 2, '    ATARI 2600 GAMES IN JAVASCRIPT     ', 2, color_bk2);
    print_small(2, 16, '    USE ARROWS AND ENTER TO SELECT     ', 1, color_bk2);
    print_small(2, 30, '   --------------------------------    ', 2, color_p0);

    for (i = 0; i < 12; i += 1) {
        color_list = color_bk2;
        if (i === game_number) {
            color_list = color_bk1;
        }
        print_small(2, 44 + i * 14, game_list[i], 2, color_list);
    }

    for (i = 0; i < 7; i += 1) {
        player1(14, 42 + game_number * 14 + (i * 2), pman.slice((b * 7) + i, (b * 7) + i + 1), 1, 2, 0, color_p0 + 7 - i);
    }
    for (i = 0; i < 7; i += 1) {
        player1(135, 42 + game_number * 14 + (i * 2), pman.slice((b * 7) + i, (b * 7) + i + 1), 1, 2, 0, color_p1 + i);
    }

    requestAnimationFrame(draw);
}

draw();
