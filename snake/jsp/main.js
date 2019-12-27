
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

        game_over_page();

    }
}
function game_over_page() {
    //  this.judge_pause=judge_pause;
    // console.log(this.judge_pause);
    // window.open("../file/game_over.html?judge_pause",'_self',?judge_pause);
    window.location = "../file/game_over.html?judge_pause="+judge_pause+"?score="+score;
}
function game_over_page1() {
    window.location = "../file/game_over.html?judge_pause="+judge_pause;

}
function again_() {
    //console.log(location.search);
    var s=location.search;
    var j=s.indexOf("judge_pause");   //截取模式的判断
    var   j_value=s.substr(j+12,1);
    var b=s.split("?");     //另一种查找方式
    var grade=b[2].replace(/[^0-9]/ig,""); //用替换，消除s前面的非数字
    console.log(grade);
    if (j_value == 1) {
        window.location = "../file/start_game.html";
    }
    if (j_value== 2) {
        window.location = "../file/img_chec.html";
    }
    if (j_value == 3) {
        window.location = "../file/sports.html";
    }

}
function mode_page() {

    judge_pause=0;
    window.location = "../file/Checkpoint.html";

}
function img_change() {
    var m=location.search;
    img_map=m.replace(/[^0-9]/ig,""); //用替换，消除s前面的非数字

    fun_map();

}
function fun_map() {
    var put_img=document.getElementById('map_b');
    if(img_map==1){
        put_img.style.backgroundImage="url('../img/bg/bg3.png')";
    }
    else if (img_map==2){
        put_img.style.backgroundImage="url('../img/bg/111.jpg')";
    }
    else if (img_map==3){
        put_img.style.backgroundImage="url('../img/bg/9.jpg')";
    }
    else if (img_map==4){
        put_img.style.backgroundImage="url('../img/bg/11.jpg')";
    }
    else if (img_map==5){
        put_img.style.backgroundImage="url('../img/bg/7.jpg')";
    }
    else {
        put_img.style.backgroundImage="url('../img/bg/bg3.jpg')";
    }
}
