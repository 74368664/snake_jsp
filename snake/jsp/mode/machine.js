// var count_ting=0; //判断障碍物位置是否存在
// var ting_cont=0;  //障碍物的数量
// var  temp_ting=0;
//
// var time_down;//倒计时
// function ting_position() {
//
//
// }
// function deal_ting() {
//
// }
// function start_snake2() {
//     twn_decide=5;
//     var map2 =document.getElementById('map');
//
//     map2.onmousedown=game_pause;
//
//
//
//     document.onkeypress=function (e) {
//         s_direction(e);
//     }
//     s_direction_xy();
//
//
//     snake_died();
//     //  var dir_temp=Math.floor(Math.random()*4+1);
//     var dir_temp=1
//     t_direction(dir_temp);
//
//
//     t_direction_xy(dir1);
//     //蛇行动坐标
//     movetSnake();
//
//     snake_eatfood() ;       //吃食物页面
//     // if(food_add==1){
//     //     food_add=0;
//     //   }
//     //  deal_accelerate();//加速解压篇判断
//     //  deal_decelerate();//减速毒药判断
//     //  deal_ting();
//     //   deal_bomb();
//     //   snake_died();
//     moveSnake();
//     game_over();
//     //   game_over();
//     // var start_pause1=document.getElementsByClassName('over');
//     // start_pause1.onclick=start_pause();
// }
//
// // var time_s=setInterval(function(){
// //     twin_s();
// // },time);
// // function twin_s() {
// //     if(start_a==5){
// //         var a1=document.getElementById('sports_a1');
// //         a1.onclick=function () {
// //             start_a=0;
// //             console.log(start_a);
// //         }
// //     }
// //     if(start_a==0){
// //         fun5();
// //         start_a=1;
// //     }
// //     if(start_a==1){
// //         start_snake2();
// //         var map=document.getElementById('map');
// //         map.onclick=function (){
// //             start_a=2;
// //         }
// //
// //     }
// //     if(start_a==2){
// //         game_pause();
// //         map.onclick=function (){
// //         }
// //     }
// // }
// var a1=document.getElementById('a1');
// function fun5(){
//     twn_decide=5;
//     t=60;
//     judge_pause=1;
//
//     var start_game_1=document.getElementsByClassName('start_temp_')[0];
//     start_game_1.parentNode.removeChild(start_game_1);
//
//     snake_deal_leight();
//     drawsnake();
//     tsnake_deal_leight();
//
//     drawtsnake();
//
//     food_position();
//     accelerate_position();
//     decelerate_position();
//     bomb_position();
//     time_s=setInterval(function(){
//         start_snake2()
//     },300);
// }
//
// // function put_time1() {
// //
// //     var d = new Date();
// //     var x = document.getElementById('time1');
// //
// //     --t;
// //     x.innerHTML=t;
// //     if(t==0){
// //         game_over_page1();
// //     }
// //
// // }