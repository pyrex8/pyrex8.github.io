/*global myCanvas, keyDownHandler,  SCREEN_X, SCREEN_Y, INTERLACE, sound, screen, background, print_small, playfield, player1, ball, requestAnimationFrame*/
/*jslint node: true */
/*jslint bitwise: true*/
'use strict';
document.getElementById(myCanvas);

// Game states
var PAUSED = 1;
var READY = 0;
var PLAYING = 2;
var DONE = 3;

var cursor = [
    'XXXXX   ',
    'X   X   ',
    'X   X   ',
    'X   X   ',
    'XXXXX   ',

    '        ',
    '        ',
    '        ',
    '        ',
    '        '];




var blocky = [
    'XXXX    ',
    'XXXX    ',
    'XXXX    ',
    'XXXX    '];


var nemesis = [
    'XX      ',
    'XX      ',
    'XX      ',
    'X       ',
    'XX      ',
    'XX      ',
    'XX X    ',
    'XXXX    ',
    'XXX     ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XXX     ',
    'X       ',
    'XX      ',



    'XX      ',
    'XX X    ',
    'XX X    ',
    'X  X    ',
    'XX X    ',
    'XXXX    ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX      ',
    'XX XXX  ',
    'XXXX XX ',
    'XXXX  X ',
    ' XX   XX'];

var plyfd_fill = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var tree_leavs = [
    'XXXXXXXXXXX  XXXXXXXXXXXXXX  XXXXXXXXXXX',
    'XXXXXXXXXX    XXXXXXXXXXXX    XXXXXXXXXX',
    'XXX  XXXX      XXXX  XXXX      XXXX  XXX',
    'XX    XX        XX    XX        XX    XX'];
var tree_trunk = '.........X.......X....X.......X.........S';

var branch1 = [
    '       X',
    '       X',
    '   XX  X',
    '   XX  X',
    'XX XX XX',
    ' XXXXXX '];


var branch2 = [
    '        ',
    '        ',
    '        ',
    '        ',
    '      XX',
    ' XXXXXX '];

var branch3 = [
    '        ',
    '        ',
    '        ',
    '        ',
    'XX      ',
    ' XXXXXX '];

var branch4 = [
    'X       ',
    'X       ',
    'X  XX   ',
    'X  XX   ',
    'XX XX XX',
    ' XXXXXX '];


var TREE_PANT_COLOR = 105;
var BACKGROUND_COLOR = 107;

var TRUNK_COLOR = 8;
var GROUND_COLOR = 12;

var DIRT_COLOR = 10;
var HAIR_LOG_COLOR = 9;

var FACE_COLOR = 37;
var SHIRT_COLOR = 100;

var BRICK_COLOR = 33;
var MORTAR_COLOR = 3;

var DARKESS_COLOR = 0;
var LETTERING_COLOR = 6;


var nem_color = [
    HAIR_LOG_COLOR,
    FACE_COLOR,
    FACE_COLOR,
    FACE_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    SHIRT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR,
    TREE_PANT_COLOR];


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
var color_bk1 = 104;
var color_bk2 = 107;

var sound_duration = 0;

var sound_vol = 0.3;
var freq_1 = 110;
var freq_2 = 44;
var type_1 = 'square';
var type_2 = 'square';

var x = 0;
var y = 0;

var i = 0;

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
        if (SHIRT_COLOR > 0) {
            SHIRT_COLOR -= 1;
        } else {
            SHIRT_COLOR = 127;
        }
    }
    if (key === 40) {
        //down arrow


        if (SHIRT_COLOR < 127) {
            SHIRT_COLOR += 1;
        } else {
            SHIRT_COLOR = 0;
        }
    }

    if (key === 37) {
        //left arrow
        if (x > 0) {
            x -= 1;
        } else {
            x = 7;
        }
    }
    if (key === 39) {
        //right arrow


        if (x < 7) {
            x += 1;
        } else {
            x = 0;
        }
    }


    if ((key === 13) || (key === 32)) {
        x = 0;
    }
}



function draw() {
    var a,
        p_width = Math.trunc(window.innerWidth / SCREEN_X / INTERLACE),
        p_height = Math.trunc(window.innerHeight / SCREEN_Y);

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

    screen();
    background(0, SCREEN_Y, DARKESS_COLOR);
    //		background(6, 51, TREE_PANT_COLOR);
    background(57, 60, BACKGROUND_COLOR);
    background(117, 16, GROUND_COLOR);
    background(133, 15, DIRT_COLOR);
    background(180, 6, DIRT_COLOR);

    // draw tree tops
    playfield(6, 51, plyfd_fill, TREE_PANT_COLOR);
    // draw tree leaves
    for (i = 0; i < 4; i += 1) {
        playfield(57 + i * 2, 2, tree_leavs[i], TREE_PANT_COLOR);
    }

    // draw tree trunks
    playfield(65, 52, tree_trunk, TRUNK_COLOR);

    print_small(2, 8, '       2000        ', 2, LETTERING_COLOR);

    for (i = 0; i < 21; i += 1) {
        player1(18, 104 + game_number * 14 + i, nemesis.slice(i, i + 1), 1, nem_color[i]);
    }

    player1(34, 59, branch1, 1, TRUNK_COLOR);
    player1(66, 59, branch2, 1, TRUNK_COLOR);
    player1(86, 59, branch3, 1, TRUNK_COLOR);
    player1(118, 59, branch4, 1, TRUNK_COLOR);

    print_small(12, 190, 'WORK IN PROGRESS ', 1, LETTERING_COLOR);

    ball(0, 0, 8, SCREEN_Y, DARKESS_COLOR);

    requestAnimationFrame(draw);
}



draw();
