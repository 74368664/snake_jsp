

var x=200; //蛇的x初始值

var y=200; //蛇的y初始值

function coord(x,y) {
    this.x=x;
    this.y=y;


}


    function s_direction(e){

        // console.log("5");

        switch (e.key) {
            case 'W':
            case 'w':
                this.dir = up;break;
            case 'S':
            case 's':
                this.dir = down;break;
            case 'A':
            case 'a':
                this.dir = left;break;
            case 'D':
            case 'd':
                this.dir = right;break;

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
     var RETemp=[0,0];
    snake_leight[0]= new coord(this.x,this.y);

    for (var i = 1; i < S_lenght; i++) {

        snake_leight[i]= new coord(this.x,this.y);
        coord.x-=size;
        snake_leight[i].x= snake_leight[0].x-size*i;//

    }
}

function drawsnake(){
    drawmap(snake_leight[0].x,snake_leight[0].y,'snake_head');
    for (var i = 1; i < this.S_lenght; i++) {
        drawmap(snake_leight[i].x,snake_leight[i].y,'snake_body');
    }

}

//蛇的移动
function moveSnake(){
 var RETemp=[0,0];  //临时替换
 RETemp[0]=snake_leight[this.S_lenght-1].x;
    RETemp[1]=snake_leight[this.S_lenght-1].y;

    for(var i=this.S_lenght-1;i>=1;i--){

        snake_leight[i]=snake_leight[i-1];

        removeEvent(snake_leight[i].x, snake_leight[i].y);

        drawmap(snake_leight[i].x, snake_leight[i].y, 'snake_body');

    }

    snake_leight[0]=s_direction_xy();
    // console.log(s_direction_xy());

    removeEvent(RETemp[0], RETemp[1]);
    // console.log("delete"+" "+RETemp[0]+" "+RETemp[1]);

    drawmap( snake_leight[0].x, snake_leight[0].y,'snake_head');

}