
M = Math;

C = document.getElementById("canvas").getContext("2d");

C.font = "12px Courier";




// message strings
c = '';
d = 'LANDING';
e = 'CRASH';
// short version of 255
n = 255;

// black
b = 'black';
// white
w = 'white';

dn = 0;
// screen size
s = 400;

o = 100;

// width of lunar lander
z = 10;
// length of screen minus lander width
Z = s - z;

// thruster left and right start out black
cl = b;
cr = b;

// thruster y velocity adjustment
a = 2;

// sound string is blank
ss = c;

// lander start x location
x = (M.random() * Z) + z;
// lander start y location
y = z;

// set fuel to 400
f = s;

// x and y velocities
u = 0;
v = 0;

// lander module diameter, expands on explosion
r = 5;
// color of landing gear
cg = w;
// reset explosion effect counter
wi = n;
q = 127;
p = -q;
// message string clear
gs = c;

mh = s / 20;
// landing pad width
lp = 14;
// landing pad location
pl = 20;

g = 2 * M.random()
// font size
fs = s / 32;

// audio parameters
P = 0.01;
N = n * 4;
ph = M.random() * s;
am = s / (5 + M.random() * 5) ;

// sample frequency for sound
T = 11025;

st ='';
se = '';

// landing pad width
lp=14
// landing pad location
pl=20
// number of line segments making up mountains
mn=40
// mountain height
mh=s/20

// Array for mountains
mx = [];
my = [];
j = 0;

// Mountain x and y points

//for(j=20;j--;){}
for (j = 0; j < mn + 1; j++)
    mx.push(z*j),
    my.push(-(M.random() * mh) + (s - am - 2*fs) + (am * (M.sin((j*6*g/mn + ph)))));

// last point
mx.push(s);
my.push(-(M.random * mh) + s);
// "Carve out" landing pad
mx[pl]=mx[pl-1]+lp;
my[pl]=my[pl-1];

txt ='';

    i = 0;
        ax = 0;
        ay = 0;

setInterval(function() {
    // drawing code


    // if not crashed roll x movement across screen
    if (gs==c && (x<0 || x>s))
      x=x-(M.abs(x)/x)*s;


    // if not crashed or landed update lunar module velocity and position
    if (gs==c)
        v=v+1,
        x=(10*x+u)/10,
        y=(10*y+v)/10;


    // test for landing
    if ((y+8)>=my[pl] && x>mx[pl-1] && x<mx[pl] && v<30){
        gs=d;
    }

    // test for collision
    for (i=0;i<mn;i++)
        if (gs==c && mx[i]<=x && mx[i+1]>=x && (my[i]<=y || my[i+1]<=y))
             cr=1,
            // color of landing gear is black during crash
            cg=b,
            gs=e;

    // clear screen
    C.beginPath();
    C.fillStyle = b;
    C.fillRect(0, 0, canvas.width, canvas.height);
//    C.closePath();
//    C.beginPath();
    C.fillStyle = w;
    C.strokeStyle = w;

    // explosion
    if (wi>10 && gs==e)
        // expanding lunar module
        r=r+z,
        // decreament explosion effect counter
        wi=wi-z,
        // sound string crash
        ss=st;

    // draw lunar module, radius expands for explosion
    if (wi > 10)
        for (i=0;i<50;i++)
            ax=M.sin(i/8),
            ay=M.cos(i/8),
            C.fillRect((x+r*ax),(y+r*ay),1,1);


    // draw mountains
    C.moveTo(0, my[0]);
    for (i = 0; i < mn; i++)
        C.lineTo(mx[i], my[i]);

    // draw landing pad
    C.fillRect(mx[pl-1],my[pl-1]-1,lp,2);

   // draw landing gear
    if (cg!=b)

        C.moveTo(x+3,y+4),
        C.lineTo(x+6,y+8),
        C.moveTo(x-3,y+4),
        C.lineTo(x-6,y+8),

        // draw thruster fire
        C.moveTo(x+2,y+5),
        C.lineTo(x,y+9),
        C.moveTo(x-2,y+5),
        C.lineTo(x,y+9);



    // update drawing
    C.stroke();
    C.fillStyle = w;
    ww = s-y

    // ~~ = Math.Floor()
    txt = 'FUEL '+f+'    ALT '+~~(s-y)+'     VERT SPD '+v+'     HORZ SPD '+u;
    C.fillText(txt, 10, canvas.height - 10);
    C.fillText(gs, canvas.width/2 -20, canvas.height/2);

}, 200);

