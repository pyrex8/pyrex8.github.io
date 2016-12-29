/*jslint node: true */
/*jslint bitwise: true*/
/*global Float32Array*/
'use strict';

// From Stella running color.bin in Ubuntu using Gpick

var colorsHex = [
    '#000000', '#4A4A4A', '#6F6F6F', '#8E8E8E', '#AAAAAA', '#C0C0C0', '#D6D6D6', '#ECECEC',
    '#484800', '#69690F', '#86861D', '#A2A22A', '#BBBB35', '#D2D240', '#E8E84A', '#FCFC54',
    '#7C2C00', '#904811', '#A26221', '#B47A30', '#C3903D', '#D2A44A', '#DFB755', '#ECC860',
    '#901C00', '#A33915', '#B55328', '#C66C3A', '#D5824A', '#E39759', '#F0AA67', '#FCBC74',
    '#940000', '#A71A1A', '#B83232', '#C84848', '#D65C5C', '#E46F6F', '#F08080', '#FC9090',
    '#840064', '#97197A', '#A8308F', '#B846A2', '#C659B3', '#D46CC3', '#E07CD2', '#EC8CE0',
    '#500084', '#68199A', '#7D30AD', '#9246C0', '#A459D0', '#B56CE0', '#C57CEE', '#D48CFC',
    '#140090', '#331AA3', '#4E32B5', '#6848C6', '#7F5CD5', '#956FE3', '#A980F0', '#BC90FC',
    '#000094', '#181AA7', '#2D32B8', '#4248C8', '#545CD6', '#656FE4', '#7580F0', '#8490FC',
    '#001C88', '#183B9D', '#2D57B0', '#4272C2', '#548AD2', '#65A0E1', '#75B5EF', '#83C7FB',
    '#003064', '#185080', '#2D6D98', '#4288B0', '#54A0C5', '#65B7D9', '#72C7E5', '#84E0FC',
    '#004030', '#18624E', '#2D8169', '#429E82', '#54B899', '#65D1AE', '#75E7C2', '#84FCD4',
    '#004400', '#1A661A', '#328432', '#48A048', '#5CBA5C', '#6FD26F', '#80E880', '#90FC90',
    '#143C00', '#355F18', '#527E2D', '#6E9C42', '#87B754', '#9ED065', '#B4E775', '#C8FC84',
    '#303800', '#505916', '#6D762B', '#88923E', '#A0AB4F', '#B7C25F', '#CCD86E', '#E0EC7C',
    '#482C00', '#694D14', '#866A26', '#A28638', '#BB9F47', '#D2B656', '#E8CC63', '#FCE070'];



// var #!/usr/bin/env python
//''' 3x5 font http://robey.lag.net/2010/01/23/tiny-monospace-font.html'''



//# starts at ASCII 32 - space
var font_3x5 = [
    '   ',
    '   ',
    '   ',
    '   ',
    '   ',

    ' X ',
    ' X ',
    ' X ',
    '   ',
    ' X ',

    'X X',
    'X X',
    '   ',
    '   ',
    '   ',

    'X X',
    'XXX',
    'X X',
    'XXX',
    'X X',

    ' XX',
    'XX ',
    ' XX',
    'XX ',
    ' X ',

    'X  ',
    '  X',
    ' X ',
    'X  ',
    '  X',

    'XX ',
    'XX ',
    'XXX',
    'X X',
    ' XX',

    ' X ',
    '   ',
    '   ',
    '   ',
    '   ',

    '  X',
    ' X ',
    ' X ',
    ' X ',
    '  X',

    'X  ',
    ' X ',
    ' X ',
    ' X ',
    'X  ',

    '   ',
    'X X',
    ' X ',
    'X X',
    '   ',

    '   ',
    ' X ',
    'XXX',
    ' X ',
    '   ',

    '   ',
    '   ',
    '   ',
    ' X ',
    'X  ',

    '   ',
    '   ',
    'XXX',
    '   ',
    '   ',

    '   ',
    '   ',
    '   ',
    '   ',
    ' X ',

    '  X',
    '  X',
    ' X ',
    'X  ',
    'X  ',

    'XXX',
    'X X',
    'X X',
    'X X',
    'XXX',

    '  X',
    '  X',
    '  X',
    '  X',
    '  X',

    'XXX',
    '  X',
    'XXX',
    'X  ',
    'XXX',

    'XXX',
    '  X',
    'XXX',
    '  X',
    'XXX',

    'X X',
    'X X',
    'XXX',
    '  X',
    '  X',

    'XXX',
    'X  ',
    'XXX',
    '  X',
    'XXX',

    'XXX',
    'X  ',
    'XXX',
    'X X',
    'XXX',

    'XXX',
    '  X',
    '  X',
    '  X',
    '  X',

    'XXX',
    'X X',
    'XXX',
    'X X',
    'XXX',

    'XXX',
    'X X',
    'XXX',
    '  X',
    'XXX',

    '   ',
    ' X ',
    '   ',
    ' X ',
    '   ',

    '   ',
    ' X ',
    '   ',
    ' X ',
    'X  ',

    '  X',
    ' X ',
    'X  ',
    ' X ',
    '  X',

    '   ',
    'XXX',
    '   ',
    'XXX',
    '   ',

    'X  ',
    ' X ',
    '  X',
    ' X ',
    'X  ',

    'XXX',
    '  X',
    ' X ',
    '   ',
    ' X ',

    ' X ',
    'X X',
    'XXX',
    'X  ',
    ' XX',

    ' X ',
    'X X',
    'XXX',
    'X X',
    'X X',

    'XX ',
    'X X',
    'XX ',
    'X X',
    'XX ',

    ' XX',
    'X  ',
    'X  ',
    'X  ',
    ' XX',

    'XX ',
    'X X',
    'X X',
    'X X',
    'XX ',

    'XXX',
    'X  ',
    'XXX',
    'X  ',
    'XXX',

    'XXX',
    'X  ',
    'XXX',
    'X  ',
    'X  ',

    ' XX',
    'X  ',
    'XXX',
    'X X',
    ' XX',

    'X X',
    'X X',
    'XXX',
    'X X',
    'X X',

    'XXX',
    ' X ',
    ' X ',
    ' X ',
    'XXX',

    '  X',
    '  X',
    '  X',
    'X X',
    ' X ',

    'X X',
    'X X',
    'XX ',
    'X X',
    'X X',

    'X  ',
    'X  ',
    'X  ',
    'X  ',
    'XXX',

    'X X',
    'XXX',
    'XXX',
    'X X',
    'X X',

    'X X',
    'XXX',
    'XXX',
    'XXX',
    'X X',

    'XXX',
    'X X',
    'X X',
    'X X',
    'XXX',

    'XX ',
    'X X',
    'XX ',
    'X  ',
    'X  ',

    ' X ',
    'X X',
    'X X',
    'X X',
    ' XX',

    'XX ',
    'X X',
    'XX ',
    'XX ',
    'X X',

    ' XX',
    'X  ',
    ' X ',
    '  X',
    'XX ',

    'XXX',
    ' X ',
    ' X ',
    ' X ',
    ' X ',

    'X X',
    'X X',
    'X X',
    'X X',
    ' XX',

    'X X',
    'X X',
    'X X',
    ' X ',
    ' X ',

    'X X',
    'X X',
    'XXX',
    'XXX',
    'X X',

    'X X',
    'X X',
    ' X ',
    'X X',
    'X X',

    'X X',
    'X X',
    ' X ',
    ' X ',
    ' X ',

    'XXX',
    '  X',
    ' X ',
    'X  ',
    'XXX',

    'XXX',
    'X  ',
    'X  ',
    'X  ',
    'XXX',

    '   ',
    'X  ',
    ' X ',
    '  X',
    '   ',

    'XXX',
    '  X',
    '  X',
    '  X',
    'XXX',

    ' X ',
    'X X',
    '   ',
    '   ',
    '   ',

    '   ',
    '   ',
    '   ',
    '   ',
    'XXX',

    'X  ',
    ' X ',
    '   ',
    '   ',
    '   '];



// this is to satify jslint
var ctx = ctx || {};
var canvas = canvas || {};

var SCREEN_X = 160;
var SCREEN_Y = 208;

var INTERLACE = 2;

var PF_PIXEL = 4;

var NUMBER_OF_OBJECTS = 6;
//# bit xs for collison detection
//# bl, pf, m1, p1, m0, p0
var BL = 0;
var P0 = 1;
var M0 = 2;
var P1 = 3;
var M1 = 4;
var PF = 5;

var collision_detection = [NUMBER_OF_OBJECTS];
var collision_array = [SCREEN_X * SCREEN_Y];


// 3.58MHz clock divided by 114
var pixelclock = 3580000;
// CPUclock = pixelclock/3
var f1 = pixelclock / 114;

// from TiaSound.c

var POLY1_SIZE = 2;
var POLY4_SIZE = 15;
var POLY5_SIZE = 31;
var POLY9_SIZE = POLY4_SIZE * POLY5_SIZE;

var audc_empty_poly1 = new Float32Array(POLY1_SIZE);
var audc_empty_poly4 = new Float32Array(POLY4_SIZE);
var audc_empty_poly5 = new Float32Array(POLY5_SIZE);
var audc_empty_poly9 = new Float32Array(POLY9_SIZE);

var audc_00_11 = new Float32Array([1, 1]);
var audc_01_02 = new Float32Array([0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1]);// 02 is div31
var audc_03 = new Float32Array(POLY9_SIZE);
var audc_04_05 = new Float32Array([0, 1]);
var audc_06_10_14 = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
var audc_07_09_15 = new Float32Array([0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1]);
var audc_08 = new Float32Array(POLY9_SIZE);
// div 3 clock
var audc_12_13 = new Float32Array([1, 0]);

var p = 0;
var q = 0;

for (p = 0; p < POLY9_SIZE; p += 1) {
    audc_08[p] = (Math.round(Math.random()));
}

for (p = 0; p < POLY4_SIZE; p += 1) {
    for (q = 0; q < POLY5_SIZE; q += 1) {
        if (audc_07_09_15[p] === 1) {
            audc_08[p * POLY5_SIZE + q] = audc_01_02[q];
        } else {
            audc_08[p * POLY5_SIZE + q] = 0;
        }
    }
}



// # HEX  D3 D2 D1 D0    Clock Source    Clock Modifier    Source Pattern
// # --- -------------  --------------  ----------------  ----------------
// #  0    0  0  0  0    3.58 MHz/114 ->  none  (pure)  ->      none
// #  1    0  0  0  1    3.58 MHz/114 ->  none  (pure)  ->   4-bit poly
// #  2    0  0  1  0    3.58 MHz/114 ->  divide by 31  ->   4-bit poly
// #  3    0  0  1  1    3.58 MHz/114 ->   5-bit poly   ->   4-bit poly
// #  4    0  1  0  0    3.58 MHz/114 ->  none  (pure)  ->   pure  (~Q)
// #  5    0  1  0  1    3.58 MHz/114 ->  none  (pure)  ->   pure  (~Q)
// #  6    0  1  1  0    3.58 MHz/114 ->  divide by 31  ->   pure  (~Q)
// #  7    0  1  1  1    3.58 MHz/114 ->   5-bit poly   ->   pure  (~Q)
// #  8    1  0  0  0    3.58 MHz/114 ->  none  (pure)  ->   9-bit poly
// #  9    1  0  0  1    3.58 MHz/114 ->  none  (pure)  ->   5-bit poly
// #  A    1  0  1  0    3.58 MHz/114 ->  divide by 31  ->   5-bit poly
// #  B    1  0  1  1    3.58 MHz/114 ->   5-bit poly   ->   5-bit poly
// #  C    1  1  0  0    1.19 MHz/114 ->  none  (pure)  ->   pure  (~Q)
// #  D    1  1  0  1    1.19 MHz/114 ->  none  (pure)  ->   pure  (~Q)
// #  E    1  1  1  0    1.19 MHz/114 ->  divide by 31  ->   pure  (~Q)
// #  F    1  1  1  1    1.19 MHz/114 ->   5-bit poly   ->   pure  (~Q)

//# TIASOUND emulation package by Ron Fry
//# from ATARI 2600 VCS SOUND FREQUENCY AND WAVEFORM GUIDE by Eckhard Stolberg
//# Atari 2600 Music And Sound Programming Guide by Paul Slocum
//# The Atari 2600 Music and Sound Page, Random Terrain
//# Distortion Table AUDC0 and AUDC1 control register
//# All scalled for pixelclock/114
//# 0 = 1 (always high)
//# 11 = 1
//# 1 = 001010000111011 (Saw     sounds similar to a saw waveform)
//# 2 = 001010000111011->0100000000000000000100000000000 (465 bits long)
//#(Engine  many 2600 games use this for an engine sound)
//# 3 = 001010000111011->0010110011111000110111010100001 (465 bits long)
//# 4 = 01 (Square  a high pitched square waveform)
//# 5 = 01
//# 6 = 1111111111111000000000000000000 (Bass    fat bass sound)
//# 10 = 1111111111111000000000000000000
//# 7 = 0010110011111000110111010100001 (Pitfall log sound in pitfall
//#, low and buzzy)
//# 9 = 0010110011111000110111010100001
//# 8 = 511 bits long (white noise) (Noise   white noise)

//# 12 through 15 use CPUclock/114 so stretch each bit by 3 to make
//# pixelclock/114 compatable
//# 12 = 10 (Lead    lower pitch square wave sound)
//# 13 = 10
//# 14 = 1111111111111000000000000000000
//# 15 = 0010110011111000110111010100001 (Buzz atonal buzz, good for percussion)



// create web audio api context
var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContextCtor();

var oscillator1;
var gain1;

var oscillator2;
var gain2;

var wave_00_11 = audioCtx.createPeriodicWave(audc_00_11, audc_empty_poly1);
var wave_01_02 = audioCtx.createPeriodicWave(audc_01_02, audc_empty_poly4);
var wave_03 = audioCtx.createPeriodicWave(audc_03, audc_empty_poly9);
var wave_04_05 = audioCtx.createPeriodicWave(audc_04_05, audc_empty_poly1);
var wave_06_10_14 = audioCtx.createPeriodicWave(audc_06_10_14, audc_empty_poly5);
var wave_07_09_15 = audioCtx.createPeriodicWave(audc_07_09_15, audc_empty_poly5);
var wave_08 = audioCtx.createPeriodicWave(audc_08, audc_empty_poly9);
var wave_12_13 = audioCtx.createPeriodicWave(audc_12_13, audc_empty_poly1);

oscillator1 = audioCtx.createOscillator();
gain1 = audioCtx.createGain();

oscillator2 = audioCtx.createOscillator();
gain2 = audioCtx.createGain();

oscillator1.setPeriodicWave(wave_01_02);
gain1.gain.value = 0.0;
oscillator1.frequency.value = 440; // value in hertz

oscillator2.setPeriodicWave(wave_08);
//oscillator2.type = 'square';
gain2.gain.value = 0.0;
oscillator2.frequency.value = 44; // value in hertz

oscillator1.connect(gain1);
gain1.connect(audioCtx.destination);

oscillator2.connect(gain2);
gain2.connect(audioCtx.destination);

oscillator1.start(0);
oscillator2.start(0);

// sound number
// freq
// volume
// type


function sound(snum, audv, audf, audc) {
    var i,
        outvol,
        svol,
        sfreq,
        sound_data = [];
    svol = audv;
    sfreq = audf;
//    svol = (audv & 0xF)/0xF;
//    if ((audc & 0x0C) === 0x0C) {
//        clk_divider = 3;
//    }
//    if ((audc & 0x0C) === 0x0C) {
//        clk_divider = 3;
//    }

//    }




    if (snum === 1) {
        gain1.gain.value = svol;
        oscillator1.frequency.value = sfreq;
        oscillator1.setPeriodicWave(wave_00_11);
    }
    if (snum === 2) {
        gain2.gain.value = svol;
        oscillator2.frequency.value = sfreq;
        oscillator2.setPeriodicWave(wave_08);
    }
}


function screen() {
    //"""rescale window"""
    var p_width = Math.trunc(window.innerWidth / SCREEN_X / INTERLACE),
        p_height = Math.trunc(window.innerHeight / SCREEN_Y);
    if (p_width < p_height) {
        ctx.canvas.width = p_width * SCREEN_X * INTERLACE;
        ctx.canvas.height = p_width * SCREEN_Y;
    } else {
        ctx.canvas.width = p_height * SCREEN_X * INTERLACE;
        ctx.canvas.height = p_height * SCREEN_Y;
    }
}


function rectangle(x, y, width, height, color) {
    //"""draw rectangle with scaling"""
    var pixel_width = canvas.width / SCREEN_X,
        pixel_height = canvas.height / SCREEN_Y;
    ctx.beginPath();
    ctx.rect(x * pixel_width, y * pixel_height, width * pixel_width, height * pixel_height);
    ctx.fillStyle = colorsHex[color];
    ctx.fill();
    ctx.closePath();
}


function reset_collision() {
    //"""Clear collisoin detection."""
    var i, j;
    for (i = 0; i < NUMBER_OF_OBJECTS; i += 1) {
        collision_detection[i] = 0;
    }
    for (j = 0; j < (SCREEN_X * SCREEN_Y); j += 1) {
        collision_array[j] = 0;
    }
}


function update_collision(new_object, x, y) {
    //"""Update array and collision registers."""
    if ((x >= 0) && (x < SCREEN_X) && (y >= 0) && (y < SCREEN_Y)) {
        collision_array[x + (y * SCREEN_X)] |= (1 << new_object);
        collision_detection[new_object] |= collision_array[x + (y * SCREEN_X)];
    }
}


function test_for_object(test_object, x, y) {
    //"""Test to see what objects are in location."""
    var test_value = 0;
    if ((x >= 0) && (x < SCREEN_X) && (y >= 0) && (y < SCREEN_Y)) {
        if (collision_array[x + (y * SCREEN_X)] & (1 << test_object)) {
            test_value = 1;
        }
    }
    return test_value;
}


function get_collision(first_object, second_object) {
    //"""Performs a test between two objects (P0, M0, P1, M0, ,PF, BL)
    // 0 = no collision, 1 = collision."""     
    var test_value = 0;

    if ((collision_detection[first_object] & (1 << second_object)) > 0) {
        test_value = 1;
    }

    if ((collision_detection[second_object] & (1 << first_object)) > 0) {
        test_value = 1;
    }

    return test_value;
}


function background(y, height, color) {
    //"""Background coloring, either full screen or sections."""
    rectangle(0, y, SCREEN_X, height, color);
}


function playfield_collision(x, y) {
    //"""fills playfield collision values"""
    update_collision(PF, x, y);
    update_collision(PF, x + 1, y);
    update_collision(PF, x + 2, y);
    update_collision(PF, x + 3, y);
}


function place_character(x, y, character, pixel_height, color) {
    //"""Prints a 3x5 font using Playfield pixels, numbers upper case and some 
    //special characters"""
    var i,
        j,
        m,
        k = '',
        l = '',
        chartr = character.charCodeAt(0);
    if ((chartr < 32) || (chartr > 96)) {
        chartr = 63;
    }
    chartr -= 32;
    for (j = 0; j < 5; j += 1) {
        k = font_3x5[(chartr * 5) + j];
        for (i = 0; i < 3; i += 1) {
            l = k.charAt(i);
            if (l === 'X') {
                rectangle((x + i) * PF_PIXEL, (y + j * pixel_height), PF_PIXEL, pixel_height, color);
                for (m = 0; m < pixel_height; m += 1) {
                    playfield_collision((x + i) * PF_PIXEL, y + (j * pixel_height) + m);
                }
            }
        }
    }
}


function print_large(x, y, pstring, pixel_height, color) {
    //"""Prints a string that is left justified using 3x5 chracters in 
    //Playfield pixels."""
    var i,
        j;
    for (i = 0; i < pstring.length; i += 1) {
        j = pstring.charAt(i);
        place_character(x + (i * 4), y, j, pixel_height, color);
    }
}


function number_large(x, y, value, pixel_height, color) {
    //"""Prints a numeric value that is right justified using 3x5 digits in 
    //Playfield pixels."""
    var i,
        j,
        pstring;
    if (value < 0) {
        value -= value;
    }
    pstring = value.toString();
    for (i = 0; i < pstring.length; i += 1) {
        j = pstring.charAt(pstring.length - 1 - i);
        place_character(x - (i * 4), y, j, pixel_height, color);
    }
}


function place_char(x, y, character, pixel_height, color) {
    //"""Prints a 3x5 font using Player pixels, numbers upper case and some 
    //special characters"""
    var i, j, m,
        k = '',
        l = '',
        char = character.charCodeAt(0);
    if ((char < 32) || (char > 96)) {
        char = 63;
    }
    char -= 32;
    for (j = 0; j < 5; j += 1) {
        k = font_3x5[(char * 5) + j];
        for (i = 0; i < 3; i += 1) {
            l = k.charAt(i);
            if (l === 'X') {
                rectangle(x + i, y + j * pixel_height, 1, pixel_height, color);
                for (m = 0; m < pixel_height; m += 1) {
                    update_collision(P0, x + i, y + (j * pixel_height) + m);
                }
            }
        }
    }
}


function print_small(x, y, pstring, pixel_height, color) {
    //"""Prints a string that is left justified using 3x5 chracters in 
    //Player pixels."""
    var i,
        j;
    for (i = 0; i < pstring.length; i += 1) {
        j = pstring.charAt(i);
        place_char(x + (i * 4), y, j, pixel_height, color);
    }
}


function number_small(x, y, value, pixel_height, color) {
    //"""Prints a numeric value that is right justified using 3x5 digits in 
    //Player pixels."""
    var i,
        j,
        pstring;
    if (value < 0) {
        value -= value;
    }
    pstring = value.toString();
    for (i = 0; i < pstring.length; i += 1) {
        j = pstring.charAt(pstring.length - 1 - i);
        place_char(x - (i * 4), y, j, pixel_height, color);
    }
}




function playfield(y, height, data, color) {
    //"""Playfield drawing and collision detection."""
    var i,
        j;
    for (i = 0; i < 40; i += 1) {
        if (data.charAt(i) === 'X') {
            rectangle((i * PF_PIXEL), y, PF_PIXEL, height, color);
            for (j = 0; j < height; j += 1) {
                playfield_collision(i * 4, y + j);
            }
        }
    }
}


function ball(x, y, width, height, color) {
    //"""Ball drawing and collision detection."""
    var i,
        j;
    rectangle(x, y, width, height, color);
    for (i = 0; i < height; i += 1) {
        for (j = 0; j < width; j += 1) {
            update_collision(BL, x + j, y + i);
        }
    }
}


function missile0(x, y, width, height, color) {
    //"""Missile0 drawing and collision detection."""
    var i,
        j;
    rectangle(x, y, width, height, color);
    for (i = 0; i < height; i += 1) {
        for (j = 0; j < width; j += 1) {
            update_collision(M0, x + j, y + i);
        }
    }
}


function missile1(x, y, width, height, color) {
    //"""Missile1 drawing and collision detection."""
    var i,
        j;
    rectangle(x, y, width, height, color);
    for (i = 0; i < height; i += 1) {
        for (j = 0; j < width; j += 1) {
            update_collision(M1, x + j, y + i);
        }
    }
}



function player0(x, y, data, pixel_width, pixel_height, mirror, color) {
    //"""Player0 drawing and collision detection."""  
    var i,
        j,
        m,
        n,
        line_length = data[0].length;
    for (j = 0; j < data.length; j += 1) {
        for (i = 0; i < line_length; i += 1) {
            if (data[j].charAt(((line_length - 1) * mirror) + (1 - 2 * mirror) * i) === 'X') {
                rectangle(x + i * pixel_width, y + j * pixel_height, pixel_width, pixel_height, color);
                for (n = 0; n < pixel_width; n += 1) {
                    for (m = 0; m < pixel_height; m += 1) {
                        update_collision(P0, x + (i * pixel_width) + n, y + (j * pixel_height) + m);
                    }
                }
            }
        }
    }
}


function player1(x, y, data, pixel_width, pixel_height, mirror, color) {
    //"""Player1 drawing and collision detection."""
    var i,
        j,
        m,
        n,
        line_length = data[0].length;
    for (j = 0; j < data.length; j += 1) {
        for (i = 0; i < line_length; i += 1) {
            if (data[j].charAt(((line_length - 1) * mirror) + (1 - 2 * mirror) * i) === 'X') {
                rectangle(x + i * pixel_width, y + j * pixel_height, pixel_width, pixel_height, color);
                for (n = 0; n < pixel_width; n += 1) {
                    for (m = 0; m < pixel_height; m += 1) {
                        update_collision(P1, x + (i * pixel_width) + n, y + (j * pixel_height) + m);
                    }
                }
            }
        }
    }
}
