

function start_snake1() {

    var map2 =document.getElementById('map');

    map2.onmousedown=game_pause;

    document.onkeypress=function (e) {
        s_direction(e);
    }
    s_direction_xy();  //蛇行动坐标
    snake_eatfood() ;       //吃食物页面
    if(food_add==1){

        ting_position();

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
var a1=document.getElementById('a1');

function fun2(){
    judge_pause=2;
    img_change();

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

    time_s=setInterval(function(){
        start_snake1();
    },time);
}