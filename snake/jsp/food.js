
function food_position() {

     food_x=Math.floor(Math.random()*42+1);
    food_y=Math.floor(Math.random()*25+1);
    // for ( var k=0;k<snake_leight;k++){
    //     if (decelerate_x  != snake_leight[k].x ||decelerate_y !=snake_leight[k].y ) {

            if (food_x != accelerate.x ||food_y != accelerate.y) {
            food(food_x, food_y);
            food_leight[0] = new food(x, y);
            // console.log(food_leight[0]);
            food_add = 1;
            drawmap(food_x * 20, food_y * 20, 'food_');

        }

}

function accelerate_position() {

    accelerate_x=Math.floor(Math.random()*32+4);
    accelerate_y=Math.floor(Math.random()*25+1);

    if (accelerate_x != food.x|| accelerate_y !=food.y ) {
        //accelerate(accelerate_x, accelerate_y);
        accelerate_leight[0]= new accelerate(accelerate_x, accelerate_y);

        drawmap(accelerate_x*20, accelerate_y*20, 'accelerate');

    }


}
function decelerate_position() {

    decelerate_x=Math.floor(Math.random()*25+4);
    decelerate_y=Math.floor(Math.random()*25+1);
    // for ( var k=0;k<snake_leight;k++){
    //     if (decelerate_x  != snake_leight[k].x ||decelerate_y !=snake_leight[k].y ) {
            if (decelerate_x != food.x|| decelerate_y !=food.y ) {
                //accelerate(accelerate_x, accelerate_y);
                decelerate_leight[0] = new decelerate(decelerate_x, decelerate_y);

                drawmap(decelerate_x * 20, decelerate_y * 20, 'decelerate');
            }
            // }
        // }}

}
function bomb_position() {

    bomb_x=Math.floor(Math.random()*32+4);
    bomb_y=Math.floor(Math.random()*25+1);
    // for ( var k=0;k<=snake_leight;k++){
    // if (ting_x != snake_leight[k].x ||ting_y !=snake_leight[k].y ) {
    for (var j = 0; j <S_lenght; j++) {
    if (bomb_x != snake_leight[j].x||bomb_y !=snake_leight[j].y ) {


        // if (bomb_x  != snake_leight[k].x ||bomb_y!=snake_leight[k].y ) {
        if (bomb_x != food.x || bomb_y != food.y) {
            //accelerate(accelerate_x, accelerate_y);
            // decelerate_leight[0]= new decelerate(decelerate_x, decelerate_y);
            //console.log(decelerate_leight[0]);
            drawmap(bomb_x * 20, bomb_y * 20, 'bomb');
            }}
        }


}
function deal_ting() {
    for(var i=0;i<ting_cont;i++)
        if (ting_leight[i].x*20==snake_leight[0].x &&
            ting_leight[i].y*20==snake_leight[0].y) {

            life_value = 0;
            // console.log("2");
            life_progress(life_value);
            document.getElementById('snake_life_value').innerHTML="   "+life_value;
            game_over_page();


            // removeEvent(ting_x*20,ting_y*20);

        }

}
function ting_position() {
    judge_pause=2;
    temp_ting=0;
//console
    while (temp_ting!=1){
//
        ting_x=Math.floor(Math.random()*32+4);
        ting_y=Math.floor(Math.random()*20+1);
        for ( var k=0;k<S_lenght;k++){
            if (ting_x != snake_leight[k].x||ting_y !=snake_leight[k].y ) {

                for (var j = 0; j <= ting_cont; j++) {
                    if (ting_x != food.x ||ting_y != food.y) {

                        if ((count_ting == 0) || ting_x != ting_leight[j].x || ting_y != ting_leight[j].y) {



                            temp_ting = 1;
                            break;
                        }
                    }
                }
            }
        }
    }
    ting_leight[ting_cont] = new ting_(ting_x, ting_y);

    drawmap(ting_leight[ting_cont].x * 20, ting_leight[ting_cont].y * 20, 'ting');
    ting_cont += 1;

}