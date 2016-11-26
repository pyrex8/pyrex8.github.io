var colorsHex = [
 '#000000','#404040','#6C6C6C','#909090','#B0B0B0','#C8C8C8','#DCDCDC','#ECECEC'
,'#444400','#646410','#848424','#A0A034','#B8B840','#D0D050','#E8E85C','#FCFC68'
,'#702800','#844414','#985C28','#AC783C','#BC8C4C','#CCA05C','#DCB468','#ECC878'
,'#841800','#983418','#AC5030','#C06848','#D0805C','#E09470','#ECA880','#FCBC94'
,'#880000','#9C2020','#B03C3C','#C05858','#D07070','#E08888','#ECA0A0','#FCB4B4'
,'#78005C','#8C2074','#A03C88','#B0589C','#C070B0','#D084C0','#DC9CD0','#ECB0E0'
,'#480078','#602090','#783CA4','#8C58B8','#A070CC','#B484DC','#C49CEC','#D4B0FC'
,'#140084','#302098','#4C3CAC','#6858C0','#7C70D0','#9488E0','#A8A0EC','#BCB4FC'
,'#000088','#1C209C','#3840B0','#505CC0','#6874D0','#7C8CE0','#90A4EC','#A4B8FC'
,'#00187C','#1C3890','#3854A8','#5070BC','#6888CC','#7C9CDC','#90B4EC','#A4C8FC'
,'#002C5C','#1C4C78','#386890','#5084AC','#689CC0','#7CB4D4','#90CCE8','#A4E0FC'
,'#003C2C','#1C5C48','#387C64','#509C80','#68B494','#7CD0AC','#90E4C0','#A4FCD4'
,'#003C00','#205C20','#407C40','#5C9C5C','#74B474','#8CD08C','#A4E4A4','#B8FCB8'
,'#143800','#345C1C','#507C38','#6C9850','#84B468','#9CCC7C','#B4E490','#C8FCA4'
,'#2C3000','#4C501C','#687034','#848C4C','#9CA864','#B4C078','#CCD488','#E0EC9C'
,'#442800','#644818','#846830','#A08444','#B89C58','#D0B46C','#E8CC7C','#FCE08C'];

// var #!/usr/bin/env python
//''' 3x5 font http://robey.lag.net/2010/01/23/tiny-monospace-font.html'''



//# starts at ASCII 32 - space
var font_3x5 =  [
             '   '
            ,'   '
            ,'   '
            ,'   '
            ,'   '

            ,' X '
            ,' X '
            ,' X '
            ,'   '
            ,' X '

            ,'X X'
            ,'X X'
            ,'   '
            ,'   '
            ,'   '

            ,'X X'
            ,'XXX'
            ,'X X'
            ,'XXX'
            ,'X X'

            ,' XX'
            ,'XX '
            ,' XX'
            ,'XX '
            ,' X '

            ,'X  '
            ,'  X'
            ,' X '
            ,'X  '
            ,'  X'

            ,'XX '
            ,'XX '
            ,'XXX'
            ,'X X'
            ,' XX'

            ,' X '
            ,'   '
            ,'   '
            ,'   '
            ,'   '

            ,'  X'
            ,' X '
            ,' X '
            ,' X '
            ,'  X'

            ,'X  '
            ,' X '
            ,' X '
            ,' X '
            ,'X  '

            ,'   '
            ,'X X'
            ,' X '
            ,'X X'
            ,'   '

            ,'   '
            ,' X '
            ,'XXX'
            ,' X '
            ,'   '

            ,'   '
            ,'   '
            ,'   '
            ,' X '
            ,'X  '

            ,'   '
            ,'   '
            ,'XXX'
            ,'   '
            ,'   '

            ,'   '
            ,'   '
            ,'   '
            ,'   '
            ,' X '

            ,'  X'
            ,'  X'
            ,' X '
            ,'X  '
            ,'X  '



            ,'XXX'
            ,'X X'
            ,'X X'
            ,'X X'
            ,'XXX'

            ,'  X'
            ,'  X'
            ,'  X'
            ,'  X'
            ,'  X'

            ,'XXX'
            ,'  X'
            ,'XXX'
            ,'X  '
            ,'XXX'

            ,'XXX'
            ,'  X'
            ,'XXX'
            ,'  X'
            ,'XXX'

            ,'X X'
            ,'X X'
            ,'XXX'
            ,'  X'
            ,'  X'

            ,'XXX'
            ,'X  '
            ,'XXX'
            ,'  X'
            ,'XXX'

            ,'XXX'
            ,'X  '
            ,'XXX'
            ,'X X'
            ,'XXX'

            ,'XXX'
            ,'  X'
            ,'  X'
            ,'  X'
            ,'  X'

            ,'XXX'
            ,'X X'
            ,'XXX'
            ,'X X'
            ,'XXX'

            ,'XXX'
            ,'X X'
            ,'XXX'
            ,'  X'
            ,'XXX'

            ,'   '
            ,' X '
            ,'   '
            ,' X '
            ,'   '

            ,'   '
            ,' X '
            ,'   '
            ,' X '
            ,'X  '

            ,'  X'
            ,' X '
            ,'X  '
            ,' X '
            ,'  X'            

            ,'   '
            ,'XXX'
            ,'   '
            ,'XXX'
            ,'   '

            ,'X  '
            ,' X '
            ,'  X'
            ,' X '
            ,'X  '

            ,'XXX'
            ,'  X'
            ,' X '
            ,'   '
            ,' X '

            ,' X '
            ,'X X'
            ,'XXX'
            ,'X  '
            ,' XX'




		    ,' X '
            ,'X X'
            ,'XXX'
            ,'X X'
            ,'X X'

            ,'XX '
            ,'X X'
            ,'XX '
            ,'X X'
            ,'XX '

            ,' XX'
            ,'X  '
            ,'X  '
            ,'X  '
            ,' XX'

            ,'XX '
            ,'X X'
            ,'X X'
            ,'X X'
            ,'XX '

            ,'XXX'
            ,'X  '
            ,'XXX'
            ,'X  '
            ,'XXX'

            ,'XXX'
            ,'X  '
            ,'XXX'
            ,'X  '
            ,'X  '

            ,' XX'
            ,'X  '
            ,'XXX'
            ,'X X'
            ,' XX'

            ,'X X'
            ,'X X'
            ,'XXX'
            ,'X X'
            ,'X X'            

            ,'XXX'
            ,' X '
            ,' X '
            ,' X '
            ,'XXX'

            ,'  X'
            ,'  X'
            ,'  X'
            ,'X X'
            ,' X '

            ,'X X'
            ,'X X'
            ,'XX '
            ,'X X'
            ,'X X'

            ,'X  '
            ,'X  '
            ,'X  '
            ,'X  '
            ,'XXX'

            ,'X X' 
            ,'XXX'
            ,'XXX'
            ,'X X'
            ,'X X'

            ,'X X'
            ,'XXX'
            ,'XXX'
            ,'XXX'
            ,'X X'

            ,'XXX'
            ,'X X'
            ,'X X'
            ,'X X'
            ,'XXX'

            ,'XX '
            ,'X X'
            ,'XX '
            ,'X  '
            ,'X  '

            ,' X '
            ,'X X'
            ,'X X'
            ,'X X'
            ,' XX'

            ,'XX '
            ,'X X'
            ,'XX '
            ,'XX '
            ,'X X'


            ,' XX'
            ,'X  '
            ,' X '
            ,'  X'
            ,'XX '

            ,'XXX'
            ,' X '
            ,' X '
            ,' X '
            ,' X '

            ,'X X'
            ,'X X'
            ,'X X'
            ,'X X'
            ,' XX'

            ,'X X'
            ,'X X'
            ,'X X'
            ,' X '
            ,' X '

            ,'X X'
            ,'X X'
            ,'XXX'
            ,'XXX'
            ,'X X'

            ,'X X'
            ,'X X'
            ,' X '
            ,'X X'
            ,'X X'

            ,'X X'
            ,'X X'
            ,' X '
            ,' X '
            ,' X '

            ,'XXX'
            ,'  X'
            ,' X '
            ,'X  '
            ,'XXX'

            ,'XXX'
            ,'X  '
            ,'X  '
            ,'X  '
            ,'XXX'

            ,'   '
            ,'X  '
            ,' X '
            ,'  X'
            ,'   '

            ,'XXX'
            ,'  X'
            ,'  X'
            ,'  X'
            ,'XXX' 

            ,' X '
            ,'X X'
            ,'   '
            ,'   '
            ,'   ' 

            ,'   '
            ,'   '
            ,'   '
            ,'   '
            ,'XXX' 

            ,'X  '
            ,' X '
            ,'   '
            ,'   '
            ,'   ' 
            ];




var SCREEN_X = 160;
var SCREEN_Y = 104;

var ZOOM = 4;

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

var collision_detection = new Array(NUMBER_OF_OBJECTS); 
var collision_array = new Array(SCREEN_X * SCREEN_Y);


// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

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
  if (snum == 1){
    gain1.gain.value = svol;
    oscillator1.frequency.value = sfreq;
    oscillator1.type = stype;
  }
  if (snum == 2){
    gain2.gain.value = svol;
    oscillator2.frequency.value = sfreq;
    oscillator2.type = stype;
  }  
}


function screen(){
    //"""rescale window"""
    var p_width = window.innerWidth/SCREEN_X;
    var p_height = window.innerHeight/SCREEN_Y;
    if (p_width < p_height){
        ctx.canvas.width = Math.trunc(p_width)*SCREEN_X;
        ctx.canvas.height = Math.trunc(p_width)*SCREEN_Y;
    }
    else{
        ctx.canvas.width = Math.trunc(p_height)*SCREEN_X;
        ctx.canvas.height = Math.trunc(p_height)*SCREEN_Y;
    }
}

function rectangle(x, y, width, height, color){
    //"""draw rectangle with scaling"""
    var pixel_width = canvas.width/SCREEN_X;
    var pixel_height = canvas.height/SCREEN_Y;
    ctx.beginPath();
	ctx.rect(x*pixel_width, y*pixel_height, width*pixel_width, height*pixel_height);
	ctx.fillStyle = colorsHex[color];
	ctx.fill();
	ctx.closePath();
}


function reset_collision(){
    //"""Clear collisoin detection."""
    for (var i = 0; i < NUMBER_OF_OBJECTS; i++) collision_detection[i] = 0;
    for (var j = 0; j < (SCREEN_X * SCREEN_Y); j++) collision_array[j] = 0;	
}


function update_collision(new_object, x, y){   
    //"""Update array and collision registers."""
    if ((x >= 0) && (x < SCREEN_X) && (y >= 0) && (y < SCREEN_Y)){
        collision_array[x + (y * SCREEN_X)] |= (1<<new_object);
        collision_detection[new_object] |= collision_array[x + (y * SCREEN_X)];
    }
}


function test_for_object(test_object, x, y){    
    //"""Test to see what objects are in location."""
    var test_value = 0;
    if ((x >= 0) && (x < SCREEN_X) && (y >= 0) && (y < SCREEN_Y)){
        if (collision_array[x + (y * SCREEN_X)] & 1<<test_object){
            test_value = 1;
        }
    }
    return test_value;
}


function get_collision(first_object, second_object){
    //"""Performs a test between two objects (P0, M0, P1, M0, ,PF, BL)
    // 0 = no collision, 1 = collision."""     
    var test_value = 0

    if  ((collision_detection[first_object] & 1<<second_object) > 0){
        test_value = 1;
    }

    if  ((collision_detection[second_object] & 1<<first_object) > 0){
        test_value = 1;
    }

    return test_value;
}


function background(y, height, color){
    //"""Background coloring, either full screen or sections."""
    rectangle(0, y, SCREEN_X, height, color);
}


function playfield_collision(x, y){
    //"""fills playfield collision values"""
    update_collision(PF, x, y);
    update_collision(PF, x + 1, y);
    update_collision(PF, x + 2, y);
    update_collision(PF, x + 3, y);   
 }


function place_character(x, y, character, color){
    //"""Prints a 3x5 font using Playfield pixels, numbers upper case and some 
    //special characters"""
    var k = '';
    var l = '';
    var char = character.charCodeAt(0)
    if ((char < 32) || (char > 96)){
         char = 63;
    }
    char -= 32;
    for (var j = 0; j < 5; j++){
        k = font_3x5[(char * 5) + j];
        for (var i = 0; i < 3; i++){
        	var l = k.charAt(i);
            if (l == 'X'){
              rectangle((x+i)*PF_PIXEL, (y+j), PF_PIXEL, 1, color);		
              playfield_collision((x+i)*PF_PIXEL, y + j);
            }
        }
    }
}


function print_large(x, y, pstring, color){
    //"""Prints a string that is left justified using 3x5 chracters in 
    //Playfield pixels."""
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(i);
        place_character(x + (i*4), y, j, color);
    }
}


function number(x, y, value, color){
    //"""Prints a numeric value that is right justified using 3x5 digits in 
    //Playfield pixels."""
    if (value < 0){
        value -= value;
    }
    pstring = value.toString();
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(pstring.length - 1 - i);
        place_character(x - (i*4), y, j, color);
    }
}


function place_char(x, y, character, color){
    //"""Prints a 3x5 font using Player pixels, numbers upper case and some 
    //special characters"""
    var k = '';
    var l = '';
    var char = character.charCodeAt(0)
    if ((char < 32) || (char > 96)){
         char = 63;
    }
    char -= 32;
    for (var j = 0; j < 5; j++){
        k = font_3x5[(char * 5) + j];
        for (var i = 0; i < 3; i++){
            var l = k.charAt(i);
            if (l == 'X'){
                rectangle(x + i, y + j, 1, 1, color);    
                update_collision(P0, x + i, y + j);
            }
        }
    }
}


function print_small(x, y, pstring, color){
    //"""Prints a string that is left justified using 3x5 chracters in 
    //Player pixels."""
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(i);
        place_char(x + (i*4), y, j, color);
    }
}


function number_small(x, y, value, color){
    //"""Prints a numeric value that is right justified using 3x5 digits in 
    //Player pixels."""
    if (value < 0){
        value -= value;
    }
    pstring = value.toString();
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(pstring.length - 1 - i);
        place_char(x - (i*4), y, j, color);
    }
}




function playfield(y, height, data, color){
    //"""Playfield drawing and collision detection."""
    for (var i = 0; i < 40; i++){ 
        if (data.charAt(i) == 'X'){
            rectangle((i*PF_PIXEL), y, PF_PIXEL, height, color);
            for (var j = 0; j < height; j++){       
                playfield_collision(i*4, y + j);
            }
        }
    }
}


function ball(x, y, width, height, color){
    //"""Ball drawing and collision detection."""
    rectangle(x, y, width, height, color);
    for (var i = 0; i < height; i++){ 
        for (var j = 0; j < width; j++){ 
            update_collision(BL, x + j, y + i);
        }
    }
}


function missile0(x, y, width, height, color){
    //"""Missile0 drawing and collision detection."""
    rectangle(x, y, width, height, color);
    for (var i = 0; i < height; i++){ 
        for (var j = 0; j < width; j++){ 
            update_collision(M0, x + j, y + i);
        }
    }
}


function missile1(x, y, width, height, color){
    //"""Missile1 drawing and collision detection."""
    rectangle(x, y, width, height, color);
    for (var i = 0; i < height; i++){ 
        for (var j = 0; j < width; j++){ 
            update_collision(M1, x + j, y + i);
        }
    }            
}



function player0(x, y, data, color){
    //"""Player0 drawing and collision detection."""  
    var line_length = data[0].length;
    for (var j = 0; j < data.length; j++){ 
    	for (var i = 0; i < line_length; i++){ 
	        if (data[j].charAt(i) == 'X'){
	            rectangle(x + i, y + j, 1, 1, color);    
	            update_collision(P0, x + i, y + j);
	        }
	    }
    }
}


function player1(x, y, data, color){
    //"""Player0 drawing and collision detection."""
    var line_length = data[0].length;
    for (var j = 0; j < data.length; j++){ 
    	for (var i = 0; i < line_length; i++){ 
	        if (data[j].charAt(i) == 'X'){
	            rectangle(x + i, y + j, 1, 1, color);
	            update_collision(P1, x + i, y + j);
	        }
	    }
    }
}

