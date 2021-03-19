var gameState="play"
function preload() {
mountainImage=loadImage("mountain bg.jpg");
bheemImage=loadImage("bheem-removebg-preview.png");

chandramukhiImage=loadImage("Chandramukhi.png");

bulletImage=loadImage("bullet.png");


}

function setup() {
createCanvas(800,400)
mountain=createSprite(400,100);
mountain.scale=1.6

mountain.addImage("mountain",mountainImage);
mountain.velocityX=-2

bheem=createSprite(100,350,20,40);
bheem.addImage(bheemImage);


chandramukhi=createSprite(700,320);
chandramukhi.addImage(chandramukhiImage);
chandramukhi.scale=0.4;

edges=createEdgeSprites();

bheem.debug=true;
bheem.setCollider("rectangle",0,0,bheem.width-50,bheem.height-50);

bulletGroup=new Group()

}


function draw() {
background("white")

if(gameState==="play"){



if(mountain.x<200){
    mountain.x=400
}

if(keyDown("space")){
    bheem.velocityY=-10
}

bheem.velocityY=bheem.velocityY+0.5;
bheem.collide(edges[3]);

if(bheem.isTouching(bulletGroup)){
    gameState="end";



}

drawSprites()
spawnBullets()
}
if(gameState==="end"){
    text("GAMEOVER",400,200)
}
}

function spawnBullets(){
    if(frameCount%160===0){ 
        var bullet=createSprite(700,370);
        bullet.addImage(bulletImage);
        bullet.velocityX=-3
        bullet.scale=0.2
        bullet.lifetime=300
        bullet.debug=true;

        bulletGroup.add(bullet)
    }
}