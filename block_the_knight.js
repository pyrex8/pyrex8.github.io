/*global myCanvas, keyDownHandler, tapDownHandler,  SCREEN_X, SCREEN_Y, INTERLACE, PF, BL, P0, P1, M0, M1, sound, screen, reset_collision, get_collision, background, print_large, print_small, number_large, number_small, playfield, player0, player1, ball, missile0, missile1, requestAnimationFrame*/
/*jslint node: true */
/*jslint bitwise: true*/
'use strict';
document.getElementById(myCanvas);


var nemesis = [

//# nemesis 1
    '        ',
    '        ',
    '        ',
    '       X',
    '    XXXX',
    '  XXXXXX',
    '    XXXX',
    '       X',
    '        ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '        ',
    '       X',
    '    XXX ',
    '  XXXXXX',
    '    XXX ',
    '       X',
    '        ',
    '        ',
    '        ',
    '        ',

//# nemesis 2
    '        ',
    '        ',
    '        ',
    '    X   ',
    '   XXX  ',
    'XXXXXXXX',
    ' XXXXXXX',
    ' XXXXXX ',
    '        ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '        ',
    '     X  ',
    '   XXX  ',
    'XXXXXXXX',
    ' XXXXXXX',
    ' XXXXXX ',
    '        ',
    '        ',
    '        ',
    '        ',

//# nemesis 3
    '        ',
    '        ',
    '        ',
    '   X    ',
    '  X   X ',
    ' XXXXX  ',
    '  XXXXX ',
    ' XX   X ',
    '        ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '        ',
    '   X    ',
    '  X     ',
    ' XXXXXXX',
    '  XXXXX ',
    ' XX   X ',
    '        ',
    '        ',
    '        ',
    '        ',

//# nemesis 4
    '        ',
    '        ',
    '        ',
    '       X',
    '      XX',
    '   XXXXX',
    'XXXXXXXX',
    '    XXX ',
    '        ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '        ',
    '      X ',
    '     XXX',
    '   XXXXX',
    'XXXXXXXX',
    '    XXX ',
    '        ',
    '        ',
    '        ',
    '        ',

//# nemesis 5
    '        ',
    '        ',
    '        ',
    '  XX    ',
    'XXXX    ',
    '  X   X ',
    ' XXXXXXX',
    ' XXXXXX ',
    '        ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '        ',
    '  XX    ',
    'XXXX    ',
    '  X    X',
    ' XXXXXXX',
    ' XXXXXX ',
    '        ',
    '        ',
    '        ',
    '        ',

//# nemesis 6
    '        ',
    '        ',
    '        ',
    ' XXX   X',
    '  X    X',
    'XXXXXXXX',
    'XXXXXXXX',
    '  X     ',
    ' XXX    ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '        ',
    ' XXX   X',
    'X X    X',
    'XXXXXXXX',
    'XXXXXXXX',
    'X X     ',
    ' XXX    ',
    '        ',
    '        ',
    '        ',

//# nemesis 7
    '        ',
    '        ',
    '        ',
    'XXXXX   ',
    '  X    X',
    'XXXX  XX',
    'X XXXXX ',
    'X XX    ',
    'XXXX    ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '        ',
    ' XXX    ',
    '  X    X',
    'XXXX  XX',
    'X XXXXX ',
    'X XX    ',
    'XXXX    ',
    '        ',
    '        ',
    '        ',

//# nemesis 8
    '        ',
    '        ',
    '      XX',
    '     XX ',
    ' XXXXXXX',
    'XXX  XX ',
    ' XXXXXXX',
    '     XX ',
    '      XX',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '      XX',
    '     XX ',
    ' XXXXXX ',
    'XXX  XX ',
    ' XXXXXX ',
    '     XX ',
    '      XX',
    '        ',
    '        ',
    '        ',

//# nemesis 9
    '        ',
    '        ',
    'XX    XX',
    '  X  X  ',
    ' XXXXXX ',
    'XXXXXXX ',
    ' XXXXXX ',
    '  X  X  ',
    'XX    XX',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '  X  X  ',
    ' X    X ',
    ' XXXXXX ',
    'XXXXXXX ',
    ' XXXXXX ',
    ' X    X ',
    '  X  X  ',
    '        ',
    '        ',
    '        ',

//# nemesis 10
    '        ',
    '        ',
    '  XXX   ',
    ' XX XX  ',
    'XXXXXXX ',
    '    XXX ',
    'XXXXXXX ',
    ' XXXXX  ',
    '  XXX   ',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '  XXX   ',
    ' XX XX  ',
    'XXXXXXX ',
    'XXXXXXX ',
    'XXXXXXX ',
    ' XXXXX  ',
    '  XXX   ',
    '        ',
    '        ',
    '        ',

//# nemesis 11
    '        ',
    '        ',
    '  XXXXXX',
    '  XXXXXX',
    '   XXX  ',
    'XXXXXX  ',
    '   XXX  ',
    '  XXXXXX',
    '  XXXXXX',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '  XXXXXX',
    '  XXXXXX',
    '   XXX  ',
    'XXXX X  ',
    '   XXX  ',
    '  XXXXXX',
    '  XXXXXX',
    '        ',
    '        ',
    '        ',

//# nemesis 12
    '        ',
    '        ',
    '      XX',
    '     XX ',
    ' XXXXXX ',
    'XX XX XX',
    ' XXXXXX ',
    '     XX ',
    '      XX',
    '        ',
    '        ',
    '        ',

    '        ',
    '        ',
    '      XX',
    '     XX ',
    ' XXXXXX ',
    'XX XX X ',
    ' XXXXXX ',
    '     XX ',
    '      XX',
    '        ',
    '        ',
    '        ',

//# nemesis 13
    '        ',
    '        ',
    'X  XX  X',
    ' X XX X ',
    '  XXXX  ',
    '   XX   ',
    '   XX   ',
    '  XXXX  ',
    ' X    X ',
    'X      X',
    '        ',
    '        ',


    '        ',
    '        ',
    '   XX   ',
    'XX XX XX',
    '  XXXX  ',
    '   XX   ',
    '   XX   ',
    '  XXXX  ',
    ' X    X ',
    'X      X',
    '        ',
    '        ',

//# nemesis 14
    '        ',
    '        ',
    '   XXX X',
    ' XX X XX',
    'X XXXXX ',
    '  XXXXX ',
    '  XXXXX ',
    '  XXXX  ',
    ' XXX    ',
    'XX      ',
    '        ',
    '        ',

    '        ',
    '        ',
    '   XXX X',
    ' XX X XX',
    'X XXXXX ',
    '  XXXXX ',
    '  XXXXX ',
    '  XXXX  ',
    'X XX    ',
    ' X      ',
    '        ',
    '        ',

//# nemesis 15
    '        ',
    '        ',
    '  XXXX  ',
    ' XX XXX ',
    'XXXXXXXX',
    'X XXXX X',
    'X XXXX X',
    '  X  X  ',
    '  X  X  ',
    ' XX  XX ',
    '        ',
    '        ',

    '        ',
    '        ',
    '  XXXX  ',
    ' XXX XX ',
    'XXXXXXXX',
    'X XXXX X',
    'X XXXX X',
    '  X  X  ',
    '  X  X  ',
    ' XX  XX ',
    '        ',
    '        ',

//# nemesis 16
    '        ',
    '        ',
    ' XXX XXX',
    ' XXX XXX',
    '  X   X ',
    'XXXXXXX ',
    'XX XXXX ',
    '  X   X ',
    ' XXX XXX',
    ' XXX XXX',
    '        ',
    '        ',

    '        ',
    '        ',
    ' XXX XXX',
    ' XXX XXX',
    '  X   X ',
    'XX XXXX ',
    'XXXXXXX ',
    '  X   X ',
    ' XXX XXX',
    ' XXX XXX',
    '        ',
    '        ',

//# nemesis 17
    '        ',
    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'X XXX XX',
    'X  XX  X',
    'XXXXXXXX',
    'XXXXXXXX',
    'XXXXXXXX',
    ' X X X X',
    '        ',
    '        ',

    '        ',
    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'X  XX  X',
    'XX XXX X',
    'XXXXXXXX',
    'XXXXXXXX',
    'XXXXXXXX',
    ' X X X X',
    '        ',
    '        ',

//# nemesis 18
    '        ',
    '        ',
    ' XXX    ',
    '   X    ',
    'X XX   X',
    ' X  XXXX',
    ' X  XXXX',
    'X XX   X',
    '   X    ',
    ' XXX    ',
    '        ',
    '        ',

    '        ',
    '        ',
    '      X ',
    '    XXX ',
    'X  XX  X',
    ' XX  XXX',
    ' XX  XXX',
    'X  XX  X',
    '    XXX ',
    '      X ',
    '        ',
    '        ',

//# nemesis 19
    '        ',
    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'XX XX XX',
    'XXXXXXXX',
    'X XXXX X',
    'XX    XX',
    ' XXXXXX ',
    '  XXXX  ',
    '        ',
    '        ',

    '        ',
    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'XXXXXXXX',
    'XXXXXXXX',
    'X XXXX X',
    'XX    XX',
    ' XXXXXX ',
    '  XXXX  ',
    '        ',
    '        ',

//# nemesis 20
    '        ',
    '       X',
    ' X    X ',
    'X X  X  ',
    '   XX   ',
    '  XXXX  ',
    ' X XX XX',
    ' XXXXXX ',
    ' XXXXXX ',
    ' X    X ',
    'XXX  XXX',
    '        ',

    '        ',
    'X       ',
    ' X    X ',
    '  X  X X',
    '   XX   ',
    '  XXXX  ',
    'XX XX X ',
    ' XXXXXX ',
    ' XXXXXX ',
    ' X    X ',
    'XXX  XXX',
    '        ',

//# nemesis 21
    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    ' X XX X ',
    'XXXXXXXX',
    'X XXXX X',
    'X X  X X',
    'X  XX  X',
    'X  XX  X',
    'X X  X X',
    'X X  X X',
    '        ',

    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    ' X XX X ',
    'XXXXXXXX',
    'X XXXX X',
    'X X  X X',
    ' X XX X ',
    ' X XX X ',
    ' X XX X ',
    ' X    X ',
    '        ',

//# nemesis 22
    '        ',
    'X      X',
    'X      X',
    'X X  X X',
    'X XXXX X',
    ' X XX X ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '  X  X  ',
    'XX    XX',
    '        ',

    '        ',
    '   XX   ',
    ' X XX X ',
    'X XXXX X',
    'X  XX  X',
    'X  XX  X',
    'X  XX  X',
    '  X  X  ',
    '  X  X  ',
    ' X    X ',
    '  X  X  ',
    '        ',

//# nemesis 23
    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'XXX X XX',
    ' XXXXXX ',
    '  XXXX  ',
    '  X  X  ',
    '  X  X  ',
    ' X    X ',
    ' X    X ',
    'X      X',
    '        ',

    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'XX X XXX',
    ' XXXXXX ',
    '  XXXX  ',
    '  X  X  ',
    '  X  X  ',
    ' X    X ',
    ' X XX X ',
    '  X  X  ',
    '        ',

//# nemesis 24
    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'XXXX  XX',
    'XXXX  XX',
    'XXXXXXXX',
    ' X XXX  ',
    ' X   X  ',
    ' X   X  ',
    ' X   X  ',
    ' XXX XXX',
    '        ',

    '        ',
    '  XXXX  ',
    ' XXXXXX ',
    'XX  XXXX',
    'XX  XXXX',
    'XXXXXXXX',
    '  XXX X ',
    '  X   X ',
    '  X   X ',
    '  X   X ',
    'XXX XXX ',
    '        ',

//# nemesis 25
    '        ',
    '   XX   ',
    ' X XX X ',
    'XXXXXXXX',
    'XXXXXXXX',
    ' X    X ',
    ' X    X ',
    ' X   X  ',
    'X   X   ',
    'X   X   ',
    'X  X    ',
    '        ',

    '        ',
    '   XX   ',
    ' XXXXXX ',
    'XX XX XX',
    'XXXXXXXX',
    ' X    X ',
    ' X    X ',
    '  X   X ',
    '   X   X',
    '   X   X',
    '    X  X',
    '        ',

//# nemesis 26
    '        ',
    '   XX   ',
    '   XX   ',
    '        ',
    '  XXXX  ',
    ' X XX X ',
    ' X XX X ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '  XXX   ',
    '        ',

    '        ',
    '   XX   ',
    '   XX   ',
    '        ',
    '  XXXX  ',
    ' X XX X ',
    ' X XX X ',
    '   XX   ',
    '   XX   ',
    '   XX   ',
    '  XX X  ',
    '        ',

//# nemesis 27
    ' XX     ',
    'XXX XX  ',
    ' X   X  ',
    ' X  XX  ',
    'XXXXXX  ',
    ' X  XXX ',
    ' XXXXXXX',
    '  XXXXXX',
    '   XXXX ',
    '    XXX ',
    '     XX ',
    '      X ',

    ' XX     ',
    'XXX XX X',
    ' X   XXX',
    ' X  XXXX',
    'XXXXXXXX',
    ' X  XXX ',
    ' XXXXXXX',
    '  XXXXXX',
    '   XXXX ',
    '    X   ',
    '        ',
    '        ',

//# nemesis 28
    '   XX   ',
    ' XXXXXX ',
    '  XXX   ',
    '   XX   ',
    ' XXXXXX ',
    'X  XX  X',
    'X  XX  X',
    'X  XX  X',
    ' X XX X ',
    '  XXXX  ',
    ' XX  XX ',
    'XX    XX',

    '        ',
    '     XX ',
    '     XX ',
    '   XXXXX',
    '    XXX ',
    'XXX  XX ',
    '  XXXXX ',
    '     XX ',
    '     XX ',
    '   XXXX ',
    '   X X  ',
    '  XX XXX',

//# the boss
    '    XXX ',
    ' XXXX XX',
    '    XXX ',
    '     X  ',
    '    XXX ',
    '   XXXXX',
    '  XX   X',
    '  XX  XX',
    '   XXXX ',
    '     X  ',
    '   X  X ',
    '   XXX  ',

    ' XX XXX ',
    '   XX XX',
    ' XX XXX ',
    '     X  ',
    '    XXX ',
    '   XXXXX',
    '  XX   X',
    '  XX  XX',
    '   XXXX ',
    '     X  ',
    '   X  X ',
    '   XXX  ',

//# chalice

    '        ',
    'X      X',
    'X      X',
    'XX    XX',
    ' XXXXXX ',
    ' XXXXXX ',
    '  XXXX  ',
    '   XX   ',
    '   XX   ',
    ' XXXXXX ',
    '        ',
    '        ',

    '        ',
    'X      X',
    'X      X',
    'XX    XX',
    ' XXXXXX ',
    ' XXXXXX ',
    '  XXXX  ',
    '   XX   ',
    '   XX   ',
    ' XXXXXX ',
    '        ',
    '        '];







var level = [

    //# level 1
    '........................................',
    '........................................',
    '....................X...................',
    '....................X...................',
    '....................X...................',
    '....................X...................',

    //# level 2
    '................................X.......',
    '................................X.......',
    '................X...............X.......',
    '................X...............X.......',
    '................X.......................',
    '................X.......................',

    //# level 3
    '............................X...........',
    '............................X...........',
    '............X...............X...........',
    '............X...............X...........',
    '............X...........................',
    '............X...........................',

    //# level 4
    '..XXXXX.............XXXXX...............',
    '...XXX...............XXX................',
    '....X.................X.................',
    '.............X.................X........',
    '............XXX...............XXX.......',
    '...........XXXXX.............XXXXX......',

    //# level 5
    '.XXXXXXX...........XXXXXXX..............',
    '..XXXXX.............XXXXX...............',
    '...XXX.......X.......XXX.......X........',
    '....X.......XXX.......X.......XXX.......',
    '...........XXXXX.............XXXXX......',
    '..........XXXXXXX...........XXXXXXX.....',

    //# level 6
    'XXXXXXXXX.........XXXXXXXXX.............',
    '.XXXXXXX...........XXXXXXX..............',
    '..XXXXX.....XXX.....XXXXX.....XXX.......',
    '...XXX.....XXXXX.....XXX.....XXXXX......',
    '..........XXXXXXX...........XXXXXXX.....',
    '.........XXXXXXXXX.........XXXXXXXXX....',

    //# level 7
    '.XXXXXXXXX........XXXXXXXXX.............',
    '........................................',
    '........................................',
    '........................................',
    '........................................',
    '.........XXXXXXXXX.........XXXXXXXXX....',

    //# level 8
    'XXXXXXXXXXX......XXXXXXXXXXX............',
    '........................................',
    '........................................',
    '........................................',
    '........................................',
    '........XXXXXXXXXXX.......XXXXXXXXXXX...',

    //# level 9
    '...........................XXXXX........',
    '.............XXXXX.........XXXXX........',
    '.............XXXXX.........XXXXX........',
    '.............XXXXX.........XXXXX........',
    '.............XXXXX.........XXXXX........',
    '.............XXXXX......................',

    //# level 10
    '...........................XXXXXX.......',
    '.............XXXXXX........XXXXXX.......',
    '.............XXXXXX........XXXXXX.......',
    '.............XXXXXX........XXXXXX.......',
    '.............XXXXXX........XXXXXX.......',
    '.............XXXXXX.....................',

    //# level 11
    '........................X...............',
    '........................X...............',
    '................X.......X...............',
    '................X.......X...............',
    '................X.......................',
    '................X.......................',

    //# level 12
    '......................X.................',
    '......................X.................',
    '......................X.................',
    '.................X......................',
    '.................X......................',
    '.................X......................',

    //# level 13
    '..................X.....................',
    '..................X.....................',
    '..................X.....................',
    '..........X...............X.............',
    '..........X...............X.............',
    '..........X...............X.............',

    //# level 14
    '..............X...........X.............',
    '..........................X.............',
    '........................................',
    '........................................',
    '..............X.........................',
    '..............X...........X.............',

    //# level 15
    '....................X...................',
    '........................................',
    '...........X..................X.........',
    '...........X..................X.........',
    '...........X..................X.........',
    '...........X........X.........X.........',

    //# level 16
    '...........X........X........X..........',
    '....................X...................',
    '........................................',
    '........................................',
    '...........X.................X..........',
    '...........X........X........X..........',

    //# level 17
    '..................X...X.................',
    '......................X.................',
    '..............X.......X.................',
    '..............X.......X.................',
    '..............X.........................',
    '..............X...X.....................',

    //# level 18
    '..................X.....................',
    '........................................',
    '............X...........X...............',
    '............X...........X...............',
    '........................................',
    '..................X.....................',

    //# level 19
    '.... .............X................X....',
    '.... ..............................X....',
    '.... ...................................',
    '........................................',
    '..................X.....................',
    '.... .............X................X....',

    //# level 20
    '...................X................X...',
    '...................X................X...',
    '..........X........X........X.......X...',
    '..........X........X........X...........',
    '..........X.................X...........',
    '..........X.................X...........',

    //# level 21
    '.........X.......X.......X.......X......',
    '.................X...............X......',
    '........................................',
    '........................................',
    '.........X...............X..............',
    '.........X.......X.......X.......X......',

    //# level 22
    '...............XX..........XX...........',
    '...........................XX...........',
    '........................................',
    '........................................',
    '................XX......................',
    '................XX........XX............',

    //# level 23
    '....................X..........X........',
    '........................................',
    '........................................',
    '........................................',
    '........................................',
    '..........X..............X..............',

    //# level 24
    '..............X................X........',
    '........................................',
    '........................................',
    '........................................',
    '........................................',
    '.......X........X........X.......X......',

    //# level 25
    '...................X................X...',
    '..........X.................X...........',
    '........................................',
    '........................................',
    '...................X................X...',
    '..........X.................X...........',

    //# level 26
    '...X...................X................',
    '...X...................X................',
    'XXXXXXX.............XXXXXXX.............',
    '..........XXXXXXX.............XXXXXXX...',
    '.............X...................X......',
    '.............X...................X......',

    //# level 27
    '...X...................X................',
    '...X...................X................',
    '..XXX.......XXX.......XXX.......XXX.....',
    '..XXX.......XXX.......XXX.......XXX.....',
    '.............X...................X......',
    '.............X...................X......',

    //# level 28
    '...X...................X................',
    '...X.........X.........X.........X......',
    '.XXXXX......XXX......XXXXX......XXX.....',
    '..XXX......XXXXX......XXX......XXXXX....',
    '...X.........X.........X.........X......',
    '.............X...................X......',

    //# level 29
    'XXX..............................X......',
    'X.XXXXX......X.X.X..X.X.X.......X.......',
    'XXX.X.X......XXXXX..XXXXX......XXXXXXX..',
    '.............XXXXXXXXXXXX.......X.......',
    '..............XXXX..XXXX.........X......',
    '..............XXXX..XXXX................',

    //# level 30
    '........................................',
    '............ X.X.X..X.X.X...............',
    '............ XXXXX..XXXXX...............',
    '............ XXXXXXXXXXXX...............',
    '..............XXXX..XXXX................',
    '..............XXXX..XXXX................'];


// Game states
var PAUSED = 1;
var READY = 0;
var PLAYING = 2;
var DONE = 3;


var blocky = [
    'XXXX    ',
    'XXXX    ',
    'XXXX    ',
    'XXXX    '];

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

var color_p0 = 2 + (8 * 3);
var color_p1 = 1 + (8 * 5);
var color_pf = 3 + (8 * 8);
var color_bk1 = 8;
var color_bk2 = 7 + 8;


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
var pos_x = 4;
var pos_y = (SCREEN_Y / 2 + field_width) * 50;
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

        background(0, SCREEN_Y, color_bk1);
        background(SCREEN_Y / 2 - field_width, 2 * field_width, color_bk2);

        anamation += dt / 100.0;
        if (anamation >= 2.0) {
            anamation = 0.0;
        }

        d = Math.trunc(fire_x / 50);

        if ((level_number < NUM_LEVELS) && (vel_x > 0)) {
            nemesis_y += direction1 * dt / 50.0;
            missile1(d, fire_y + 6, 1, 1, color_p1);
        }


        if (nemesis_y < (SCREEN_Y / 2 - field_width) - 8) {
            nemesis_y = 84.0;
        }

        if (nemesis_y > (SCREEN_Y / 2 + field_width) + 8) {
            nemesis_y = 84.0;
        }

        pos_x += vel_x * dt / 50.0;
        pos_y += vel_y * dt / 50.0;

        if (pos_y > (SCREEN_Y / 2 + field_width - height0) * 50) {
            vel_y = 0;
            pos_y = (SCREEN_Y / 2 + field_width - height0) * 50;
            jumping = 0;
            direction0 = -1.0;
        }

        if (pos_y < (SCREEN_Y / 2 - field_width + height0) * 50) {
            vel_y = 0;
            pos_y = (SCREEN_Y / 2 - field_width + height0) * 50;
            jumping = 0;
            direction0 = 1.0;
        }

        if (pos_x > (SCREEN_X + 7) * 50) {
            level_number += 1;
            if (level_number > NUM_LEVELS) {
                level_number = NUM_LEVELS;
            }
            pos_x = 0;
            pos_y = (SCREEN_Y / 2 + field_width) * 50;
            jumping = 0;
            direction0 = -1.0;
            color_p0 = (color_p0 + 8) & 0x7F;
            color_p1 = (color_p1 + 8) & 0x7F;
            color_pf = (color_pf + 8) & 0x7F;
            color_bk1 = (color_bk1 + 8) & 0x7F;
            color_bk2 = (color_bk2 + 8) & 0x7F;
            fire = 0;
        }

        if (level_number === NUM_LEVELS) {
            pos_x = (SCREEN_X - 14) * 50;
            pos_y = (SCREEN_Y / 2 + 2) * 50;
        }

        player0(Math.trunc(pos_x / 50), Math.trunc(pos_y / 50) - 4, blocky, 1, 2, 0, color_p0);

        a = Math.trunc(anamation);
        b = level_number - 1;
        c = Math.trunc(nemesis_y);
        for (i = 0; i < 6; i += 1) {
            playfield(80 + 8 * i, 8, level[i + 6 * b], color_pf);
        }

        if (direction1 < 0) {
            missile0(152, SCREEN_Y / 2 - field_width - 1, 8, 1, color_p0);
        } else {
            missile0(152, SCREEN_Y / 2 + field_width, 8, 1, color_p0);
        }

        if (fire === 0) {
            fire = 1;
            fire_x = 152 * 50;
            fire_y = c;
            fire_v = -120;
        } else {
            fire_x += fire_v * dt / 50.0;
        }

        if (fire_x < 0) {
            fire_x = 0;
            fire = 0;
        }

        player1(152, c, nemesis.slice((b * 24) + (a * 12), (b * 24) + (a * 12) + 12), 1, 2, 0, color_p1);

        if (retries > 999) {
            retries = 999;
        }

        number_large(9, 2, retries, 2, color_p0);
        number_large(24, 2, level_number, 2, color_p0);

        print_large(28, 2, '-30', 2, color_p0);

        //# Start screen
        if (game_state === READY) {
            level_number = 1;
            retries = 0;
            vel_x = 0;
            vel_y = 0;
            pos_x = 0;
            pos_y = (SCREEN_Y / 2 + field_width - height0) * 50;
            print_large(2, 4 + 32, '  READY', 2, color_p0);
            print_large(2, 4 + 48, ' TO START', 2, color_p0);
        }

        //# End SCREEN
        if (level_number === NUM_LEVELS) {
            game_state = DONE;
            vel_x = 0;
            vel_y = 0;
            pos_x = 0;
            pos_y = (SCREEN_Y / 2 + field_width - height0) * 50;
            print_large(2, 4 + 32, '   YOU', 2, color_p0);
            print_large(2, 4 + 48, ' DID IT!', 2, color_p0);

            print_large(3, 4 + 142, 'USE PAUSE', 2, color_p0);
            print_large(1, 4 + 158, '  BUTTON', 2, color_p0);
            print_large(1, 4 + 174, 'TO RESTART', 2, color_p0);
        }

        if (get_collision(P0, P1) === 1) {
            sound(2, sound_vol, freq_2, type_2);
            sound_duration = 5;
            retries += 1;
            vel_y = 0;
            pos_x = 0;
            pos_y = (SCREEN_Y / 2 + field_width) * 50;
            jumping = 0;
            direction0 = -1.0;
            fire = 0;
        }

        if (get_collision(P0, M1) === 1) {
            sound(2, sound_vol, freq_2, type_2);
            sound_duration = 5;
            retries += 1;
            vel_y = 0;
            pos_x = 0;
            pos_y = (SCREEN_Y / 2 + field_width) * 50;
            jumping = 0;
            direction0 = -1.0;
            fire = 0;
        }

        if (get_collision(M1, PF) === 1) {
            fire = 0;
        }

        if (get_collision(P0, PF) === 1) {
            sound(2, sound_vol, freq_2, type_2);
            sound_duration = 5;
            retries += 1;
            vel_y = 0;
            pos_x = 0;
            pos_y = (SCREEN_Y / 2 + field_width) * 50;
            jumping = 0;
            direction0 = -1.0;
            fire = 0;
        }

        if (get_collision(P1, M0) === 1) {
            direction1 = -direction1;
        }


        if (fire0 === true) {
            fire0 = false;
            if (vel_x > 0) {
                if (jumping === 0) {
                    sound(1, sound_vol, freq_1, type_1);
                    sound_duration = 5;
                    jumping = 1;
                    vel_y = 360 * direction0;
                }
            } else {
                vel_x = 240;
            }
        }
    }
    requestAnimationFrame(draw);
}

draw();
