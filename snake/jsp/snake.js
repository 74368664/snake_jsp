

    var  up=1;
    var  down=2;
    var  left=3;
    var   right=4;
    var  time=200;
    var size=20;
 var x=200;

    var y=200;
     var dir=right;

function coord(x,y) {
    this.x=x;
    this.y=y;


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

    for (var i = 0; i < this.S_lenght; i++) {

        this.snake_leight[i]= new coord(this.x,this.y);
        this.coord.x-= size;//

        // drawmap(this.snake_leight[i].x,this.snake_leight[i].y,'snake_body');
    }
   // this.coord.x=this.snake_leight[0].x;
   //  this.coord.y=this.snake_leight[0].y;

}

function drawsnake(){

    drawmap(this.snake_leight[0].x,this.snake_leight[0].y,'snake_head');
    for (var i = 1; i < this.S_lenght; i++) {

        drawmap(this.snake_leight[i].x,this.snake_leight[i].y,'snake_body');
    }

}

//蛇的移动
function moveSnake(){
 var RETemp=[0,0];
 RETemp[0]=snake_leight[this.S_lenght-1].x;
    RETemp[1]=snake_leight[this.S_lenght-1].y;

    for(var i=this.S_lenght-1;i>=1;i--){

        snake_leight[i]=snake_leight[i-1];

        removeEvent(snake_leight[i].x, snake_leight[i].y);
        drawmap(snake_leight[i].x, snake_leight[i].y, 'snake_body');
    }

    snake_leight[0]=s_direction_xy();
    // console.log(s_direction_xy());
    // console.log("0"+" "+snake_leight[0].y+" "+snake_leight[0].x);
    removeEvent(RETemp[0], RETemp[1]);
    // console.log("delete"+" "+RETemp[0]+" "+RETemp[1]);

    drawmap( snake_leight[0].x, snake_leight[0].y,'snake_head');

}