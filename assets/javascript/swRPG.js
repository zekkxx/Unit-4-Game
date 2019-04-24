//characterChoice = {Health, Attack, Counter}
var type1;
var type2;
var type3;
var round;

function assign(){
    type1 = [50, 1, 4];
    type2 = [25, 3, 4];
    type3 = [15, 5, 10];
    round = 0;
    console.log("New Round Started");
}

function battle(player, enemy){
    var battleOver = false;
    var result=""
    if(player[0]==0){
        console.log("Player already dead");
    } else {
        while(battleOver!=true){
            round++;
            enemy[0]=enemy[0]-player[1]*round;
            if(enemy[0]<=0){
                enemy[0]=0;
                result=" Success";
                battleOver=true;
            } else {
                player[0]=player[0]-enemy[2];
                if(player[0]<=0){
                    player[0]=0;
                    result=" Failure";
                    battleOver=true;
                }
            }
            console.log('('+round+')'+enemy[0]+'/'+player[0]+result);
        }
    }
}

assign();
battle(type1, type2);
battle(type1, type3);
assign();
battle(type1, type3);
battle(type1, type2);
assign();
battle(type2, type1);
battle(type2, type3);
assign();
battle(type2, type3);
battle(type2, type1);
assign();
battle(type3, type2);
battle(type3, type1);
assign();
battle(type3, type1);
battle(type3, type2);
