
function life_progress(life_value) {  //生命值进度条
    var progress=document.getElementById('life_progress_div');
    progress.style.width=life_value+'px';

}
//分数进度条
function score_progress(score) {

    var progress=document.getElementById('experience_div');
    var srcoe_judge1=0;  //判断分数的进度长度选择
        if(score%50==0){
            this.srcoe_judg1e=1;

        }else{
        this.srcoe_judge1=0;
        }


    if (this.score_judge1==1){

        progress.style.width=100+'px';
    }
    else if(score<50){
        progress.style.width=score*2+'px';
    }
    else{
    progress.style.width=(score%10)*2+'px';
    }

}
function deal_eat() {
    if (food_leight[0].x*20==snake_leight[0].x&&food_leight[0].y*20==snake_leight[0].y){
        S_lenght+=1;
        score=score+10;
        snake_died_judge=1;
        score_progress(score);

        document.getElementById('snake_score').innerHTML="  "+score;

if(score%50==0&&score!=0){
    check_info=score/50+1;

    document.getElementById('check_put').innerHTML="关卡"+check_info;
    if(time>50){
    time-=20;
    }
    lever();
    alert("恭喜你过关了");


}
        var add_Temp=new Array(2);
        add_Temp[0]=(food_leight[0].x)*20;
        add_Temp[1]=(food_leight[0].y)*20;
        snake_leight.push(add_Temp);
        snake_leight[S_lenght-1].x=add_Temp[0];
        snake_leight[S_lenght-1].y= add_Temp[1];

        food_position();

    }

}
function snake_eatfood() {
    // console.log("aa");
    // console.log(food_leight[0].x*20,food_leight[0].y*20);
    // console.log(snake_leight[0].x,snake_leight[0].x);
    if (food_leight[0].x*20==snake_leight[0].x&&food_leight[0].y*20==snake_leight[0].y){

        S_lenght+=1;
        score=score+10;
        snake_died_judge=1;
        document.getElementById('snake_score').innerHTML="  "+score;
if( twn_decide!=5){

    score_progress(score/10);
        if(score%50==0&&score!=0){
            check_info=score/50+1;
            if(time>50){
                time-=20;
            }
        }
}
        var add_Temp=new Array(2);
        add_Temp[0]=(food_leight[0].x)*20;
        add_Temp[1]=(food_leight[0].y)*20;
        snake_leight.push(add_Temp);
        snake_leight[S_lenght-1].x=add_Temp[0];
        snake_leight[S_lenght-1].y= add_Temp[1];
        food_position();
        // removeEvent(accelerate_x*20,accelerate_y*20);
    }


}
function t_eat_food() {

    if (food_leight[0].x*20==tsnake_leight[0].x1&&food_leight[0].y*20==tsnake_leight[0].y1){
        t_lenght+=1;
        t_score=t_score+10;

        document.getElementById('t_score').innerHTML="  "+t_score;
        var add_Temp=new Array(2);
        add_Temp[0]=(food_leight[0].x)*20;
        add_Temp[1]=(food_leight[0].y)*20;
        tsnake_leight.push(add_Temp);
        tsnake_leight[t_lenght-1].x1=add_Temp[0];
        tsnake_leight[t_lenght-1].y1= add_Temp[1];
        food_position();
    }
}
function deal_accelerate() {
    if (accelerate_leight[0].x*20==snake_leight[0].x &&
        accelerate_leight[0].y*20==snake_leight[0].y) {
        if(life_value<100){
            life_value=life_value+10;
            life_progress(life_value);
            document.getElementById('snake_life_value').innerHTML="   "+life_value;
        }
        time-=10;
        removeEvent(accelerate_leight[0].x*20,accelerate_leight[0].y*20);
        accelerate_position();
    }

}
function deal_decelerate() {
    if (decelerate_leight[0].x*20==snake_leight[0].x &&
        decelerate_leight[0].y*20==snake_leight[0].y) {

        life_value=life_value-10;
        time+=10;
        life_progress(life_value);
        document.getElementById('snake_life_value').innerHTML="   "+life_value;
        if (life_value<0){
if(judge_pause==1||judge_pause==2) {
    game_over_page();
}
else if(judge_pause==3){
    game_over_page1();
}
        }
        removeEvent(decelerate_leight[0].x*20,decelerate_leight[0].y*20);
        decelerate_position();
    }

}
function deal_bomb() {
    if (bomb_x*20==snake_leight[0].x &&
        bomb_y*20==snake_leight[0].y) {

            life_value = 0;

            life_progress(life_value);
            document.getElementById('snake_life_value').innerHTML="   "+life_value;
        if(judge_pause==1||judge_pause==2) {

            game_over_page();
        }
        else if(judge_pause==3){
            game_over_page1();
        }
            removeEvent(bomb_x*20,bomb_y*20);

        }

    }

    //重新开始的三个页面跳转
function judge_pause_a() {
    if(judge_pause==1){
        start_snake();
    }
    else if(judge_pause==2){
        fun_map();
        start_snake1();
    }
    else if(judge_pause==3){
        start_snake2();
    }
    else if(judge_pause==5){
        start_snake3();
    }


}
//暂停处理
function game_pause() {
if(p_count==1) {
    clearInterval(time_s);   //清除定时器
    drawmap(260, 170, 'over');
   drawmap(500, 170, 'stop');
    p_count=2;
}
if(p_count==2){
    var over=document.getElementsByClassName('over')[0];
    over.onclick=function () {
        time_s=setInterval(function(){
            judge_pause_a();  },time); //页面跳转选择
        removeEvent(260,170);
        removeEvent(500,170);
        p_count=1;
        start_a=1;
    }
    var stop=document.getElementsByClassName('stop')[0];
    stop.onclick=function () {

        if(judge_pause==5){
            game_over_page2();
        }
        else{
        game_over_page();
        }
        time_s=setInterval(function(){
            judge_pause_a();  },time); //页面跳转选择
        removeEvent(500,170);
        removeEvent(260,170);
        p_count=1;
        start_a=0;
    }
    }

}

//蛇吃到自己
function snake_died() {
    if(snake_died_judge==1){
        snake_died_judge=0;
    }
    else {
  for ( var k=1;k<S_lenght;k++){

     if(snake_leight[0].x== snake_leight[k].x&&snake_leight[0].y== snake_leight[k].y ) {
         game_over_page();
     }
      }
     }
    if(twn_decide==5){
        for ( var k=1;k<t_lenght;k++) {
            if (tsnake_leight[0].x == tsnake_leight[k].x && tsnake_leight[0].y == tsnake_leight[k].y) {
                game_over_page();
            }
        }
    }
}

function lever() {
    var map_bgm=document.getElementById('map_b');
    var pass_level=score/50+1;
if(pass_level%2==0){
    map_bgm.style.backgroundImage="url('../img/bg/1.jpg')";
}
else{
    map_bgm.style.backgroundImage="url('../img/bg/7.jpg')";
}
}
//开始游戏
function victory() {
    if (snake_leight[0].x == tsnake_leight[0].x && tsnake_leight[0].y == tsnake_leight[0].y){
        }
}
