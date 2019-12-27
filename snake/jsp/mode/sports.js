var count_ting=0; //判断障碍物位置是否存在
var ting_cont=0;  //障碍物的数量
var  temp_ting=0;

var time_down;//倒计时


function start_snake2() {

    var map2 =document.getElementById('map');

    map2.onmousedown=game_pause;

    document.onkeypress=function (e) {
        s_direction(e);
    }
    s_direction_xy();  //蛇行动坐标
    snake_eatfood() ;       //吃食物页面
    if(food_add==1){


        food_add=0;
    }
    deal_accelerate();//加速解压篇判断
    deal_decelerate();//减速毒药判断
    deal_ting();
    deal_bomb();
    snake_died();
    moveSnake();
    game_over();
    // var start_pause1=document.getElementsByClassName('over');
    // start_pause1.onclick=start_pause();
}

 var time_s=setInterval(function(){
    sport_s();
},time);
function sport_s() {
    if(start_a==5){
    var a1=document.getElementById('sports_a1');
    a1.onclick=function () {
start_a=0;

    }
    }
    if(start_a==0){
        fun3();
        start_a=1;
    }
    if(start_a==1){
        start_snake2();
        var map=document.getElementById('map');
        map.onclick=function (){
            start_a=2;
        }

    }
    if(start_a==2){
        game_pause();
        map.onclick=function (){
        }
    }
}
function fun3(){
    t=60;


    time_put=setInterval(function () {
        put_time();
    },1000);
    judge_pause=3;

    var start_game_1=document.getElementsByClassName('start_temp_')[0];
    start_game_1.parentNode.removeChild(start_game_1);

    snake_deal_leight();

    drawsnake();
    food_position();
    accelerate_position();
    decelerate_position();
    bomb_position();
    snake_died();
    ting_position();


}

function put_time() {

    var d = new Date();
    var x = document.getElementById('time1');

    --t;
    x.innerHTML=t;
    if(t==0){
        game_over_page1();
    }

}