function setup(){
createCanvas(1000,500);
background(0);
}
  
  
var x=100;
var y=100;
 
function draw (){
  var m=millis();
   
fill(0,0,0,20);
rect(0,0,1000,500);
  stroke(22,237,124);
 if (m%2000 < 100)
 {
 
 line(x-100,y+150,x,y+150);
 } else if (m%2000 < 300) {
 line(x,y+150,x+50,y-50);
 } else if (m%2000 < 400) {
 line(x+50,y-50,x+100,y+300);
 } else if (m%2000 < 500) {
line(x+100,y+300,x+120,y+150);
 } else if (m%2000 < 600){
line(x+120,y+150,x+200,y+150);
} else if (m%2000 < 700) {
line(x+200,y+150,x+250,y-50);
 } else if (m%2000 < 800){
line(x+250,y-50,x+300,y+300);
} else if (m%2000 < 900) {
line(x+300,y+300,x+350,y+150);
 } else if (m%2000 < 1000 ){
line(x+350,y+150,x+420,y+150);
} else if (m%2000 < 1100) {
line(x+420,y+150,x+470,y-50);
 }else if (m%2000 < 1200 ){
line(x+470,y-50,x+520,y+300);
} else if (m%2000 < 1300) {
line(x+520,y+300,x+570,y+150);
 }else if (m%2000 < 1400){
line(x+570,y+150,x+650,y+150);
} else if (m%2000 < 1500) {
line(x+650,y+150,x+700,y-50);
 } else if (m%2000<1600) {
line(x+700,y-50,x+750,y+300);
} else if (m%2000 < 1700) {
line(x+750,y+300,x+800,y+150);
 } else if (m%2000<1800) {
line(x+800,y+150,x+900,y+150);
 
  }
}
