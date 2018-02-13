    var start = confirm('Do you want to play a game?');
    var prize_max = 10;
    var price = [Math.floor(prize_max),Math.floor(prize_max/2),Math.floor(prize_max/4)];
    var i,win,winN,won,max,end;
    var winN = 0;
    var won= 0;
    var max = 5;

    if(start){
        game();
    }else{
        console.log('You did not become a millionaire');
    }

    function game(){
        i=0; 
        win = 0;
        while(i!==3 && end !== true){
            let range = Math.floor(Math.random()*(max+1));
            let num = prompt('Enter a number from 0 to '+max+'\nAttempts left: '+i+"\nTotal prize: "+winN+'$\n'+'Possible prize on current attempt: '+price[i]+'$' );
            if(num === null){ break };
            if(range==num){
                win = price[i];
                let cont = confirm('You guessed it!\nDo you want to continue a game?');
                if(cont){
                    max = max * 2;
                    prize_max = prize_max * 3;
                    price = [Math.floor(prize_max),Math.floor(prize_max/2),Math.floor(prize_max/4)];
                    winN+= win;
                    game();
                }else{
                    winN+= win;
                    end = true;
                    won += winN;
                    console.log('Thank you for a game. Your prize is: '+ won);
                    break; 
                }
            }
            
            i++;
            if(i==3){
                won=0;
                let again = confirm('Do you want to play again?');
                if(again){
                    prize_max = 10;
                    price = [Math.floor(prize_max),Math.floor(prize_max/2),Math.floor(prize_max/4)];
                    end = false;
                    game();
                }else{
                    end = true;
                    won += winN;
                    console.log('Thank you for a game. Your prize is: '+ won);
                }
            }
        }
    }