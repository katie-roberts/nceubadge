var BUZZER=D1;
sanalogWrite(BUZZER, 0.5);

function freq(f) { 
  if (f===0) digitalWrite(BUZZER,0);
  else analogWrite(BUZZER, 0.5, { freq: f } );
}

var pitches = {
  'E': 164.8,
  'F':174.00,
  'F#':185.00,
  'G': 196.00,
  'A':220.00,
  'A#':233.10,
  'B':246.94,
  'C':261.63,
  'D':293.66,
  'e':329.63,
  'f':349.23,
  'f#':370.00,
  'g':392.00,
  'a':440.00,
  'a#':466.2,
  'b':493.88,
  'c':523.25,
  'd':587.33
};

function step() {
  var ch = tune[pos];
  if (ch !== undefined) pos++;
  if (ch in pitches) freq(pitches[ch]);
  else freq(0); // off
}

var tune = "B     b   f# B  F#    A     B     D     B     b   f# B  F#    A     B     D     B     b   f# B  F#    A     B     D     B     b   f# B  F#    A     B     D     B";
var pos = 0;

setInterval(step, 100);
