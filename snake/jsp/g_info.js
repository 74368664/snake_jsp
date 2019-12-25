var S_lenght=3;
var score=0;
var life_value=100;
var check_info=1;
var  time=200;   //调用时间
var judge_pause=0;
var snake_leight= new Array(S_lenght);
var food_leight= new Array(1);
var accelerate_leight= new Array(1);
var decelerate_leight= new Array(1);
var ting_leight= new Array(10);
var food_x=0;
var food_y=0;
var food_add=0;

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
function ting_(x,y) {       //墙
    this.x=x;
    this.y=y;
}
function accelerate(x,y) {  //解药
    this.x=x;
    this.y=y;
}
function decelerate(x,y) {  //毒药
    this.x=x;
    this.y=y;
}

// var  up=1;
// var  down=2;
// var  left=3;
// var   right=4;
//
// var size=20;     //蛇一节的长度
// var x=200;
//
// var y=200;
// var dir=right;      //初始方向
//
// function coord(x,y) {
//     this.x=x;
//     this.y=y;
//
//
// }