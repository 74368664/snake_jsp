var count_ting=0; //判断障碍物位置是否存在
var ting_cont=0;  //障碍物的数量
var  temp_ting=0;
    function ting_position() {
        judge_pause=2;
   temp_ting=0;

    while (temp_ting!=1){
//
        ting_x=Math.floor(Math.random()*32+4);
        ting_y=Math.floor(Math.random()*25+1);
        // for ( var k=0;k<=snake_leight;k++){
        //     if (ting_x != snake_leight[k].x||ting_y !=snake_leight[k].y ) {

                for (var j = 0; j <= ting_cont; j++) {
                    if (ting_x != food.x ||ting_y != food.y) {

                        if ((count_ting == 0) || ting_x != ting_leight[j].x || ting_y != ting_leight[j].y) {
                        }

                        ting_leight[ting_cont] = new ting_(ting_x, ting_x);
                        console.log(ting_cont + " " + ting_leight[ting_cont]);
                        drawmap(ting_leight[ting_cont].x * 20, ting_leight[ting_cont].y * 20, 'ting');
                        ting_cont += 1;
                        temp_ting = 1;
                        break;
                    }
                }
            }
    //     }
    // }

}
function deal_ting() {
    for(var i=0;i<ting_cont;i++)
    if (ting_leight[i].x*20==snake_leight[0].x &&
        ting_leight[i].y*20==snake_leight[0].y) {
        console.log(ting_cont+" "+ting_leight[ting_cont]);
        life_value = 0;
        // console.log("2");
        life_progress(life_value);
        document.getElementById('snake_life_value').innerHTML="   "+life_value;
        game_over_page();


        // removeEvent(ting_x*20,ting_y*20);

    }

}
function start_snake1() {

    var map2 =document.getElementById('map');

    map2.onmousedown=game_pause;

    document.onkeypress=function (e) {
        s_direction(e);
    }
    s_direction_xy();
    deal_eat();         //吃食物页面
    if(food_add==1){
    for(var i=0;i<3;i++) {
        ting_position();
    }
        food_add=0;
    }
    deal_accelerate();//加速解压篇判断
    deal_decelerate();//减速毒药判断
    deal_ting();
    deal_bomb();
    moveSnake();
    game_over();
    // var start_pause1=document.getElementsByClassName('over');
    // start_pause1.onclick=start_pause();
}
var a1=document.getElementById('a1');

function fun2(){


    var start_game_1=document.getElementsByClassName('start_temp_')[0];
    start_game_1.parentNode.removeChild(start_game_1);

    snake_deal_leight();


    console.log("1");
    drawsnake();
    food_position();
    accelerate_position();
    decelerate_position();
    bomb_position();
    for(var i=0;i<3;i++) {
        ting_position();
    }
    time_s=setInterval(function(){
        start_snake1();
    },time);
}