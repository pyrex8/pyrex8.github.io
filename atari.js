/*jslint node: true */
/*jslint bitwise: true*/
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


// create web audio api context
var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContextCtor();

var oscillator1;
var gain1;

var oscillator2;
var gain2;

oscillator1 = audioCtx.createOscillator();
gain1 = audioCtx.createGain();

oscillator2 = audioCtx.createOscillator();
gain2 = audioCtx.createGain();

oscillator1.type = 'square';
gain1.gain.value = 0.0;
oscillator1.frequency.value = 440; // value in hertz

oscillator2.type = 'square';
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


function sound(snum, svol, sfreq, stype) {
    if (snum === 1) {
        gain1.gain.value = svol;
        oscillator1.frequency.value = sfreq;
        oscillator1.type = stype;
    }
    if (snum === 2) {
        gain2.gain.value = svol;
        oscillator2.frequency.value = sfreq;
        oscillator2.type = stype;
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

