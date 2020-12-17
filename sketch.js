var a,b,c,d




function setup() {
  createCanvas(800,400);
  a=createSprite(32,52,65,85)
  b=createSprite(200,200,65,85)
  c=createSprite(150,35,45,25)
  d=createSprite(25,35,58,61)
  a.shapeColor="green"
  b.shapeColor="green"
  c.shapeColor="green"
  d.shapeColor="green"
}

function draw() {
  background(255,255,255); 
  a.x=World.mouseX
  a.y=World.mouseY
 if (touching(a,b)){
  a.shapeColor="red"
  b.shapeColor="red"

 }
 else{
  a.shapeColor="green"
  b.shapeColor="green"

 }
 if(touching(a,c)){
   a.shapeColor="pink"
 c.shapeColor="pink"


 }
 else{
a.shapeColor="green"
c.shapeColor="green"
 }
 if(touching(a,d)){
   a.shapeColor="orange"
   d.shapeColor="orange"
 }
 else{
a.shapeColor="green"
d.shapeColor="green"
 }
  drawSprites();
}

function touching(o1,o2){

  if(o1.x-o2.x<o1.width/2+o2.width/2
    && o2.x-o1.x<o1.width/2+o2.width/2
    && o1.y-o2.y<o1.height/2+o2.height/2
    && o2.y-o1.y<o1.height/2+o2.height/2){
    return true
  }
  else{
  return false  

  }
}