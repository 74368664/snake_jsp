var count_ting=0; //判断障碍物位置是否存在
var ting_cont=0;  //障碍物的数量
var  temp_ting=0;

var time_down;//倒计时
function ting_position() {
//     judge_pause=2;
//     temp_ting=0;
//
//     while (temp_ting!=1){
// //
//
//         for (var j = 0; j <= 20; j++) {
//             ting_x=100;
//               ting_y=Math.floor(Math.random()*20+1);
//                 ting_leight[j] = new ting_(ting_x, ting_x);
//
//                 drawmap(ting_leight[ting_cont].x * 20, ting_leight[ting_cont].y * 20, 'ting');
//                 ting_cont += 1;
//                 temp_ting = 1;
//                 break;
//             }
//         }
    

}
function deal_ting() {
    // for(var i=0;i<ting_cont;i++)
    //     if (ting_leight[i].x*20==snake_leight[0].x &&
    //         ting_leight[i].y*20==snake_leight[0].y) {
    //         console.log(ting_cont+" "+ting_leight[ting_cont]);
    //         life_value = 0;
    //         // console.log("2");
    //         life_progress(life_value);
    //         document.getElementById('snake_life_value').innerHTML="   "+life_value;
    //         game_over_page();
    //
    //
    //         // removeEvent(ting_x*20,ting_y*20);
    //
    //     }

}
function start_snake2() {

    var map2 =document.getElementById('map');

    map2.onmousedown=game_pause;

    document.onkeypress=function (e) {
        s_direction(e);
    }
    s_direction_xy();  //蛇行动坐标
    snake_eatfood() ;       //吃食物页面
    if(food_add==1){

        // food_position();

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

    time_s=setInterval(function(){
        start_snake2();
    },time);
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