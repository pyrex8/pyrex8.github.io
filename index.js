
a = document.getElementById("canvas");


//w = a.width  = window.innerWidth;
//h = a.height = window.innerHeight;

function canvas_resize()
{
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
}

window.addEventListener("resize", canvas_resize);
canvas_resize();

/*
 * a = <canvas>
 * b = <body>
 * c = canvas context 2D
 * d = document
 * e = 
 * f = frequency of sound
 * g = web gl??????
 * h = height of canvas = 512
 * i = platform test
 * j = current platform level
 * k =
 * l = left
 * m = platform pattern 1
 * n = platform pattern 2
 * o = platform pattern 3
 * p = test for level
 * q = last test for level
 * r = right
 * s = game high score
 * t = game score
 * u = platform offset
 * v = 255
 * w = width of canvas = 680
 * x = jumpman X location
 * y = jumpman Y location
 * z = jumpman location 0 to 7
 */

/*
 * A = audio context for web audio
 * B = 400
 * C = 'context'
 * D
 * E
 * F = reserved
 * G = audio gainModule
 * H = Frequency
 * I = platform 1 y location
 * J = platform 2 y location
 * K = platform 3 y location
 * L = 'fillStyle'
 * M = Math
 * N = number
 * O = oscillator
 * P = player sprite index
 * Q = 
 * R = Random
 * S = sprite function
 * T = text
 * U = X loop iterator
 * V = Y loop iterator
 * W = High Score
 * X = sprite X location
 * Y = sprite Y location
 * Z = level function
 */



// Resize the canvas, storing width and height for later use.
B = 512
w = a.width = B;
h = a.height = B;

// Some short-hands for Math and Math.random.
M=Math;
R=M.random;


// Platform drawer
function Z(T, Y) 
{
  for (U = 8; U--;)
    (T & (1<<U)) && C.F(512 - 64 - U * 64, Y * 2, 64, 8)
}

// z, x, q, i, p, j

// global variables
I = J = K = s = f = m = n = o = z = p = r = l = t = u = q = i = j = 0;
n = w
L = 'fillStyle'
x = 16
y = 128
v = 255

// web audio API to generate sound
A = new window.AudioContext;
O = A.createOscillator();
G = A.createGain();
O.type = 'square';
O.connect(G);
G.connect(A.destination);
O.start();

onkeydown = function(event) 
{   
    // arrow left
    if (event.keyCode == 37)
    {
        l = 1;f = 5
    }
    // arrow right
    if (event.keyCode == 39)
    {
        r = 1;f = 5 
    }       
}

onkeyup = function(event) 
{
    // arrow left
    if (event.keyCode == 37)
    {
        l = 0;f =0
    }    
    // arrow right
    if (event.keyCode == 39)
    {
        r = 0;f = 0  
    }      
}

// game loop
setInterval(function() 
{
  //test for ARROW_LEFT = 37; 
  if (l)
  {   
        x += 4;
        if (x > v)
          x = v
  }

  //test for ARROW_RIGHT = 39;
  if (r)
  {   
      x -= 4;
      if (x<8)
          x = 8        

  } 

  // platform scrolling
  u -= 1;
  if (u < 1)
  {
      u = 85;
      m = n
      n = o
      o = 0|R()*254;
  }
  //64
  I = u
  J = u + 85
  K = u + 85*2

  // current level
  j = 0;
  if ((y >= I) & (y <= I + 4))
  {
      j = m
  }
  if ((y >= J) & (y <= J + 4))
  {
      j = n
  }
  if ((y >= K) & (y <= K + 4))
  {
      j = o
  }    


  z = (x / 32) & v;

  // Make sure jumpman is completely off of platform
  // if  q < 0.2 test segment to right z/2
  // if  q > 0.8 test segment to left z*2
  // 
  q = (x / 32) - z

  i = 0
  p = (j & ( 1 << z))
  if (p == 0)
  {
      if (q < 0.2)
          i = j & (1 << (z - 1)) 
      if (q > 0.8)
          i = j & (1 << (z + 1))
  }

  // on platform
  if (p || i)
  {
      y--
  }
  // off platform
  else
  {
      y+=3
  }    

  // score (timer)
  t += 1;    

  //set sound frequency
  O.frequency.value = f;
  if (f > 10) f = 0    

  if ((y < 5) || (y > v))
  {
      y = y & v
      if (t > s)
      {
        s = t
      }
      t = 0
      f = 100
  }

  with(C = a.getContext('2d')) 
  {
      // Create a shortcut for fillRect
      C.F = fillRect;

      // draw background
      C[L] = 'Black';
      F(0, 0, w, h);

      // draw platforms
      C[L] = 'White';
      Z(m, I);
      Z(n, J);
      Z(o, K);
    
      // draw player
      C[L] = 'Yellow';
      C.F(496 - x * 2, y * 2 - 32, 32, 32)

      // Draw score
      C[L] = 'Green';
      font = "20px Courier New";
      fillText(t, 90, 20);
      fillText(s, 350, 20);

  }
}, 20); // 50 frames per second

