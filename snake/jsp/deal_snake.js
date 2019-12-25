function judge_pause() {
    if(judge_pause==1){
        start_snake();
    }
    else if(judge_pause==2){
       start_snake1();
    }
    if(judge_pause==3){

    }

}
function life_progress(life_value) {  //生命值进度条
    var progress=document.getElementById('life_progress_div');
    progress.style.width=life_value+'px';

}
function score_progress(score) {  //分数进度条
    var progress=document.getElementById('experience_div');
    var srcoe_judge=0;
        if(score%50==0){
            this.srcoe_judge=1;
        }else{
        this.srcoe_judge=1;
        }


    if (this.score_judge==1){

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
    // console.log(this.snake_leight[0].x+"  "+this.snake_leight[0].y);
    // console.log(this.food_leight[0].x+"  "+this.food_leight[0].y);
    if (food_leight[0].x*20==snake_leight[0].x&&food_leight[0].y*20==snake_leight[0].y){
        // console.log("hahahahaha");
        S_lenght+=1;
        score=score+10;

        score_progress(score);
        document.getElementById('snake_score').innerHTML="  "+score;

if(score%50==0&&score!=0){
    check_info=score/50+1;

    document.getElementById('check_put').innerHTML="关卡"+check_info;
    if(time>50){
    time-=10;
    }

    alert("恭喜你过关了");
}
        var add_Temp=new Array(2);
        add_Temp[0]=(food_leight[0].x)*20;
        add_Temp[1]=(food_leight[0].y)*20;
        snake_leight.push(add_Temp);
        snake_leight[S_lenght-1].x=add_Temp[0];
        snake_leight[S_lenght-1].y= add_Temp[1];
        console.log(snake_leight[S_lenght-1]);
        food_position();
        // removeEvent(accelerate_x*20,accelerate_y*20);
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

            game_over_page();
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
        game_over_page();


            removeEvent(bomb_x*20,bomb_y*20);

        }

    }
function game_pause() {

    clearInterval(time_s);
    drawmap(260,150,'over');

    judge=confirm("是否继续游戏");
    if(judge==true){
        time_s=setInterval(function(){
            judge_pause();
            removeEvent(260,150);
        },time);


    }
    else{

        game_over_page();
    }

}
function start_pause() {

    console.log("2");
    removeEvent(260,150);
    time_s=setInterval(function(){
        start_snake();
    },time);


}
var count=0;
var time_s;

var judge=true;
//开始游戏

