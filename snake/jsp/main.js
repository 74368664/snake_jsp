
var S_lenght=3;
var score=0;
var life_value=100;
var snake_leight= new Array(S_lenght);
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
        alert("游戏结束");
    }
}
