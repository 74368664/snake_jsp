//
//
//
//
//
// var x1=600; //蛇的x初始值
//
// var y1=300; //蛇的y初始值
// var dir1=up;  //蛇的初始方向
//
// function coord1(x1,y1) {
//     this.x1=x1;
//     this.y1=y1;
//
//
// }
// function t_direction(dir_temp){
//
//     if(dir1==up||dir1==down){
//         switch (dir_temp) {
//
//             case 3:
//                 dir1 = left;break;
//             case 4:
//                 dir1= right;break;
//
//         }
//     }
//     else if(dir1==left||dir1==right){
//         switch (dir_temp) {
//             case 1:
//                 dir1 = up;
//                 break;
//             case 2:
//                 dir1 = down;
//                 break;
//
//         }
//     }
//
// }
//
//
// function t_direction_xy(dir1)
// {
//     var x1=tsnake_leight[0].x1;
//
//     var y1=tsnake_leight[0].y1;
//     console.log(size);
//     switch (dir1) {
//         case up:this.y1=this.y1-size;break;
//         case down:this.y1=this.y1+size;break;
//         case  left:this.x1=this.x1-size;break;
//         case right:this.x1=this.x1+size;break;
//
//         //清除间歇调用暂停
//     }
//
//
//     return  new  coord1(this.x1,this.y1);
//
// }
//
// function tsnake_deal_leight() {
//
//
//     var RETemp=[0,0];
//     tsnake_leight[0]= new coord1(this.x1,this.y1);
//
//     for (var i = 1; i < t_lenght; i++) {
//
//         tsnake_leight[i]= new coord1(this.x1,this.y1);
//         coord1.x1-=size;
//         tsnake_leight[i].x1= tsnake_leight[0].x1-size*i;//
//
//     }
//
// }
//
// function drawtsnake(){
//
//     drawmap(tsnake_leight[0].x1,tsnake_leight[0].y1,'snake_head');
//     for (var i = 1; i < t_lenght; i++) {
//         drawmap(tsnake_leight[i].x1,tsnake_leight[i].y1,'snake_body');
//     }
//
// }
//
// //蛇的移动
// function movetSnake(){
//     var RETemp=[0,0];  //临时替换
//     RETemp[0]=tsnake_leight[t_lenght-1].x1;
//     RETemp[1]=tsnake_leight[t_lenght-1].y1;
//     console.log(dir1);
//     for(var i=t_lenght-1;i>=1;i--){
//
//         tsnake_leight[i]=tsnake_leight[i-1];
//
//         removeEvent(tsnake_leight[i].x1, tsnake_leight[i].y1);
//
//         drawmap(tsnake_leight[i].x1, tsnake_leight[i].y1, 'snake_body');
//
//     }
//
//     tsnake_leight[0]=t_direction_xy();
//
//
//     removeEvent(RETemp[0], RETemp[1]);
//     // console.log("delete"+" "+RETemp[0]+" "+RETemp[1]);
//
//     drawmap( tsnake_leight[0].x1, tsnake_leight[0].y1,'snake_head');
//
// }