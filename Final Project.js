/*
 * This program tells a graphical story in 4 frames.
 */

/* 
 * Draws the first scene on the canvas and outputs the first
 * section of text for the story.
 */

function drawScene1(){
    
    let rect = new Rectangle(400, 500);
    rect.setPosition(1,1);
    rect.setColor("Green");
    add(rect);
    
    let rect2 = new Rectangle(400, 350);
    rect2.setPosition(1,1);
    rect2.setColor("Blue");
    add(rect2);
    
    let rect3 = new Rectangle(25, 200);
    rect3.setPosition(35,150);
    rect3.setColor("Brown");
    add(rect3);1
    
    let rect4 = new Rectangle(55, 55);
    rect4.setPosition(20,150);
    rect4.setColor("Green");
    add(rect4);
    
    let rect5 = new Rectangle(35, 100);
    rect5.setPosition(300, 250);
    rect5.setColor("Yellow");
    add(rect5);
    
    let rect6 = new Rectangle(10, 10);
    rect6.setPosition(305, 255);
    rect6.setColor("Black");
    add(rect6);
    
    let rect7 = new Rectangle(10, 10);
    rect7.setPosition(320, 255);
    rect7.setColor("Black");
    add(rect7);
    
    let rect8 = new Rectangle(15, 10);
    rect8.setPosition(310, 275);
    rect8.setColor("Black");
    add(rect8);
    
    let rect9 = new Rectangle(35, 100);
    rect9.setPosition(150, 250);
    rect9.setColor("Yellow");
    add(rect9);
    
    let rect10 = new Rectangle(10, 10);
    rect10.setPosition(155, 255);
    rect10.setColor("Black");
    add(rect10);
    
    let rect11 = new Rectangle(10, 10);
    rect11.setPosition(170, 255);
    rect11.setColor("Black");
    add(rect11);
    
    let rect12 = new Rectangle(15, 10);
    rect12.setPosition(160, 275);
    rect12.setColor("Black");
    add(rect12);
    
    let txt1 = new Text("Hey wassup dude!", "100t Arial");
    txt1.setPosition(125,235);
    txt1.setColor("Black")
    add(txt1);
    
    let txt2 = new Text("Hey wassup pupcup!", "100t Arial");
    txt2.setPosition(265,235);
    txt2.setColor("Black")
    add(txt2);
    println("This is scene 1");
}

/* 
 * Draws the second scene on the canvas and outputs the second
 * section of text for the story.
 */

function drawScene2(){
   let rect = new Rectangle(400, 500);
    rect.setPosition(1,1);
    rect.setColor("Green");
    add(rect);
    
    let rect2 = new Rectangle(400, 350);
    rect2.setPosition(1,1);
    rect2.setColor("Blue");
    add(rect2);
    
    let rect3 = new Rectangle(25, 200);
    rect3.setPosition(35,150);
    rect3.setColor("Brown");
    add(rect3);1
    
    let rect4 = new Rectangle(55, 55);
    rect4.setPosition(20,150);
    rect4.setColor("Green");
    add(rect4);
    
    let rect5 = new Rectangle(35, 100);
    rect5.setPosition(300, 250);
    rect5.setColor("Yellow");
    add(rect5);
    
    let rect6 = new Rectangle(10, 10);
    rect6.setPosition(305, 255);
    rect6.setColor("Black");
    add(rect6);
    
    let rect7 = new Rectangle(10, 10);
    rect7.setPosition(320, 255);
    rect7.setColor("Black");
    add(rect7);
  
    let rect8 = new Rectangle(15, 10);
    rect8.setPosition(310, 275);
    rect8.setColor("Black");
    add(rect8);
    
    let rect9 = new Rectangle(35, 100);
    rect9.setPosition(150, 250);
    rect9.setColor("Yellow");
    add(rect9);
    
    let rect10 = new Rectangle(10, 10);
    rect10.setPosition(155, 255);
    rect10.setColor("Black");
    add(rect10);
    
    let rect11 = new Rectangle(10, 10);
    rect11.setPosition(170, 255);
    rect11.setColor("Black");
    add(rect11);
    
    let rect12 = new Rectangle(15, 10);
    rect12.setPosition(160, 275);
    rect12.setColor("Black");
    add(rect12);
    
    let txt1 = new Text("Chill out bro i'm joking i'm sorry", "100t Arial");
    txt1.setPosition(100,225);
    txt1.setColor("Black")
    add(txt1);
    
    let txt2 = new Text("I'm done with you calling me pupcup im leaving", "100t Arial");
    txt2.setPosition(180,240);
    txt2.setColor("Black")
    add(txt2);
    println("This is scene 2");
}

/* 
 * Draws the third scene on the canvas and outputs the third
 * section of text for the story.
 */

function drawScene3(){
    let rect = new Rectangle(400, 500);
    rect.setPosition(1,1);
    rect.setColor("Green");
    add(rect);
    
    let rect2 = new Rectangle(400, 350);
    rect2.setPosition(1,1);
    rect2.setColor("Blue");
    add(rect2);
    
    let rect3 = new Rectangle(25, 200);
    rect3.setPosition(35,150);
    rect3.setColor("Brown");
    add(rect3);1
    
    let rect4 = new Rectangle(55, 55);
    rect4.setPosition(20,150);
    rect4.setColor("Green");
    add(rect4);
    
    let rect9 = new Rectangle(35, 100);
    rect9.setPosition(150, 250);
    rect9.setColor("Yellow");
    add(rect9);
    
    let rect10 = new Rectangle(10, 10);
    rect10.setPosition(155, 255);
    rect10.setColor("Black");
    add(rect10);
    
    let rect11 = new Rectangle(10, 10);
    rect11.setPosition(170, 255);
    rect11.setColor("Black");
    add(rect11);
    
    let rect12 = new Rectangle(15, 10);
    rect12.setPosition(160, 275);
    rect12.setColor("Black");
    add(rect12);
    
    let txt1 = new Text("I'm so sad my bestfriend left :(", "100t Arial");
    txt1.setPosition(100,225);
    txt1.setColor("Black")
    add(txt1);
    
    let txt2 = new Text("I'm gonna go say sorry to him right now", "100t Arial");
    txt2.setPosition(100,240);
    txt2.setColor("Black")
    add(txt2);
    println("This is scene 3");
}

/* 
 * Draws the fourth scene on the canvas and outputs the fourth
 * section of text for the story.
 */

function drawScene4(){
    let rect = new Rectangle(400, 500);
    rect.setPosition(1,1);
    rect.setColor("Green");
    add(rect);
    
    let rect2 = new Rectangle(400, 350);
    rect2.setPosition(1,1);
    rect2.setColor("Blue");
    add(rect2);
    
    let rect3 = new Rectangle(25, 200);
    rect3.setPosition(35,150);
    rect3.setColor("Brown");
    add(rect3);1
    
    let rect4 = new Rectangle(55, 55);
    rect4.setPosition(20,150);
    rect4.setColor("Green");
    add(rect4);
    
    let rect5 = new Rectangle(35, 100);
    rect5.setPosition(300, 250);
    rect5.setColor("Yellow");
    add(rect5);
    
    let rect6 = new Rectangle(10, 10);
    rect6.setPosition(305, 255);
    rect6.setColor("Black");
    add(rect6);
    
    let rect7 = new Rectangle(10, 10);
    rect7.setPosition(320, 255);
    rect7.setColor("Black");
    add(rect7);
  
    let rect8 = new Rectangle(15, 10);
    rect8.setPosition(310, 275);
    rect8.setColor("Black");
    add(rect8);
    
    let rect9 = new Rectangle(35, 100);
    rect9.setPosition(150, 250);
    rect9.setColor("Yellow");
    add(rect9);
    
    let rect10 = new Rectangle(10, 10);
    rect10.setPosition(155, 255);
    rect10.setColor("Black");
    add(rect10);
    
    let rect11 = new Rectangle(10, 10);
    rect11.setPosition(170, 255);
    rect11.setColor("Black");
    add(rect11);
    
    let rect12 = new Rectangle(15, 10);
    rect12.setPosition(160, 275);
    rect12.setColor("Black");
    add(rect12);
    
    let txt1 = new Text("I'm sorry for calling you that", "100t Arial");
    txt1.setPosition(100,220);
    txt1.setColor("Black")
    add(txt1);
    
    let txt2 = new Text("It's okay I forgive you lets go play now!", "100t Arial");
    txt2.setPosition(200,235);
    txt2.setColor("Black")
    add(txt2);
    println("This is scene 4");
}

var sceneCounter = 0;
function start() {
    
    var welcome = new Text("Click to Begin!");
    
    welcome.setPosition(
        getWidth() / 2 - welcome.getWidth() / 2,
        getHeight() / 2
    );
    
    add(welcome);
    
    // Call the drawNextScene function every time the mouse is clicked
    mouseClickMethod(drawNextScene);
}

/*
 * When this function is called the next scene is drawn.
 */

function drawNextScene(){
    sceneCounter++;
    
    if(sceneCounter == 1) {
        drawScene1();
    } else if (sceneCounter == 2) {
        drawScene2();
    } else if (sceneCounter == 3) {
        drawScene3();
    } else {
        drawScene4();
    }
}
