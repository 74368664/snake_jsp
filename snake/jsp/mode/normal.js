
function start_snake() {

    var map1 =document.getElementById('map');

    map1.onmousedown=game_pause;

    document.onkeypress=function (e) {
        s_direction(e);
    }
    s_direction_xy();
    deal_eat();         //吃食物页面
    deal_accelerate();//加速解压篇判断
    deal_decelerate();//减速毒药判断

    snake_died();
    deal_bomb();
    moveSnake();
    game_over();

}
var a1=document.getElementById('a1');
function fun1(){
    judge_pause=1;

    var start_game_1=document.getElementsByClassName('start_temp_')[0];
    start_game_1.parentNode.removeChild(start_game_1);

    snake_deal_leight();
    //
    drawsnake();
    food_position();
    accelerate_position();
    decelerate_position();
    bomb_position();
    time_s=setInterval(function(){
        start_snake();
    },time);
}