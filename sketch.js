var car,wall;
var thickness, wall
var bullet ,speed ,weight


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)


  car=createSprite(50, 200, 50,50);  
   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22509;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  
  function hasCollied(bullet,wall)
  bulletRightEdge=1bullet.x+1bullet.width;

  drawSprites();
 
}

