var spaceJet, planets, fuelCan
var asteroidsGroup, meteroidsGroup
var planet1,planet2,planet3,planet4,planet5,planet6

function preload (){
  spaceJet_img = loadImage("images/space jet.png")
  ufo_img = loadImage("images/ufo.png")
  asteroids_img = loadImage("images/asteroid.png")
  fuel_can_img = loadImage("images/fuel can.png") 
  planet1_img = loadImage("images/planet 1.png")
  planet2_img = loadImage("images/planet 2.png")
  planet3_img = loadImage("images/planet 3.png")
  planet4_img = loadImage("images/planet 4.png")
  planet5_img = loadImage("images/planet 5.png")
  planet6_img = loadImage("images/planet 6.png")



}

function setup() {
  createCanvas(1270,600);
background("space.png")

spaceJet = createSprite(685, 550, 200, 200);
  spaceJet.addImage(spaceJet_img)
  spaceJet.scale = 0.4

ufo = createSprite(100, 100, 100, 100);
  ufo.addImage(ufo_img)
  ufo.scale = 0.3

fuelCan = createSprite(300, 100, 100, 100);
  fuelCan.addImage(fuel_can_img)
  fuelCan.scale = 0.2

planet1 = createSprite(100, 300, 100, 100);
  planet1.addImage(planet1_img)
  planet1.scale = 0.2

planet2 = createSprite(300, 300, 100, 100);
  planet2.addImage(planet2_img)
  planet2.scale = 0.1

planet3 = createSprite(500, 300, 100, 100);
  planet3.addImage(planet3_img)
  planet3.scale = 0.3

planet4 = createSprite(700, 300, 100, 100);
  planet4.addImage(planet4_img)
  planet4.scale = 0.1
  
planet5 = createSprite(900, 300, 100, 100);
  planet5.addImage(planet5_img)
  planet5.scale = 0.5
  
planet6 = createSprite(1100, 300, 100, 100);
  planet6.addImage(planet6_img)
  planet6.scale = 0.2
  

asteroidsGroup = new Group()
meteroidsGroup = new Group()

}

function draw() {
  background(0,0,0);  
  if(keyDown("left_arrow")){
    spaceJet.x = spaceJet.x-2
  }

  if(keyDown("right_arrow")){
    spaceJet.x = spaceJet.x+2
  }

  if(keyDown("up_arrow")){
    spaceJet.y = spaceJet.y-2
  }

  if(keyDown("down_arrow")){
    spaceJet.y = spaceJet.y+2
  }

  drawSprites();
  spawnAsteroids()
  spawnMeteroids()
}
function spawnAsteroids(){
  if(frameCount%180===0){
var asteroids = createSprite(Math.round(random(20,1300),50,50))
asteroids.addImage(asteroids_img)
asteroids.velocityY = 15
asteroids.scale = 0.3
asteroidsGroup.add(asteroids)
}
 }
function spawnMeteroids(){
  if(frameCount%230===0){
    var meteroids = createSprite(Math.round(random(20,1300),20,20))
    asteroids.addImage(asteroids_img)
    meteroids.velocityY = 10
    asteroids.scale = 0.3
    meteroidsGroup.add(meteroids)
}
  }