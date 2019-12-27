var p_count=1;
var img_count=1;
var start_a=5;//temp
var img_type=1;                               //娱乐模式默认样式
//var time_s;                                     //start的延时函数时间
var t=60;                                       //倒计时时间
var img_map;
var snake_died_judge=0;
var judge=true;                                 //判断游戏失败的选择
var S_lenght=3;                                 //蛇的长度
var score=0;                                     //分数
var life_value=100;                             //生命值
var check_info=1;
var  time=200;                                  //调用时间
var judge_pause=0;                              //暂停时判断不同页面
var snake_leight= new Array(S_lenght);          //蛇的数组
var food_leight= new Array(1);      //蛇的数组
var accelerate_leight= new Array(1);//解药的数组
var decelerate_leight= new Array(1); //毒药的数组
var ting_leight= new Array(10);      //障碍物的数组
var food_x=0;
var food_y=0;
var food_add=0;
var ting_x=0;
var ting_y=0;
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
