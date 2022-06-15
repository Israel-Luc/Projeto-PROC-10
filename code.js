var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var life = 25;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var charge;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(25,200,13,13);
  sam.shapeColor = "green";
  
  charge = createSprite(375,200,15,15);
  charge.shapeColor = "black";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";

  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "green";

  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "blue";

  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "orange";

//adicione velocidade para fazer o carro se mover.
var gameState = "serve";

function draw() {
   background("white");
  text("Vidas: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
car4.bounceOff(boundary1);
car4.bounceOff(boundary2);

if(gameState == "serve"){
  stroke("black");
  fill("black");
  textSize(25);
  text("aperte ENTER para jogar", 50, 200);
  if(keyDown("enter")){
    car1.velocityY = 6;
    car2.velocityY = 6;
    car3.velocityY = -6;
    car4.velocityY = -6;
    gameState = "play";
  }
}
if (keyDown("right")){
  sam.x = sam.x + 2;
}
if (keyDown("left")){
  sam.x = sam.x - 2;
}
if (sam.isTouching(car1)){
  sam.x = 20;
  sam.y = 200;
  life = life-1;
  }
if (sam.isTouching(car2)){
  sam.x= 20;
  sam.y= 200;
  life = life-3;
}
if (sam.isTouching(car3)){
 sam.x = 20;
 sam.y = 200;
  life = life-2;
}
if (sam.isTouching(car4)){
  sam.x = 20;
  sam.y = 200;
  life = life-4;
}

if (life==0){
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    car4.velocityY = 0;
    sam.velocityX = 0;
    stroke("red");
    fill("red");
    textFont("NewTimesRoman");
    textSize(25);
    text("GAME OVER", 140, 230);
  }
  
  if (sam.isTouching(charge)){
    car1.velocityY = 0;
    car2.velocityY = 0;
    car3.velocityY = 0;
    car4.velocityY = 0;
    sam.velocityX = 0;
    stroke("green");
    fill("green");
    textFont("NewTimesRoman");
    textSize(25);
    text("YOU WIN", 150, 200);
  }

drawSprites();
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
