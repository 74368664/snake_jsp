

    var  up=1;
    var  down=2;
    var  left=3;
    var   right=4;
    var  time=200;
    var size=14;
 var x=200;
    var y=200;
     var dir=right;
    var snake_leight= new Array(3);

function coord(x,y) {
    this.x=x;
    this.y=y;
    // console.log(this.x+" "+this.y);

}


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


    function s_direction(e){

        // console.log("5");

        switch (e.key) {
            case 'w':
                this.dir = up;break;
            case 's':
                this.dir = down;break;
            case 'a':
                this.dir = left;break;
            case 'd':
                this.dir = right;break;
            case 'p':alert("");break;
        }
    }


    function s_direction_xy()
    {
        var x=snake_leight[0].x;
        var y=snake_leight[0].y;
        switch (dir) {
            case up:y-=size;break;
            case down:y+=size;break;
            case  left:x-=size;break;
            case right:x+=size;break;

          //清除间歇调用暂停
        }
        //  this.coord.x=x1;
        // this.coord.y=y1;

        return  new  coord(x,y);

    }

function snake_deal_leight() {

    // console.log("2");
    //

    for (var i = 0; i < snake_leight.length; i++) {

        this.snake_leight[i]= new coord(this.x,this.y);
        this.coord.x-= size;//

        // drawmap(this.snake_leight[i].x,this.snake_leight[i].y,'snake_body');
    }
   // this.coord.x=this.snake_leight[0].x;
   //  this.coord.y=this.snake_leight[0].y;

}

function drawsnake(){

    drawmap(this.snake_leight[0].x,this.snake_leight[0].y,'snake_head');
    for (var i = 1; i < snake_leight.length; i++) {

        drawmap(this.snake_leight[i].x,this.snake_leight[i].y,'snake_body');
    }

}

//蛇的移动
function moveSnake(){
    // try{
    //  console.log(this.coord.x,this.coord.y);


    //           // temp = this.changeCoord();
    //           this.snake_leight.unshift(temp);
    // var temp=this.snake_leight.pop();
    // removeEvent(temp.x,temp.y);
    // temp = this.s_direction_xy();

    // console.log("7");
 var RETemp=[0,0];
 RETemp[0]=snake_leight[snake_leight.length-1].x;
    RETemp[1]=snake_leight[snake_leight.length-1].y;
    console.log("xxx"+RETemp[0]+" "+RETemp[1]);
    for(var i=snake_leight.length-1;i>=1;i--){
        // var Temp_leight=[0,0];
        // Temp_leight[0]=snake_leight[i-1].x;
        // console.log(snake_leight[i-1].x);
        // snake_leight[i-1].x=snake_leight[i].x;
        // snake_leight[i].x=Temp_leight[0];
        // Temp_leight[1]=snake_leight[i-1].y;
        // snake_leight[i-1].y=snake_leight[i].y;
        // snake_leight[i].y=Temp_leight[1];
        // Temp_leight=snake_leight[i];
        //
        // snake_leight[i]=snake_leight[i-1];
        // snake_leight[i]=Temp_leight;
        snake_leight[i]=snake_leight[i-1];
        console.log(i+" "+snake_leight[i].y+" "+snake_leight[i].x);
        removeEvent(snake_leight[i].x, snake_leight[i].y);
        drawmap(snake_leight[i].x, snake_leight[i].y, 'snake_body');
    }





    snake_leight[0]=s_direction_xy();
    console.log(s_direction_xy());
    console.log("0"+" "+snake_leight[0].y+" "+snake_leight[0].x);
    removeEvent(RETemp[0], RETemp[1]);
    console.log("delete"+" "+RETemp[0]+" "+RETemp[1]);
    // for(var i=1;i<snake_leight.length;i++) {
    //
    //     drawmap(snake_leight[i].x, snake_leight[i].y, 'snake_body');
    //
    // }
    drawmap( snake_leight[0].x, snake_leight[0].y,'snake_head');
console.log(snake_leight[0].x, snake_leight[0].y);
}