

function start_snake3() {
    twn_decide = 5;
    var map2 = document.getElementById('map');
    map2.onmousedown = game_pause;


    document.onkeypress = function (e) {

        t_direction(e);
    }
    s_direction_xy();
    t_direction_xy();
    //蛇行动坐标
    movetSnake();

    snake_eatfood();       //吃食物页面
    t_eat_food();
    // if(food_add==1){
    //     food_add=0;
    //   }
    //  deal_accelerate();//加速解压篇判断
    //  deal_decelerate();//减速毒药判断
    //  deal_ting();
    //   deal_bomb();
    //   snake_died();
    moveSnake();
    game_over();
   // snake_died();
}
var a1=document.getElementById('a1');
function fun5(){
    twn_decide=5;
    t=120;
    judge_pause=5;
    time_put=setInterval(function () {
        put_time1();
    },1000);
    var start_game_1=document.getElementsByClassName('start_temp_')[0];
    start_game_1.parentNode.removeChild(start_game_1);
   snake_deal_leight();
    drawsnake();
    tsnake_deal_leight();

    drawtsnake();

   food_position();
   // accelerate_position();
   // decelerate_position();
   // bomb_position();
    time_s=setInterval(function(){
        start_snake3()
    },300);
}

function put_time1() {

    var d = new Date();
    var x = document.getElementById('time1');

    --t;
    var minute_t=parseInt(t/60);
    var  second_t=t%60;
    x.innerHTML=minute_t+"  分"+second_t;
    if(t==0){
        game_over_page2();
    }

}