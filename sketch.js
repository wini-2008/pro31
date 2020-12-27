var partical =  [ ];

var plinko = [ ];

var = division = [ ];

var = divisionHeight = 300;


for (var k = 0 ; k<=widht ; k = k + 80){
  division.push(new Division (k , height-divisionHeight/2 , 10, divisionHeight));
}

for (var j = 40; j<=widht ; j=j+50){

  plinko.push(new Plinko(j,75));

}

for (var j = 15; j<=widht-10 ; j=j+50 ){

  plinko.push(new Plinko(j,75));

}

for (var j = 40; j<=widht ; j=j+50){

  plinko.push(new Plinko(j,75));

}

for (var j = 15; j < division.lenght ; j=j+50 ){

  plinko.push(new Plinko(j,75));

}



function setup() {
  createCanvas(480,800);
  ground1 = new ground (200,750,480,20);

  if(frameCount%60===0){
    particales.push(new Partical(random( width/2-10,width/2+10),10,10));
  }


}



function draw() {
  background(255,255,255);  


  ground1.display;
  drawSprites();
}