var baloon, bg, obBottom1, obBottom2, obBottom3, obTop1, obTop2;
var baloonImg,
  bgImg,
  obBottom1Img,
  obBottom2Img,
  obBottom3Img,
  obTop1Img,
  obTop2Img;
var topGround, bottomGround;
function preload() {
  baloonImg = loadAnimation(
    "./assets/balloon1.png",
    "./assets/balloon2.png",
    "./assets/balloon3.png"
  );
  bgImg = loadImage("./assets/bg.png");
  obBottom1Img = loadImage("./assets/obsBottom1.png");
  obBottom2Img = loadImage("./assets/obsBottom2.png");
  obBottom3Img = loadImage("./assets/obsBottom3.png");
  obTop1Img = loadImage("./assets/obsTop1.png");
  obTop2Img = loadImage("./assets/obsTop2.png");
}
function setup() {
  createCanvas(400, 400);
  bg = createSprite(165, 485, 1, 1);
  bg.addImage(bgImg);
  bg.scale = 1.3;

  topGround = createSprite(200, 10, 800, 20);
  topGround.visible = false;
  bottomGround = createSprite(200, 390, 800, 20);
  bottomGround.visible = false;

  baloon = createSprite(40, 200, 30, 30);
  baloon.addAnimation("baloonImg", baloonImg);
  baloon.scale = 0.2;
}
function draw() {
  background("black");
  baloon.velocityY = baloon.velocityY + 0.4;

  if (keyDown("space")) {
    baloon.velocityY = baloon.velocityY - 3;
  }
  drawSprites();
  createTopObstacles();
  invisibleLine();
}

function createTopObstacles() {
  if (frameCount % 60 === 0) {
    obTop1 = createSprite(500, 15, 30, 30);
    obTop1.scale = 0.1;
    obTop1.velocityX = obTop1.velocityX - 3;
    obTop1.y = Math.round(random(10, 100));
    var ran = Math.round(random(1, 2));

    switch (ran) {
      case 1:
        obTop1.addImage(obTop1Img);
        break;
      case 2:
        obTop1.addImage(obTop2Img);
        break;
      default:
        break;
    }

    obTop1.lifeTime = 50;
    baloon.depth = baloon.depth + 1;
  }
}

function createBottomObstacles() {}
function invisibleLine() {
  if (frameCount % 60 === 0) {
    var invisibleLine = createSprite(500, 200, 10, 800);
    invisibleLine.velocityX = invisibleLine.velocityX - 10;
    // invisibleLine.visible = false;
    invisibleLine.lifeTime = 50;
    invisibleLine.depth = baloon.depth;
  }
}
