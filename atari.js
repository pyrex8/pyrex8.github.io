// From Stella running color.bin in Ubuntu using Gpick

var colorsHex = [
 '#000000','#4B4B4B','#6F6F6F','#8D8D8D','#A9A9A9','#BFBFBF','#D5D5D5','#EBEBEB'
,'#4A4913','#696822','#85842E','#A19F3B','#BAB846','#D1CF51','#E8E55C','#FCFA66'
,'#7A2F0F','#8E491F','#A0612D','#B2783A','#C18E47','#D0A153','#DEB45E','#EBC569'
,'#8E210E','#A13B20','#B35331','#C46B41','#D38050','#E1955E','#EFA86C','#FBB979'
,'#92040C','#A42022','#B53537','#C54A4B','#D45C5D','#E26F6F','#EE7F80','#FB8F8F'
,'#821162','#942477','#A5378B','#B54B9E','#C35CAF','#D16EBF','#DE7ECE','#EA8DDC'
,'#501680','#672795','#7B39A8','#8F4CBB','#A15ECB','#B26FDB','#C27FEA','#D18EF8'
,'#18188B','#35289E','#4E3BB0','#674EC1','#7D61D0','#9272DE','#A682EC','#B992F8'
,'#00198F','#1B29A2','#2F3CB3','#434FC3','#5461D1','#6472DF','#7482EB','#8292F8'
,'#002784','#1D4198','#305AAB','#4474BE','#558BCE','#65A0DD','#75B5EC','#84C8F9'
,'#003562','#1F527D','#326E95','#4588AD','#569FC2','#66B6D6','#76CBE9','#85E0FA'
,'#0B4234','#216250','#33806A','#479C82','#58B699','#68CFAE','#77E6C2','#86FBD5'
,'#0C4511','#236527','#38823C','#4C9D50','#5FB763','#72CF75','#82E686','#92FA96'
,'#1C3E0F','#395E25','#547C37','#6F994B','#87B45C','#9ECD6D','#B4E57D','#C8FA8C'
,'#343A0F','#515923','#6D7435','#879047','#9FA857','#B6BF67','#CBD576','#E0EA83'
,'#492F0D','#694E20','#856931','#A08441','#B99C50','#D1B35E','#E7C96B','#FCDE78'];



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
var SCREEN_Y = 208;

var INTERLACE = 2

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
    var p_width = Math.trunc(window.innerWidth/SCREEN_X/INTERLACE);
    var p_height = Math.trunc(window.innerHeight/SCREEN_Y);
    if (p_width < p_height){
        ctx.canvas.width = p_width*SCREEN_X*INTERLACE;
        ctx.canvas.height = p_width*SCREEN_Y;
    }
    else{
        ctx.canvas.width = p_height*SCREEN_X*INTERLACE;
        ctx.canvas.height = p_height*SCREEN_Y;
    }
}


function rectangle(x, y, width, height, color){
    //"""draw rectangle with scaling"""
    var pixel_width = canvas.width/SCREEN_X;
    var pixel_height = canvas.height/SCREEN_Y
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


function place_character(x, y, character, pixel_height, color){
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
                rectangle((x+i)*PF_PIXEL, (y+j*pixel_height), PF_PIXEL, pixel_height, color);	
                for (var m = 0; m < pixel_height; m++){ 
                    playfield_collision((x+i)*PF_PIXEL, y + (j*pixel_height) +m);
                }
            }
        }
    }
}


function print_large(x, y, pstring, pixel_height, color){
    //"""Prints a string that is left justified using 3x5 chracters in 
    //Playfield pixels."""
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(i);
        place_character(x + (i*4), y, j, pixel_height, color);
    }
}


function number(x, y, value, pixel_height, color){
    //"""Prints a numeric value that is right justified using 3x5 digits in 
    //Playfield pixels."""
    if (value < 0){
        value -= value;
    }
    pstring = value.toString();
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(pstring.length - 1 - i);
        place_character(x - (i*4), y, j, pixel_height, color);
    }
}


function place_char(x, y, character, pixel_height, color){
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
                rectangle(x + i, y + j*pixel_height, 1, pixel_height, color);   
                for (var m = 0; m < pixel_height; m++){ 
                    update_collision(P0, x + i, y + (j*pixel_height) + m);
                }
            }
        }
    }
}


function print_small(x, y, pstring, pixel_height, color){
    //"""Prints a string that is left justified using 3x5 chracters in 
    //Player pixels."""
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(i);
        place_char(x + (i*4), y, j, pixel_height, color);
    }
}


function number_small(x, y, value, pixel_height, color){
    //"""Prints a numeric value that is right justified using 3x5 digits in 
    //Player pixels."""
    if (value < 0){
        value -= value;
    }
    pstring = value.toString();
    for (var i = 0; i < pstring.length; i++){
        j = pstring.charAt(pstring.length - 1 - i);
        place_char(x - (i*4), y, j, pixel_height, color);
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



function player0(x, y, data, pixel_height, color){
    //"""Player0 drawing and collision detection."""  
    var line_length = data[0].length;
    for (var j = 0; j < data.length; j++){ 
    	for (var i = 0; i < line_length; i++){ 
	        if (data[j].charAt(i) == 'X'){
	            rectangle(x + i, y + j*pixel_height, 1, pixel_height, color); 
                for (var m = 0; m < pixel_height; m++){ 
                    update_collision(P0, x + i, y + (j*pixel_height) + m);
                }
	        }
	    }
    }
}


function player1(x, y, data, pixel_height, color){
    //"""Player0 drawing and collision detection."""
    var line_length = data[0].length;
    for (var j = 0; j < data.length; j++){ 
    	for (var i = 0; i < line_length; i++){ 
	        if (data[j].charAt(i) == 'X'){
	            rectangle(x + i, y + j*pixel_height, 1, pixel_height, color);
                for (var m = 0; m < pixel_height; m++){ 
                    update_collision(P1, x + i, y + (j*pixel_height) + m);
                }
	        }
	    }
    }
}

