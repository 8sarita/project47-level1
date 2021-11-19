var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6154c7db-fbe5-425b-8744-d991078ed461","c42bd040-88f2-41b3-8631-ccf96d16af6f","8a699124-f983-4cc0-8384-0d4cdb70955c","e01aa168-39bc-4c3e-8ac1-f5afcae3a973"],"propsByKey":{"6154c7db-fbe5-425b-8744-d991078ed461":{"name":"car1","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"IFhQi7t_b8d62amf3eRCx2ic36FKzVWd","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/6154c7db-fbe5-425b-8744-d991078ed461.png"},"c42bd040-88f2-41b3-8631-ccf96d16af6f":{"name":"car2","sourceUrl":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PgZ9LG37ZQqVk5aChd38vWQARDnCdCKu/category_vehicles/car_red.png"},"8a699124-f983-4cc0-8384-0d4cdb70955c":{"name":"car3","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"e01aa168-39bc-4c3e-8ac1-f5afcae3a973":{"name":"won","sourceUrl":null,"frameSize":{"x":400,"y":202},"frameCount":1,"looping":true,"frameDelay":12,"version":"_0asfBUo7BoMzDXkejYwkQWC9BAzrddI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":202},"rootRelativePath":"assets/e01aa168-39bc-4c3e-8ac1-f5afcae3a973.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var parkline1 = createSprite(150, -120,15,160);
var parkline2 = createSprite(250, -120,15,160);

var line1 = createSprite(165, -150,15,30);
var line2 = createSprite(235, -150,15,30);

var parkline3 = createSprite(30, -120,15,160);
var parkline4 = createSprite(250+120, -120,15,160);

var parkline5 = createSprite(128, -120,15,160);
var parkline6 = createSprite(272, -120,15,160);



var wall1 = createSprite(World.width-590,200,20,800);
var wall2 = createSprite(World.width+190,200,20,800);
var wall3 = createSprite(200,World.height-590,800,20);
var wall4 = createSprite(200,World.height+190,800,20);

var playerCar = createSprite(200,200);
var car1 = createSprite(80,-110);
var car2 = createSprite(320,-110);

var level1 = 0;
var level1Won = 1;
var level2 = 2;
var level2Won = 3;

var gameState = 0;


function setup(){
  
 
  
  camera.zoom = camera.zoom-0.3;
  wall1.shapeColor = "yellow";
  wall2.shapeColor = "yellow";
 
  wall4.shapeColor = "yellow";
  
 
  
  
}

function draw() {
  
  if(gameState === level1){
  background(rgb(199,238,255));
  
  
   playerCar.setAnimation("car1");
   car1.setAnimation("car2");
   car2.setAnimation("car3");
    wall3.shapeColor = "yellow";
    
   parkline1.shapeColor = "lightgreen";
  parkline2.shapeColor = "lightgreen";
   parkline3.shapeColor = "black";
  parkline4.shapeColor = "black";
  parkline5.shapeColor = "black";
  parkline6.shapeColor = "black";
  
  // camera.isActive()
  // camera.on();
  
  // camera.y = playerCar.y;
  
  if(playerCar.isTouching(parkline1)||playerCar.isTouching(parkline2)){
    parkline1.shapeColor = "red";
  parkline2.shapeColor = "red";
    
  }
  
  if(playerCar.isTouching(line1)&& playerCar.isTouching(line2)){
     wall3.shapeColor = "purple";
     
     if(keyDown("space")&& gameState===level1){
       
         gameState = level1Won;
         
       var won = createSprite(World.width/2,World.height/8);
       won.setAnimation("won");
       won.scale=0.6;
       
     
     }
  
  }
  
  playerCar.collide(wall1);
   playerCar.collide(wall2);
    playerCar.collide(wall3);
    playerCar.collide(wall4);
    
    line1.visible= false;
     line2.visible= false;
    
    
  
  controls();
  }
  
  if(gameState === level1Won){
    
    if(keyDown("space")&&gameState === level1Won){
      gameState = level2;
      
      //   car2.destroy();
      // car1.destroy();
      // parkline1.destroy();
      // parkline2.destroy();
      // parkline3.destroy();
      // parkline4.destroy();
      // parkline5.destroy();
      // parkline6.destroy();
      // won.destroy();
      // playerCar.y= 200;
     
  
  
     
      
    }
 
  }
  
    camera.isActive()
  camera.on();
  
  camera.y = playerCar.y;
  
  drawSprites();
}

function controls(){
  
  if(keyDown(UP_ARROW)){
    playerCar.y = playerCar.y-10;
    
  }
   if(keyDown(DOWN_ARROW)){
    playerCar.y = playerCar.y+10;
    
  }
  if(keyDown(LEFT_ARROW)){
    playerCar.x = playerCar.x-10;
    // playerCar.setAnimation("carleft");
  }
  if(keyDown(RIGHT_ARROW)){
    playerCar.x = playerCar.x+10;
    // playerCar.setAnimation("carright");
  }
  
  
  
  
  
  
  
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
