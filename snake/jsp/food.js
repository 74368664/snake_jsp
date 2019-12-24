var food_leight= new Array(1);
var accelerate_leight= new Array(1);
var decelerate_leight= new Array(1);
var food_x=0;
var food_y=0;


var accelerate_x=0;
var accelerate_y=0;

var decelerate_x=0;
var decelerate_y=0;
var bomb_x=0;
var bomb_y=0;
function food(x,y) {
    this.x=x;
    this.y=y;
}
function accelerate(x,y) {
    this.x=x;
    this.y=y;
}
function decelerate(x,y) {
    this.x=x;
    this.y=y;
}
function food_position() {

     food_x=Math.floor(Math.random()*42+1);
    food_y=Math.floor(Math.random()*25+1);

        if (food_x != accelerate.x && food_y != accelerate.y) {
            food(food_x, food_y);
            food_leight[0]= new food(x, y);
            // console.log(food_leight[0]);
            console.log(food_leight[0]);
            drawmap(food_x*20, food_y*20, 'food_');

        }


}

function accelerate_position() {

    accelerate_x=Math.floor(Math.random()*32+4);
    accelerate_y=Math.floor(Math.random()*25+1);

    if (accelerate_x != food.x && accelerate_y !=food.y ) {
        //accelerate(accelerate_x, accelerate_y);
        accelerate_leight[0]= new accelerate(accelerate_x, accelerate_y);
        console.log(accelerate_leight[0]);
        drawmap(accelerate_x*20, accelerate_y*20, 'accelerate');

    }


}
function decelerate_position() {

    decelerate_x=Math.floor(Math.random()*25+4);
    decelerate_y=Math.floor(Math.random()*25+1);

    if (decelerate_x != food.x && decelerate_y !=food.y ) {
        //accelerate(accelerate_x, accelerate_y);
        decelerate_leight[0]= new decelerate(decelerate_x, decelerate_y);
        console.log(decelerate_leight[0]);
        drawmap(decelerate_x*20, decelerate_y*20, 'decelerate');

    }


}
function bomb_position() {

    bomb_x=Math.floor(Math.random()*32+4);
    bomb_y=Math.floor(Math.random()*25+1);

    if (bomb_x != food.x && bomb_y !=food.y ) {
        //accelerate(accelerate_x, accelerate_y);
        // decelerate_leight[0]= new decelerate(decelerate_x, decelerate_y);
        //console.log(decelerate_leight[0]);
        drawmap(bomb_x*20, bomb_y*20, 'bomb');

    }


}