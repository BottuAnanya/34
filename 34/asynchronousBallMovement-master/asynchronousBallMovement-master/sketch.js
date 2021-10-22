var ball,position,database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,50,50);
    ball.shapeColor = "red";
    var Ball_position = database.ref('positions/ball');
    Ball_position.on("value",read_position,Show_error);
    console.log(Ball_position);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-10);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+10);
    }
    drawSprites();
}

function changePosition(x,y){
    
    //console.log(ball.x+","+ball.y);
    database.ref('positions/ball').set({
      'x' : position.x + x,
       'y' : position.y + y,
    });
}
function read_position(Ball_position){
position=Ball_position.val();
console.log(position);
ball.x=position.x;
ball.y=position.y;
}
function Show_error(){

}