





function coord1(x1,y1) {
    this.x1=x1;
    this.y1=y1;


}

function t_direction(e){

    // console.log("5");

    switch (e.key) {
        case 'W':
        case 'w':
            dir = up;break;
        case 'S':
        case 's':
           dir = down;break;
        case 'A':
        case 'a':
            dir = left;break;
        case 'D':
        case 'd':
            dir = right;break;
        case 'I':
        case 'i':
            dir1 = up; break;
        case 'K':
        case 'k':
            dir1 = down;
            break;
        case 'J':
        case 'j':
            dir1 = left;break;
        case 'L':
        case 'l':
            dir1= right;break;

    }

}
function t_direction_xy()
{
    var x1=tsnake_leight[0].x1;

    var y1=tsnake_leight[0].y1;

    switch (dir1) {
        case up:y1-=size;break;
        case down:y1+=size;break;
        case  left:x1-=size;break;
        case right:x1+=size;break;

        //清除间歇调用暂停
    }

    return  new  coord1(x1,y1);

}

function tsnake_deal_leight() {


    var RETemp=[0,0];
    tsnake_leight[0]= new coord1(this.x1,this.y1);

    for (var i = 1; i < t_lenght; i++) {

        tsnake_leight[i]= new coord1(this.x1,this.y1);
        coord1.x1-=size;
        tsnake_leight[i].x1= tsnake_leight[0].x1-size*i;//

    }

}

function drawtsnake(){

    drawmap(tsnake_leight[0].x1,tsnake_leight[0].y1,'t_head');
    for (var i = 1; i < t_lenght; i++) {
        drawmap(tsnake_leight[i].x1,tsnake_leight[i].y1,'t_body');
    }

}
//蛇的移动
function movetSnake(){
    var RETemp=[0,0];  //临时替换
    RETemp[0]=tsnake_leight[t_lenght-1].x1;
    RETemp[1]=tsnake_leight[t_lenght-1].y1;

    for(var i=t_lenght-1;i>=1;i--){

        tsnake_leight[i]=tsnake_leight[i-1];

        removeEvent(tsnake_leight[i].x1, tsnake_leight[i].y1);

        drawmap(tsnake_leight[i].x1, tsnake_leight[i].y1, 't_body');
    }
    tsnake_leight[0]=t_direction_xy();


    removeEvent(RETemp[0], RETemp[1]);
    // console.log("delete"+" "+RETemp[0]+" "+RETemp[1]);

    drawmap( tsnake_leight[0].x1, tsnake_leight[0].y1,'t_head');

}