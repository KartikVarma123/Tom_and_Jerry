var bg;
var cat_Ani, cat_Ani2, cat_Ani3, cat;
var rat_Ani, rat_Ani2, rat_Ani3, rat;




function preload() {
    //load the images here

   bg = loadImage("images/garden.png");
   cat_Ani = loadAnimation("images/cat1.png");
   cat_Ani2 = loadAnimation("images/cat2.png","images/cat3.png");
   cat_Ani3 = loadAnimation("images/cat4.png");
   rat_Ani =  loadAnimation("images/mouse1.png");
   rat_Ani2 = loadAnimation("images/mouse2.png","images/mouse3.png");
   rat_Ani3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(900,650,50,50);
    cat.addAnimation("cat", cat_Ani);
    cat.scale = 0.1;
    

    rat = createSprite(100,650,50,50);
    rat.addAnimation("rat", rat_Ani);
    rat.scale = 0.1;


    


}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - rat.x < cat.width/2 - rat.width/2){
        rat.addAnimation("happyRat",rat_Ani3);
        rat.changeAnimation("happyRat");
        

        cat.addAnimation("happyCat",cat_Ani3);
        cat.changeAnimation("happyCat");
        cat.velocityX = 0;
        cat.x = 300;

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      rat.addAnimation("mouseTeasing",rat_Ani2);
      rat.changeAnimation("mouseTeasing");
      rat.frameDelay = 25;


      cat.addAnimation("catRunning",cat_Ani2);
      cat.changeAnimation("catRunning");
      cat.frameDelay = 8;
      cat.velocityX = -3;

      


  }


}
