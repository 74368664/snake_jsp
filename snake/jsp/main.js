
function drawmap(x,y,className) {
// console.log("8");
    var newElevent = document.createElement('div');
    var map = document.getElementById('map');
    newElevent.setAttribute("class", className);
    newElevent.setAttribute("id", 'id_' + x + '_' + y);
    newElevent.style.left = x + 'px';
    newElevent.style.top = y + 'px';
    // console.log(newElevent.style.left+"  "+newElevent.style.top);
    map.appendChild(newElevent);

}
function removeEvent(x,y){

    var map=document.getElementById('map');
    var Temp=document.getElementById('id_'+x+'_'+y);
    map.removeChild(Temp);
}

function game_over() {
    if(this.snake_leight[0].x<0||this.snake_leight[0].x>880||this.snake_leight[0].y<0||this.snake_leight[0].y>500) {
        if(judge_pause==1||judge_pause==2) {

            game_over_page();
        }
        else if(judge_pause=3){
            game_over_page1();
        }
    }
}
function game_over_page() {
    judge=confirm("游戏结束，你失败了!" +"  是否重新开始游戏");
    console.log( "hh"+judge_pause);
    if(judge==true){
        if (judge_pause==1){
        window.location = "../file/start_game.html";
        }
        if (judge_pause==2){
            window.location = "../file/entertainment.html";
        }
        if (judge_pause==3){
            window.location = "../file/sports.html";
        }
    }
    else{
        judge_pause=0;
        window.location = "../file/Checkpoint.html";
    }

}
function game_over_page1() {
    console.log("ss");
    var judge1=true;
    this.judge1=judge1;
    this.judge1=confirm("游戏结束,你的分数是"+score+",是否重新开始游戏？");

    if(this.judge1==true){
        console.log(this.judge1);
 clearInterval(time_put);
            window.location = "../file/sports.html";

    }
    else{
        window.location = "../file/Checkpoint.html";
    }

}