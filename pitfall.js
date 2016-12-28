/*global myCanvas, keyDownHandler, keyUpHandler, tapDownHandler,  SCREEN_X, SCREEN_Y, INTERLACE, PF, BL, P0, P1, M0, M1, sound, screen, reset_collision, get_collision, background, print_large, print_small, number_large, number_small, playfield, player0, player1, ball, missile0, missile1, requestAnimationFrame*/
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


var harry = [


    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '   XX X ',
    '   XXXX ',
    '   XXX  ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   X    ',
    '   XX   ',






    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '  XXX X ',
    '  XXXXX ',
    '  XXXX  ',
    '  XXX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   X X  ',
    '   X X  ',
    ' XXX X  ',
    ' X    XX',
    ' X    X ',
    '        ',


    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '    XXX ',
    '    X X ',
    '  XXXXX ',
    '  X X   ',
    '  X X   ',
    '    X   ',
    '    XX  ',



    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXXX ',
    '   X XX ',
    '   X  X ',
    '  XX X  ',
    '  XX X  ',
    '  X   X ',
    '  X     ',
    '   X    ',

    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '  XXX X ',
    '  XXXXX ',
    '  XXXX  ',
    '  XXX   ',
    '   XX   ',
    '   XX   ',
    '   XXX  ',
    '  XXXXX ',
    '  XX XX ',
    ' XX   X ',
    ' XX   X ',
    'XX    XX',
    'X       ',
    'X       ',
    '        ',

    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   X    ',
    '   XX   ',
    '   XX   ',
    '  XXX X ',
    ' XXXXXX ',
    ' X XXX  ',
    ' X XX   ',
    '   XX   ',
    '   XXX  ',
    '   XXX  ',
    '   XXXX ',
    'XX XX X ',
    ' XXX  X ',
    '  XX  XX',
    '        ',
    '        ',
    '        ',
    '        ',











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
var tree_trunk = '.........X.......X....X.......X.........';

var grnd_open =  'XXXXXXXXXXXXXXXXXXX..XXXXXXXXXXXXXXXXXXX';

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


var log_roll = [
    '   XX   ',
    '  XXXX  ',
    ' XXX XX ',
    ' X XXXX ',
    ' XXXXXX ',
    ' XXX XX ',
    ' X XXXX ',
    ' XXXXXX ',
    ' XX  XX ',
    ' X XX X ',
    ' X XX X ',
    ' X XX X ',
    '  X  X  ',
    '   XX   '];

var brick1 = ['XXX XXX '];
var brick2 = ['X XXX X '];
var mortar = ['XXXXXXX '];


//# starts at ASCII - 0
var font_8x8 = [

    '  XXXX  ',
    ' XX  XX ',
    ' XX  XX ',
    ' XX  XX ',
    ' XX  XX ',
    ' XX  XX ',
    ' XX  XX ',
    '  XXXX  ',

    '   XX   ',
    '  XXX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '  XXXX  ',

    '  XXXX  ',
    ' X   XX ',
    '     XX ',
    '     XX ',
    '  XXXX  ',
    ' XX     ',
    ' XX     ',
    ' XXXXXX ',

    '  XXXX  ',
    ' X   XX ',
    '     XX ',
    '    XX  ',
    '    XX  ',
    '     XX ',
    ' X   XX ',
    '  XXXX  ',

    '    XX  ',
    '   XXX  ',
    '  X XX  ',
    ' X  XX  ',
    ' XXXXXX ',
    '    XX  ',
    '    XX  ',
    '    XX  ',

    ' XXXXXX ',
    ' XX     ',
    ' XX     ',
    ' XXXXX  ',
    '     XX ',
    '     XX ',
    ' X   XX ',
    ' XXXXX  ',

    '  XXXX  ',
    ' XX   X ',
    ' XX     ',
    ' XXXXX  ',
    ' XX  XX ',
    ' XX  XX ',
    ' XX  XX ',
    '  XXXX  ',

    ' XXXXXX ',
    ' X    X ',
    '     XX ',
    '    XX  ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '   XX   ',

    '  XXXX  ',
    ' XX  XX ',
    ' XX  XX ',
    '  XXXX  ',
    '  XXXX  ',
    ' XX  XX ',
    ' XX  XX ',
    '  XXXX  ',

    '  XXXX  ',
    ' XX  XX ',
    ' XX  XX ',
    ' XX  XX ',
    '  XXXXX ',
    '     XX ',
    ' X   XX ',
    '  XXXX  ',

    '        '];


var lives = [
    'X X     ',
    'X X     ',
    'X X     ',
    'X X     ',
    'X X     ',
    'X X     ',
    'X X     ',
    'X X     '];



var colon = [
    '        ',
    '   XX   ',
    '   XX   ',
    '        ',
    '        ',
    '   XX   ',
    '   XX   ',
    '        '];


var activison1 = [

    '        ',
    '    XXXX',
    ' X     X',
    'XXX XX X',
    'X X X  X',
    'XXX X  X',
    'X X X  X',
    'X X XX X'];

var activison2 = [

    '        ',
    'XXXX    ',
    '   X   X',
    ' X X  XX',
    ' X X XX ',
    ' X XXX  ',
    ' X XX   ',
    ' X X    '];

var activison3 = [

    '        ',
    'XXXXXXX ',
    'X       ',
    '  XXX X ',
    'X X   X ',
    'X XXX X ',
    'X   X X ',
    'X XXX X '];

var activison4 = [

    '        ',
    '        ',
    '        ',
    'XXX X  X',
    'X X XX X',
    'X X XXXX',
    'X X X XX',
    'XXX X  X'];


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

var jumping = 0;
var running = 0;
var direction = 0;

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

var x = 16;
var y = 0;

var pos_x = 16;
var pos_y = 0;

var vel_x = 0;
var vel_y = 0;
var accel_y = 0;

var i = 0;
var j = 0;

document.addEventListener('keydown', keyDownHandler, false);

document.addEventListener('keyup', keyUpHandler, false);



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
//    if (key === 38) {
        //up arrow
//    }
//    if (key === 40) {
        //down arrow
//    }

    if (key === 37) {
        //left arrow
        direction = 1;
        vel_x = -1.3;
    }
    if (key === 39) {
        //right arrow
        direction = 0;
        vel_x = 1.3;
    }

    if ((key === 13) || (key === 32)) {
        if (jumping === 0) {
            jumping = 1;
            running = 5;
            accel_y = 2.10;
            vel_y = -4.00;
        }
    }
}


function keyUpHandler(event) {
    var key = event.which || event.keyCode;
    if (key === 37) {
        //left arrow
        vel_x = 0;
    }
    if (key === 39) {
        //right arrow
        vel_x = 0;
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

    if (pos_y > 0) {
        accel_y = 0;
        vel_y = 0;
        pos_y = 0;
        jumping = 0;
        running = 0;
    }

    if (pos_x >= 155) {
        vel_x = 0;
        pos_x = 154;
    }

    if (pos_x <= 5) {
        vel_x = 0;
        pos_x = 6;
    }

    pos_x += vel_x;
    vel_y += accel_y * dt / 50.0;
    pos_y += vel_y;

    if (vel_x === 0) {
        if (jumping === 0) {
            running = 0;
        }
    } else {
        if ((Math.trunc(pos_x) !== x) && (jumping === 0)) {
            running += 0.5;
            if (running > 5) {
                running = 1;
            }
        }
    }

    color_p1 = (color_p1 + 8) & 0x7F;
    animation += dt / 30.0;
    if (animation >= 5.0) {
        animation = 0.0;
        color_p0 = (color_p0 + 8) & 0x78;
    }

    a = Math.trunc(animation);

    x = Math.trunc(pos_x);
    y = Math.trunc(pos_y);

    screen();
    background(0, SCREEN_Y, DARKESS_COLOR);
    background(57, 60, BACKGROUND_COLOR);

    // draw tree tops
    playfield(6, 51, plyfd_fill, TREE_PANT_COLOR);
    // draw tree leaves
    for (i = 0; i < 4; i += 1) {
        playfield(57 + i * 2, 2, tree_leavs[i], TREE_PANT_COLOR);
    }

    // draw tree trunks
    playfield(65, 52, tree_trunk, TRUNK_COLOR);

    playfield(117, 5, plyfd_fill, GROUND_COLOR);
    playfield(122, 6, grnd_open, GROUND_COLOR);
    playfield(128, 5, plyfd_fill, GROUND_COLOR);

    playfield(133, 15, grnd_open, DIRT_COLOR);

    // ladder
    for (i = 0; i < 11; i += 1) {
        ball(78, 136 + i * 4, 4, 2, DIRT_COLOR);
    }

//    brick1, brick2, mortar BRICK_COLOR, MORTAR_COLOR
    for (i = 0; i < 4; i += 1) {
        player1(136, 148 + i * 8, brick1, 1, 3, 0, BRICK_COLOR);
        player1(136, 151 + i * 8, mortar, 1, 1, 0, MORTAR_COLOR);
        player1(136, 152 + i * 8, brick2, 1, 3, 0, BRICK_COLOR);
        player1(136, 155 + i * 8, mortar, 1, 1, 0, MORTAR_COLOR);
    }

    playfield(180, 6, plyfd_fill, DIRT_COLOR);

    player1(124, 118, log_roll, 1, 1, 0, HAIR_LOG_COLOR);



    j = Math.trunc(running);


//    j = Math.trunc((x % 8) / 2) + 1;

    for (i = 0; i < 21; i += 1) {
        player0(x, y + 104 + i, harry.slice(i + j * 21, i + j * 21 + 1), 1, 1, direction, nem_color[i]);
    }

    player1(34, 59, branch1, 1, 1, 0, TRUNK_COLOR);
    player1(66, 59, branch2, 1, 1, 0, TRUNK_COLOR);
    player1(86, 59, branch3, 1, 1, 0, TRUNK_COLOR);
    player1(118, 59, branch4, 1, 1, 0, TRUNK_COLOR);

    ball(0, 0, 8, SCREEN_Y, DARKESS_COLOR);

    i = 2;
    player1(36, 10, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);
    i = 0;
    player1(36 + 8, 10, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);
    player1(36 + 16, 10, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);
    player1(36 + 24, 10, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);

    player1(36 - 16, 22, lives.slice(0, 8), 1, 1, 0, LETTERING_COLOR);
    i = 2;
    player1(36 - 8, 22, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);
    i = 0;
    player1(36, 22, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);
    player1(36 + 8, 22, colon.slice(0, 8), 1, 1, 0, LETTERING_COLOR);
    player1(36 + 16, 22, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);
    player1(36 + 24, 22, font_8x8.slice(i * 8, i * 8 + 8), 1, 1, 0, LETTERING_COLOR);

    i = 29;
    player1(i, 189, activison1, 1, 1, 0, LETTERING_COLOR);
    player1(i + 8, 189, activison2, 1, 1, 0, LETTERING_COLOR);
    player1(i + 16, 189, activison3, 1, 1, 0, LETTERING_COLOR);
    player1(i + 24, 189, activison4, 1, 1, 0, LETTERING_COLOR);

    requestAnimationFrame(draw);
}



draw();
