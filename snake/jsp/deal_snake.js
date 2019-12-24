function life_progress(life_value) {  //生命值进度条
    var progress=document.getElementById('life_progress_div');
    progress.style.width=life_value+'px';

}
function score_progress(score) {  //分数进度条
    var progress=document.getElementById('experience_div');
    progress.style.width=score/2+'px';

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

        removeEvent(accelerate_leight[0].x*20,accelerate_leight[0].y*20);
        accelerate_position();
    }

}
function deal_decelerate() {
    if (decelerate_leight[0].x*20==snake_leight[0].x &&
        decelerate_leight[0].y*20==snake_leight[0].y) {

        life_value=life_value-10;
        life_progress(life_value);
        document.getElementById('snake_life_value').innerHTML="   "+life_value;
        if (life_value<0){

            alert("结束游戏");
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
            alert("结束游戏");


            removeEvent(bomb_x*20,bomb_y*20);

        }

    }